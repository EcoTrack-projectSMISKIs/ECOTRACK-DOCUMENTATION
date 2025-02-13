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
