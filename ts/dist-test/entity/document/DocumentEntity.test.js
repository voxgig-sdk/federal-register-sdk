"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DocumentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FEDERAL_REGISTER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FEDERAL_REGISTER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FederalRegisterSDK.test();
        const ent = testsdk.Document();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FEDERAL_REGISTER_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'document.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "abstract", "req": false, "short": "Brief summary of the document", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "action", "req": false, "short": "Action being taken by the document", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "agencies", "req": false, "short": "Agencies associated with the document", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "format": "uri", "name": "body_html_url", "req": false, "short": "URL to the full HTML body of the document", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "citation", "req": false, "short": "Official citation for the document", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "document_number", "req": false, "short": "Unique identifier for the document", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "full_text_xml_url", "req": false, "short": "URL to the full text XML of the document", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "uri", "name": "html_url", "req": false, "short": "URL to the document on FederalRegister.gov", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "uri", "name": "pdf_url", "req": false, "short": "URL to the PDF version of the document", "type": "`$STRING`", "index$": 9 }, { "active": true, "format": "date", "name": "publication_date", "req": false, "short": "Date the document was published", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "date", "name": "signing_date", "req": false, "short": "Date the document was signed", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "title", "req": false, "short": "Title of the document", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "topics", "req": false, "short": "Topics associated with the document", "type": "`$ARRAY`", "index$": 13 }, { "active": true, "name": "type", "req": false, "short": "Type of document", "type": "`$STRING`", "index$": 14 }], "id": { "field": "id", "name": "id" }, "name": "document", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": ["environmental-protection-agency"], "kind": "query", "name": "conditions_agency", "orig": "conditions_agency", "reqd": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "example": "2021-01-01", "kind": "query", "name": "conditions_publication_date_gte", "orig": "conditions_publication_date_gte", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "2021-12-31", "kind": "query", "name": "conditions_publication_date_lte", "orig": "conditions_publication_date_lte", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 2021, "kind": "query", "name": "conditions_publication_date_year", "orig": "conditions_publication_date_year", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "example": "climate change", "kind": "query", "name": "conditions_term", "orig": "conditions_term", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": ["RULE"], "kind": "query", "name": "conditions_type", "orig": "conditions_type", "reqd": false, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "example": ["title", "publication_date", "document_number"], "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$ARRAY`", "index$": 6 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "example": "newest", "kind": "query", "name": "order", "orig": "order", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 10 }] }, "contract": { "id": "GET /documents", "json": "{\"operationId\":\"searchDocuments\",\"parameters\":[{\"description\":\"Search term to filter documents\",\"example\":\"climate change\",\"in\":\"query\",\"name\":\"conditions[term]\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by agency slug(s)\",\"example\":[\"environmental-protection-agency\"],\"explode\":true,\"in\":\"query\",\"name\":\"conditions[agencies][]\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by document type(s)\",\"example\":[\"RULE\"],\"explode\":true,\"in\":\"query\",\"name\":\"conditions[type][]\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"RULE\",\"PRORULE\",\"NOTICE\",\"PRESDOCU\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by publication year\",\"example\":2021,\"in\":\"query\",\"name\":\"conditions[publication_date][year]\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter by publication date (greater than or equal to)\",\"example\":\"2021-01-01\",\"in\":\"query\",\"name\":\"conditions[publication_date][gte]\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Filter by publication date (less than or equal to)\",\"example\":\"2021-12-31\",\"in\":\"query\",\"name\":\"conditions[publication_date][lte]\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Sort order for results\",\"example\":\"newest\",\"in\":\"query\",\"name\":\"order\",\"required\":false,\"schema\":{\"enum\":[\"newest\",\"oldest\",\"relevance\"],\"type\":\"string\"}},{\"description\":\"Number of results per page (max 1000)\",\"example\":20,\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"example\":1,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Specific fields to include in the response\",\"example\":[\"title\",\"publication_date\",\"document_number\"],\"explode\":true,\"in\":\"query\",\"name\":\"fields[]\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Response format\",\"example\":\"json\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Total number of documents matching the search\",\"type\":\"integer\"},\"description\":{\"description\":\"Description of the search query\",\"type\":\"string\"},\"next_page_url\":{\"description\":\"URL to the next page of results\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"previous_page_url\":{\"description\":\"URL to the previous page of results\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"results\":{\"description\":\"Array of matching documents\",\"items\":{\"properties\":{\"abstract\":{\"description\":\"Brief summary of the document\",\"type\":\"string\"},\"action\":{\"description\":\"Action being taken by the document\",\"type\":\"string\"},\"agencies\":{\"description\":\"Agencies associated with the document\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the agency\",\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the agency\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly identifier for the agency\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the agency's page on FederalRegister.gov\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"body_html_url\":{\"description\":\"URL to the full HTML body of the document\",\"format\":\"uri\",\"type\":\"string\"},\"citation\":{\"description\":\"Official citation for the document\",\"type\":\"string\"},\"document_number\":{\"description\":\"Unique identifier for the document\",\"type\":\"string\"},\"full_text_xml_url\":{\"description\":\"URL to the full text XML of the document\",\"format\":\"uri\",\"type\":\"string\"},\"html_url\":{\"description\":\"URL to the document on FederalRegister.gov\",\"format\":\"uri\",\"type\":\"string\"},\"pdf_url\":{\"description\":\"URL to the PDF version of the document\",\"format\":\"uri\",\"type\":\"string\"},\"publication_date\":{\"description\":\"Date the document was published\",\"format\":\"date\",\"type\":\"string\"},\"signing_date\":{\"description\":\"Date the document was signed\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the document\",\"type\":\"string\"},\"topics\":{\"description\":\"Topics associated with the document\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"Type of document\",\"enum\":[\"RULE\",\"PRORULE\",\"NOTICE\",\"PRESDOCU\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_pages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"}},\"type\":\"object\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with matching documents\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/documents", "segments": [{ "lit": "documents" }], "select": { "exist": ["conditions_agency", "conditions_publication_date_gte", "conditions_publication_date_lte", "conditions_publication_date_year", "conditions_term", "conditions_type", "field", "format", "order", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "2021-12345", "kind": "param", "name": "id", "orig": "document_number", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "title,publication_date,agencies", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /documents/{document_number}", "json": "{\"operationId\":\"getDocument\",\"parameters\":[{\"description\":\"The unique document number of the Federal Register document\",\"example\":\"2021-12345\",\"in\":\"path\",\"name\":\"document_number\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to include in the response\",\"example\":\"title,publication_date,agencies\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"abstract\":{\"description\":\"Brief summary of the document\",\"type\":\"string\"},\"action\":{\"description\":\"Action being taken by the document\",\"type\":\"string\"},\"agencies\":{\"description\":\"Agencies associated with the document\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the agency\",\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the agency\",\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly identifier for the agency\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the agency's page on FederalRegister.gov\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"body_html_url\":{\"description\":\"URL to the full HTML body of the document\",\"format\":\"uri\",\"type\":\"string\"},\"citation\":{\"description\":\"Official citation for the document\",\"type\":\"string\"},\"document_number\":{\"description\":\"Unique identifier for the document\",\"type\":\"string\"},\"full_text_xml_url\":{\"description\":\"URL to the full text XML of the document\",\"format\":\"uri\",\"type\":\"string\"},\"html_url\":{\"description\":\"URL to the document on FederalRegister.gov\",\"format\":\"uri\",\"type\":\"string\"},\"pdf_url\":{\"description\":\"URL to the PDF version of the document\",\"format\":\"uri\",\"type\":\"string\"},\"publication_date\":{\"description\":\"Date the document was published\",\"format\":\"date\",\"type\":\"string\"},\"signing_date\":{\"description\":\"Date the document was signed\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the document\",\"type\":\"string\"},\"topics\":{\"description\":\"Topics associated with the document\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"Type of document\",\"enum\":[\"RULE\",\"PRORULE\",\"NOTICE\",\"PRESDOCU\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with document details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Document not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/documents/{document_number}", "rename": { "param": { "document_number": "id" } }, "segments": [{ "lit": "documents" }, { "var": "id" }], "select": { "exist": ["field", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "document", "name__orig": "document", "Name": "Document", "name_": "document", "name-": "document", "NAME": "DOCUMENT", "index$": 0 }, { "active": true, "entity": "document", "key$": "BasicDocumentFlow", "kind": "basic", "name": "BasicDocumentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "document_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "document_ref01", "srcdatavar": "document_ref01_data", "suffix": "_dt0" }, "match": { "id": "document01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-document_ref01" } }], "index$": 1 }] }, 'Document');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let document_ref01_data = Object.values(setup.data.existing.document)[0];
        // LIST
        const document_ref01_ent = client.Document();
        const document_ref01_match = {};
        const document_ref01_list = (await document_ref01_ent.list(document_ref01_match)).map((e) => e.data());
        // LOAD
        const document_ref01_match_dt0 = {};
        document_ref01_match_dt0.id = document_ref01_data.id;
        const document_ref01_data_dt0 = (await document_ref01_ent.load(document_ref01_match_dt0)).data();
        (0, node_assert_1.default)(document_ref01_data_dt0.id === document_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/document/DocumentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FederalRegisterSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['document01', 'document02', 'document03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FEDERAL_REGISTER_TEST_DOCUMENT_ENTID': idmap,
        'FEDERAL_REGISTER_TEST_LIVE': 'FALSE',
        'FEDERAL_REGISTER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FEDERAL_REGISTER_TEST_DOCUMENT_ENTID'];
    const live = 'TRUE' === env.FEDERAL_REGISTER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FEDERAL_REGISTER_TEST_DOCUMENT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FederalRegisterSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FEDERAL_REGISTER_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DocumentEntity.test.js.map