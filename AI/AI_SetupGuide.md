# OpenAI API Integration Guide for EcoTrack

## 1. Generate Your OpenAI API Key

- Go to: https://platform.openai.com/account/api-keys
- Click "Create new secret key"
- Copy and paste the key into your `.env` file:

```
OPENAI_API_KEY=your-openai-key-here
```

---

## 2. Install Required Packages

Run the following command in your Node.js backend project:

```bash
npm install openai dotenv
```

---

## 3. Create the OpenAI Service

**Path:** `utils/openaiService.js`

```js
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
```

---

## 4. Controller: Generate Recommendations

**Path:** `controllers/asisAPIcontroller.js`

```js
const openai = require('../utils/openaiService');

exports.getRecommendationByPlug = async (req, res) => {
  try {
    const plugId = req.params.id;
    const userId = req.user._id;

    const plug = await Plug.findOne({ _id: plugId, user: userId });
    if (!plug) return res.status(404).json({ message: 'Plug not found or not owned by you' });

    const applianceName = plug.applianceName || "your appliance";

    const latestUsage = [...plug.usageHistory]
      .reverse()
      .find(u => u.energy?.Yesterday > 0);

    if (!latestUsage) {
      return res.status(404).json({ message: 'No valid usage history found with non-zero Yesterday data' });
    }

    const yesterdayKwh = latestUsage.energy.Yesterday;
    const date = latestUsage.date.toISOString().split('T')[0];

    const prompt = `The appliance is a(n) ${applianceName}. Yesterday, it used ${yesterdayKwh} kWh. Give 1 clear usage optimization tip in a friendly tone. Strictly 2 sentences only. Max 30 words total. No lists, electric bill, or mentions of cost savings. No emojis.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are an expert energy-saving assistant named EcoAdvisor. You give concise, friendly, and practical tips to help users reduce their energy consumption at home.',
        },
        {
          role: 'user',
          content: prompt,
        }
      ],
    });

    const reply = completion.choices[0].message.content;

    res.json({
      message: `Recommendation based on ${date}`,
      yesterdayUsage: yesterdayKwh,
      recommendation: reply
    });

  } catch (err) {
    console.error(" OpenAI Error:", err.message);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
};
```

---

## 5. Add the Route

**Path:** `routes/asisRoutes.js`

```js
const express = require('express');
const router = express.Router();
const asisAPIcontroller = require('../controllers/asisAPIcontroller');
const authenticateUser = require('../middleware/authenticateUser');

// POST /api/asis/:id/recommend
router.post('/:id/recommend', authenticateUser, asisAPIcontroller.getRecommendationByPlug);

module.exports = router;
```

---

## 6. Example Request

```
POST /api/asis/plugId/recommend
Authorization: Bearer <JWT>
```

No request body is required. The backend automatically fetches the latest plug usage and returns a short AI-generated energy-saving tip.
