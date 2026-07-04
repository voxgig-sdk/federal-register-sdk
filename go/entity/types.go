// Typed models for the FederalRegister SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Document is the typed data model for the document entity.
type Document struct {
	Abstract *string `json:"abstract,omitempty"`
	Action *string `json:"action,omitempty"`
	Agency *[]any `json:"agency,omitempty"`
	BodyHtmlUrl *string `json:"body_html_url,omitempty"`
	Citation *string `json:"citation,omitempty"`
	DocumentNumber *string `json:"document_number,omitempty"`
	FullTextXmlUrl *string `json:"full_text_xml_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	PublicationDate *string `json:"publication_date,omitempty"`
	SigningDate *string `json:"signing_date,omitempty"`
	Title *string `json:"title,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DocumentLoadMatch is the typed request payload for Document.LoadTyped.
type DocumentLoadMatch struct {
	Id string `json:"id"`
}

// DocumentListMatch mirrors the document fields as an all-optional match
// filter (Go analog of Partial<Document>).
type DocumentListMatch struct {
	Abstract *string `json:"abstract,omitempty"`
	Action *string `json:"action,omitempty"`
	Agency *[]any `json:"agency,omitempty"`
	BodyHtmlUrl *string `json:"body_html_url,omitempty"`
	Citation *string `json:"citation,omitempty"`
	DocumentNumber *string `json:"document_number,omitempty"`
	FullTextXmlUrl *string `json:"full_text_xml_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	PublicationDate *string `json:"publication_date,omitempty"`
	SigningDate *string `json:"signing_date,omitempty"`
	Title *string `json:"title,omitempty"`
	Topic *[]any `json:"topic,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
