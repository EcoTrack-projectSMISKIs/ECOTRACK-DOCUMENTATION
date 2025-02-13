# News & Announcements Management

### Fetch All News Posts
**Endpoint:** `GET /admin/news`  
**Description:** Retrieves all posted news updates.  

#### Response (JSON)
```json
[
  {
    "id": "news123",
    "title": "Scheduled Maintenance",
    "content": "There will be maintenance on February 20th.",
    "date_posted": "2025-02-10T08:00:00Z"
  }
]
```


### Create a New News Post
**Endpoint:** `POST /admin/news`  
**Description:** Allows admins to post new announcements.  

#### Request (JSON)
```json
{
  "title": "New Energy-Saving Initiative",
  "content": "BATELEC I is launching a new energy-saving program for all consumers.",
  "posted_by": "Admin User"
}
```
#### Response (JSON)
```json
{
  "message": "News posted successfully."
}

```

### Edit a News Post
**Endpoint:** `PUT /admin/news/{news_id}`  
**Description:** Allows admins to edit an existing news post.  

#### Request (JSON)
```json
{
  "title": "Updated Energy-Saving Initiative",
  "content": "The energy-saving program will be available from March 1st."
}
```
#### Response (JSON)
```json
{
  "message": "News updated successfully."
}
```
