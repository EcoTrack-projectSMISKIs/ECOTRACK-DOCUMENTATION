# AI-Based Energy Recommendations

## Request Energy-Saving Recommendation
**Endpoint:** `POST /ai/recommendations`  
**Description:** Allows the user to request an AI-generated energy-saving suggestion.  
**Notes:**
- Fetches historical power usage from MongoDB.
- Sends a structured prompt to OpenAI API.
- Returns a personalized recommendation based on past usage.
