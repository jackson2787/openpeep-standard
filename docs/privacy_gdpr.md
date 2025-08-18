# Privacy & UK GDPR Guidance

OpenPEEP defines data structures that may contain personal data and special category data (e.g., health/impairments). Implementers must undertake DPIA and apply appropriate safeguards.

## Principles
- **Lawful basis**: public task/legitimate interests; obtain **Consent** where appropriate for plan creation and sharing (consent schema provided).
- **Data minimisation**: Person Profile is intentionally minimal; avoid unnecessary medical detail.
- **Purpose limitation**: Use solely for evacuation planning and safety operations.
- **Storage limitation**: Use **Review.next_review_due** and organisational retention schedules; archive/suppress old versions.
- **Integrity & confidentiality**: Apply encryption in transit/at rest; role-based access; audit trails.
- **Transparency**: Provide resident-friendly EES and privacy notices.
- **Data subject rights**: Enable access/rectification; document refusals in **Consent.status=refused**.

## Sharing
- **RPEEP.distribution** records recipients and method. Share on a need-to-know basis (e.g., FRS during incident).

## International Transfers
- Ensure appropriate safeguards when hosting or sub-processing outside the UK.

*This document is guidance for data handling when using OpenPEEP; it is not legal advice.*
