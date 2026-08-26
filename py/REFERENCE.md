# FederalRegister Python SDK Reference

Complete API reference for the FederalRegister Python SDK.


## FederalRegisterSDK

### Constructor

```python
from federalregister_sdk import FederalRegisterSDK

client = FederalRegisterSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FederalRegisterSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = FederalRegisterSDK.test()
```


### Instance Methods

#### `Document(data=None)`

Create a new `DocumentEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DocumentEntity

```python
document = client.Document()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstract` | `str` | No | Brief summary of the document |
| `action` | `str` | No | Action being taken by the document |
| `agencies` | `list` | No | Agencies associated with the document |
| `body_html_url` | `str` | No | URL to the full HTML body of the document |
| `citation` | `str` | No | Official citation for the document |
| `document_number` | `str` | No | Unique identifier for the document |
| `full_text_xml_url` | `str` | No | URL to the full text XML of the document |
| `html_url` | `str` | No | URL to the document on FederalRegister.gov |
| `id` | `str` | No |  |
| `pdf_url` | `str` | No | URL to the PDF version of the document |
| `publication_date` | `str` | No | Date the document was published |
| `signing_date` | `str` | No | Date the document was signed |
| `title` | `str` | No | Title of the document |
| `topics` | `list` | No | Topics associated with the document |
| `type` | `str` | No | Type of document |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Document().list()
for document in results:
    print(document)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Document().load({"id": "document_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocumentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = FederalRegisterSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

