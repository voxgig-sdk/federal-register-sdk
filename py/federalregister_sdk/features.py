# FederalRegister SDK feature factory

from federalregister_sdk.feature.base_feature import FederalRegisterBaseFeature
from federalregister_sdk.feature.ratelimit_feature import FederalRegisterRatelimitFeature
from federalregister_sdk.feature.retry_feature import FederalRegisterRetryFeature
from federalregister_sdk.feature.test_feature import FederalRegisterTestFeature
from federalregister_sdk.feature.timeout_feature import FederalRegisterTimeoutFeature


_FEATURES = {
    "base": lambda: FederalRegisterBaseFeature(),
    "ratelimit": lambda: FederalRegisterRatelimitFeature(),
    "retry": lambda: FederalRegisterRetryFeature(),
    "test": lambda: FederalRegisterTestFeature(),
    "timeout": lambda: FederalRegisterTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
