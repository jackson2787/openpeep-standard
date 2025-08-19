# Review Schema (Common Block)

**File:** `/schemas/common/review.schema.json`  
**Type:** Reusable block (not a standalone document)

The **Review schema** provides a lightweight, reusable structure for recording lifecycle reviews of OpenPEEP documents such as:

- **PCFRA** (Person-Centred Fire Risk Assessment)  
- **PEEP** (Personal Emergency Evacuation Plan)  
- **RPEEP** (Residential PEEP)  
- **EES** (Emergency Evacuation Statement)

It captures the essential review metadata without duplicating consent logic (which is handled in the separate [Consent schema](../consent.schema.json)).

---

## Purpose

- Provide a consistent way to track reviews across document types.  
- Maintain compliance with the **Regulatory Reform (Fire Safety) Order 2005**, **Building Safety Act 2022** (golden thread), and **Fire Safety (England) Regulations 2025** (effective April 2026).  
- Ensure records are portable and auditable.  
- Avoid bloating the parent document with unnecessary duplication.  

---

## Properties

| Field              | Type        | Description |
|--------------------|------------|-------------|
| `reviewed_at`      | string (date-time) | When the review decision was recorded. UTC recommended. |
| `reviewed_by`      | object      | Reviewer identity and role at the time of review (minimal but auditable). |
| ├─ `name`          | string      | Reviewer’s full name (required). |
| ├─ `role`          | string      | Function/role (e.g. Responsible Person delegate, H&S Manager). |
| ├─ `organisation`  | string      | Organisation represented. |
| ├─ `contact`       | object      | Optional contact info (email, phone). |
| └─ `reviewer_id`   | string      | Optional system identifier. |
| `outcome`          | enum        | One of: `confirmed_no_change`, `amended`, `superseded`, `withdrawn`. |
| `summary`          | string      | Short rationale for the review (≤2000 chars). |
| `next_due`         | string (date) | Next scheduled review date, if set. |
| `new_document_ref` | object      | Reference to a new/superseding document (required for `amended` or `superseded`). |
| `attachments`      | array       | Optional supporting artefacts (URIs, hashes, filenames). |

---

## Outcomes

- **confirmed_no_change** — Review completed; no action required.  
- **amended** — Document updated; a new version issued (requires `new_document_ref`).  
- **superseded** — Fully replaced by another document (requires `new_document_ref`).  
- **withdrawn** — Document no longer in force (e.g., resident left, obsolete plan).  

---

## Usage in Other Schemas

Embed inside PCFRA/PEEP/RPEEP/EES schemas as an **array of reviews**:

```json
{
  "properties": {
    "reviews": {
      "type": "array",
      "items": { "$ref": "../common/review.schema.json" },
      "description": "Lifecycle review history (append-only, most recent last)."
    }
  }
}
```

- Each parent document maintains its own append-only review log.  
- Consent decisions are referenced separately via the **Consent schema**.  

---

## Example Files

- `/examples/review/confirmed_no_change.json`  
- `/examples/review/amended.json`  

Further examples (superseded, withdrawn) can be added to illustrate full lifecycle.  
