// Typed models for the FederalRegister SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Document {
  abstract?: string
  action?: string
  agencies?: any[]
  body_html_url?: string
  citation?: string
  document_number?: string
  full_text_xml_url?: string
  html_url?: string
  id?: string
  pdf_url?: string
  publication_date?: string
  signing_date?: string
  title?: string
  topics?: any[]
  type?: string
}

export interface DocumentLoadMatch {
  id: string
  field?: string
}

export interface DocumentListMatch {
  conditions_agency?: any[]
  conditions_publication_date_gte?: string
  conditions_publication_date_lte?: string
  conditions_publication_date_year?: number
  conditions_term?: string
  conditions_type?: any[]
  field?: any[]
  format?: string
  order?: string
  page?: number
  per_page?: number
}

