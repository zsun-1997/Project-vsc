import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getRepository } from 'typeorm';
import { v1 as uuid } from 'uuid';
import FetchApp from '../src/app';
import { User } from '../src/models';
import UserService from '../src/services/user.service';
import { NotFoundError } from '../src/errors';

chai.use(chaiAsPromised);

/**
 * This is just to demonstrate that we can test the
 * service layer directly. For a real project, you
 * should both service layer and app layer tests
 */
describe('User Tests', () => {
  /**
     * Since the service layer is abstracted from anything
     * HTTP related, we can avoid using an Express object
     */
  describe('Service Tests', () => {
    const users = [];

    before(async () => {
      await FetchApp;

      users.push(await getRepository(User).save(User.createUser('Arya Stark', 30)));
      users.push(await getRepository(User).save(User.createUser('Neville Longbottom', 30)));
    });

    after(async () => {
      await getRepository(User).remove(users);
    });

    it('should return all users', async () => {
      const expected = await getRepository(User).find();
      const actual = await UserService.fetchUsers();
      expect(actual).to.deep.eq(expected);
    });

    it('should return a user', async () => {
      const expected = await getRepository(User).findOne();
      const actual = await UserService.fetchUser(expected.id);
      expect(actual).to.deep.eq(expected);
    });

    it('should throw a not found error', () => {
      expect(UserService.fetchUser(uuid())).to.eventually.be.rejectedWith(NotFoundError);
    });
  });
});
