# Understanding the Base URL in EcoTrack API
**Version:** 1.0
**Last Updated:** February 11, 2025
**Base URL:** `https://api.ecotrack.com/v1`
---
## 1. What is the Base URL?
The **Base URL** is the **root address** for all API endpoints in the **EcoTrack system**.
When making an API call, you append specific **endpoints** to this Base URL.
### Example:
```
Base URL: https://api.ecotrack.com/v1
```
- To **get all devices**:
 `GET https://api.ecotrack.com/v1/devices`
- To **log in a user**:
 `POST https://api.ecotrack.com/v1/auth/login`
- To **fetch real-time power data**:
 `GET https://api.ecotrack.com/v1/devices/{device_id}/power`
---
## 2. How the Base URL Works in a Live Server
You will **deploy** the backend API (Node.js + Express) on a **cloud provider**. The **Base URwill point to this deployed server.
### Example Deployment Environments:
| Environment | Base URL |
|-------------|-------------------------------|
| **Development (Local)** | `http://localhost:5000/v1` |
| **Production (Cloud)** | `https://api.ecotrack.com/v1` |
### How Requests Work:
1. The client (**mobile app, web app, or Postman**) sends a request:
 `GET https://api.ecotrack.com/v1/devices`
2. The **backend server** (Node.js + Express) receives this request.
3. The server **processes the request** (fetching data from MongoDB/PostgreSQL).
4. The server **sends a response** back to the client.
---
## 3. Setting Up the Base URL in Your Code
### Frontend (React.js / Flutter)
Store the **Base URL** in an environment file (`.env`) for flexibility.
#### React.js Example:
```js
const BASE_URL = process.env.REACT_APP_API_URL || "https://api.ecotrack.com/v1";
fetch(`${BASE_URL}/devices`, {
 method: "GET",
 headers: {
 "Authorization": `Bearer ${userToken}`
 }
});
```
#### Flutter (Dart) Example:
```dart
const String BASE_URL = "https://api.ecotrack.com/v1";
Future<void> fetchDevices() async {
 final response = await http.get(
 Uri.parse('$BASE_URL/devices'),
 headers: {
 "Authorization": "Bearer $userToken",
 },
 );
}
```
---
## 4. Deployment Options for EcoTrack API
When deploying your backend, the **Base URL** will change based on the hosting provider:
### Option 1: Deploy on Vercel (Recommended for Fast API Hosting)
1. Push your backend to GitHub.
2. Deploy it on **Vercel** (supports Express.js).
3. Get the Base URL like:
 `https://ecotrack-api.vercel.app/v1`
### Option 2: Deploy on AWS (Scalable, for Large Traffic)
1. Host the API on **AWS EC2 or AWS Lambda**.
2. Set up a domain (e.g., `api.ecotrack.com`).
3. The final Base URL:
 `https://api.ecotrack.com/v1`
### Option 3: Deploy on DigitalOcean (Self-Managed VPS)
1. Set up a **Node.js Express server** on **DigitalOcean Droplet**.
2. Set up an SSL certificate with **Nginx**.
3. The Base URL:
 `https://api.ecotrack.com/v1`
---
## 5. Summary
- The **Base URL** is the **starting point** for all API requests.
- It **changes based on the deployment environment**:
 - **Development:** `http://localhost:5000/v1`
 - **Production:** `https://api.ecotrack.com/v1`
- Frontend apps (**React.js, Flutter**) should **store the Base URL in `.env` files**.
- The API should be **deployed on Vercel, AWS, or DigitalOcean** for live usage.


by gpt4
