// used to test services
describe('Users factory', ()  => {
  let Users

  let userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      location: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      location: 'Chicago',
      twitter: 'jimbo'
    },
    {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill'
    }
  ]

  let singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob'
  }

  // Load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject((_Users_) => {
    Users = _Users_
  }))

  // A simple test to verify the Users service exists
  it('should exist', () => {
    expect(Users).toBeDefined()
  })

  // A set of tests for our Users.all() method
  describe('.all()', () => {
    // A simple test to verify the method all exists
    it('should exist', () => {
      expect(Users.all).toBeDefined()
    })
    // test to verify that calling all() returns array of users in users.js
    it('should return a hard-coded list of users', () =>{
      expect(Users.all()).toEqual(userList)
    })
  })

  //A set of tests for our Users.findById() method
  describe('.findById(id)', () =>{
    //simple test to verify the method findById even exists
    it('should exist', () => {
      expect(Users.findById).toBeDefined()
    })
    //test to verify that calling findById() with an id, in this case '2', returns a single user
    it('should return one user object if it exists', () => {
      expect(Users.findById('2')).toEqual(singleUser)
    })
    //test to verify that calling findById() with an id that doesn't exist returns undefined
    it('should return undefined if the user cannot be found', () => {
      expect(Users.findById('ABC')).not.toBeDefined()
    })
  })
})
