# Address Schema – Data Dictionary & Regulatory Mapping

Compliance tone: This schema provides a minimal, portable postal identity for OpenPEEP documents, aligned to:
- Fire Safety (Residential Evacuation Plans) (England) Regulations 2025 (from Apr 2026)
- Regulatory Reform (Fire Safety) Order 2005
- Building Safety Act 2022 (golden thread)
- Equality Act 2010 (reasonable adjustments)
- Approved Document B (Fire Safety)
- NFCC Person-Centred Fire Risk Framework
- Optional: BS 9991 / BS 9999 / BS 7974 / EN 81-76

## Fields

- organisation_name – Organisation or landlord associated with the address, if applicable.
- building_name – Proper building name (e.g. Churchill House).
- building_number – Street number or range (string; supports international formats).
- sub_building – Sub-division such as flat, unit, or room number (e.g., Flat 12A).
- address_line_1/2/3 – Free-text address lines (street and continuation lines).
- locality – Locality, village, or district.
- town_city – Town or city.
- county – County or region.
- postcode – UK postcode if applicable. Uses a UK-format regex; other formats may be placed here if needed by implementations without strict validation at schema level.
- country_code – ISO 3166-1 alpha-2 (default GB).
- uprn – UK Unique Property Reference Number (optional).
- udprn – Royal Mail Unique Delivery Point Reference Number (optional).
- national_address_id – Generic slot for national/regional IDs (e.g., cadastral IDs).
- building_ref – Stable OpenPEEP reference for the building (string ID only).
- unit_ref – Stable OpenPEEP reference for a specific unit/flat/room (string ID only).

## Regulatory Relevance Mapping

- Golden thread (Building Safety Act 2022): postcode, country_code, uprn, national_address_id, building_ref.
- RPEEP & Equality Act reasonable adjustments: sub_building and unit_ref enable flat/room-level precision.
- Fire Safety Order 2005 & 2025 Residential Evacuation Plans: clear anchoring of PEEPs/EES to a real-world postal location.
- Approved Document B & NFCC PCF Framework: supports unambiguous identification of premises without embedding routing or geometry.

## Boundary Guard (what is intentionally excluded)

- Geometry or mapping: latitude, longitude, coords, geojson, geometry, polyline, map_zoom.
- Routing/modelling: route_id, route_path, stair_core_id, lift_bank_id, refuge_id, muster_point_id, trav_time, flow_rate, width, slope.
- Access/ops: qr_secret, nfc_tag, access_code, token, frs_rr, risk_record, hazard_tags, or any similar operational intelligence.

## Normalisation & Lifecycle Notes

- Accept free-text address lines; do not over-enforce formatting beyond UK postcode regex.
- Prefer UPRN for deduplication when available; otherwise use a stable building_ref assigned by implementations.
- Keep this document independent of any proprietary building modelling or routing constructs.