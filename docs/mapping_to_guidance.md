# Mapping to UK Guidance & Law

## Fire Safety (Residential Evacuation Plans) (England) Regulations 2025
- **RPEEP**: Provides resident-specific plan including consent and a resident-facing EES (`rpeep.person_ees`), supporting statutory requirements for residential buildings from April 2026.
- **EES.building_statement**: Captures the building’s evacuation strategy (Simultaneous/Phased/Stay Put/Partial) and plain-language instructions, aligning with resident information duties.

## Regulatory Reform (Fire Safety) Order 2005
- **PEEP**: Supports Article 14 (emergency routes and exits) and risk mitigation measures; **Review** block evidences Article 11 (fire safety arrangements) for maintenance and review.
- **PCFRA**: Operationalises person-centred risk considerations to inform preventive/protective measures.

## Building Safety Act 2022 (Golden Thread)
- **Review.version/next_review_due/supersedes**: Versioned safety information; **references** between PCFRA/PEEP/RPEEP/EES contribute to the golden thread across lifecycle.

## Equality Act 2010 (Reasonable Adjustments)
- **PEEP.routes.assistance/equipment** and **communications**: Explicit storage of adjustments and aids; **Person Profile.communication_preferences** informs accessible alerts and messaging.

## Approved Document B (Fire Safety)
- **EES.building_statement.strategy**, **refuge_locations**, **evacuation_lift**: Captures key elements referenced in means of escape guidance.

## NFCC Person-Centred Fire Risk Framework
- **PCFRA.risk_factors** categories reflect NFCC common domains (mobility, sensory, cognition, smoking, hoarding, etc.), with scoring, rationale, mitigations, and actions.

## Optional British Standards
- **BS 9991 / BS 9999**: Strategy and management context represented within **EES** and **Review** metadata.
- **BS 7974**: Engineering assumptions can be linked via **references** if needed by implementers.
- **BS EN 81-76**: Evacuation lift attributes recorded under **EES.building_statement.evacuation_lift**.

> Note: OpenPEEP is a data format. Dutyholders remain responsible for compliance and competent application.
