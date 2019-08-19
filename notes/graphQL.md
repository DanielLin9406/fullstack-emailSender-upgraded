# test

## 一般 apollo server 換裝流程

### 換裝大綱

- 重構 node 架構，例如將 passport 封裝在 router 回傳
- 先將 route 與 node 的 file structure 轉換成 role base instead of function base
- 設置 apolloserver
- 照原先 API 的業務邏輯拆分 query, mutation, 與其他自定義
- 建立 schema 與 resolver
- 將 req.body 換成從 mutation 輸入
- 將 express middleware 寫成 resolver function，並使用 combineResolver 合併使用
- 測試 api
- 優化寫入資料庫與暫存

### API 認證問題

- 將 graphql 的入口 api 使用 passport 處理權限問題(https://github.com/apollographql/apollo-server/issues/1671)

### 更換 Rest API to GraphQL API

- 將 API 需要的資料，例如 model 放在 context
- 對照原先 RestAPI 返回資料，類比建立在 GraphQLAPI
- schema 定義的是 API 回傳的 data structure
- resolver 則進行對於 db 的操作

### 關於 GraphQL schema 與 mongoose schema 映射

- 使用 composeWithMongoose 將 mongoose 轉換成 graphql object
- 再將 graphql object 使用 printschema 轉換成 graphql SDL

## 加入 subscription
