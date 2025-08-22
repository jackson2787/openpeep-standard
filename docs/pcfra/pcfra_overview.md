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
The **capability** node mirrors ERA sections: Mobility, Respiratory, Sensory, Cognitive, Communication, Awareness/Alertness, and Assistance Needs. All capability properties are enumerated (no free text):
- walking_endurance: normal_pace | needs_frequent_breaks | limited_distance | cannot_walk
- respiratory_tolerance: normal | mild_breathlessness_on_exertion | frequent_breaks_required | oxygen_support_needed
- mobility_transfer: independent_transfer | stand_pivot_with_support | hoist_or_full_lift_required | unable_to_transfer
- stair_tolerance: stairs_independent | stairs_with_assist | cannot_use_stairs
- mobility_aid: none | stick | frame | assisted_walking | wheelchair_manual | wheelchair_powered
- sensory_hearing: typical | reduced | profound
- hearing_support: none | hearing_aid | visual_alerts_required | vibrating_pager
- sensory_vision: typical | low_vision | blind
- vision_support: none | high_contrast_signage | tactile_guidance | additional_lighting
- cognition_ability: typical | mild_support_needed | significant_support_needed
- cognition_support: none | step_by_step_prompts | carer_guidance_required
- communication_ability: typical | mild_difficulty | severe_difficulty | non_verbal
- communication_support: none | plain_language | BSL | AAC_device | text_only
- night_response: wakes_to_alarm | requires_vibrating_pillow | deep_sleeper_support
- alertness_effects: typical | mildly_affected | significantly_affected
- alertness_support: none | prompts_needed_when_distressed | simplified_instructions_required
- equipment_dependency: none | oxygen_therapy | ventilation_device | powered_bed | other_equipment
- behavioural_risks[]: smoking_in_bed | hoarding_observed | aggressive_towards_staff | non_cooperation_with_safety_guidance | confusion_in_emergency | substances_present | fire_setting_behaviour | other_observed
- assist_required: none | needs_assist_1 | needs_assist_2
- assist_level: none | occasional_support | constant_support
- equipment_needed[]: evac_chair_required | transfer_board | evacuation_sheet | stair_climber | rescue_sledge

## Forward links
PEEP/RPEEP should include `pcfra_ref` and typically consume:
- assist_required, stair_tolerance, mobility_aid, communication/alerting supports, equipment_needed, night_response, behavioural_risks.
