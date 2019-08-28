# Note

## 目前問題：只能針對已存在 user 進行測試，而不能透過自動化測試，產生新的 user 然後進行驗證。

啟動 server 之後，再跑 superagent 針對現有的架構帶上 cookie 並驗證回傳結果，這樣做才是對的。
而不是 schema, db, app 都另外做一組，那這樣測試的必要完全沒有。
現在希望做到的是：每次跑測試時，都利用 userFactoy 產生一個新的 user（如果已存在則不用新增），
然後產生對應的 user 的 cookie key 進行認證

### 已解決

從 cookies library 找到如何產生 express:sess.sig= cookie 的方法，
知道 cookie-session 使用 cookies，從 cookies 找到如何加密使用 keygrip.sign 的函式

## 因為此處認證使用 passport 將 user session 儲存在 browser，所以進行測試的時候需要手動產生一個測試用的假帳號。

TODO：將認證方式改為 JWT

## Choose one

```js
module.exports = () => {
  return new User({}).save();
};
```

or

```js
module.exports = async () => {
  return await new User({});
};
```

## 測試的時候兩種思路

### 單純測試 API

### 透過畫面操作測試前端
