# Customer Support

## Submit Support Request
**Endpoint:** `POST /support/request`  
**Description:** Allows users to submit power-related issues (e.g., power outage reports).  

### Request (JSON)
```json
{
  "user_id": "12345",
  "issue_type": "Power Outage",
  "description": "There is no power in my area since 9 AM."
}
```

### Response (JSON)
```json
{
  "message": "Support request submitted successfully.",
  "ticket_id": "SUP-98765",
  "status": "pending"
}
```
