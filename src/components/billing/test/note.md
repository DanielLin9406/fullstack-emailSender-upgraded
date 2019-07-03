# 測試的 schema 跟 server 定義的 schema 也必須要一樣

**Token 的限定型必須要一樣**

## In test/req

```
  const postData = {
    string: `mutation($token:String){
      createCredit(tokenId:$token){
        credits
      }
    }`,
    variable
  };
```

## billingTypeDefs

```
  type Mutation {
    createCredit(tokenId:String!): User
  }

```
