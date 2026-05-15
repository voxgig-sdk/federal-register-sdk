# FederalRegister SDK utility: feature_add
module FederalRegisterUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
