# Typed models for the FederalRegister SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Document(TypedDict, total=False):
    abstract: str
    action: str
    agencies: list
    body_html_url: str
    citation: str
    document_number: str
    full_text_xml_url: str
    html_url: str
    pdf_url: str
    publication_date: str
    signing_date: str
    title: str
    topics: list
    type: str


class DocumentLoadMatch(TypedDict):
    id: str


class DocumentListMatch(TypedDict, total=False):
    abstract: str
    action: str
    agencies: list
    body_html_url: str
    citation: str
    document_number: str
    full_text_xml_url: str
    html_url: str
    pdf_url: str
    publication_date: str
    signing_date: str
    title: str
    topics: list
    type: str
