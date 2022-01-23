## Explanation

debounce 的實作方式常應用在 scroll event 或是 input change event , ex . input Change event 我們常會需要依照使用者輸入的文字來取得 autocomplete 的內容 ， 如果我們不做 debounce ，事件也就會在每一個輸入文字的改變去觸發 action。

如此一來不斷 call api 對於後端會有很大的負擔，因此使用 debounce 可以做到當 input 停止改變時才會去出發一次。
當輸入文字改變在我們所設定的 delay time 以內持續發生時，會去 clearTimeout 把原先的 timer 終止掉而
後續再新增 timer 讓時間重新跑。
這裏的 timer 是一個 reference ， 裡面的 function 可以透過 scope chain 到外層找到 timer 這個變數，也因為 closure 的特性所以即便前一個 setTimeout 已經被執行完，原本的 timer 不會被 garbage collect 所以仍然可以 reference 到這個 timer。

ex. 這裏 delay 寫 166 主要是 1000/60 frame per second ~= 166 。
