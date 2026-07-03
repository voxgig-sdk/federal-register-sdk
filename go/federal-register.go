package voxgigfederalregistersdk

import (
	"github.com/voxgig-sdk/federal-register-sdk/go/core"
	"github.com/voxgig-sdk/federal-register-sdk/go/entity"
	"github.com/voxgig-sdk/federal-register-sdk/go/feature"
	_ "github.com/voxgig-sdk/federal-register-sdk/go/utility"
)

// Type aliases preserve external API.
type FederalRegisterSDK = core.FederalRegisterSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FederalRegisterEntity = core.FederalRegisterEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FederalRegisterError = core.FederalRegisterError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDocumentEntityFunc = func(client *core.FederalRegisterSDK, entopts map[string]any) core.FederalRegisterEntity {
		return entity.NewDocumentEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFederalRegisterSDK = core.NewFederalRegisterSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFederalRegisterSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FederalRegisterSDK  { return NewFederalRegisterSDK(nil) }
func Test() *FederalRegisterSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
