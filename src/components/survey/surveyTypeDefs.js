const surveyTypeDefs = `
  input SurveyInput{
    body: String
    subject: String
    title: String
    recipients: String
  }
  type Query {
    surveys: [Surveys!]
  }
  type Mutation{
    createSurveys(surveyBody: SurveyInput): User
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
