<?php
declare(strict_types=1);

// FederalRegister SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FederalRegisterUtility::setRegistrar(function (FederalRegisterUtility $u): void {
    $u->clean = [FederalRegisterClean::class, 'call'];
    $u->done = [FederalRegisterDone::class, 'call'];
    $u->make_error = [FederalRegisterMakeError::class, 'call'];
    $u->feature_add = [FederalRegisterFeatureAdd::class, 'call'];
    $u->feature_hook = [FederalRegisterFeatureHook::class, 'call'];
    $u->feature_init = [FederalRegisterFeatureInit::class, 'call'];
    $u->fetcher = [FederalRegisterFetcher::class, 'call'];
    $u->make_fetch_def = [FederalRegisterMakeFetchDef::class, 'call'];
    $u->make_context = [FederalRegisterMakeContext::class, 'call'];
    $u->make_options = [FederalRegisterMakeOptions::class, 'call'];
    $u->make_request = [FederalRegisterMakeRequest::class, 'call'];
    $u->make_response = [FederalRegisterMakeResponse::class, 'call'];
    $u->make_result = [FederalRegisterMakeResult::class, 'call'];
    $u->make_point = [FederalRegisterMakePoint::class, 'call'];
    $u->make_spec = [FederalRegisterMakeSpec::class, 'call'];
    $u->make_url = [FederalRegisterMakeUrl::class, 'call'];
    $u->param = [FederalRegisterParam::class, 'call'];
    $u->prepare_auth = [FederalRegisterPrepareAuth::class, 'call'];
    $u->prepare_body = [FederalRegisterPrepareBody::class, 'call'];
    $u->prepare_headers = [FederalRegisterPrepareHeaders::class, 'call'];
    $u->prepare_method = [FederalRegisterPrepareMethod::class, 'call'];
    $u->prepare_params = [FederalRegisterPrepareParams::class, 'call'];
    $u->prepare_path = [FederalRegisterPreparePath::class, 'call'];
    $u->prepare_query = [FederalRegisterPrepareQuery::class, 'call'];
    $u->result_basic = [FederalRegisterResultBasic::class, 'call'];
    $u->result_body = [FederalRegisterResultBody::class, 'call'];
    $u->result_headers = [FederalRegisterResultHeaders::class, 'call'];
    $u->transform_request = [FederalRegisterTransformRequest::class, 'call'];
    $u->transform_response = [FederalRegisterTransformResponse::class, 'call'];
});
