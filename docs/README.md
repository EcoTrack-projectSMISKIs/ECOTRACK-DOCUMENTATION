# EcoTrack API Documentation

Welcome to the **EcoTrack API Documentation** — a full-stack energy monitoring platform using IoT, AI, and mobile/web interfaces.

## Project Overview

EcoTrack enables:
- **Real-time energy tracking** via smart plugs (Tasmota + MQTT)
- **AI-generated power-saving recommendations** (OpenAI GPT-4o)
- **Flutter mobile app** for consumers
- **React-based admin dashboard** for BATELEC staff

All APIs are organized and modularized per function:

---

## Mobile API

**Path:** `/Mobile-API-Documentation`  
Handles all user-side actions from the Flutter app.

### Core Endpoints:
- Register / Login with OTP
- Verify / Reset password via email
- Update profile
- View plug list
- Fetch individual plug data

[See Mobile API Documentation »](./Mobile-API-Documentation)

---

## Web Admin API

📂 **Path:** `/Web-API-Documentation`  
Used by BATELEC admins and superadmins on the web dashboard.

### Core Endpoints:
- Admin login / profile
- Admin management (create, archive, update)
- User management
- News CRUD and archiving

[See Web API Documentation »](./Web-API-Documentation)

---

## Plug API

**Path:** `/Plug-API-Documentation`  
Controls smart plugs, power state, energy logs, and auto-AI tips.

### Core Endpoints:
- Turn plug ON/OFF
- Fetch status and logs
- Chart visualization (week, month, etc.)
- Auto-generate OpenAI tips
- Delete / rename / update plug
- Monthly energy usage stats

[See Plug API Documentation »](./Plug-API-Documentation)

---

## Tech Stack

**Path:** `/Technology Stack`  
Describes the architecture, platforms, and flow diagram used by EcoTrack.

### Highlights:
- Flutter (Riverpod) mobile app
- React + Node.js + MongoDB web stack
- MQTT for IoT comms
- OpenAI GPT-4o for AI tips
- Hosted on Render + Vercel

[See Technology Stack Documentation »](./Technology%20Stack)

---

## Repository Structure

```
/Mobile-API-Documentation
/Web-API-Documentation
/Plug-API-Documentation
/Technology Stack
README.md (this file)
```

---

Need help setting up your local dev environment or testing endpoints?  
You can request setup instructions or Postman collections anytime.
