# FederalRegister SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FederalRegisterFeatures
  def self.make_feature(name)
    case name
    when "base"
      FederalRegisterBaseFeature.new
    when "ratelimit"
      FederalRegisterRatelimitFeature.new
    when "retry"
      FederalRegisterRetryFeature.new
    when "test"
      FederalRegisterTestFeature.new
    when "timeout"
      FederalRegisterTimeoutFeature.new
    else
      FederalRegisterBaseFeature.new
    end
  end
end
