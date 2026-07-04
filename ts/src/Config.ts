
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://www.federalregister.gov/api/v1',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      document: {
      },

    }
  }


  entity = {
    "document": {
      "fields": [
        {
          "active": true,
          "name": "abstract",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "action",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "agency",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "body_html_url",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "citation",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "document_number",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "full_text_xml_url",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "html_url",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "pdf_url",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "publication_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "signing_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "topic",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 12
        },
        {
          "active": true,
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "index$": 13
        }
      ],
      "name": "document",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": [
                      "environmental-protection-agency"
                    ],
                    "kind": "query",
                    "name": "conditions_agency",
                    "orig": "conditions_agency",
                    "reqd": false,
                    "type": "`$ARRAY`"
                  },
                  {
                    "active": true,
                    "example": "2021-01-01",
                    "kind": "query",
                    "name": "conditions_publication_date_gte",
                    "orig": "conditions_publication_date_gte",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "2021-12-31",
                    "kind": "query",
                    "name": "conditions_publication_date_lte",
                    "orig": "conditions_publication_date_lte",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 2021,
                    "kind": "query",
                    "name": "conditions_publication_date_year",
                    "orig": "conditions_publication_date_year",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": "climate change",
                    "kind": "query",
                    "name": "conditions_term",
                    "orig": "conditions_term",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": [
                      "RULE"
                    ],
                    "kind": "query",
                    "name": "conditions_type",
                    "orig": "conditions_type",
                    "reqd": false,
                    "type": "`$ARRAY`"
                  },
                  {
                    "active": true,
                    "example": [
                      "title",
                      "publication_date",
                      "document_number"
                    ],
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$ARRAY`"
                  },
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "newest",
                    "kind": "query",
                    "name": "order",
                    "orig": "order",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 20,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/documents",
              "parts": [
                "documents"
              ],
              "select": {
                "exist": [
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
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "2021-12345",
                    "kind": "param",
                    "name": "id",
                    "orig": "document_number",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "title,publication_date,agencies",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/documents/{document_number}",
              "parts": [
                "documents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "document_number": "id"
                }
              },
              "select": {
                "exist": [
                  "field",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

