# FederalRegister TypeScript SDK Reference

Complete API reference for the FederalRegister TypeScript SDK.


## FederalRegisterSDK

### Constructor

```ts
new FederalRegisterSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FederalRegisterSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FederalRegisterSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FederalRegisterSDK` instance in test mode.


### Instance Methods

#### `Document(data?: object)`

Create a new `Document` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FederalRegisterSDK.test()`.

**Returns:** `FederalRegisterSDK` instance in test mode.


---

## DocumentEntity

```ts
const document = client.Document()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Document().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Document().load({ id: 'document_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `FederalRegisterSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FederalRegisterSDK({
  feature: {
    test: { active: true },
  }
})
```

