const { expect } = require('chai');
const { currentUser } = require('./req');
const { googleId } = require('../../../test/graphQL/const');

describe('user', () => {
  describe('graphQL: currentUser: User', () => {
    it('returns a user when user can be found', async () => {
      const expectedResult = {
        data: {
          currentUser: {
            googleId
          }
        }
      };
      // Actual Result
      const result = await currentUser();

      // Expect them should be equal
      expect(result.body.data.currentUser.googleId).to.eql(
        expectedResult.data.currentUser.googleId
      );
    });
  });
});
