## Full Tech Stack Documentation for EcoTrack

This document outlines the complete tech stack for EcoTrack, divided into **Mobile (User Side), Admin Dashboard, and IoT Integration**.  
Each section includes the **frontend, backend, database, authentication, AI processing, IoT integration, and deployment tools**.

---

## Mobile Application (User Side)

### **Frontend**
- **Framework:** Flutter (Dart)
- **State Management:** Riverpod
- **Authentication:** Firebase Auth
- **Networking:** Dio / HTTP Package
- **UI Components:** Material UI

### **Backend API**
- **Framework:** Node.js (Express.js)
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **IoT Communication:** MQTT

### **Key Features for Mobile Users**
 Real-Time Energy Monitoring – Tracks per-appliance electricity usage  
 AI-Driven Energy Recommendations – Provides actionable energy-saving suggestions  
 News & Alerts – Receives BATELEC I updates, maintenance schedules  
 Support & Issue Reporting – Users can file power outage reports  

---

## Admin Dashboard (Website)

### **Frontend**
- **Framework:** React.js
- **State Management:** Redux
- **UI Components:** Material UI
- **Networking:** Axios

### **Backend API (Admin-Specific Endpoints)**
- **Framework:** Node.js (Express.js)
- **Database:** MongoDB
- **Authentication:** JWT

### **Key Features for Admin Users**
 **User Management** – Admins verify & manage user registrations  
 **News & Updates Management** – CRUD operations for posting updates  
 **Consumption Reports** – View & analyze user electricity trends  
 **System-Wide Notifications** – Send alerts & outage schedules  

---

## 📡 IoT & Smart Meter Integration

- **Hardware:** ESP32, Zigbee Smart Meters
- **Protocol:** MQTT, WebSockets
- **Data Storage:** InfluxDB, AWS IoT Core

---

## DevOps & Security

- **CI/CD:** GitHub Actions (Automated Deployments)
- **Hosting:** AWS / Vercel
- **API Security:** JWT & HTTPS (Encrypted Data Communication)
- **Logging & Monitoring:** ELK Stack (Elasticsearch, Logstash, Kibana)

---

## Summary of the Tech Stack

### **Mobile (User Side)**
- **Frontend:** Flutter (Dart), Riverpod, Firebase Auth
- **Backend:** Node.js (Express), MongoDB, JWT
- **IoT:** MQTT, Smart Meter API

### **Admin Dashboard**
- **Frontend:** React.js, Redux, Material UI
- **Backend:** Node.js (Express), MongoDB, JWT

### **IoT Integration**
- **Hardware:** ESP32, Zigbee Smart Meters
- **Protocol:** MQTT, WebSockets
- **Data Storage:** InfluxDB, AWS IoT Core

### **DevOps & Deployment**
- **Hosting:** AWS, Vercel
- **Security:** JWT, HTTPS
- **Monitoring:** ELK Stack

---

## EcoTrack Development Team
