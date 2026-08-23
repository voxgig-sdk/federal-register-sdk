package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FederalRegister",
			"slug": "federal-register",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.federalregister.gov/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"document": map[string]any{},
			},
		},
		"entity": map[string]any{
			"document": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abstract",
						"short": "Brief summary of the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "action",
						"short": "Action being taken by the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "agencies",
						"short": "Agencies associated with the document",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "body_html_url",
						"short": "URL to the full HTML body of the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "citation",
						"short": "Official citation for the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "document_number",
						"short": "Unique identifier for the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "full_text_xml_url",
						"short": "URL to the full text XML of the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "html_url",
						"short": "URL to the document on FederalRegister.gov",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pdf_url",
						"short": "URL to the PDF version of the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publication_date",
						"short": "Date the document was published",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signing_date",
						"short": "Date the document was signed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topics",
						"short": "Topics associated with the document",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of document",
						"type": "`$STRING`",
					},
				},
				"name": "document",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": []any{
												"environmental-protection-agency",
											},
											"kind": "query",
											"name": "conditions_agency",
											"orig": "conditions_agency",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "2021-01-01",
											"kind": "query",
											"name": "conditions_publication_date_gte",
											"orig": "conditions_publication_date_gte",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2021-12-31",
											"kind": "query",
											"name": "conditions_publication_date_lte",
											"orig": "conditions_publication_date_lte",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 2021,
											"kind": "query",
											"name": "conditions_publication_date_year",
											"orig": "conditions_publication_date_year",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "climate change",
											"kind": "query",
											"name": "conditions_term",
											"orig": "conditions_term",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": []any{
												"RULE",
											},
											"kind": "query",
											"name": "conditions_type",
											"orig": "conditions_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": []any{
												"title",
												"publication_date",
												"document_number",
											},
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "newest",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/documents",
								"parts": []any{
									"documents",
								},
								"select": map[string]any{
									"exist": []any{
										"conditions_agency",
										"conditions_publication_date_gte",
										"conditions_publication_date_lte",
										"conditions_publication_date_year",
										"conditions_term",
										"conditions_type",
										"field",
										"format",
										"order",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "2021-12345",
											"kind": "param",
											"name": "id",
											"orig": "document_number",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "title,publication_date,agencies",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/documents/{document_number}",
								"parts": []any{
									"documents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"document_number": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
