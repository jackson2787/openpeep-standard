# Data Dictionary (Core Fields)

## Common: Address
- `uprn` (string): Unique Property Reference Number.
- `thoroughfare`, `town`, `postcode`, `country_code` (GB) – required.
- `internal_location`: `{ building_id, section, level, zone, area, unit_identifier, doorway, notes }`

## Common: Person Profile
- `person_id` (uuid), `name.{given,family}`, optional `year_of_birth`
- `communication_preferences` (array): spoken, BSL, Makaton, SMS, email, visual_alarm, vibrating_pager, tactile_alert
- `impairments_summary[]`: `{category, severity, description}`
- `assistive_devices[]`, `emergency_contacts[]`

## Common: Consent
- `status`: given | refused | withdrawn
- `scope[]`: PCFRA | PEEP | RPEEP | EES | DataProcessing
- `method`: written | verbal | digital | implied
- `actor.{name,role,organisation}`, `recorded_at`, optional `expires_at`

## Common: Review
- `status`: draft | in_review | approved | rejected | superseded
- `version` (string), `created_by`, `created_at`, optional `reviewed_by`, `reviewed_at`, `next_review_due`, `change_notes`, `supersedes[]`

## PCFRA
- `subject` (Person Profile), `location` (Address), `assessment_date`, `assessor`
- `risk_factors[]`: `{category, score(0-3), rationale, mitigations[], actions[]}`
- `total_score`, `risk_rating`: low | medium | high | very_high
- `recommended_review_in_days`, `consent`, `review`

## PEEP
- `person_profile`, `location`, `evacuation_strategy`
- `routes[]`: `{name, path_description, via_structural_elements[], assistance[], equipment[], refuge?, notes}`
- `communications`, `nighttime_considerations`, `training_drills`, `medical_considerations`
- `evacuation_procedure[]` ordered steps
- `references.{pcfra_id, building_statement_ees_id}`, `consent`, `review`

## RPEEP
- `resident_profile`, `residence_location`, `consent`
- `person_ees` (imported def from EES)
- `distribution[]`, `references`, `review`

## EES
- `address`
- `building_statement`: `{strategy, instructions, alarms_info, evacuation_lift, refuge_locations[], muster_point, stay_put_conditions, variations_by_level[]}`
- `person_statement` (optional): plain-language instruction for a named person
- `review`, `metadata`
