# Person Profile – Regulatory Alignment

## Field mapping

| Field                     | Regulatory / Guidance Relevance |
|---------------------------|---------------------------------|
| `person_ref`              | **Building Safety Act 2022** – golden thread of safety information; enables consistent linkage across fire safety documents. |
| `name` / `alias`          | **Equality Act 2010** – respect for chosen identity; **Fire Safety Order 2005** – identification of “relevant persons.” |
| `dob` / `age_band`        | **NFCC Person-Centred Fire Risk Framework** – age awareness in risk profiling; GDPR minimisation supported by using age band instead of DOB. |
| `preferred_language`      | **Equality Act 2010** – communication adjustments (language support). |
| `contact`                 | **FSO 2005** – duty to consult and inform relevant persons; supports record-keeping. |
| `communication_preferences` | **Equality Act 2010** – reasonable adjustments (accessible formats); **FSO 2005** – communication duties; **BS 9999 / BS 7974** (good practice on accessible information delivery). |

## Scope notes
- **NFCC Person-Centred Fire Risk Framework**: this schema reflects only the *identity* and *communication* elements. Risk and impairment questions are handled in PCFRA.  
- **Fire Safety (Residential Evacuation Plans) (England) Regulations 2025**: person profile provides the identity layer for Residential PEEPs (RPEEPs).  
- **Building Safety Act 2022**: supports the “golden thread” principle — consistent identifiers across safety information.  
- **Approved Document B**: by enabling clear identification, this schema supports means of escape planning but does not itself specify routes.  

## Placement in repo  
- `schemas/common/person_profile.schema.json` → the machine-readable rules.  
- `examples/person_profile/*.json` → working sample data.  
- `docs/person_profile.md` → human-readable explainer.  
- `docs/person_profile_mapping.md` → regulatory alignment & field mapping.  
