# ChatGPT API Setup Guide 🤖

## Why Add ChatGPT?

The bot works perfectly without ChatGPT, but adding it provides:
- ✅ Answers to complex agricultural questions
- ✅ Natural conversation flow
- ✅ Fallback for unknown queries
- ✅ More detailed explanations

**Cost:** ~$0.002 per 1K tokens (very cheap!)

## Step-by-Step Setup

### 1. Get OpenAI API Key

**A. Create OpenAI Account**
1. Go to https://platform.openai.com/signup
2. Sign up with email or Google
3. Verify your email address

**B. Add Payment Method**
1. Go to https://platform.openai.com/account/billing
2. Click "Add payment method"
3. Add credit card (minimum $5)
4. Set usage limits (recommended: $10/month)

**C. Generate API Key**
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Name it: "AgriBot"
4. Copy the key (starts with `sk-`)
5. ⚠️ Save it securely - you can't see it again!

### 2. Configure AgriBot

**Option A: Direct Edit (Easiest)**

1. Open `script.js` in text editor
2. Find line 5:
   ```javascript
   const CHATGPT_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
   ```
3. Replace with your key:
   ```javascript
   const CHATGPT_API_KEY = 'sk-proj-abc123...'; // Your actual key
   ```
4. Save the file

**Option B: Using Config File**

1. Copy `config.example.js` to `config.js`
2. Edit `config.js`:
   ```javascript
   CHATGPT_API_KEY: 'sk-proj-abc123...', // Your key here
   ```
3. In `script.js`, import config:
   ```javascript
   // Add at top of script.js
   const CHATGPT_API_KEY = CONFIG.CHATGPT_API_KEY;
   ```

### 3. Test the Integration

1. Open `index.html` in browser
2. Click any feature card
3. Ask a complex question:
   ```
   "What are the best organic fertilizers for acidic soil?"
   ```
4. Bot should show "Consulting AI knowledge base..."
5. ChatGPT response appears

### 4. Verify It's Working

**Success indicators:**
- ✅ "Consulting AI knowledge base..." appears
- ✅ Detailed AI response shows up
- ✅ No error messages

**If not working:**
- ❌ Check API key is correct
- ❌ Verify you have API credits
- ❌ Check browser console (F12) for errors
- ❌ Ensure internet connection

## API Key Security

### ⚠️ Important Security Notes

**DO:**
- ✅ Keep API key private
- ✅ Set usage limits on OpenAI dashboard
- ✅ Monitor usage regularly
- ✅ Regenerate if compromised

**DON'T:**
- ❌ Share API key publicly
- ❌ Commit to GitHub with key
- ❌ Use in production without backend
- ❌ Give unlimited access

### For Production Use

If deploying publicly, use a backend:

```javascript
// Instead of direct API call, use your backend
const response = await fetch('YOUR_BACKEND_URL/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage })
});
```

## Cost Management

### Typical Usage Costs

**Per conversation:**
- Simple question: ~100 tokens = $0.0002
- Detailed answer: ~500 tokens = $0.001
- Average: $0.0005 per interaction

**Monthly estimates:**
- 100 questions: ~$0.05
- 1,000 questions: ~$0.50
- 10,000 questions: ~$5.00

### Set Usage Limits

1. Go to https://platform.openai.com/account/limits
2. Set "Hard limit": $10/month (recommended)
3. Set "Soft limit": $5/month
4. Enable email notifications

### Monitor Usage

1. Check dashboard: https://platform.openai.com/usage
2. View daily/monthly costs
3. Track token usage
4. Download usage reports

## Advanced Configuration

### Change Model

In `script.js`, modify:

```javascript
// Cheaper, faster (recommended)
model: 'gpt-3.5-turbo'

// More accurate, expensive
model: 'gpt-4'

// Latest version
model: 'gpt-3.5-turbo-0125'
```

### Adjust Response Length

```javascript
max_tokens: 500  // Default
max_tokens: 300  // Shorter, cheaper
max_tokens: 1000 // Longer, more expensive
```

### Adjust Creativity

```javascript
temperature: 0.7  // Default (balanced)
temperature: 0.3  // More focused
temperature: 1.0  // More creative
```

### Add System Context

```javascript
messages: [
    { 
        role: "system", 
        content: "You are an expert in organic farming with 20 years experience..."
    },
    ...conversationHistory
]
```

## Troubleshooting

### Error: "Invalid API Key"
- Check key is copied correctly
- Ensure no extra spaces
- Verify key is active on OpenAI platform

### Error: "Insufficient Credits"
- Add payment method
- Add credits to account
- Check billing page

### Error: "Rate Limit Exceeded"
- You're making too many requests
- Wait a few minutes
- Upgrade to paid tier

### Error: "Network Error"
- Check internet connection
- Verify OpenAI API is accessible
- Check browser console for details

### No Response
- Open browser console (F12)
- Look for error messages
- Check API key configuration
- Verify fetch request is sent

## Alternative: Use Without API

The bot works great without ChatGPT!

**Built-in capabilities:**
- ✅ 40+ crop database
- ✅ 6 soil types
- ✅ pH analysis
- ✅ Crop recommendations
- ✅ Feature-specific responses
- ✅ Quick action buttons

**When to add ChatGPT:**
- Need complex question answers
- Want natural conversations
- Require detailed explanations
- Have budget for API costs

## FAQ

**Q: Is API key required?**
A: No! Bot works without it. ChatGPT is optional enhancement.

**Q: How much does it cost?**
A: ~$0.0005 per question. Very affordable.

**Q: Is my data private?**
A: OpenAI processes requests but doesn't train on API data (as of 2024).

**Q: Can I use free tier?**
A: OpenAI requires payment method, but costs are minimal.

**Q: What if I exceed limits?**
A: Requests stop. Set hard limits to prevent overcharges.

**Q: Can I switch models?**
A: Yes! Change `model` parameter in script.js.

## Support Resources

- OpenAI Documentation: https://platform.openai.com/docs
- API Reference: https://platform.openai.com/docs/api-reference
- Community Forum: https://community.openai.com
- Status Page: https://status.openai.com

## Summary

1. ✅ Get API key from OpenAI
2. ✅ Add to script.js (line 5)
3. ✅ Test with complex question
4. ✅ Set usage limits
5. ✅ Monitor costs

**Total setup time: 5-10 minutes**

---

**Optional but powerful enhancement!** 🚀

The bot is fully functional without ChatGPT, but adding it makes conversations even better!
