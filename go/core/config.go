package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FederalRegister",
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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "action",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "agency",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "body_html_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "citation",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "document_number",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "full_text_xml_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "html_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "pdf_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "publication_date",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "signing_date",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "topic",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
				},
				"name": "document",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "2021-01-01",
											"kind": "query",
											"name": "conditions_publication_date_gte",
											"orig": "conditions_publication_date_gte",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "2021-12-31",
											"kind": "query",
											"name": "conditions_publication_date_lte",
											"orig": "conditions_publication_date_lte",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 2021,
											"kind": "query",
											"name": "conditions_publication_date_year",
											"orig": "conditions_publication_date_year",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "climate change",
											"kind": "query",
											"name": "conditions_term",
											"orig": "conditions_term",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": []any{
												"RULE",
											},
											"kind": "query",
											"name": "conditions_type",
											"orig": "conditions_type",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
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
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "newest",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": "title,publication_date,agencies",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
