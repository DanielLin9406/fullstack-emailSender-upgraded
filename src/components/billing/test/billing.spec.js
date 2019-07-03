const { expect } = require('chai');
const { createCredit } = require('./req');
const { currentUser } = require('../../user/test/req');
const cookieFactory = require('../../../test/graphQL/factory/cookieFactory');

describe('billing', () => {
  describe('graphQL: createCredit: User', () => {
    it('returns surveys when surveys can be found', async () => {
      const user = await currentUser();
      const expectedResult = {
        data: {
          currentUser: {
            credits: user.body.data.currentUser.credits + 5
          }
        }
      };
      const cookie = await cookieFactory();
      const result = await createCredit({ cookie });
      // Expect them should be equal
      expect(result.body.data.createCredit.credits).to.eql(
        expectedResult.data.currentUser.credits
      );
    });
  });
});
