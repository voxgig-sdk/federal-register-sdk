package = "voxgig-sdk-federal-register"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/federal-register-sdk.git"
}
description = {
  summary = "FederalRegister SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["federal-register_sdk"] = "federal-register_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
