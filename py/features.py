# FederalRegister SDK feature factory

from feature.base_feature import FederalRegisterBaseFeature
from feature.test_feature import FederalRegisterTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FederalRegisterBaseFeature(),
        "test": lambda: FederalRegisterTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
