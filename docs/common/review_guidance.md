# Review Block – Compliance Guidance

**Schema:** `/schemas/common/review.schema.json`  
**Scope:** Reusable lifecycle review record across PCFRA, PEEP, RPEEP, EES.  
**Status:** Supporting block (not a standalone document).  

---

## Purpose

The Review block provides a standardised way to record and track the lifecycle of safety documents within the OpenPEEP Standard. It ensures:

- **Auditability**: Every review decision is captured with date, reviewer, and outcome.  
- **Traceability**: Changes (amendments, supersessions) are linked to replacement documents.  
- **Compliance**: Supports the “golden thread” of safety information required under UK law.  

This block is deliberately **lightweight** and **consent-agnostic**. Consent to create or share documents is separately modelled in `/schemas/common/consent.schema.json`.

---

## Regulatory Alignment

### Fire Safety (England) Regulations 2025 (in force April 2026)  
- Requires **Responsible Persons** in high-rise residential buildings to **review evacuation plans regularly** and keep them up to date.  
- Review block provides the audit trail of these required checks.

### Regulatory Reform (Fire Safety) Order 2005  
- Article 11 requires **effective arrangements for planning, organisation, control, monitoring and review** of preventive and protective measures.  
- The Review block operationalises this “review” requirement in a structured and portable way.

### Building Safety Act 2022 (Golden Thread)  
- Mandates that safety-critical information be **kept, updated, and handed over** throughout a building’s lifecycle.  
- Review entries ensure that evacuation documents remain current and that changes are traceable.

### Equality Act 2010  
- Supports the duty to make **reasonable adjustments** by documenting reviews that confirm or amend evacuation provisions for disabled or vulnerable people.

### Approved Document B (Fire Safety)  
- Guidance requires that **means of escape strategies are reviewed** where building or occupancy changes occur.  
- The Review block records these checks in a consistent, machine-readable way.

### NFCC Person-Centred Fire Risk Framework  
- Emphasises that **risks and needs change over time** (e.g., health, mobility).  
- The Review block provides the standardised mechanism for recording those changes.

### Optional Standards (for robustness)  
- **BS 9991** (residential fire safety) – recommends periodic review of evacuation strategies.  
- **BS 9999** (non-residential fire safety) – risk-based management requires review and update of fire strategies.  
- **BS 7974** (fire engineering principles) – review is part of maintaining design assumptions.  
- **BS EN 81-76** (evacuation lifts) – reviews ensure procedures remain safe for assisted evacuation.

---

## Outcomes Explained

- **confirmed_no_change** → satisfies legal duty to review, with evidence that the existing plan remains suitable and sufficient.  
- **amended** → ensures changed needs are reflected; linked replacement maintains golden thread integrity.  
- **superseded** → ensures obsolete versions are retired cleanly; chain of custody is maintained.  
- **withdrawn** → supports regulatory compliance by evidencing when a plan ceases to apply (e.g., resident moved out).  

---

## Implementation Guidance

- Each OpenPEEP document (PCFRA, PEEP, RPEEP, EES) should maintain a `reviews` array containing this block.  
- **Append-only principle**: historical entries must not be overwritten or deleted.  
- **Reviewer identity** should be sufficient to demonstrate competence (e.g., RP delegate, H&S Manager).  
- **Next due** dates can support proactive scheduling, aligning with NFCC and statutory review requirements.  
- **New document reference** is mandatory for outcomes of `amended` and `superseded` to ensure traceability.  

---

## Data Protection

- Only minimal reviewer identity and contact details are stored.  
- No sensitive personal data of residents is duplicated here.  
- Compliant with **UK GDPR** principles (data minimisation, purpose limitation).  

---

## Summary

The Review block provides a **compliance-aligned, portable, and auditable** method for recording the lifecycle of evacuation-related documents. It fulfils statutory review duties, maintains the golden thread, and ensures equality considerations are sustained through periodic checks.
