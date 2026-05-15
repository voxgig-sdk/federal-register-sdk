# FederalRegister SDK utility: make_context
require_relative '../core/context'
module FederalRegisterUtilities
  MakeContext = ->(ctxmap, basectx) {
    FederalRegisterContext.new(ctxmap, basectx)
  }
end
