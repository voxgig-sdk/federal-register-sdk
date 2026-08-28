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
# @!attribute [rw] agencies
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
# @!attribute [rw] id
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
# @!attribute [rw] topics
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Document = Struct.new(
  :abstract,
  :action,
  :agencies,
  :body_html_url,
  :citation,
  :document_number,
  :full_text_xml_url,
  :html_url,
  :id,
  :pdf_url,
  :publication_date,
  :signing_date,
  :title,
  :topics,
  :type,
  keyword_init: true
)

# Request payload for Document#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] field
#   @return [String, nil]
DocumentLoadMatch = Struct.new(
  :id,
  :field,
  keyword_init: true
)

# Request payload for Document#list.
#
# @!attribute [rw] conditions_agency
#   @return [Array, nil]
#
# @!attribute [rw] conditions_publication_date_gte
#   @return [String, nil]
#
# @!attribute [rw] conditions_publication_date_lte
#   @return [String, nil]
#
# @!attribute [rw] conditions_publication_date_year
#   @return [Integer, nil]
#
# @!attribute [rw] conditions_term
#   @return [String, nil]
#
# @!attribute [rw] conditions_type
#   @return [Array, nil]
#
# @!attribute [rw] field
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
DocumentListMatch = Struct.new(
  :conditions_agency,
  :conditions_publication_date_gte,
  :conditions_publication_date_lte,
  :conditions_publication_date_year,
  :conditions_term,
  :conditions_type,
  :field,
  :format,
  :order,
  :page,
  :per_page,
  keyword_init: true
)

