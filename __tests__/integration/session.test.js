/* eslint-disable no-undef */
const { User } = require('../../src/app/models')

describe('Authentication', () => {
  it('It Should ADD a new user', async () => {
    const user = await User.create({
      name: 'Renoit',
      email: 'renote_brabiso@hotmail.com',
      password: 'Maibrabodetos',
    })

    expect(user.name).toBe('Renoit')
  })
})
