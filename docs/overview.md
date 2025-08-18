# OpenPEEP Overview

OpenPEEP defines interoperable JSON schemas for key evacuation documents:
- **PCFRA**: diagnostic assessment of person-centred fire risk
- **PEEP**: individual plan for assisted/adjusted evacuation
- **RPEEP**: statutory residential plan (from April 2026), including consent and a resident-facing EES
- **EES**: building strategy (akin to a GEEP) plus optional person statement for plain-language instructions
- **Consent, Person Profile, Address, Review**: foundational components

## Design Principles
- **Compliance-ready**: written to align with UK fire safety law and NFCC frameworks.
- **Minimal but complete**: essential fields for operational use; optional extensions encouraged via tooling.
- **Traceable**: shared Review block enables approvals, versioning, and audit.
- **Portable**: JSON, documented, validated in CI.

## Out of Scope
- Building modelling, evacuation routing/timings, FRS risk records, dashboards, and app workflows remain proprietary to implementations (e.g., DigiPEEP Hub). OpenPEEP only standardises the data format.
