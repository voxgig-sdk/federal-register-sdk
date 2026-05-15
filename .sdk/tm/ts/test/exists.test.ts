
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FederalRegisterSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FederalRegisterSDK.test()
    equal(null !== testsdk, true)
  })

})
