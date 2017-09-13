// used to test services

describe('Users factory', () => {
  let users

  beforeEach(angular.mock.module('api.users'))

  beforeEach(inject((_Users_) => {
    Users = _Users_
  }))

  it('should exist', () => {
    expext(Users).toBeDefinted()
  })

  describe('.all()', () => {
    it('should exist', () => {
      expect(Users.all).toBeDefinted()
    })
  })
})
