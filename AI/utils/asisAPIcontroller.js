const Plug = require('../models/Plug');
const openai = require('../utils/openaiService');

exports.getRecommendationByPlug = async (req, res) => {
  try {
    const plugId = req.params.id;
    const userId = req.user._id;

    const plug = await Plug.findOne({ _id: plugId, user: userId });
    if (!plug) return res.status(404).json({ message: 'Plug not found or not owned by you' });

    const applianceName = plug.applianceName || "your appliance";

    // Find the latest usage entry where Yesterday > 0
    const latestUsage = [...plug.usageHistory]
      .reverse()
      .find(u => u.energy?.Yesterday > 0);

    if (!latestUsage) {
      return res.status(404).json({ message: 'No valid usage history found with non-zero Yesterday data' });
    }


    const yesterdayKwh = latestUsage.energy.Yesterday;
    const date = latestUsage.date.toISOString().split('T')[0];

    //const prompt = `The user used ${yesterdayKwh} kWh yesterday (${date}) on their ${applianceName}. Suggest short, actionable energy-saving tips.`;
    //const prompt = `The appliance is a(n) ${applianceName}. Yesterday, (${date}) it used ${yesterdayKwh} kWh. Give 1 clear energy-saving tip, max 30 words, in friendly tone. Strictly two sentence only. No explanations or lists, and NO Emojis.`;
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
