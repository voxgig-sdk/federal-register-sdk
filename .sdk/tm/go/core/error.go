package core

type FederalRegisterError struct {
	IsFederalRegisterError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFederalRegisterError(code string, msg string, ctx *Context) *FederalRegisterError {
	return &FederalRegisterError{
		IsFederalRegisterError: true,
		Sdk:              "FederalRegister",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FederalRegisterError) Error() string {
	return e.Msg
}
