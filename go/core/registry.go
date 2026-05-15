package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDocumentEntityFunc func(client *FederalRegisterSDK, entopts map[string]any) FederalRegisterEntity

