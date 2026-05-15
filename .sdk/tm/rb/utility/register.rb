# FederalRegister SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FederalRegisterUtility.registrar = ->(u) {
  u.clean = FederalRegisterUtilities::Clean
  u.done = FederalRegisterUtilities::Done
  u.make_error = FederalRegisterUtilities::MakeError
  u.feature_add = FederalRegisterUtilities::FeatureAdd
  u.feature_hook = FederalRegisterUtilities::FeatureHook
  u.feature_init = FederalRegisterUtilities::FeatureInit
  u.fetcher = FederalRegisterUtilities::Fetcher
  u.make_fetch_def = FederalRegisterUtilities::MakeFetchDef
  u.make_context = FederalRegisterUtilities::MakeContext
  u.make_options = FederalRegisterUtilities::MakeOptions
  u.make_request = FederalRegisterUtilities::MakeRequest
  u.make_response = FederalRegisterUtilities::MakeResponse
  u.make_result = FederalRegisterUtilities::MakeResult
  u.make_point = FederalRegisterUtilities::MakePoint
  u.make_spec = FederalRegisterUtilities::MakeSpec
  u.make_url = FederalRegisterUtilities::MakeUrl
  u.param = FederalRegisterUtilities::Param
  u.prepare_auth = FederalRegisterUtilities::PrepareAuth
  u.prepare_body = FederalRegisterUtilities::PrepareBody
  u.prepare_headers = FederalRegisterUtilities::PrepareHeaders
  u.prepare_method = FederalRegisterUtilities::PrepareMethod
  u.prepare_params = FederalRegisterUtilities::PrepareParams
  u.prepare_path = FederalRegisterUtilities::PreparePath
  u.prepare_query = FederalRegisterUtilities::PrepareQuery
  u.result_basic = FederalRegisterUtilities::ResultBasic
  u.result_body = FederalRegisterUtilities::ResultBody
  u.result_headers = FederalRegisterUtilities::ResultHeaders
  u.transform_request = FederalRegisterUtilities::TransformRequest
  u.transform_response = FederalRegisterUtilities::TransformResponse
}
