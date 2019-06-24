# test

## 一般 apollo server

- 設置 apolloserver
- 照原先 API 的業務邏輯拆分 query, mutation, 與其他自定義
- 建立 schema 與 resolver
- 將 express middleware 寫成 resolver function，並使用 combineResolver 合併使用
- 將 model 放在 context
- restAPI 的 Get 與 graphql GET 的等價轉換
- 測試 api
- 優化寫入資料庫與暫存

## 加入 subscription
