# AgriBot - Smart Agriculture Chatbot 🌾

An intelligent agricultural assistant with soil analysis, crop recommendations, and ChatGPT integration.

## Features ✨

### 1. Soil Analysis 🌱
- **6 Soil Types**: Sandy, Loamy, Clay, Silty, Peaty, Chalky
- **Interactive pH Detection**: Slider from 4.0 to 9.0
- **Detailed Soil Characteristics**: Drainage, water retention, nutrients
- **Smart Crop Recommendations**: Based on soil type and pH

### 2. Crop Recommendation 🌾
- **40+ Global Crops**: From cereals to cash crops
- **pH-Based Matching**: Intelligent scoring algorithm
- **Detailed Crop Info**: Season, duration, regions, optimal conditions
- **Climate & Seasonal Planning**: Kharif, Rabi, Zaid seasons

### 3. Weather Intelligence 🌤️
- Current weather monitoring
- 7-day forecasts
- Risk alerts (floods, droughts, frost)
- Irrigation planning

### 4. Pest Management 🐛
- Disease detection guidance
- Pest identification
- Treatment recommendations
- Prevention tips

### 5. Crop Timeline 📅
- Planting calendar
- Growth stage tracking
- Harvest timing optimization
- Activity reminders

### 6. Market Intelligence 💰
- Current market prices
- Price forecasting
- Demand analysis
- Selling strategies

## Setup Instructions 🚀

### Basic Setup (No API Required)
1. Open `index.html` in your web browser
2. Click any feature card to start chatting
3. All features work without API configuration

### ChatGPT Integration (Optional)

To enable ChatGPT fallback for unanswered questions:

1. **Get OpenAI API Key**:
   - Go to https://platform.openai.com/api-keys
   - Sign up or log in
   - Create a new API key
   - Copy the key (starts with `sk-`)

2. **Configure the Bot**:
   - Open `script.js`
   - Find line 5: `const CHATGPT_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';`
   - Replace `YOUR_OPENAI_API_KEY_HERE` with your actual API key
   - Save the file

3. **Test the Integration**:
   - Open `index.html`
   - Ask a question the bot doesn't know
   - ChatGPT will provide the answer

### Example API Configuration

```javascript
// In script.js (line 5)
const CHATGPT_API_KEY = 'sk-proj-abc123...'; // Your actual key
```

## How to Use 📖

### Soil Analysis Workflow:
1. Click "Soil Analysis" card
2. Select your soil type (Sandy, Loamy, Clay, etc.)
3. Adjust pH slider to your soil's pH level
4. Get instant crop recommendations
5. View fertilizer advice

### Other Features:
1. Click any feature card
2. Use quick action buttons
3. Type questions in the chat
4. Get instant responses

## Technology Stack 💻

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI Integration**: OpenAI ChatGPT API (optional)
- **Design**: Responsive, mobile-friendly
- **Animations**: CSS transitions and keyframes

## Features Highlights 🎯

✅ **No Installation Required** - Just open in browser
✅ **Offline Capable** - Works without API
✅ **40+ Crops Database** - Global coverage
✅ **6 Soil Types** - Comprehensive analysis
✅ **Smart Matching** - pH-based algorithm
✅ **Beautiful UI** - Engaging animations
✅ **Mobile Responsive** - Works on all devices
✅ **ChatGPT Fallback** - For complex questions

## Browser Support 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## API Costs 💵

ChatGPT API usage:
- GPT-3.5-turbo: ~$0.002 per 1K tokens
- Most queries: < $0.01
- Optional feature (bot works without it)

## Privacy & Security 🔒

- No data collection
- API key stored locally
- No server required
- All processing client-side

## Troubleshooting 🔧

### Graphics Not Showing?
- Ensure emojis are supported in your browser
- Try Chrome or Firefox for best compatibility

### ChatGPT Not Working?
- Check API key is correctly configured
- Verify API key is active on OpenAI platform
- Check browser console for errors
- Ensure you have API credits

### Features Not Responding?
- Clear browser cache
- Refresh the page
- Check browser console for errors

## Future Enhancements 🚀

- Image upload for disease detection
- Real-time weather API integration
- Market price API integration
- Multi-language support
- Voice input/output
- Mobile app version

## Credits 👏

- Crop data: Agricultural research databases
- Icons: Unicode emojis
- AI: OpenAI ChatGPT (optional)

## License 📄

Free to use for educational and commercial purposes.

## Support 💬

For questions or issues:
- Check the troubleshooting section
- Review the code comments
- Test with different browsers

---

**Made with ❤️ for farmers worldwide** 🌍
