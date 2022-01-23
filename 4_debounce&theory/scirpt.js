const inputTarget = document.getElementById("input-target");

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFn = debounce((e) => console.log("changed!!", e), 166);

inputTarget.addEventListener("keyup", (e) => debounceFn(e));
