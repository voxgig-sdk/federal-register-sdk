# FederalRegister SDK utility: make_context

from federalregister_sdk.core.context import FederalRegisterContext


def make_context_util(ctxmap, basectx):
    return FederalRegisterContext(ctxmap, basectx)
