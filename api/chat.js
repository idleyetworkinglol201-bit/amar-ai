export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key configured nei server-e' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array pathate hobe' });
  }

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{
              text: "Tumi ekjon sohayok, bondhutbopurno AI sohokari. Byaboharkari je bhashay lekhe, sei bhashatei (bangla ba english) sthabhabikbhabe uttor dao. Songkhipto o spashto uttor dao."
            }]
          },
          generationConfig: {
            maxOutputTokens: 1000
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'API error hoyeche' });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '(kono uttor paoya jayni)';

    return res.status(200).json({ reply: replyText });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server-e kichu ekta bhul hoyeche' });
  }
}
