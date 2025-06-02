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
| **IoT Integration**| Athom Smart Plug v2 (tasmota), MQTT (RabbitMQ)        |
| **DevOps & Deployment** | Render, Vercel, GitHub,                          |

---

## ** Mobile Application (User Side)**
- **Frontend:** Flutter (Dart)  
- **Backend API:** Node.js (Express.js), MongoDB  
- **IoT Integration:** MQTT Broker, Athom Plug v2,Tasmota Firmware  

### **Key Features for Users**
 **Real-Time Energy Monitoring** – Tracks per-appliance electricity usage  
 **AI-Driven Energy Recommendations** – Users manually request energy-saving insights  
 **News & Alerts** – Users receive updates & maintenance notices from BATELEC I  

---

## ** Web Application (Admin)**
- **Frontend:** React.js, Material UI
- **Backend API:** Node.js (Express.js), MongoDB  

### **Key Features for Admins**
 **User Management** – Verify & manage user registrations  
 **News & Updates Management** – CRUD operations for posting updates  

---

## ** IoT & Smart Meter Integration**
- **Hardware:** Smart Plugs  
- **Protocol:** MQTT, TLS, SSL, Tasmota Firmware  
- **Data Storage:** **MongoDB** (Normal Collection)  

### **How It Works**
 ** Athom Plug v2 ** send **real-time energy consumption data** via **MQTT Broker**.  
 The **backend stores power data** in **MongoDB.**  
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
|--------------|-----------------|
| **Security** | JWT, HTTPS      |
| **Hosting & Deployment** | Render, Vercel |
| **CI/CD** | GitHub Actions for automated builds & testing |

### **Deployment Workflow**
 **Frontend (Mobile & Web)** hosted on **Vercel** (React.js)  
 **Backend (Node.js & MongoDB)** deployed on **Render**  
 **IoT Data stored in MongoDB** (optimized for normal queries)  
 **CI/CD Pipelines via GitHub Actions** for seamless updates  

---

 **EcoTrack Backend Team**
