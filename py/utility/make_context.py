# FederalRegister SDK utility: make_context

from core.context import FederalRegisterContext


def make_context_util(ctxmap, basectx):
    return FederalRegisterContext(ctxmap, basectx)
