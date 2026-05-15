# ProjectName SDK exists test

import pytest
from federalregister_sdk import FederalRegisterSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FederalRegisterSDK.test(None, None)
        assert testsdk is not None
