import React, { useState } from "react";

const useForm = ({ initialValues, validation, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rememberMe") {
      setValues((values) => ({
        ...values,
        rememberMe: !values.rememberMe,
      }));
      return;
    }
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    const errors = validation(values);
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});
    onSubmit(values);
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
