# FederalRegister SDK utility: prepare_body
module FederalRegisterUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
