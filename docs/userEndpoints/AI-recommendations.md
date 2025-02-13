# 3️⃣ AI-Based Energy Recommendations

## 🔹 Request Energy-Saving Recommendation
**Endpoint:** `POST /ai/recommendations`  
**Description:** Allows the user to request an AI-generated energy-saving suggestion.  

### Request (JSON)
```json
{
  "device": "Air Conditioner",
  "daily_usage": 8,
  "avg_power": 1200,
  "peak_hours": "1PM-4PM"
}
```
### Response (JSON)
```json
{
  "recommendation": "Reduce AC usage during peak hours (1PM-4PM) and set the thermostat to 24°C. Consider using a fan instead."
}
```
