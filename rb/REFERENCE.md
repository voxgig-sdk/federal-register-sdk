# FederalRegister Ruby SDK Reference

Complete API reference for the FederalRegister Ruby SDK.


## FederalRegisterSDK

### Constructor

```ruby
require_relative 'FederalRegister_sdk'

client = FederalRegisterSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FederalRegisterSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = FederalRegisterSDK.test
```


### Instance Methods

#### `Document(data = nil)`

Create a new `Document` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DocumentEntity

```ruby
document = client.Document
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstract` | `String` | No | Brief summary of the document |
| `action` | `String` | No | Action being taken by the document |
| `agencies` | `Array` | No | Agencies associated with the document |
| `body_html_url` | `String` | No | URL to the full HTML body of the document |
| `citation` | `String` | No | Official citation for the document |
| `document_number` | `String` | No | Unique identifier for the document |
| `full_text_xml_url` | `String` | No | URL to the full text XML of the document |
| `html_url` | `String` | No | URL to the document on FederalRegister.gov |
| `pdf_url` | `String` | No | URL to the PDF version of the document |
| `publication_date` | `String` | No | Date the document was published |
| `signing_date` | `String` | No | Date the document was signed |
| `title` | `String` | No | Title of the document |
| `topics` | `Array` | No | Topics associated with the document |
| `type` | `String` | No | Type of document |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Document.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Document.load({ "id" => "document_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DocumentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = FederalRegisterSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

