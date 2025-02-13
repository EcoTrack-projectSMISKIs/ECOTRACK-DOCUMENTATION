# Customer Support System

### Fetch All Support Requests
**Endpoint:** `GET /admin/support`  
**Description:** Retrieves a list of all user support requests.  

#### Response (JSON)
```json
[
  {
    "ticket_id": "SUP-98765",
    "user_id": "12345",
    "issue_type": "Power Outage",
    "description": "There is no power in my area since 9 AM.",
    "status": "pending",
    "submitted_at": "2025-02-14T08:30:00Z"
  }
]
```

### Respond to a Support Request
**Endpoint:** `POST /admin/support/{ticket_id}/respond`  
**Description:** Allows admins to reply to a user’s support request.  

#### Request (JSON)
```json
{
  "response": "We are aware of the power outage and our technicians are working on it."
}
```

#### Response (JSON)
```json
{
  "message": "Support request response sent successfully."
}
```
