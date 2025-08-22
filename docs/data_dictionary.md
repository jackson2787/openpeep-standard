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

## PCFRA (Personal)
- `person_ref` (string): Person Profile reference (anchor).
- `assessed_at` (date-time): ISO 8601 timestamp of the assessment.
- `assessment_method` (enum): phone | digital_self | in_person.
- `assessor_role` (string): role of recorder (e.g., housing_officer, self).
- `consent_ref` (string): link to Consent record.
- `capability` (object): ERA-aligned, all fields enumerated (no free text):
  - `walking_endurance`: normal_pace | needs_frequent_breaks | limited_distance | cannot_walk
  - `respiratory_tolerance`: normal | mild_breathlessness_on_exertion | frequent_breaks_required | oxygen_support_needed
  - `mobility_transfer`: independent_transfer | stand_pivot_with_support | hoist_or_full_lift_required | unable_to_transfer
  - `stair_tolerance`: stairs_independent | stairs_with_assist | cannot_use_stairs
  - `mobility_aid`: none | stick | frame | assisted_walking | wheelchair_manual | wheelchair_powered
  - `sensory_hearing`: typical | reduced | profound
  - `hearing_support`: none | hearing_aid | visual_alerts_required | vibrating_pager
  - `sensory_vision`: typical | low_vision | blind
  - `vision_support`: none | high_contrast_signage | tactile_guidance | additional_lighting
  - `cognition_ability`: typical | mild_support_needed | significant_support_needed
  - `cognition_support`: none | step_by_step_prompts | carer_guidance_required
  - `communication_ability`: typical | mild_difficulty | severe_difficulty | non_verbal
  - `communication_support`: none | plain_language | BSL | AAC_device | text_only
  - `night_response`: wakes_to_alarm | requires_vibrating_pillow | deep_sleeper_support
  - `alertness_effects`: typical | mildly_affected | significantly_affected
  - `alertness_support`: none | prompts_needed_when_distressed | simplified_instructions_required
  - `equipment_dependency`: none | oxygen_therapy | ventilation_device | powered_bed | other_equipment
  - `behavioural_risks[]`: smoking_in_bed | hoarding_observed | aggressive_towards_staff | non_cooperation_with_safety_guidance | confusion_in_emergency | substances_present | fire_setting_behaviour | other_observed
  - `assist_required`: none | needs_assist_1 | needs_assist_2
  - `assist_level`: none | occasional_support | constant_support
  - `equipment_needed[]`: evac_chair_required | transfer_board | evacuation_sheet | stair_climber | rescue_sledge
- `outcome` (object):
  - `relevant_resident` (boolean)
  - `peep_required` (boolean)
  - `rationale` (string)
- `provenance[]`: itemised source/verification for fields.
- `reviews[]` (Review): lifecycle reviews.

## PEEP
- `person_profile`, `location`, `evacuation_strategy`
- `routes[]`: `{name, path_description, via_structural_elements[], assistance[], equipment[], refuge?, notes}`
- `communications`, `nighttime_considerations`, `training_drills`, `medical_considerations`
- `evacuation_procedure[]` ordered steps
- `references.{pcfra_id, building_statement_ees_id}`, `consent`, `review`

## PCFRA (Environmental)
- `building_ref` or `unit_ref` (string): location anchor.
- `assessed_at`, `assessment_method`, `assessor_role`, `consent_ref`.
- `environment` (object): enumerated observations: cooking_risk, electrical_risk, smoking_risk, hoarding_risk, access_egress, ignition_sources[], pets_risk.
- `safeguarding` (object): agencies involved, immediate danger/actions, referrals.
- `outcome`, `provenance[]`, `reviews[]`, `notes`.

## EES
- `address`
- `building_statement`: `{strategy, instructions, alarms_info, evacuation_lift, refuge_locations[], muster_point, stay_put_conditions, variations_by_level[]}`
- `person_statement` (optional): plain-language instruction for a named person
- `review`, `metadata`
