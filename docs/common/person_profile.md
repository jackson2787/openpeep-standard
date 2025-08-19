# Person Profile Schema

## Purpose  
The **Person Profile** schema defines the **identity anchor** in the OpenPEEP Standard.  
It captures only the *minimum identifying information* required to reference a person in fire safety records (PCFRA, PEEP, RPEEP, EES).  

This schema:  
- Creates a **golden-thread link** to the individual across documents.  
- Stands alone as a valid record, even if no downstream assessment is created (e.g. when consent is refused).  
- Is proportionate under UK GDPR (data minimisation).  
- Provides hooks for lawful communication preferences under the Equality Act 2010.  

This schema is **not** for:  
- Recording impairments, evacuation needs, or medical data (these belong in PCFRA/PEEP).

### Example use cases  
- **Hotel guest:** only an alias + system reference.  
- **Resident:** full name, DOB or age band, contact, and communication preferences.  

### Required field  
- `person_ref` — unique reference identifier (anchor for the golden thread).  

### Optional fields  
- `name` — legal or chosen name.  
- `alias` — nickname or anonymised label (short-term use).  
- `dob` — date of birth (ISO 8601).  
- `age_band` — alternative to DOB (child, adult, older_adult).  
- `preferred_language` — two-letter ISO 639-1 code (e.g. `en`).  
- `contact` — phone/email if available.  
- `communication_preferences` — how to contact the person (channels, formats, accessibility preferences).  
