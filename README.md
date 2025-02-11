# EcoTrack API Documentation

**Version:** 1.0  
**Last Updated:** February 11, 2025  
**Base URL:** `https://api.ecotrack.com/v1`  
**Authentication:** Bearer Token (JWT)  

---

## Overview
The EcoTrack API provides endpoints for real-time electricity consumption monitoring, AI-driven energy-saving recommendations, and user notifications. This API serves as the backend for both the mobile (Flutter) and web (React) applications, enabling seamless data retrieval from IoT smart meters and interaction with users.

---

## **Authentication**
EcoTrack uses **JWT (JSON Web Token)** authentication. Users must **log in** to access most endpoints.

### **User Registration**
- **Endpoint:** `POST /auth/register`
- **Authentication Required:** No  

#### ✅ Request Body (JSON)
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "electricBillReceipt": "base64encodedimage"
}
```
#### Response (JSON)
```json
{
  "message": "User registered successfully",
  "userId": "12345"
}
```
### **User Login**
- **Endpoint:** `POST /auth/login`
- **Authentication Required:** No
#### Request Body (JSON)
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```
#### Response (JSON)
```json
{
  "token": "your_jwt_token",
  "message": "Login successful"
}
```
 **Use the token for authorization in all requests:**
```
Authorization: Bearer <jwt_token>
```
---
## **IoT Smart Meter Data Retrieval**
### **Real-Time Energy Consumption**
- **Endpoint:** `GET /iot/energy-usage`
- **Authentication Required:** Yes
#### Response (JSON)
```json
{
  "user_id": "12345",
  "timestamp": "2025-02-10T15:30:00Z",
  "total_consumption_kwh": 8.5,
  "appliances": [
    { "name": "Air Conditioner", "usage_kwh": 3.2, "status": "ON" },
    { "name": "Refrigerator", "usage_kwh": 1.5, "status": "ON" }
  ]
}
```
### **Energy Consumption History**
- **Endpoint:** `GET /iot/energy-history?period=monthly`
- **Authentication Required:** Yes
- **Query Parameters:**
 - `period=hourly` Returns hourly data for today
 - `period=daily` Returns last 7 days
 - `period=monthly` Returns last 3 months
#### Response (JSON)
```json
{
  "user_id": "12345",
  "history": [
    { "date": "2025-01-10", "consumption_kwh": 18.2 },
    { "date": "2025-01-11", "consumption_kwh": 20.5 }
  ]
}
```
---
## **AI-Powered Energy Recommendations**
- **Endpoint:** `GET /ai/recommendations`
- **Authentication Required:** Yes
#### Response (JSON)
```json
{
  "user_id": "12345",
  "recommendations": [
    "Reduce air conditioner usage by 30 minutes per day to save 5% energy.",
    "Use LED bulbs instead of incandescent to reduce energy costs by 15%.",
    "Unplug appliances when not in use to prevent phantom power consumption."
  ]
}
```
---
## **Notifications (Power Outages & Updates)**
- **Endpoint:** `GET /notifications`
- **Authentication Required:** Yes
#### Response (JSON)
```json
{
  "notifications": [
    { "title": "Scheduled Maintenance", "message": "Power interruption in District 5 from 2PM - 5PM on Feb 12.", "date": "2025-02-10" },
    { "title": "New Feature!", "message": "EcoTrack now offers AI-powered recommendations for energy saving!", "date": "2025-02-09" }
  ]
}
```
---
## **Webhooks (Real-Time Events)**
If you need **real-time alerts**, subscribe to **webhooks**.
### **Webhook Event: Power Alert** ASIS (tobediscussed)
- **Endpoint:** `POST /webhook/power-alert`
- **Authentication Required:** Yes
#### Example Event (JSON)
```json
{
  "event": "power_threshold_exceeded",
  "device_id": "1000abcdef",
  "power": 1000,
  "timestamp": "2025-02-11T10:00:00Z"
}

```
---
## **Real-Time WebSocket API**
- **WebSocket URL:** `wss://api.ecotrack.com/socket`
- **Authentication Required:**
#### Incoming Data (JSON)
```json
{
  "device_id": "1000abcdef",
  "voltage": 120,
  "current": 0.6,
  "power": 72,
  "timestamp": "2025-02-11T10:00:00Z"
}
```
---
## **Error Handling**
| **HTTP Code** | **Meaning** | **Description** |
|--------------|------------|----------------|
| `200 OK` | Success | Request was successful |
| `400 Bad Request` | Invalid Input | Request was malformed |
| `401 Unauthorized` | Auth Error | Token is missing or invalid |
| `403 Forbidden` | Access Denied | You do not have permission |
| `500 Internal Server Error` | Server Issue | Unexpected error |
---

## License
This project, **EcoTrack**, is being developed as a **capstone project** for the **College of Computing and Information Technologies (CCIT) at National University Manila**. The system is designed for use by **Batangas I Electric Cooperative, Inc. (BATELEC I)** to enhance energy efficiency monitoring and provide AI-powered insights to consumers.

**Ownership & Usage:**
- The system is being developed for research and development purposes under the CCIT department.
- BATELEC I will hold rights to system utilization and implementation, subject to further legal agreements.
- Unauthorized distribution, reproduction, or commercial use without approval from the project team and relevant authorities is prohibited.
---
### 2025 EcoTrack Development Team
