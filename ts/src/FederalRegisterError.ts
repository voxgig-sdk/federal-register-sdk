
import { Context } from './Context'


class FederalRegisterError extends Error {

  isFederalRegisterError = true

  sdk = 'FederalRegister'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FederalRegisterError
}

