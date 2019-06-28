const surveyTypeDefs = `
  type Query {
    surveys: [Surveys!]
  }
  type Surveys {
    title: String
    subject: String
    body: String
    yes: Int
    no: Int
    dateSent: String
    _user: String
  }
`;

export default surveyTypeDefs;
