# PCFRA (Person-Centred Fire Risk Assessment)

Purpose: capture **functional evacuation capability** and the **decision flags** that trigger a (R)PEEP, without storing medical diagnoses.

## Core principles
- Functional outputs only; no diagnoses or case details.
- Clear separation of **capability** (person), **environment** (setting), and **safeguarding** (escalation).
- **Provenance** array tags each field as self-reported, observed, third-party, etc. (golden thread).

## Regulatory alignment (UK)
- Fire Safety (Residential Evacuation Plans) (England) Regulations 2025 (in force Apr 2026).
- Regulatory Reform (Fire Safety) Order 2005.
- Building Safety Act 2022 (golden thread of safety information).
- Equality Act 2010 (reasonable adjustments).
- Approved Document B (means of escape).
- NFCC Person-Centred Fire Risk Framework.

## Minimal required fields
- person_ref
- assessed_at
- assessment_method
- outcome (relevant_resident, peep_required, rationale)
- AND one of: building_ref OR unit_ref

## ERA alignment
The **capability** node mirrors ERA sections: Mobility, Respiratory, Sensory, Cognitive, Communication, Awareness/Alertness, and Assistance Needs. Two ERA-aligned additions are included:
- walking_endurance
- respiratory_tolerance
Optional daytime complement to night_response:
- alertness_support

## Forward links
PEEP/RPEEP should include `pcfra_ref` and typically consume:
- assist_required, stair_tolerance, mobility_aid, communication/alerting supports, equipment_needed, night_response, behavioural_risks.
