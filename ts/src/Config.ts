
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

    auth: {
      prefix: 'Bearer',
    },

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
          "name": "abstract",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "action",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "agency",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 2
        },
        {
          "name": "body_html_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "citation",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "document_number",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "full_text_xml_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "html_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "pdf_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "publication_date",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        },
        {
          "name": "signing_date",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "topic",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 12
        },
        {
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        }
      ],
      "name": "document",
      "op": {
        "list": {
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": [
                      "environmental-protection-agency"
                    ],
                    "kind": "query",
                    "name": "conditions_agency",
                    "orig": "conditions_agency",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "example": "2021-01-01",
                    "kind": "query",
                    "name": "conditions_publication_date_gte",
                    "orig": "conditions_publication_date_gte",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "2021-12-31",
                    "kind": "query",
                    "name": "conditions_publication_date_lte",
                    "orig": "conditions_publication_date_lte",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 2021,
                    "kind": "query",
                    "name": "conditions_publication_date_year",
                    "orig": "conditions_publication_date_year",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": "climate change",
                    "kind": "query",
                    "name": "conditions_term",
                    "orig": "conditions_term",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": [
                      "RULE"
                    ],
                    "kind": "query",
                    "name": "conditions_type",
                    "orig": "conditions_type",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "example": [
                      "title",
                      "publication_date",
                      "document_number"
                    ],
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$ARRAY`",
                    "active": true
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "newest",
                    "kind": "query",
                    "name": "order",
                    "orig": "order",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "2021-12345",
                    "kind": "param",
                    "name": "id",
                    "orig": "document_number",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": "title,publication_date,agencies",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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

