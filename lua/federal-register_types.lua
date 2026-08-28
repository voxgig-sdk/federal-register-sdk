-- Typed models for the FederalRegister SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Document
---@field abstract? string
---@field action? string
---@field agencies? table
---@field body_html_url? string
---@field citation? string
---@field document_number? string
---@field full_text_xml_url? string
---@field html_url? string
---@field id? string
---@field pdf_url? string
---@field publication_date? string
---@field signing_date? string
---@field title? string
---@field topics? table
---@field type? string

---@class DocumentLoadMatch
---@field id string
---@field field? string

---@class DocumentListMatch
---@field conditions_agency? table
---@field conditions_publication_date_gte? string
---@field conditions_publication_date_lte? string
---@field conditions_publication_date_year? number
---@field conditions_term? string
---@field conditions_type? table
---@field field? table
---@field format? string
---@field order? string
---@field page? number
---@field per_page? number

local M = {}

return M
