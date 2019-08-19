const { expect } = require('chai');
const { currentUser } = require('../../user/test/req');
const { surveys, createSurvey } = require('./req');
const cookieFactory = require('../../../test/graphQL/factory/cookieFactory');

describe('survey', () => {
  describe('graphQL: surveys: User', () => {
    it('returns surveys when surveys can be found', async () => {
      const expectedResult = {
        data: {
          surveys: []
        }
      };
      // Actual Result
      const cookie = await cookieFactory();
      const result = await surveys({ cookie });
      // Expect them should be equal
      expect(result.body.data.surveys.length).to.above(
        expectedResult.data.surveys.length
      );
    });
  });

  describe('graphQL: createSurveys: User', () => {
    before(async function() {
      const result = await currentUser();
      if (result.body.data.currentUser.credits === 0) {
        this.skip();
      }
    });
    it('returns user credits when user is log in and have enough credits', async () => {
      const user = await currentUser();
      const expectedResult = {
        data: {
          createSurveys: {
            credits: user.body.data.currentUser.credits - 1
          }
        }
      };
      // Actual Result
      const cookie = await cookieFactory();
      const result = await createSurvey({ cookie });

      // Expect them should be equal
      expect(result.body.data).to.eql(expectedResult.data);
    });
  });

  describe('graphQL: createSurveys: User', () => {
    it('return null without log in', async () => {
      const expectedResult = {
        data: {
          createSurveys: null
        },
        errors: {
          message: 'Not authenticated as user.'
        }
      };
      const result = await createSurvey({ cookie: undefined });
      expect(result.body.data).to.eql(expectedResult.data) &&
        expect(result.body.errors[0].message).to.eql(
          expectedResult.errors.message
        );
    });
    // it('create survey without having enough credits', async () => {});
  });

  describe('graphQL: createSurveys: User', () => {
    before(async function() {
      const result = await currentUser();
      if (result.body.data.currentUser.credits > 0) {
        this.skip();
      }
    });
    it('return null without having enough credits', async () => {
      const expectedResult = {
        data: {
          createSurveys: null
        },
        errors: {
          message: 'Not enough credits'
        }
      };
      const cookie = await cookieFactory();
      const result = await createSurvey({ cookie });
      expect(result.body.data).to.eql(expectedResult.data) &&
        expect(result.body.errors[0].message).to.eql(
          expectedResult.errors.message
        );
    });
  });
});
