# OpenPEEP Schema Change Checklist

This checklist must be completed for every schema or documentation change.  
It enforces compliance, consistency, and quality assurance for OpenPEEP as a global standard.

---

## 1. Validation
- [ ] Schema validates against **JSON Schema Draft 2020-12**.
- [ ] AJV (or equivalent validator) run locally and in CI workflow.

## 2. Examples
- [ ] At least three examples provided:
  - Nominal / typical
  - Edge case / unusual
  - Refusal or withdrawal (if relevant)
- [ ] Examples pass validation.

## 3. Documentation
- [ ] **data_dictionary.md** updated (field, type, cardinality, description, purpose).
- [ ] **mapping_to_guidance.md** updated (regulation or standard references).
- [ ] **overview.md** checked for consistency with concept model.
- [ ] **privacy_gdpr.md** updated if new data category introduced.

## 4. Provenance & Versioning
- [ ] `$id` updated and stable under `https://openpeep-standard.org/schemas/...`.
- [ ] Version bump recorded in **CHANGELOG** using Semantic Versioning.
- [ ] Backwards-compatibility assessment documented:
  - [ ] Non-breaking (additive/optional)
  - [ ] Breaking (removal/rename/tightening) → migration path proposed.

## 5. Compliance & Privacy
- [ ] Aligned with regulatory anchors (UK + international portability).
- [ ] No medical diagnoses stored (functional needs only).
- [ ] Data minimisation and purpose limitation principles upheld.
- [ ] Plain-language accessibility checked (terminology clear, jargon avoided).

## 6. Quality & Tone
- [ ] Prose uses **UK English spelling and grammar**.
- [ ] Formal, compliance-aligned tone (suitable for government/public sector).
- [ ] Field descriptions explain **why** the field exists and who uses it.

## 7. Governance & Accessibility
- [ ] **CONTRIBUTING.md**, **GOVERNANCE.md**, or **SECURITY.md** updated if relevant.
- [ ] Accessibility principles considered (WCAG plain-language alignment).
- [ ] Sensitive/personal example data pseudonymised or fictitious.

---

*Completion of this checklist is mandatory before merging schema changes into main.*
