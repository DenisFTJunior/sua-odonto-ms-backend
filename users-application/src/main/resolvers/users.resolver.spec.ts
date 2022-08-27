// import { Test, TestingModule } from '@nestjs/testing';
// import { User } from '../entities/user.entity';
// import { UsersResolver } from './users.resolver';
// import { UserService } from '../services/user.service';
// import { Role } from '../objects/enums/role.enum';

// const usersServiceMock = {
//   findById: jest.fn((id: number): User => {
//     return {
//       id,
//       name: 'Mocked User',
//       email: 'teste@gmail.com',
//       password: '123',
//       role: Role.ADMIN,
//     };
//   }),
// };

// describe('UsersResolver', () => {
//   let resolver: UsersResolver;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsersResolver,
//         { provide: UserService, useValue: usersServiceMock },
//       ],
//     }).compile();

//     resolver = module.get<UsersResolver>(UsersResolver);
//   });

//   it('should be defined', () => {
//     expect(resolver).toBeDefined();
//   });

//   it('should query a user by its id', () => {
//     resolver.getUser(1).then(({ id }) => expect(id).toEqual(1));
//   });

//   it('should resolve a reference', () => {
//     const result = resolver.resolveReference({ __typename: 'User', id: 1 });
//     expect(result.id).toEqual(1);
//   });
// });
