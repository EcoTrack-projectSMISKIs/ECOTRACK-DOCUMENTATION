# EcoTrack - Technology Stack Documentation

## Overview
EcoTrack is a **real-time energy monitoring system** that integrates **IoT smart meters, OpenAI AI recommendations, and a mobile app (Flutter)**.  
The system captures power consumption data, provides **AI-driven energy-saving insights**, and enables **users to track and optimize their electricity usage**.

---

## ** Tech Stack Summary**
| **Component**       | **Technology Stack**                                 |
|--------------------|-------------------------------------------------------|
| **Mobile App**     | Flutter (Dart), Riverpod, Firebase Auth               |
| **Admin Dashboard** | React.js, Redux, Material UI                         |
| **Backend**        | Node.js (Express.js), MongoDB, JWT                    |
| **AI Processing**  | OpenAI GPT-4 API (For AI Recommendations)             |
| **IoT Integration**| Sonoff S31 Smart Plugs, eWeLink API, MQTT, WebSockets |
| **DevOps & Deployment** | AWS, Vercel, HTTPS, GitHub Actions, ELK Stack    |

---

## ** Mobile Application (User Side)**
- **Frontend:** Flutter (Dart), Riverpod, Firebase Auth  
- **Backend API:** Node.js (Express.js), MongoDB  
- **IoT Integration:** MQTT Broker, eWeLink API  

### **Key Features for Users**
 **Real-Time Energy Monitoring** – Tracks per-appliance electricity usage  
 **AI-Driven Energy Recommendations** – Users manually request energy-saving insights  
 **News & Alerts** – Users receive updates & maintenance notices from BATELEC I  
 **Support & Issue Reporting** – Users can report power outages and request assistance  

---

## ** Web Application (Admin)**
- **Frontend:** React.js, Redux, Material UI  
- **Backend API:** Node.js (Express.js), MongoDB  

### **Key Features for Admins**
 **User Management** – Verify & manage user registrations  
 **News & Updates Management** – CRUD operations for posting updates  
 **Customer Support Requests** – View & respond to user inquiries  

---

## ** IoT & Smart Meter Integration**
- **Hardware:** Sonoff S31 Smart Plugs  
- **Protocol:** MQTT, WebSockets, eWeLink API  
- **Data Storage:** **MongoDB** (Time-Series Collection)  

### **How It Works**
 **Sonoff S31 smart plugs** send **real-time energy consumption data** via **eWeLink API**.  
 The **backend stores power data** in **MongoDB** as **time-series records**.  
 Users can **monitor energy usage** via the **Flutter mobile app**.  
 Users can **request AI-powered energy recommendations** manually.  

---

## ** AI Integration (Energy-Saving Insights)**
- **AI Model:** OpenAI GPT-4 API  
- **Processing:** Node.js Backend formats energy usage into prompts and sends them to OpenAI  
- **Response Time:** Instant AI-generated **energy efficiency recommendations**  

### **How It Works**
 **User requests an energy-saving tip in the mobile app**  
 **Backend fetches historical power data from MongoDB**  
 **Sends structured request to OpenAI API**  
 **AI returns personalized recommendations for reducing electricity consumption**  

---

## ** DevOps, Security & Deployment**
| **Category**  | **Technology** |
|--------------|----------------|
| **Security** | JWT, HTTPS, OAuth 2.0 |
| **Hosting & Deployment** | AWS, Vercel, DigitalOcean |
| **Monitoring** | ELK Stack |
| **CI/CD** | GitHub Actions for automated builds & testing |

### **Deployment Workflow**
 **Frontend (Mobile & Web)** hosted on **Vercel** (React.js)  
 **Backend (Node.js & MongoDB)** deployed on **AWS**  
 **IoT Data stored in MongoDB** (optimized for time-series queries)  
 **CI/CD Pipelines via GitHub Actions** for seamless updates  

---

 **Developed by the EcoTrack Team (2025)**
