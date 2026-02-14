// AgriBot Configuration File
// Copy this file to config.js and add your API keys

const CONFIG = {
    // OpenAI ChatGPT API Configuration (Optional)
    // Get your API key from: https://platform.openai.com/api-keys
    CHATGPT_API_KEY: 'YOUR_OPENAI_API_KEY_HERE',
    
    // ChatGPT Model Selection
    // Options: 'gpt-3.5-turbo' (cheaper), 'gpt-4' (more accurate)
    CHATGPT_MODEL: 'gpt-3.5-turbo',
    
    // Maximum tokens for ChatGPT responses
    // Higher = longer responses but more expensive
    MAX_TOKENS: 500,
    
    // Temperature (0.0 - 1.0)
    // Lower = more focused, Higher = more creative
    TEMPERATURE: 0.7,
    
    // Enable/Disable ChatGPT Fallback
    ENABLE_CHATGPT: true,
    
    // Weather API Configuration (Future Enhancement)
    WEATHER_API_KEY: '',
    WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5',
    
    // Market Data API (Future Enhancement)
    MARKET_API_KEY: '',
    MARKET_API_URL: '',
    
    // Application Settings
    APP_NAME: 'AgriBot',
    APP_VERSION: '1.0.0',
    DEFAULT_LANGUAGE: 'en',
    
    // Feature Flags
    FEATURES: {
        SOIL_ANALYSIS: true,
        CROP_RECOMMENDATION: true,
        WEATHER_INTELLIGENCE: true,
        PEST_MANAGEMENT: true,
        CROP_TIMELINE: true,
        MARKET_INTELLIGENCE: true
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
