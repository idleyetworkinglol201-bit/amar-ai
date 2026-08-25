# আলাপ — নিজের AI চ্যাটবট

## ডিপ্লয় করার ধাপ

### ১. GitHub-এ আপলোড করো
- github.com এ একটা নতুন repository বানাও (নাম: `amar-ai` বা যেকোনো নাম)
- এই ফোল্ডারের সব ফাইল (`index.html`, `api/chat.js`, `vercel.json`) সেই repository তে আপলোড করো
  - GitHub এর "Add file" → "Upload files" দিয়ে ব্রাউজার থেকেই করা যায়, কোড লাগবে না

### ২. Vercel-এ ডিপ্লয় করো
- vercel.com এ যাও, GitHub দিয়ে সাইন-ইন করো
- "Add New Project" চাপো
- তোমার `amar-ai` repository সিলেক্ট করো, "Import" চাপো
- **Deploy চাপার আগে**, "Environment Variables" সেকশনে গিয়ে যোগ করো:
  - Name: `GEMINI_API_KEY`
  - Value: (তোমার Gemini API key যেটা Google AI Studio থেকে নিয়েছিলে)
- তারপর "Deploy" চাপো

### ৩. ব্যবহার শুরু করো
- কয়েক মিনিটের মধ্যে একটা লিংক পাবে (যেমন `amar-ai.vercel.app`)
- সেই লিংকে ঢুকলেই তোমার চ্যাটবট লাইভ!

## গুরুত্বপূর্ণ
- API key কখনো `index.html` বা কোনো ফ্রন্টএন্ড ফাইলে বসাবে না — শুধু Vercel-এর Environment Variables এ রাখো
- Free tier এর একটা rate limit আছে (মিনিটে/দিনে নির্দিষ্ট সংখ্যক request) — বেশি ব্যবহার হলে সাময়িক বন্ধ হয়ে যেতে পারে
