const createReq = require('../../../test/graphQL/helper/createReq');

exports.surveys = async ({ cookie }) => {
  const postData = {
    string: `query{
      surveys{
        title
        body
        subject
        yes
        no
      }
    }`
  };
  return await createReq({ postData, cookie });
};

exports.createSurvey = async ({ cookie }) => {
  const variable = {
    title: 'Blast them.',
    subject: 'Blast them hard.',
    body: 'Body',
    recipients: 'daniel.lin.190@gmail.com'
  };
  const postData = {
    string: `mutation($title:String, $subject:String, $body:String, $recipients: String){
      createSurveys(surveyBody:{title:$title, subject:$subject, body:$body, recipients: $recipients}){
        credits
      }
    }`,
    variable
  };

  return await createReq({ postData, cookie });
};
