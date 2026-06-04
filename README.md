# FederalRegister SDK

Search and fetch documents from the daily journal of the US federal government

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Federal Register API

The [Federal Register API](https://www.federalregister.gov/developers/documentation/api/v1) provides programmatic access to the daily journal of the US federal government, run by the [Office of the Federal Register](https://www.archives.gov/federal-register) at the National Archives and Records Administration. It exposes the same content that powers [federalregister.gov](https://www.federalregister.gov/), including rules, proposed rules, notices, and presidential documents.

What you get from the API:

- Individual documents by Federal Register document number
- Full-text and faceted search across the document corpus
- JSON and CSV response formats
- Document metadata such as agency, publication date, type, and citation

The API is served from `https://www.federalregister.gov/api/v1` and requires no API key. Useful for compliance monitoring, regulatory research, civic-tech tools, and journalism.

## Try it

**TypeScript**
```bash
npm install federal-register
```

**Python**
```bash
pip install federal-register-sdk
```

**PHP**
```bash
composer require voxgig/federal-register-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/federal-register-sdk/go
```

**Ruby**
```bash
gem install federal-register-sdk
```

**Lua**
```bash
luarocks install federal-register-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FederalRegisterSDK } from 'federal-register'

const client = new FederalRegisterSDK({})

// List all documents
const documents = await client.Document().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o federal-register-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "federal-register": {
      "command": "/abs/path/to/federal-register-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Document** | A single Federal Register publication — rule, proposed rule, notice, or presidential document — available at `GET /api/v1/documents` (list/search) and `GET /api/v1/documents/{document_number}` (single record). | `/documents` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from federalregister_sdk import FederalRegisterSDK

client = FederalRegisterSDK({})

# List all documents
documents, err = client.Document(None).list(None, None)

# Load a specific document
document, err = client.Document(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'federalregister_sdk.php';

$client = new FederalRegisterSDK([]);

// List all documents
[$documents, $err] = $client->Document(null)->list(null, null);

// Load a specific document
[$document, $err] = $client->Document(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/federal-register-sdk/go"

client := sdk.NewFederalRegisterSDK(map[string]any{})

// List all documents
documents, err := client.Document(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FederalRegister_sdk"

client = FederalRegisterSDK.new({})

# List all documents
documents, err = client.Document(nil).list(nil, nil)

# Load a specific document
document, err = client.Document(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("federal-register_sdk")

local client = sdk.new({})

-- List all documents
local documents, err = client:Document(nil):list(nil, nil)

-- Load a specific document
local document, err = client:Document(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FederalRegisterSDK.test()
const result = await client.Document().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FederalRegisterSDK.test(None, None)
result, err = client.Document(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FederalRegisterSDK::test(null, null);
[$result, $err] = $client->Document(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Document(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FederalRegisterSDK.test(nil, nil)
result, err = client.Document(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Document(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Federal Register API

- Upstream: [https://www.federalregister.gov/](https://www.federalregister.gov/)
- API docs: [https://www.federalregister.gov/developers/documentation/api/v1](https://www.federalregister.gov/developers/documentation/api/v1)

- Content produced by the US federal government is generally in the public domain under 17 U.S.C. § 105
- No API key or authentication required
- Attribution to the Federal Register / federalregister.gov is courteous but not legally required
- Third-party material that may appear in documents (logos, images) can retain its own rights

---

Generated from the Federal Register API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
