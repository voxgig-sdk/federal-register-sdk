-- FederalRegister SDK error

local FederalRegisterError = {}
FederalRegisterError.__index = FederalRegisterError


function FederalRegisterError.new(code, msg, ctx)
  local self = setmetatable({}, FederalRegisterError)
  self.is_sdk_error = true
  self.sdk = "FederalRegister"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FederalRegisterError:error()
  return self.msg
end


function FederalRegisterError:__tostring()
  return self.msg
end


return FederalRegisterError
