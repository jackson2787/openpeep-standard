# OpenPEEP Standard

OpenPEEP is an open, auditable JSON schema framework for evacuation planning documents:
- PCFRA – Person-Centred Fire Risk Assessment (diagnostic)
- PEEP – Personal Emergency Evacuation Plan
- RPEEP – Residential PEEP (statutory from April 2026)
- EES – Emergency Evacuation Statements (building-level strategy + person-facing plain-language statement)
- Consent – Simple consent model (given/refused/withdrawn)
- Person Profile – Minimal identifiers and impairments summary
- Location/Address – UK address + optional internal building identifiers
- Review – Shared review/version block

## Why
To make evacuation plans portable, auditable, and interoperable across housing providers, care, and Fire & Rescue Services, while aligning with UK regulation and best practice.

## Regulatory Alignment (non-exhaustive)
- Fire Safety (Residential Evacuation Plans) (England) Regulations 2025 (in force April 2026)
- Regulatory Reform (Fire Safety) Order 2005
- Building Safety Act 2022 (Golden Thread)
- Equality Act 2010 (reasonable adjustments)
- Approved Document B (Fire Safety)
- NFCC Person-Centred Fire Risk Framework
- Optional reference standards: BS 9991, BS 9999, BS 7974, BS EN 81-76

This repo provides data formats only. It is not legal advice.

## Scope Boundaries
**Open (this repo):** schemas, examples, docs, validator workflow.  
**Out of scope / Proprietary (DigiPEEP Hub):** building routing logic, spatial modelling, FRS risk records, dashboards, workflows, security models.

## Getting Started
```bash
npm ci
npm run validate
```
This validates the example instances against the schemas using AJV.

## Versioning
Schemas include a `schema_version` (SemVer). Breaking changes increment MAJOR.

## Licences
- Schemas and code: MIT (see LICENSE-MIT)
- Documentation: CC BY 4.0 (see LICENSE-CC-BY-4.0)
