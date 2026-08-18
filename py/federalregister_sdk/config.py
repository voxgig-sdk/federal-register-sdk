# FederalRegister SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FederalRegister",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.federalregister.gov/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "document": {},
            },
        },
        "entity": {
      "document": {
        "fields": [
          {
            "name": "abstract",
            "type": "`$STRING`",
          },
          {
            "name": "action",
            "type": "`$STRING`",
          },
          {
            "name": "agencies",
            "type": "`$ARRAY`",
          },
          {
            "name": "body_html_url",
            "type": "`$STRING`",
          },
          {
            "name": "citation",
            "type": "`$STRING`",
          },
          {
            "name": "document_number",
            "type": "`$STRING`",
          },
          {
            "name": "full_text_xml_url",
            "type": "`$STRING`",
          },
          {
            "name": "html_url",
            "type": "`$STRING`",
          },
          {
            "name": "pdf_url",
            "type": "`$STRING`",
          },
          {
            "name": "publication_date",
            "type": "`$STRING`",
          },
          {
            "name": "signing_date",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "topics",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
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
                        "environmental-protection-agency",
                      ],
                      "kind": "query",
                      "name": "conditions_agency",
                      "orig": "conditions_agency",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": "2021-01-01",
                      "kind": "query",
                      "name": "conditions_publication_date_gte",
                      "orig": "conditions_publication_date_gte",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "2021-12-31",
                      "kind": "query",
                      "name": "conditions_publication_date_lte",
                      "orig": "conditions_publication_date_lte",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 2021,
                      "kind": "query",
                      "name": "conditions_publication_date_year",
                      "orig": "conditions_publication_date_year",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "climate change",
                      "kind": "query",
                      "name": "conditions_term",
                      "orig": "conditions_term",
                      "type": "`$STRING`",
                    },
                    {
                      "example": [
                        "RULE",
                      ],
                      "kind": "query",
                      "name": "conditions_type",
                      "orig": "conditions_type",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": [
                        "title",
                        "publication_date",
                        "document_number",
                      ],
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "newest",
                      "kind": "query",
                      "name": "order",
                      "orig": "order",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/documents",
                "parts": [
                  "documents",
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
                    "per_page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "title,publication_date,agencies",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/documents/{document_number}",
                "parts": [
                  "documents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "document_number": "id",
                  },
                },
                "select": {
                  "exist": [
                    "field",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
