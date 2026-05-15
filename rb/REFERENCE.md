# FederalRegister Ruby SDK Reference

Complete API reference for the FederalRegister Ruby SDK.


## FederalRegisterSDK

### Constructor

```ruby
require_relative 'federal-register_sdk'

client = FederalRegisterSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## DocumentEntity

```ruby
document = client.Document
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstract` | ``$STRING`` | No |  |
| `action` | ``$STRING`` | No |  |
| `agency` | ``$ARRAY`` | No |  |
| `body_html_url` | ``$STRING`` | No |  |
| `citation` | ``$STRING`` | No |  |
| `document_number` | ``$STRING`` | No |  |
| `full_text_xml_url` | ``$STRING`` | No |  |
| `html_url` | ``$STRING`` | No |  |
| `pdf_url` | ``$STRING`` | No |  |
| `publication_date` | ``$STRING`` | No |  |
| `signing_date` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `topic` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Document.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Document.load({ "id" => "document_id" })
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

