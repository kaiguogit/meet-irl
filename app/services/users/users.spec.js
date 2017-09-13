// used to test services
describe('Users factory', function() {
  var Users;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Users).toBeDefined();
  });
});

// describe('Users factory', ()  => {
//   let Users
//
//   // Load our api.users module
//   beforeEach(angular.mock.module('api.users'));
//
//   // Set our injected Users factory (_Users_) to our local Users variable
//   beforeEach(inject((_Users_) => {
//     Users = _Users_
//   }))
//
//   // A simple test to verify the Users service exists
//   it('should exist', () => {
//     expect(Users).toBeDefined()
//   })
//
//   // A set of tests for our Users.all() method
//   describe('.all()', () => {
//     // A simple test to verify the method all exists
//     it('should exist', () => {
//       expect(Users.all).toBeDefined()
//     })
//   })
// })
