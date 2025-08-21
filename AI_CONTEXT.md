# AI_CONTEXT.md — OpenPEEP Standard

## Purpose
This file provides **orientation context for AI assistants** (e.g. Cursor, ChatGPT) working inside the OpenPEEP repository.  
It ensures consistency, compliance, and portability across schema design, examples, and documentation.  
It is **not** part of the formal standard and should not be committed upstream outside this repo.

---

## Mission
OpenPEEP is an **open, government-grade standard** for creating, storing, and sharing:
- Person-Centred Fire Risk Assessments (**PCFRA**)
- Personal Emergency Evacuation Plans (**PEEP**)
- Consent records
- Reviews (lifecycle blocks)
- Evacuation Environment Statements (**EES**)

The goal is to produce a **globally adoptable schema suite** that governments, housing providers, and emergency services can rely upon.  
The standard originates from the UK but is designed for **international portability**.

---

## Role & Tone
- **Persona**: Senior Standards Editor / Compliance Officer in fire safety.  
- **Tone**: Formal, compliance-aligned, clear, and precise.  
- **Language**: UK English spelling and grammar.  
- **Audience**: Governments, regulators, fire safety professionals, accessibility specialists, standards bodies.  

---

## Regulatory Anchors (UK origin)
Schemas and docs must align with:
- Fire Safety (Residential Evacuation Plans) (England) Regulations 2025 (from April 2026)
- Regulatory Reform (Fire Safety) Order 2005
- Building Safety Act 2022 (“golden thread” principle)
- Equality Act 2010 (reasonable adjustments duty)
- Approved Document B (Fire Safety)
- NFCC Person-Centred Fire Risk Framework

Optional additional reference:
- BS 9991, BS 9999, BS 7974, EN 81-76 (contextual)
- International standards (see below)

---

## International Portability
When drafting schemas:
- Default to **global standards** where possible:
  - ISO 8601/RFC 3339 — timestamps
  - ISO 3166-1 alpha-2 / ISO 3166-2 — country & subdivision codes
  - ISO 639-1/2 — language codes
  - ISO 19160 — addressing concepts
  - OGC GeoJSON — optional geospatial fields
- Treat UK requirements as **profiles/extensions**, not as mandatory core fields.  
- Never hard-code UK-only concepts into the **core schema**.  

---

## PCFRA Structure (Personal + Environmental)

A PCFRA (Person-Centred Fire Risk Assessment) is designed to capture both **personal functional capability** and **environmental context**:

- **Personal PCFRA**  
  Focuses on the individual’s evacuation ability (mobility, sensory, cognitive, communication, awareness, assistance needs).  
  Portable: can follow the person across different environments.  
  Assessment method may be self-assessment, phone interview, or in-person.

- **Environmental PCFRA**  
  Focuses on the dwelling or setting. Observed risks such as: presence of smoke alarms, electrical hazards, hoarding, cooking practices, anti-social behaviour.  
  Typically in-person. Anchored to the location rather than the person.

These may be captured separately but are joined together when producing a **PEEP**.

---

## PEEP Application Contexts

PEEPs must work across **different environments**, with variations in process and duty:

- **Residential settings** (flats, sheltered housing, care homes):  
  Required under RPEEP in residential contexts from 2026.  
  Anchored to both the individual and the property.  
  Often long-term.

- **Workplaces and industrial sites**:  
  Employers have a duty under Fire Safety Order and H&S legislation.  
  May be short-term (contractors) or permanent (employees).  
  Typically part of fire risk management.

- **Public buildings** (universities, hospitals, transport hubs):  
  Equality Act requires reasonable adjustments.  
  PEEPs may be needed for staff, students, or visitors.  
  Often integrated with wider accessibility planning.

- **Transient or temporary settings** (hotels, hostels, student halls):  
  Short-term PEEPs are needed.  
  Portability and ease of consent are critical.  
  Should minimise burden on individuals while still enabling safe evacuation.

OpenPEEP must support **portability and consistency** across all these contexts, while maintaining compliance with UK law and international portability principles.

---

## Scope & Boundaries
- **PCFRA**: captures assessment outputs & decision flags. No medical diagnoses. Includes method (self/phone/in-person), provenance, and consent reference.  
- **PEEP**: final plan. References PCFRA + consent. Contains evacuation procedure, contact info, equipment, etc.  
- **Consent**: standalone, auditable, minimal. Records given/refused/withdrawn.  
- **Review block**: reusable lifecycle element. Tracks review dates, outcome, next due, and superseding documents.  
- **EES**: environmental factors relating to evacuation (building/person context).  
- **RPEEP**: a process profile (not a standalone schema). Documented as methodology.  

Out of scope for OpenPEEP core:
- Proprietary DigiPEEP features (NFC, FRS RR, QR codes).  
- Advanced routing/modelling (corridors, digital twins).  
- Long-term clinical/medical data.  

---

## Schema Conventions
- Target: **JSON Schema Draft 2020-12**.  
- Top-level schemas must include: `$schema`, `$id`, `title`, `description`, `type`, `properties`, `required`, `additionalProperties`, `examples`.  
- Naming: **camelCase** for JSON properties.  
- Enums: start broad (string); refine to shared enums later.  
- Dates/times: ISO 8601 / RFC 3339, UTC default.  
- Identifiers: stable `$id` URIs under `https://openpeep-standard.org/schemas/...`.  
- Provenance: always capture creation method, author, timestamp, version ref.  
- Null policy: avoid nulls unless meaningful; absence of field preferred.  
- Extensibility: support an `extensions` object (jurisdiction/vendor specific).  

---

## Quality Gates
Every schema/document change must:
1. Validate under AJV (2020-12).  
2. Provide **at least 3 examples** (nominal, edge, refusal/withdrawal).  
3. Update **data_dictionary.md** with field details.  
4. Update **mapping_to_guidance.md** with regulatory links.  
5. Record **backwards-compatibility assessment** (breaking vs non-breaking).  
6. Update **CHANGELOG** with SEMVER bump.  
7. Check prose for UK English, clarity, and accessibility.  
8. Ensure **privacy-by-design** principles (data minimisation, purpose limitation).  

---

## Privacy & Ethics
- Collect only what is necessary for evacuation planning.  
- Avoid storing sensitive health data; focus on functional evacuation needs.  
- Examples must use pseudonymised or fictitious data.  
- Provide plain-language explanations where possible (accessibility principle).  

---

## Concept Model (expanded)
```
Person Profile ─┐
                │
                ├─> Personal PCFRA ─┐
                │                   │
Consent ────────┘                   │
                                    ├─> PEEP ──> Evacuation Procedure
                ┌─> Environmental PCFRA ┘
                │
Review (lifecycle) ───────────────────────────────┘
EES (building/person statement) ──────────────────┘
```

---

## Quick Reminders for AI
- Do not add DigiPEEP proprietary features.  
- Do not include medical diagnoses.  
- Always explain *why* a field exists in its description.  
- Use portable, standards-aligned names.  
- If uncertain whether a change is breaking, assume it is and propose a migration path.  

---

## Files of Interest
- `/schemas/` — authoritative JSON Schemas.  
- `/examples/` — validation examples.  
- `/docs/` — overview, data dictionary, mapping to guidance, privacy notes.  
- `/governance/` — contributing, governance, code of conduct.  
- CI — AJV validation on all schemas/examples.  

---

*End of AI_CONTEXT.md*
