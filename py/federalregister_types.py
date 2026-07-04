# Typed models for the FederalRegister SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Document:
    abstract: Optional[str] = None
    action: Optional[str] = None
    agency: Optional[list] = None
    body_html_url: Optional[str] = None
    citation: Optional[str] = None
    document_number: Optional[str] = None
    full_text_xml_url: Optional[str] = None
    html_url: Optional[str] = None
    pdf_url: Optional[str] = None
    publication_date: Optional[str] = None
    signing_date: Optional[str] = None
    title: Optional[str] = None
    topic: Optional[list] = None
    type: Optional[str] = None


@dataclass
class DocumentLoadMatch:
    id: str


@dataclass
class DocumentListMatch:
    abstract: Optional[str] = None
    action: Optional[str] = None
    agency: Optional[list] = None
    body_html_url: Optional[str] = None
    citation: Optional[str] = None
    document_number: Optional[str] = None
    full_text_xml_url: Optional[str] = None
    html_url: Optional[str] = None
    pdf_url: Optional[str] = None
    publication_date: Optional[str] = None
    signing_date: Optional[str] = None
    title: Optional[str] = None
    topic: Optional[list] = None
    type: Optional[str] = None

