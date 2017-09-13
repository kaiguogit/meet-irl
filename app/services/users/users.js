// used for services
angular.module('api.users', [])
.factory('Users', () => {
  let Users = {};

  // The array of users our factory will provide us
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

  Users.all = () => {
    // Returning the array of users. Eventually this will be an API call.
    return userList
  }

  return Users
}) //end Users factory
