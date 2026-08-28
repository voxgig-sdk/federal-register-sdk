// Typed models for the FederalRegister SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/federal-register-sdk/go/core"
)

// Document is the typed data model for the document entity.
type Document struct {
	Abstract *string `json:"abstract,omitempty"`
	Action *string `json:"action,omitempty"`
	Agencies *[]any `json:"agencies,omitempty"`
	BodyHtmlUrl *string `json:"body_html_url,omitempty"`
	Citation *string `json:"citation,omitempty"`
	DocumentNumber *string `json:"document_number,omitempty"`
	FullTextXmlUrl *string `json:"full_text_xml_url,omitempty"`
	HtmlUrl *string `json:"html_url,omitempty"`
	Id *string `json:"id,omitempty"`
	PdfUrl *string `json:"pdf_url,omitempty"`
	PublicationDate *string `json:"publication_date,omitempty"`
	SigningDate *string `json:"signing_date,omitempty"`
	Title *string `json:"title,omitempty"`
	Topics *[]any `json:"topics,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DocumentLoadMatch is the typed request payload for Document.LoadTyped.
type DocumentLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// DocumentListMatch is the typed request payload for Document.ListTyped.
type DocumentListMatch struct {
	ConditionsAgency *[]any `json:"conditions_agency,omitempty"`
	ConditionsPublicationDateGte *string `json:"conditions_publication_date_gte,omitempty"`
	ConditionsPublicationDateLte *string `json:"conditions_publication_date_lte,omitempty"`
	ConditionsPublicationDateYear *int `json:"conditions_publication_date_year,omitempty"`
	ConditionsTerm *string `json:"conditions_term,omitempty"`
	ConditionsType *[]any `json:"conditions_type,omitempty"`
	Field *[]any `json:"field,omitempty"`
	Format *string `json:"format,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
