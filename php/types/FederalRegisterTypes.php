<?php
declare(strict_types=1);

// Typed models for the FederalRegister SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Document entity data model. */
class Document
{
    public ?string $abstract = null;
    public ?string $action = null;
    public ?array $agencies = null;
    public ?string $body_html_url = null;
    public ?string $citation = null;
    public ?string $document_number = null;
    public ?string $full_text_xml_url = null;
    public ?string $html_url = null;
    public ?string $id = null;
    public ?string $pdf_url = null;
    public ?string $publication_date = null;
    public ?string $signing_date = null;
    public ?string $title = null;
    public ?array $topics = null;
    public ?string $type = null;
}

/** Request payload for Document#load. */
class DocumentLoadMatch
{
    public string $id;
    public ?string $field = null;
}

/** Request payload for Document#list. */
class DocumentListMatch
{
    public ?array $conditions_agency = null;
    public ?string $conditions_publication_date_gte = null;
    public ?string $conditions_publication_date_lte = null;
    public ?int $conditions_publication_date_year = null;
    public ?string $conditions_term = null;
    public ?array $conditions_type = null;
    public ?array $field = null;
    public ?string $format = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

