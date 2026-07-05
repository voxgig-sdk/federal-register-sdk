# frozen_string_literal: true

# Typed models for the FederalRegister SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Document entity data model.
#
# @!attribute [rw] abstract
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] agency
#   @return [Array, nil]
#
# @!attribute [rw] body_html_url
#   @return [String, nil]
#
# @!attribute [rw] citation
#   @return [String, nil]
#
# @!attribute [rw] document_number
#   @return [String, nil]
#
# @!attribute [rw] full_text_xml_url
#   @return [String, nil]
#
# @!attribute [rw] html_url
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] publication_date
#   @return [String, nil]
#
# @!attribute [rw] signing_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Document = Struct.new(
  :abstract,
  :action,
  :agency,
  :body_html_url,
  :citation,
  :document_number,
  :full_text_xml_url,
  :html_url,
  :pdf_url,
  :publication_date,
  :signing_date,
  :title,
  :topic,
  :type,
  keyword_init: true
)

# Request payload for Document#load.
#
# @!attribute [rw] id
#   @return [String]
DocumentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Document#list.
#
# @!attribute [rw] abstract
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] agency
#   @return [Array, nil]
#
# @!attribute [rw] body_html_url
#   @return [String, nil]
#
# @!attribute [rw] citation
#   @return [String, nil]
#
# @!attribute [rw] document_number
#   @return [String, nil]
#
# @!attribute [rw] full_text_xml_url
#   @return [String, nil]
#
# @!attribute [rw] html_url
#   @return [String, nil]
#
# @!attribute [rw] pdf_url
#   @return [String, nil]
#
# @!attribute [rw] publication_date
#   @return [String, nil]
#
# @!attribute [rw] signing_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
DocumentListMatch = Struct.new(
  :abstract,
  :action,
  :agency,
  :body_html_url,
  :citation,
  :document_number,
  :full_text_xml_url,
  :html_url,
  :pdf_url,
  :publication_date,
  :signing_date,
  :title,
  :topic,
  :type,
  keyword_init: true
)

