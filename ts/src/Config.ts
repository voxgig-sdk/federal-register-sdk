
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FederalRegister',
        slug: "federal-register",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.federalregister.gov/api/v1",

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
          "short": "Brief summary of the document",
          "type": "`$STRING`"
        },
        {
          "name": "action",
          "short": "Action being taken by the document",
          "type": "`$STRING`"
        },
        {
          "name": "agencies",
          "short": "Agencies associated with the document",
          "type": "`$ARRAY`"
        },
        {
          "format": "uri",
          "name": "body_html_url",
          "short": "URL to the full HTML body of the document",
          "type": "`$STRING`"
        },
        {
          "name": "citation",
          "short": "Official citation for the document",
          "type": "`$STRING`"
        },
        {
          "name": "document_number",
          "short": "Unique identifier for the document",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "full_text_xml_url",
          "short": "URL to the full text XML of the document",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "html_url",
          "short": "URL to the document on FederalRegister.gov",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "pdf_url",
          "short": "URL to the PDF version of the document",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "publication_date",
          "short": "Date the document was published",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "signing_date",
          "short": "Date the document was signed",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the document",
          "type": "`$STRING`"
        },
        {
          "name": "topics",
          "short": "Topics associated with the document",
          "type": "`$ARRAY`"
        },
        {
          "name": "type",
          "short": "Type of document",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "document",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "2021-01-01",
                    "kind": "query",
                    "name": "conditions_publication_date_gte",
                    "orig": "conditions_publication_date_gte",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2021-12-31",
                    "kind": "query",
                    "name": "conditions_publication_date_lte",
                    "orig": "conditions_publication_date_lte",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 2021,
                    "kind": "query",
                    "name": "conditions_publication_date_year",
                    "orig": "conditions_publication_date_year",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "climate change",
                    "kind": "query",
                    "name": "conditions_term",
                    "orig": "conditions_term",
                    "type": "`$STRING`"
                  },
                  {
                    "example": [
                      "RULE"
                    ],
                    "kind": "query",
                    "name": "conditions_type",
                    "orig": "conditions_type",
                    "type": "`$ARRAY`"
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
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "newest",
                    "kind": "query",
                    "name": "order",
                    "orig": "order",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/documents",
              "segments": [
                {
                  "lit": "documents"
                }
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
                "res": "`body.results`"
              },
              "parts": [
                "documents"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
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
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "title,publication_date,agencies",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/documents/{document_number}",
              "rename": {
                "param": {
                  "document_number": "id"
                }
              },
              "segments": [
                {
                  "lit": "documents"
                },
                {
                  "var": "id"
                }
              ],
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
              "parts": [
                "documents",
                "{id}"
              ]
            }
          ]
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
  config,
  FEATURE_PLUGINS,
}

