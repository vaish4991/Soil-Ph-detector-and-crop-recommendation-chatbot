// Global crop database with pH requirements
const globalCropsDatabase = {
    // Cereals & Grains
    rice: { name: "Rice", icon: "🌾", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Kharif", duration: "120-150 days", region: "Asia, Americas" },
    wheat: { name: "Wheat", icon: "🌾", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Rabi", duration: "120-130 days", region: "Global" },
    corn: { name: "Corn/Maize", icon: "🌽", phMin: 5.8, phMax: 7.0, optimal: 6.5, season: "Kharif", duration: "90-120 days", region: "Americas, Asia" },
    barley: { name: "Barley", icon: "🌾", phMin: 6.0, phMax: 7.5, optimal: 6.8, season: "Rabi", duration: "90-120 days", region: "Europe, Asia" },
    oats: { name: "Oats", icon: "🌾", phMin: 5.5, phMax: 7.0, optimal: 6.0, season: "Rabi", duration: "90-110 days", region: "Europe, Americas" },
    
    // Vegetables
    tomato: { name: "Tomato", icon: "🍅", phMin: 6.0, phMax: 6.8, optimal: 6.5, season: "Year-round", duration: "60-85 days", region: "Global" },
    potato: { name: "Potato", icon: "🥔", phMin: 5.0, phMax: 6.0, optimal: 5.5, season: "Rabi", duration: "90-120 days", region: "Global" },
    onion: { name: "Onion", icon: "🧅", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Rabi", duration: "100-120 days", region: "Global" },
    carrot: { name: "Carrot", icon: "🥕", phMin: 5.5, phMax: 7.0, optimal: 6.0, season: "Rabi", duration: "70-80 days", region: "Global" },
    cabbage: { name: "Cabbage", icon: "🥬", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Rabi", duration: "90-120 days", region: "Global" },
    lettuce: { name: "Lettuce", icon: "🥬", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Year-round", duration: "45-55 days", region: "Global" },
    spinach: { name: "Spinach", icon: "🥬", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Rabi", duration: "40-50 days", region: "Global" },
    cucumber: { name: "Cucumber", icon: "🥒", phMin: 5.5, phMax: 7.0, optimal: 6.5, season: "Summer", duration: "50-70 days", region: "Global" },
    pepper: { name: "Bell Pepper", icon: "🫑", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Summer", duration: "60-90 days", region: "Global" },
    eggplant: { name: "Eggplant", icon: "🍆", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Summer", duration: "100-120 days", region: "Asia, Mediterranean" },
    
    // Legumes
    soybean: { name: "Soybean", icon: "🫘", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Kharif", duration: "90-150 days", region: "Americas, Asia" },
    peanut: { name: "Peanut/Groundnut", icon: "🥜", phMin: 5.9, phMax: 6.3, optimal: 6.0, season: "Kharif", duration: "120-150 days", region: "Asia, Africa, Americas" },
    chickpea: { name: "Chickpea", icon: "🫘", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Rabi", duration: "100-120 days", region: "India, Middle East" },
    lentil: { name: "Lentil", icon: "🫘", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Rabi", duration: "95-110 days", region: "India, Middle East" },
    
    // Fruits
    strawberry: { name: "Strawberry", icon: "🍓", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Year-round", duration: "60-90 days", region: "Global" },
    watermelon: { name: "Watermelon", icon: "🍉", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Summer", duration: "80-100 days", region: "Global" },
    banana: { name: "Banana", icon: "🍌", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Year-round", duration: "9-12 months", region: "Tropical" },
    apple: { name: "Apple", icon: "🍎", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Perennial", duration: "3-5 years", region: "Temperate" },
    grapes: { name: "Grapes", icon: "🍇", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Perennial", duration: "2-3 years", region: "Mediterranean, Americas" },
    
    // Cash Crops
    cotton: { name: "Cotton", icon: "☁️", phMin: 5.5, phMax: 7.0, optimal: 6.0, season: "Kharif", duration: "150-180 days", region: "India, USA, China" },
    sugarcane: { name: "Sugarcane", icon: "🎋", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Year-round", duration: "12-18 months", region: "Tropical, Subtropical" },
    tobacco: { name: "Tobacco", icon: "🌿", phMin: 5.5, phMax: 7.5, optimal: 6.0, season: "Kharif", duration: "90-120 days", region: "Americas, Asia" },
    coffee: { name: "Coffee", icon: "☕", phMin: 6.0, phMax: 6.5, optimal: 6.2, season: "Perennial", duration: "3-4 years", region: "Tropical" },
    tea: { name: "Tea", icon: "🍵", phMin: 4.5, phMax: 5.5, optimal: 5.0, season: "Perennial", duration: "3-5 years", region: "Asia, Africa" },
    
    // Herbs & Spices
    basil: { name: "Basil", icon: "🌿", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Summer", duration: "60-90 days", region: "Global" },
    mint: { name: "Mint", icon: "🌿", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Year-round", duration: "90 days", region: "Global" },
    turmeric: { name: "Turmeric", icon: "🟡", phMin: 5.5, phMax: 7.5, optimal: 6.5, season: "Kharif", duration: "7-9 months", region: "India, Southeast Asia" },
    ginger: { name: "Ginger", icon: "🫚", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Kharif", duration: "8-10 months", region: "Asia" },
    
    // Root Crops
    sweetpotato: { name: "Sweet Potato", icon: "🍠", phMin: 5.5, phMax: 6.5, optimal: 6.0, season: "Kharif", duration: "90-120 days", region: "Global" },
    cassava: { name: "Cassava", icon: "🥔", phMin: 5.5, phMax: 7.0, optimal: 6.0, season: "Year-round", duration: "8-12 months", region: "Tropical" },
    beetroot: { name: "Beetroot", icon: "🫐", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Rabi", duration: "55-70 days", region: "Global" },
    radish: { name: "Radish", icon: "🔴", phMin: 6.0, phMax: 7.0, optimal: 6.5, season: "Year-round", duration: "25-30 days", region: "Global" },
    
    // Oil Seeds
    sunflower: { name: "Sunflower", icon: "🌻", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Kharif/Rabi", duration: "90-100 days", region: "Global" },
    mustard: { name: "Mustard", icon: "🟡", phMin: 6.0, phMax: 7.5, optimal: 6.5, season: "Rabi", duration: "90-110 days", region: "India, Europe" },
    canola: { name: "Canola", icon: "🌼", phMin: 5.5, phMax: 7.0, optimal: 6.5, season: "Rabi", duration: "90-120 days", region: "Canada, Europe" }
};

// Current state
let currentFeature = null;
let currentPH = 6.5;
let currentSoilType = null;
let conversationHistory = [];

// ChatGPT API Configuration
const CHATGPT_API_KEY = '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'; // Replace with your actual API key
const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';

// DOM elements
const mainDashboard = document.getElementById('mainDashboard');
const chatModal = document.getElementById('chatModal');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const closeChat = document.getElementById('closeChat');
const quickActions = document.getElementById('quickActions');
const chatTitle = document.getElementById('chatTitle');
const chatIcon = document.getElementById('chatIcon');
const featureCards = document.querySelectorAll('.feature-card');

// Soil type database with characteristics
const soilTypes = {
    sandy: {
        name: "Sandy Soil",
        icon: "🏖️",
        phRange: "5.5-7.0",
        typicalPH: 6.0,
        drainage: "Excellent",
        waterRetention: "Poor",
        nutrients: "Low",
        description: "Light, gritty texture. Drains quickly but needs frequent watering and fertilization."
    },
    loamy: {
        name: "Loamy Soil",
        icon: "🌾",
        phRange: "6.0-7.5",
        typicalPH: 6.5,
        drainage: "Good",
        waterRetention: "Good",
        nutrients: "High",
        description: "Perfect balance of sand, silt, and clay. Ideal for most crops."
    },
    clay: {
        name: "Clay Soil",
        icon: "🧱",
        phRange: "6.5-8.0",
        typicalPH: 7.0,
        drainage: "Poor",
        waterRetention: "Excellent",
        nutrients: "High",
        description: "Heavy, sticky texture. Retains water well but can become waterlogged."
    },
    silty: {
        name: "Silty Soil",
        icon: "💧",
        phRange: "6.0-7.5",
        typicalPH: 6.8,
        drainage: "Moderate",
        waterRetention: "Good",
        nutrients: "Moderate",
        description: "Smooth, slippery texture. Fertile and retains moisture well."
    },
    peaty: {
        name: "Peaty Soil",
        icon: "🌿",
        phRange: "4.0-5.5",
        typicalPH: 5.0,
        drainage: "Good",
        waterRetention: "Excellent",
        nutrients: "High",
        description: "Dark, spongy texture. Acidic and rich in organic matter."
    },
    chalky: {
        name: "Chalky Soil",
        icon: "⚪",
        phRange: "7.5-8.5",
        typicalPH: 8.0,
        drainage: "Good",
        waterRetention: "Poor",
        nutrients: "Low",
        description: "Stony, alkaline soil. Contains calcium carbonate."
    }
};

// Feature configurations
const featureConfigs = {
    soil: {
        title: "Soil Analysis Bot",
        icon: "🌱",
        color: "#27ae60",
        welcome: "Hello! I'm your Soil Analysis Assistant. 🌱\n\nI'll help you analyze your soil and recommend the best crops from around the world!\n\nFirst, let's identify your soil type."
    },
    crop: {
        title: "Crop Recommendation Bot",
        icon: "🌾",
        color: "#f39c12",
        welcome: "Hello! I'm your Crop Recommendation Assistant. 🌾\n\nI can suggest the best crops based on climate, season, and soil conditions!\n\nWhat would you like to know?"
    },
    weather: {
        title: "Weather Intelligence Bot",
        icon: "🌤️",
        color: "#3498db",
        welcome: "Hello! I'm your Weather Intelligence Assistant. 🌤️\n\nI provide weather insights for smart farming decisions!\n\nHow can I help you today?"
    },
    pest: {
        title: "Pest Management Bot",
        icon: "🦟",
        color: "#e74c3c",
        welcome: "Hello! I'm your Pest Management Assistant. 🦟\n\nI help identify pests, diseases, and provide treatment solutions!\n\nWhat's your concern?"
    },
    schedule: {
        title: "Crop Timeline Bot",
        icon: "⏰",
        color: "#9b59b6",
        welcome: "Hello! I'm your Crop Timeline Assistant. ⏰\n\nI help you plan optimal planting and harvest schedules!\n\nWhich crop are you planning?"
    },
    market: {
        title: "Market Intelligence Bot",
        icon: "💰",
        color: "#16a085",
        welcome: "Hello! I'm your Market Intelligence Assistant. 💰\n\nI provide market insights to maximize your profits!\n\nWhat would you like to know?"
    }
};

// Open chat modal
function openChat(feature) {
    currentFeature = feature;
    const config = featureConfigs[feature];
    
    chatTitle.textContent = config.title;
    chatIcon.textContent = config.icon;
    document.querySelector('.chat-header').style.background = `linear-gradient(135deg, ${config.color}, ${adjustColor(config.color, -20)})`;
    
    chatMessages.innerHTML = '';
    quickActions.innerHTML = '';
    
    chatModal.classList.add('active');
    
    conversationHistory = [
        { role: "system", content: `You are an expert agricultural assistant specializing in ${config.title}. Provide detailed, practical advice for farmers.` }
    ];
    
    setTimeout(() => {
        addMessage(config.welcome, false);
        
        if (feature === 'soil') {
            setTimeout(() => showSoilTypeSelection(), 800);
        } else {
            setTimeout(() => showFeatureOptions(feature), 800);
        }
    }, 300);
}

// Close chat modal
closeChat.addEventListener('click', () => {
    chatModal.classList.remove('active');
    currentFeature = null;
});

// Feature card click handlers
featureCards.forEach(card => {
    card.addEventListener('click', () => {
        const feature = card.dataset.feature;
        const color = card.dataset.color;
        card.style.setProperty('--card-color', color);
        openChat(feature);
    });
});

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? '👤' : featureConfigs[currentFeature].icon;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (typeof content === 'string') {
        const paragraphs = content.split('\n\n');
        paragraphs.forEach(para => {
            const p = document.createElement('p');
            p.innerHTML = para.replace(/\n/g, '<br>');
            contentDiv.appendChild(p);
        });
    } else {
        contentDiv.appendChild(content);
    }
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Show soil type selection
function showSoilTypeSelection() {
    const soilTypeContainer = document.createElement('div');
    soilTypeContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 15px 0;';
    
    Object.entries(soilTypes).forEach(([key, soil]) => {
        const card = document.createElement('div');
        card.className = 'soil-type-card';
        card.innerHTML = `
            <div style="font-size: 3em; margin-bottom: 10px;">${soil.icon}</div>
            <div style="font-weight: 600; color: #2c3e50; margin-bottom: 5px;">${soil.name}</div>
            <div style="font-size: 0.85em; color: #7f8c8d;">pH: ${soil.phRange}</div>
        `;
        card.onclick = () => selectSoilType(key, soil);
        soilTypeContainer.appendChild(card);
    });
    
    addMessage(soilTypeContainer, false);
}

// Select soil type
function selectSoilType(type, soilData) {
    currentSoilType = type;
    currentPH = soilData.typicalPH;
    
    addMessage(`I selected ${soilData.name}`, true);
    
    setTimeout(() => {
        const analysis = `Great choice! ${soilData.icon} ${soilData.name}\n\n📊 Soil Characteristics:\n• pH Range: ${soilData.phRange}\n• Drainage: ${soilData.drainage}\n• Water Retention: ${soilData.waterRetention}\n• Nutrient Level: ${soilData.nutrients}\n\n${soilData.description}\n\nNow let's detect the exact pH level of your soil.`;
        addMessage(analysis, false);
        setTimeout(() => showPHSlider(), 1000);
    }, 500);
}

// Show pH slider
function showPHSlider() {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'ph-slider-container';
    sliderContainer.innerHTML = `
        <div class="ph-slider-label">
            <span>Adjust Soil pH Level:</span>
            <span class="ph-value">${currentPH.toFixed(1)}</span>
        </div>
        <input type="range" min="4.0" max="9.0" step="0.1" value="${currentPH}" class="ph-slider" id="phSlider">
        <div class="ph-scale">
            <span>4.0 (Acidic)</span>
            <span>6.5 (Neutral)</span>
            <span>9.0 (Alkaline)</span>
        </div>
    `;
    
    addMessage(sliderContainer, false);
    
    const slider = document.getElementById('phSlider');
    const phValue = document.querySelector('.ph-value');
    
    slider.addEventListener('input', (e) => {
        currentPH = parseFloat(e.target.value);
        phValue.textContent = currentPH.toFixed(1);
        phValue.style.color = getPHColor(currentPH);
    });
    
    slider.addEventListener('change', () => {
        setTimeout(() => {
            addMessage(`Great! I've detected your soil pH is ${currentPH.toFixed(1)}`, false);
            setTimeout(() => analyzePHAndRecommendCrops(), 1000);
        }, 500);
    });
}

// Get pH color
function getPHColor(ph) {
    if (ph < 5.5) return '#e74c3c';
    if (ph < 6.0) return '#f39c12';
    if (ph < 7.5) return '#2ecc71';
    if (ph < 8.0) return '#3498db';
    return '#9b59b6';
}

// Analyze pH and recommend crops
function analyzePHAndRecommendCrops() {
    const phCategory = currentPH < 5.5 ? 'strongly acidic' : 
                       currentPH < 6.5 ? 'slightly acidic' :
                       currentPH < 7.5 ? 'neutral' : 'alkaline';
    
    const soilInfo = currentSoilType ? soilTypes[currentSoilType].name : 'your soil';
    
    addMessage(`🔬 Complete Soil Analysis!\n\n• Soil Type: ${soilInfo}\n• pH Level: ${currentPH.toFixed(1)} (${phCategory})\n\nAnalyzing global crop database for best matches...`, false);
    
    setTimeout(() => {
        const suitableCrops = findSuitableCrops(currentPH);
        displayCropRecommendations(suitableCrops);
    }, 1500);
}

// Find suitable crops based on pH
function findSuitableCrops(ph) {
    const suitable = [];
    
    for (const [key, crop] of Object.entries(globalCropsDatabase)) {
        if (ph >= crop.phMin && ph <= crop.phMax) {
            const score = 100 - Math.abs(ph - crop.optimal) * 20;
            suitable.push({ ...crop, key, score });
        }
    }
    
    return suitable.sort((a, b) => b.score - a.score).slice(0, 10);
}

// Display crop recommendations
function displayCropRecommendations(crops) {
    const message = `✅ Found ${crops.length} suitable crops for your soil!\n\nHere are the top recommendations from around the world:`;
    addMessage(message, false);
    
    setTimeout(() => {
        crops.forEach((crop, index) => {
            setTimeout(() => {
                const cropCard = createCropCard(crop);
                addMessage(cropCard, false);
            }, index * 300);
        });
        
        setTimeout(() => {
            showQuickActions([
                'Change soil type',
                'Adjust pH level',
                'Show all crops',
                'Get fertilizer advice',
                'Check another feature'
            ]);
        }, crops.length * 300 + 500);
    }, 800);
}

// Create crop card
function createCropCard(crop) {
    const card = document.createElement('div');
    card.className = 'crop-card';
    card.innerHTML = `
        <div class="crop-card-header">
            <span class="crop-name">${crop.name}</span>
            <span class="crop-icon">${crop.icon}</span>
        </div>
        <div class="crop-details">
            <div class="crop-detail-item">
                <strong>pH Range:</strong> ${crop.phMin} - ${crop.phMax}
            </div>
            <div class="crop-detail-item">
                <strong>Optimal pH:</strong> ${crop.optimal}
            </div>
            <div class="crop-detail-item">
                <strong>Season:</strong> ${crop.season}
            </div>
            <div class="crop-detail-item">
                <strong>Duration:</strong> ${crop.duration}
            </div>
            <div class="crop-detail-item" style="grid-column: 1 / -1;">
                <strong>Region:</strong> ${crop.region}
            </div>
            <div class="crop-detail-item" style="grid-column: 1 / -1;">
                <strong>Match Score:</strong> <span style="color: #2ecc71; font-weight: 600;">${crop.score.toFixed(0)}%</span>
            </div>
        </div>
    `;
    return card;
}

// Show quick actions
function showQuickActions(actions) {
    quickActions.innerHTML = '';
    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = 'quick-btn';
        btn.textContent = action;
        btn.onclick = () => handleQuickAction(action);
        quickActions.appendChild(btn);
    });
}

// Handle quick action
function handleQuickAction(action) {
    addMessage(action, true);
    
    setTimeout(() => {
        if (action === 'Adjust pH level' || action === 'Change soil type') {
            addMessage("Let's analyze your soil again!", false);
            setTimeout(() => showSoilTypeSelection(), 500);
        } else if (action === 'Show all crops') {
            const allCrops = Object.values(globalCropsDatabase).slice(0, 15);
            displayCropRecommendations(allCrops.map(c => ({ ...c, score: 85 })));
        } else if (action === 'Get fertilizer advice') {
            provideFertilizerAdvice();
        } else if (action === 'Check another feature') {
            chatModal.classList.remove('active');
        } else {
            handleFeatureSpecificAction(action);
        }
    }, 500);
}

// Provide fertilizer advice
function provideFertilizerAdvice() {
    let advice = '';
    if (currentPH < 5.5) {
        advice = "🌿 Your soil is acidic. Recommendations:\n\n• Add lime (calcium carbonate) to raise pH\n• Use wood ash for gradual pH increase\n• Apply dolomitic limestone for calcium & magnesium\n• Avoid ammonium-based fertilizers";
    } else if (currentPH < 6.5) {
        advice = "🌿 Your soil is slightly acidic - ideal for most crops!\n\n• Use balanced NPK fertilizers (10-10-10)\n• Add compost for organic matter\n• Consider sulfur if you need to lower pH\n• Maintain with regular soil testing";
    } else if (currentPH < 7.5) {
        advice = "🌿 Your soil is neutral - perfect!\n\n• Use standard NPK fertilizers\n• Add organic compost regularly\n• Maintain pH with balanced amendments\n• Most crops will thrive here";
    } else {
        advice = "🌿 Your soil is alkaline. Recommendations:\n\n• Add sulfur to lower pH\n• Use acidifying fertilizers (ammonium sulfate)\n• Add organic matter like peat moss\n• Consider iron supplements for plants";
    }
    
    addMessage(advice, false);
}

// Handle feature-specific actions
function handleFeatureSpecificAction(action) {
    const responses = {
        // Crop recommendations
        'Climate-based matching': "🌍 Climate-Based Crop Matching\n\nI can recommend crops based on:\n• Temperature range (tropical, temperate, cold)\n• Rainfall patterns (high, moderate, low)\n• Humidity levels\n• Frost dates\n\nPlease tell me your region or climate type!",
        'Seasonal planning': "📅 Seasonal Crop Planning\n\n🌧️ Kharif (Monsoon): Rice, Cotton, Soybean, Corn\n❄️ Rabi (Winter): Wheat, Barley, Mustard, Chickpea\n☀️ Zaid (Summer): Watermelon, Cucumber, Muskmelon\n\nWhich season are you planning for?",
        'Yield prediction': "📊 Yield Prediction System\n\nI can predict yields based on:\n• Soil quality & pH\n• Weather patterns\n• Crop variety\n• Farming practices\n\nExpected improvement: 15-30% with optimized planning!\n\nWhich crop would you like to analyze?",
        'Crop rotation': "🔄 Crop Rotation Planning\n\nBenefits:\n• Improves soil health\n• Reduces pests & diseases\n• Increases yields\n\nRecommended rotations:\n• Legumes → Cereals → Root crops\n• Nitrogen fixers → Heavy feeders\n\nWhat crops are you currently growing?",
        
        // Weather
        'Current weather': "🌤️ Weather Monitoring\n\nTo provide accurate weather data, I need your location.\n\nI can show:\n• Temperature & humidity\n• Rainfall probability\n• Wind speed\n• UV index\n• Farming conditions\n\nPlease share your city or region!",
        '7-day forecast': "📅 7-Day Weather Forecast\n\nI'll provide:\n• Daily temperature highs/lows\n• Rainfall predictions\n• Best days for farming activities\n• Storm warnings\n\nShare your location for accurate forecasts!",
        'Risk alerts': "⚠️ Weather Risk Alerts\n\nI monitor:\n• Heavy rainfall/floods\n• Drought conditions\n• Frost warnings\n• Heatwaves\n• Strong winds\n\nAlerts sent 24-48 hours in advance!\n\nWhat's your location?",
        'Irrigation planning': "💧 Smart Irrigation Planning\n\nOptimize water usage by 30%!\n\nI calculate:\n• Daily water requirements\n• Best irrigation times\n• Rainfall-adjusted schedules\n• Soil moisture needs\n\nWhich crop are you irrigating?",
        
        // Pest management
        'Disease detection': "🔍 Disease Detection System\n\nI can identify:\n• Fungal diseases (blight, rust, mildew)\n• Bacterial infections\n• Viral diseases\n• Nutrient deficiencies\n\n90%+ accuracy!\n\nDescribe the symptoms you're seeing, or upload a photo description!",
        'Pest identification': "🐛 Pest Identification\n\nCommon pests I can identify:\n• Aphids & whiteflies\n• Caterpillars & borers\n• Beetles & weevils\n• Mites & thrips\n• Locusts & grasshoppers\n\nDescribe the pest or damage you're seeing!",
        'Treatment guide': "💊 Treatment Recommendations\n\nI provide:\n• Organic solutions (neem, garlic spray)\n• Chemical pesticides (safe options)\n• Biological control methods\n• Application timing & dosage\n\nAll recommendations follow safety guidelines!\n\nWhat pest/disease are you treating?",
        'Prevention tips': "🛡️ Disease Prevention Guide\n\nBest practices:\n• Crop rotation (3-year cycle)\n• Proper plant spacing\n• Regular monitoring\n• Resistant varieties\n• Clean farming tools\n• Remove infected plants\n• Balanced fertilization\n\nImplement these to prevent 80% of issues!",
        
        // Schedule
        'Planting calendar': "📅 Planting Calendar\n\nOptimal planting times by season:\n\n🌧️ Kharif (June-July):\nRice, Cotton, Soybean, Corn, Peanut\n\n❄️ Rabi (Oct-Nov):\nWheat, Barley, Mustard, Chickpea, Lentil\n\n☀️ Zaid (Mar-Apr):\nWatermelon, Cucumber, Vegetables\n\nWhich crop are you planning?",
        'Growth tracking': "📈 Crop Growth Tracking\n\nI monitor:\n• Germination (7-14 days)\n• Vegetative stage\n• Flowering period\n• Fruit development\n• Maturity indicators\n\nGet notifications for each stage!\n\nWhich crop are you tracking?",
        'Harvest timing': "⏰ Optimal Harvest Timing\n\nI determine best harvest time by:\n• Maturity indicators\n• Weather conditions\n• Market demand\n• Storage planning\n\nHarvest at peak for maximum quality & price!\n\nWhich crop are you harvesting?",
        'Activity reminders': "🔔 Farming Activity Reminders\n\nAutomated alerts for:\n• Fertilizer application\n• Pesticide spraying\n• Irrigation schedule\n• Weeding & pruning\n• Harvest dates\n\nNever miss critical activities!\n\nSet up for which crop?",
        
        // Market
        'Current prices': "💰 Current Market Prices\n\nI provide real-time rates for:\n• Local mandi prices\n• Wholesale markets\n• Retail prices\n• Regional comparisons\n\nKnow the best place to sell!\n\nWhich crop prices do you need?",
        'Price forecasting': "📊 Price Forecasting\n\nAI-powered predictions:\n• 30-day price trends\n• Seasonal patterns\n• Supply-demand analysis\n• Festival impacts\n\nPlan harvest for maximum profit!\n\nWhich crop are you interested in?",
        'Demand analysis': "📈 Market Demand Analysis\n\nI analyze:\n• High-demand crops\n• Export opportunities\n• Processing industry needs\n• Consumer trends\n• Regional preferences\n\nGrow what sells best!\n\nWhich market are you targeting?",
        'Selling strategies': "💡 Smart Selling Strategies\n\nMaximize profits:\n• Direct-to-consumer (20% more)\n• Cooperative marketing\n• Contract farming\n• Value addition (processing)\n• Online platforms\n• Bulk vs. retail timing\n\nIncrease income by 20-25%!\n\nWhat's your current selling method?"
    };
    
    if (responses[action]) {
        addMessage(responses[action], false);
    } else {
        addMessage("Let me help you with that!", false);
    }
}

// Show feature options
function showFeatureOptions(feature) {
    const options = {
        crop: ['Climate-based matching', 'Seasonal planning', 'Yield prediction', 'Crop rotation'],
        weather: ['Current weather', '7-day forecast', 'Risk alerts', 'Irrigation planning'],
        pest: ['Disease detection', 'Pest identification', 'Treatment guide', 'Prevention tips'],
        schedule: ['Planting calendar', 'Growth tracking', 'Harvest timing', 'Activity reminders'],
        market: ['Current prices', 'Price forecasting', 'Demand analysis', 'Selling strategies']
    };
    
    if (options[feature]) {
        showQuickActions(options[feature]);
    }
}

// Adjust color brightness
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

// Handle send button
async function handleSend() {
    const message = userInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    userInput.value = '';
    
    conversationHistory.push({ role: "user", content: message });
    
    // Try to generate local response first
    const localResponse = generateResponse(message.toLowerCase());
    
    if (localResponse) {
        setTimeout(() => {
            addMessage(localResponse, false);
            conversationHistory.push({ role: "assistant", content: localResponse });
        }, 500);
    } else {
        // Fallback to ChatGPT API
        setTimeout(() => {
            addMessage("🤔 Let me think about that...", false);
            fetchChatGPTResponse(message);
        }, 500);
    }
}

// Generate local response with comprehensive knowledge
function generateResponse(message) {
    const msg = message.toLowerCase();
    
    // Weather-related queries
    if (msg.includes('weather') || msg.includes('rain') || msg.includes('temperature') || 
        msg.includes('climate') || msg.includes('forecast')) {
        return handleWeatherQuery(msg);
    }
    
    // Pest and disease queries
    if (msg.includes('pest') || msg.includes('disease') || msg.includes('insect') || 
        msg.includes('bug') || msg.includes('fungus') || msg.includes('blight') ||
        msg.includes('aphid') || msg.includes('caterpillar') || msg.includes('wilt') ||
        msg.includes('mildew') || msg.includes('rot') || msg.includes('virus')) {
        return handlePestQuery(msg);
    }
    
    // Market and pricing queries
    if (msg.includes('price') || msg.includes('market') || msg.includes('sell') ||
        msg.includes('profit') || msg.includes('income') || msg.includes('money') ||
        msg.includes('buyer') || msg.includes('demand') || msg.includes('supply')) {
        return handleMarketQuery(msg);
    }
    
    // Crop timeline and management
    if (msg.includes('when') || msg.includes('time') || msg.includes('stage') ||
        msg.includes('harvest') || msg.includes('plant') || msg.includes('sow') ||
        msg.includes('grow') || msg.includes('duration') || msg.includes('days')) {
        return handleTimelineQuery(msg);
    }
    
    // Irrigation queries
    if (msg.includes('water') || msg.includes('irrigat') || msg.includes('drip') ||
        msg.includes('sprinkler') || msg.includes('moisture')) {
        return handleIrrigationQuery(msg);
    }
    
    // Fertilizer queries
    if (msg.includes('fertilizer') || msg.includes('nutrient') || msg.includes('npk') ||
        msg.includes('nitrogen') || msg.includes('phosphorus') || msg.includes('potassium') ||
        msg.includes('compost') || msg.includes('manure')) {
        return handleFertilizerQuery(msg);
    }
    
    // Soil-related queries
    if (msg.includes('sandy') || msg.includes('loamy') || msg.includes('clay') || 
        msg.includes('silty') || msg.includes('peaty') || msg.includes('chalky') ||
        msg.includes('soil type') || msg.includes('ph')) {
        return handleSoilQuery(msg);
    }
    
    // Crop-specific queries
    const crops = ['rice', 'wheat', 'corn', 'maize', 'tomato', 'potato', 'cotton', 'soybean'];
    const mentionedCrop = crops.find(c => msg.includes(c));
    if (mentionedCrop) {
        return handleCropSpecificQuery(msg, mentionedCrop);
    }
    
    // Season queries
    if (msg.includes('season') || msg.includes('kharif') || msg.includes('rabi') ||
        msg.includes('zaid') || msg.includes('monsoon') || msg.includes('winter') ||
        msg.includes('summer')) {
        return handleSeasonQuery(msg);
    }
    
    // Organic farming
    if (msg.includes('organic') || msg.includes('natural') || msg.includes('chemical-free')) {
        return handleOrganicQuery(msg);
    }
    
    // General help
    if (msg.includes('help') || msg.includes('how') || msg.includes('what can you')) {
        return getHelpResponse();
    }
    
    // If no specific match, provide intelligent general response
    return getIntelligentGeneralResponse(msg);
}

// Weather query handler
function handleWeatherQuery(msg) {
    if (msg.includes('monsoon')) {
        const monsoon = weatherKnowledge.patterns.monsoon;
        return `🌧️ Monsoon Season (${monsoon.months})\n\n${monsoon.characteristics}\n\n🌾 Best Crops:\n${monsoon.crops.join(', ')}\n\n⚠️ Precautions:\n${monsoon.precautions}\n\n💧 Irrigation:\n${monsoon.irrigation}`;
    }
    
    if (msg.includes('winter')) {
        const winter = weatherKnowledge.patterns.winter;
        return `❄️ Winter Season (${winter.months})\n\n${winter.characteristics}\n\n🌾 Best Crops:\n${winter.crops.join(', ')}\n\n⚠️ Precautions:\n${winter.precautions}\n\n💧 Irrigation:\n${winter.irrigation}`;
    }
    
    if (msg.includes('summer')) {
        const summer = weatherKnowledge.patterns.summer;
        return `☀️ Summer Season (${summer.months})\n\n${summer.characteristics}\n\n🌾 Best Crops:\n${summer.crops.join(', ')}\n\n⚠️ Precautions:\n${summer.precautions}\n\n💧 Irrigation:\n${summer.irrigation}`;
    }
    
    if (msg.includes('flood') || msg.includes('heavy rain')) {
        const flood = weatherKnowledge.alerts.flood;
        return `🌊 Flood Alert Information\n\n⚠️ Warning Signs:\n${flood.warning}\n\n🚨 Immediate Actions:\n${flood.action}\n\n🌾 Crops Affected:\n${flood.crops_affected}\n\n🔄 Recovery Steps:\n${flood.recovery}`;
    }
    
    if (msg.includes('drought') || msg.includes('no rain')) {
        const drought = weatherKnowledge.alerts.drought;
        return `🏜️ Drought Management\n\n⚠️ Warning Signs:\n${drought.warning}\n\n🚨 Actions to Take:\n${drought.action}\n\n🌾 Crops Affected:\n${drought.crops_affected}\n\n🔄 Recovery:\n${drought.recovery}`;
    }
    
    if (msg.includes('frost')) {
        const frost = weatherKnowledge.alerts.frost;
        return `❄️ Frost Protection\n\n⚠️ Warning:\n${frost.warning}\n\n🚨 Protection Measures:\n${frost.action}\n\n🌾 Vulnerable Crops:\n${frost.crops_affected}\n\n🔄 Recovery:\n${frost.recovery}`;
    }
    
    if (msg.includes('heatwave') || msg.includes('hot')) {
        const heat = weatherKnowledge.alerts.heatwave;
        return `🌡️ Heatwave Management\n\n⚠️ Warning:\n${heat.warning}\n\n🚨 Actions:\n${heat.action}\n\n🌾 Affected Crops:\n${heat.crops_affected}\n\n🔄 Recovery:\n${heat.recovery}`;
    }
    
    return "🌤️ Weather Intelligence\n\nI can provide detailed information about:\n• Monsoon, Winter, Summer seasons\n• Flood, Drought, Frost, Heatwave alerts\n• Irrigation planning\n• Weather-based crop selection\n\nWhat specific weather information do you need?";
}

// Pest query handler
function handlePestQuery(msg) {
    // Check for specific diseases
    if (msg.includes('blight')) {
        const blight = pestKnowledge.diseases.blight;
        return `🍂 ${blight.name}\n\nType: ${blight.type}\nSeverity: ${blight.severity}\n\n🔍 Symptoms:\n${blight.symptoms}\n\n🌾 Affected Crops:\n${blight.affected_crops.join(', ')}\n\n🌿 Organic Treatment:\n${blight.organic_treatment}\n\n💊 Chemical Treatment:\n${blight.chemical_treatment}\n\n🛡️ Prevention:\n${blight.prevention}`;
    }
    
    if (msg.includes('rust')) {
        const rust = pestKnowledge.diseases.rust;
        return `🦀 ${rust.name}\n\nType: ${rust.type}\nSeverity: ${rust.severity}\n\n🔍 Symptoms:\n${rust.symptoms}\n\n🌾 Affected Crops:\n${rust.affected_crops.join(', ')}\n\n🌿 Organic Treatment:\n${rust.organic_treatment}\n\n💊 Chemical Treatment:\n${rust.chemical_treatment}\n\n🛡️ Prevention:\n${rust.prevention}`;
    }
    
    if (msg.includes('mildew') || msg.includes('powdery')) {
        const mildew = pestKnowledge.diseases.powdery_mildew;
        return `⚪ ${mildew.name}\n\nType: ${mildew.type}\nSeverity: ${mildew.severity}\n\n🔍 Symptoms:\n${mildew.symptoms}\n\n🌾 Affected Crops:\n${mildew.affected_crops.join(', ')}\n\n🌿 Organic Treatment:\n${mildew.organic_treatment}\n\n💊 Chemical Treatment:\n${mildew.chemical_treatment}\n\n🛡️ Prevention:\n${mildew.prevention}`;
    }
    
    if (msg.includes('wilt')) {
        const wilt = pestKnowledge.diseases.bacterial_wilt;
        return `🥀 ${wilt.name}\n\nType: ${wilt.type}\nSeverity: ${wilt.severity}\n\n🔍 Symptoms:\n${wilt.symptoms}\n\n🌾 Affected Crops:\n${wilt.affected_crops.join(', ')}\n\n🌿 Organic Treatment:\n${wilt.organic_treatment}\n\n💊 Chemical Treatment:\n${wilt.chemical_treatment}\n\n🛡️ Prevention:\n${wilt.prevention}`;
    }
    
    if (msg.includes('virus') || msg.includes('mosaic')) {
        const virus = pestKnowledge.diseases.mosaic_virus;
        return `🦠 ${virus.name}\n\nType: ${virus.type}\nSeverity: ${virus.severity}\n\n🔍 Symptoms:\n${virus.symptoms}\n\n🌾 Affected Crops:\n${virus.affected_crops.join(', ')}\n\n🌿 Organic Treatment:\n${virus.organic_treatment}\n\n💊 Chemical Treatment:\n${virus.chemical_treatment}\n\n🛡️ Prevention:\n${virus.prevention}`;
    }
    
    if (msg.includes('root rot') || msg.includes('rot')) {
        const rot = pestKnowledge.diseases.root_rot;
        return `🍄 ${rot.name}\n\nType: ${rot.type}\nSeverity: ${rot.severity}\n\n🔍 Symptoms:\n${rot.symptoms}\n\n🌾 Affected Crops:\n${rot.affected_crops}\n\n🌿 Organic Treatment:\n${rot.organic_treatment}\n\n💊 Chemical Treatment:\n${rot.chemical_treatment}\n\n🛡️ Prevention:\n${rot.prevention}`;
    }
    
    // Check for specific pests
    if (msg.includes('aphid')) {
        const aphid = pestKnowledge.pests.aphids;
        return `🐛 ${aphid.name}\n\nType: ${aphid.type}\nSeverity: ${aphid.severity}\n\n👁️ Appearance:\n${aphid.appearance}\n\n💥 Damage:\n${aphid.damage}\n\n🌾 Affected Crops:\n${aphid.affected_crops}\n\n🌿 Organic Control:\n${aphid.organic_control}\n\n💊 Chemical Control:\n${aphid.chemical_control}\n\n🛡️ Prevention:\n${aphid.prevention}`;
    }
    
    if (msg.includes('caterpillar') || msg.includes('worm')) {
        const caterpillar = pestKnowledge.pests.caterpillars;
        return `🐛 ${caterpillar.name}\n\nType: ${caterpillar.type}\nSeverity: ${caterpillar.severity}\n\n👁️ Appearance:\n${caterpillar.appearance}\n\n💥 Damage:\n${caterpillar.damage}\n\n🌾 Affected Crops:\n${caterpillar.affected_crops}\n\n🌿 Organic Control:\n${caterpillar.organic_control}\n\n💊 Chemical Control:\n${caterpillar.chemical_control}\n\n🛡️ Prevention:\n${caterpillar.prevention}`;
    }
    
    if (msg.includes('whitefly') || msg.includes('white fly')) {
        const whitefly = pestKnowledge.pests.whiteflies;
        return `🦟 ${whitefly.name}\n\nType: ${whitefly.type}\nSeverity: ${whitefly.severity}\n\n👁️ Appearance:\n${whitefly.appearance}\n\n💥 Damage:\n${whitefly.damage}\n\n🌾 Affected Crops:\n${whitefly.affected_crops}\n\n🌿 Organic Control:\n${whitefly.organic_control}\n\n💊 Chemical Control:\n${whitefly.chemical_control}\n\n🛡️ Prevention:\n${whitefly.prevention}`;
    }
    
    if (msg.includes('mite') || msg.includes('spider')) {
        const mite = pestKnowledge.pests.spider_mites;
        return `🕷️ ${mite.name}\n\nType: ${mite.type}\nSeverity: ${mite.severity}\n\n👁️ Appearance:\n${mite.appearance}\n\n💥 Damage:\n${mite.damage}\n\n🌾 Affected Crops:\n${mite.affected_crops}\n\n🌿 Organic Control:\n${mite.organic_control}\n\n💊 Chemical Control:\n${mite.chemical_control}\n\n🛡️ Prevention:\n${mite.prevention}`;
    }
    
    if (msg.includes('thrip')) {
        const thrip = pestKnowledge.pests.thrips;
        return `🦗 ${thrip.name}\n\nType: ${thrip.type}\nSeverity: ${thrip.severity}\n\n👁️ Appearance:\n${thrip.appearance}\n\n💥 Damage:\n${thrip.damage}\n\n🌾 Affected Crops:\n${thrip.affected_crops}\n\n🌿 Organic Control:\n${thrip.organic_control}\n\n💊 Chemical Control:\n${thrip.chemical_control}\n\n🛡️ Prevention:\n${thrip.prevention}`;
    }
    
    if (msg.includes('beetle')) {
        const beetle = pestKnowledge.pests.beetles;
        return `🪲 ${beetle.name}\n\nType: ${beetle.type}\nSeverity: ${beetle.severity}\n\n👁️ Appearance:\n${beetle.appearance}\n\n💥 Damage:\n${beetle.damage}\n\n🌾 Affected Crops:\n${beetle.affected_crops}\n\n🌿 Organic Control:\n${beetle.organic_control}\n\n💊 Chemical Control:\n${beetle.chemical_control}\n\n🛡️ Prevention:\n${beetle.prevention}`;
    }
    
    // IPM strategy
    if (msg.includes('ipm') || msg.includes('integrated') || msg.includes('control strategy')) {
        const ipm = pestKnowledge.ipm_strategies;
        return `🎯 Integrated Pest Management (IPM)\n\n🌱 Cultural Control:\n${ipm.cultural}\n\n🔧 Mechanical Control:\n${ipm.mechanical}\n\n🐞 Biological Control:\n${ipm.biological}\n\n💊 Chemical Control:\n${ipm.chemical}\n\nIPM combines all methods for sustainable, effective pest management!`;
    }
    
    return "🐛 Pest & Disease Management\n\nI have detailed information about:\n\n🍂 Diseases: Blight, Rust, Powdery Mildew, Bacterial Wilt, Mosaic Virus, Root Rot\n\n🐛 Pests: Aphids, Caterpillars, Whiteflies, Spider Mites, Thrips, Beetles\n\nFor each, I can provide:\n• Identification & symptoms\n• Organic treatments\n• Chemical controls\n• Prevention strategies\n\nWhat pest or disease are you dealing with?";
}

// Market query handler
function handleMarketQuery(msg) {
    if (msg.includes('price') && (msg.includes('factor') || msg.includes('affect') || msg.includes('determine'))) {
        let response = "💰 Factors Affecting Market Prices:\n\n";
        Object.values(marketKnowledge.pricing_factors).forEach(factor => {
            response += `📊 ${factor.factor} (Impact: ${factor.impact})\n${factor.description}\n\n`;
        });
        return response + "Understanding these factors helps you time your sales for maximum profit!";
    }
    
    if (msg.includes('sell') && (msg.includes('strategy') || msg.includes('how') || msg.includes('best way'))) {
        let response = "💡 Smart Selling Strategies:\n\n";
        Object.values(marketKnowledge.selling_strategies).forEach(strategy => {
            response += `${strategy.method}\n• Profit: ${strategy.profit_margin}\n• Best for: ${strategy.best_for}\n\n`;
        });
        return response + "Choose the strategy that fits your scale and resources!";
    }
    
    if (msg.includes('cooperative') || msg.includes('group')) {
        const coop = marketKnowledge.selling_strategies.cooperative;
        return `🤝 Farmer Cooperative Selling\n\nProfit Margin: ${coop.profit_margin}\n\n📋 Requirements:\n${coop.requirements}\n\n🌾 Best For:\n${coop.best_for}\n\n⚠️ Challenges:\n${coop.challenges}\n\n💡 Tips:\n${coop.tips}`;
    }
    
    if (msg.includes('direct') || msg.includes('consumer')) {
        const direct = marketKnowledge.selling_strategies.direct_consumer;
        return `🛒 Direct to Consumer Sales\n\nProfit Margin: ${direct.profit_margin}\n\n📋 Requirements:\n${direct.requirements}\n\n🌾 Best For:\n${direct.best_for}\n\n⚠️ Challenges:\n${direct.challenges}\n\n💡 Tips:\n${direct.tips}`;
    }
    
    if (msg.includes('contract')) {
        const contract = marketKnowledge.selling_strategies.contract_farming;
        return `📝 Contract Farming\n\nProfit Margin: ${contract.profit_margin}\n\n📋 Requirements:\n${contract.requirements}\n\n🌾 Best For:\n${contract.best_for}\n\n⚠️ Challenges:\n${contract.challenges}\n\n💡 Tips:\n${contract.tips}`;
    }
    
    if (msg.includes('value') || msg.includes('process')) {
        const value = marketKnowledge.selling_strategies.value_addition;
        return `🏭 Value Addition/Processing\n\nProfit Margin: ${value.profit_margin}\n\n📋 Requirements:\n${value.requirements}\n\n🌾 Best For:\n${value.best_for}\n\n⚠️ Challenges:\n${value.challenges}\n\n💡 Tips:\n${value.tips}`;
    }
    
    if (msg.includes('online') || msg.includes('internet') || msg.includes('digital')) {
        const online = marketKnowledge.selling_strategies.online_platforms;
        return `💻 Online Marketplace Selling\n\nProfit Margin: ${online.profit_margin}\n\n📋 Requirements:\n${online.requirements}\n\n🌾 Best For:\n${online.best_for}\n\n⚠️ Challenges:\n${online.challenges}\n\n💡 Tips:\n${online.tips}`;
    }
    
    if (msg.includes('vegetable')) {
        const veg = marketKnowledge.price_trends.vegetables;
        return `🥬 Vegetable Market Trends\n\n📉 Peak Season:\n${veg.peak_season}\n\n📈 Off-Season:\n${veg.off_season}\n\n📦 Storage Potential:\n${veg.storage_potential}\n\n💡 Best Strategy:\n${veg.best_strategy}`;
    }
    
    if (msg.includes('cereal') || msg.includes('grain')) {
        const cereal = marketKnowledge.price_trends.cereals;
        return `🌾 Cereal/Grain Market Trends\n\n📉 Harvest Time:\n${cereal.harvest_time}\n\n📈 Storage Benefit:\n${cereal.storage_benefit}\n\n🏛️ Government Support:\n${cereal.government_support}\n\n💡 Best Strategy:\n${cereal.best_strategy}`;
    }
    
    return "💰 Market Intelligence\n\nI can provide detailed information about:\n\n📊 Pricing Factors:\n• Supply & demand\n• Quality grading\n• Location & transport\n• Seasonal variations\n• Weather impacts\n\n💡 Selling Strategies:\n• Direct to consumer (40-60% higher profit)\n• Cooperatives (20-30% higher)\n• Contract farming (guaranteed price)\n• Value addition (100-300% higher)\n• Online platforms (30-50% higher)\n\n📈 Price Trends:\n• Vegetables, Cereals, Fruits, Cash crops\n\nWhat specific market information do you need?";
}

// Timeline query handler
function handleTimelineQuery(msg) {
    const crops = ['rice', 'wheat', 'tomato', 'corn', 'maize'];
    const crop = crops.find(c => msg.includes(c));
    
    if (crop && cropTimeline[crop]) {
        const timeline = cropTimeline[crop];
        let response = `📅 ${timeline.name} Growing Timeline\n\nTotal Duration: ${timeline.total_duration}\n\n`;
        
        if (msg.includes('stage') || msg.includes('all') || msg.includes('complete')) {
            response += "🌱 Growth Stages:\n\n";
            Object.entries(timeline.stages).forEach(([stage, info]) => {
                response += `${stage.toUpperCase()}\nDays: ${info.days}\nActivities: ${info.activities}\nWater: ${info.water}\n\n`;
            });
        }
        
        if (msg.includes('fertilizer') || msg.includes('nutrient')) {
            response += "🌿 Fertilizer Schedule:\n\n";
            Object.entries(timeline.fertilizer_schedule).forEach(([stage, info]) => {
                response += `${stage}: ${info}\n`;
            });
            response += "\n";
        }
        
        if (msg.includes('problem') || msg.includes('issue') || msg.includes('disease')) {
            response += `⚠️ Common Issues:\n${timeline.common_issues}`;
        }
        
        return response || `${timeline.name} timeline information available. Ask about stages, fertilizer schedule, or common issues!`;
    }
    
    if (msg.includes('harvest') && msg.includes('when')) {
        return "🌾 Harvest Timing Guide:\n\n• Rice: 120-150 days, when 80% grains are golden\n• Wheat: 120-130 days, when moisture is 20-25%\n• Tomato: 60-85 days from transplant, when fully colored\n• Corn: 90-120 days, when kernels are hard\n• Potato: 90-120 days, when tops die back\n\nHarvest in morning for best quality!\n\nWhich crop's harvest timing do you need?";
    }
    
    if (msg.includes('plant') && msg.includes('when')) {
        return "🌱 Planting Time Guide:\n\n🌧️ Kharif (Monsoon - June-July):\nRice, Cotton, Soybean, Corn, Groundnut\n\n❄️ Rabi (Winter - Oct-Nov):\nWheat, Barley, Mustard, Chickpea, Lentil\n\n☀️ Zaid (Summer - Mar-Apr):\nWatermelon, Cucumber, Vegetables\n\nWhich season are you planning for?";
    }
    
    return "📅 Crop Timeline Information\n\nI have detailed timelines for:\n• Rice (120-150 days)\n• Wheat (120-130 days)\n• Tomato (60-85 days)\n• Corn/Maize (90-120 days)\n\nFor each crop, I can provide:\n• Complete growth stages\n• Day-by-day activities\n• Fertilizer schedule\n• Irrigation timing\n• Common issues\n\nWhich crop timeline do you need?";
}

// Irrigation query handler
function handleIrrigationQuery(msg) {
    if (msg.includes('drip')) {
        const drip = weatherKnowledge.irrigation.drip;
        return `💧 Drip Irrigation System\n\nEfficiency: ${drip.efficiency}\nWater Saving: ${drip.water_saving}\n\n🌾 Best For:\n${drip.best_for}\n\n💰 Cost:\n${drip.cost}\n\n🔧 Maintenance:\n${drip.maintenance}\n\nDrip irrigation is the most efficient method, perfect for water-scarce areas!`;
    }
    
    if (msg.includes('sprinkler')) {
        const sprinkler = weatherKnowledge.irrigation.sprinkler;
        return `💦 Sprinkler Irrigation System\n\nEfficiency: ${sprinkler.efficiency}\nWater Saving: ${sprinkler.water_saving}\n\n🌾 Best For:\n${sprinkler.best_for}\n\n💰 Cost:\n${sprinkler.cost}\n\n🔧 Maintenance:\n${sprinkler.maintenance}\n\nSprinkler irrigation works well for cereals and uneven terrain!`;
    }
    
    if (msg.includes('flood') || msg.includes('surface')) {
        const flood = weatherKnowledge.irrigation.flood;
        return `🌊 Flood/Surface Irrigation\n\nEfficiency: ${flood.efficiency}\nWater Saving: ${flood.water_saving}\n\n🌾 Best For:\n${flood.best_for}\n\n💰 Cost:\n${flood.cost}\n\n🔧 Maintenance:\n${flood.maintenance}\n\nTraditional method, still used for rice and wheat in flat areas.`;
    }
    
    if (msg.includes('save') || msg.includes('conserve') || msg.includes('efficient')) {
        return "💧 Water Conservation Tips:\n\n1. Use drip irrigation (saves 30-70%)\n2. Mulch heavily (reduces evaporation 50%)\n3. Irrigate early morning/evening\n4. Check soil moisture before watering\n5. Fix leaks immediately\n6. Use rainwater harvesting\n7. Choose drought-resistant varieties\n8. Avoid over-watering\n\nProper irrigation timing:\n• Morning (6-10 AM) - Best\n• Evening (4-7 PM) - Good\n• Avoid midday (water loss to evaporation)";
    }
    
    return "💧 Irrigation Systems Comparison:\n\n💧 Drip: 90-95% efficient, saves 30-70% water\n💦 Sprinkler: 70-85% efficient, saves 20-50% water\n🌊 Flood: 40-60% efficient, traditional method\n\nWhich irrigation method would you like to know more about?";
}

// Fertilizer query handler
function handleFertilizerQuery(msg) {
    if (msg.includes('organic') || msg.includes('natural')) {
        return "🌿 Organic Fertilizers:\n\n1. Compost\n• NPK: 1-1-1 (balanced)\n• Benefits: Improves soil structure, adds microbes\n• Application: 5-10 tons/acre\n\n2. Farmyard Manure (FYM)\n• NPK: 0.5-0.2-0.5\n• Benefits: Slow release, improves water retention\n• Application: 10-15 tons/acre\n\n3. Vermicompost\n• NPK: 2-1-1\n• Benefits: Rich in microbes, fast acting\n• Application: 2-3 tons/acre\n\n4. Neem Cake\n• NPK: 5-1-1\n• Benefits: Pest repellent, nitrogen rich\n• Application: 200-300 kg/acre\n\n5. Bone Meal\n• NPK: 3-15-0\n• Benefits: High phosphorus, slow release\n• Application: 100-200 kg/acre\n\nApply organic fertilizers 2-3 weeks before planting!";
    }
    
    if (msg.includes('npk') || msg.includes('chemical')) {
        return "💊 NPK Fertilizers Guide:\n\n🔵 Nitrogen (N):\n• Promotes leaf growth\n• Deficiency: Yellowing leaves\n• Sources: Urea (46-0-0), Ammonium sulfate\n\n🟠 Phosphorus (P):\n• Root development, flowering\n• Deficiency: Purple leaves, poor roots\n• Sources: DAP (18-46-0), SSP\n\n🟢 Potassium (K):\n• Overall plant health, disease resistance\n• Deficiency: Brown leaf edges\n• Sources: MOP (0-0-60), SOP\n\n📊 Common NPK Ratios:\n• 19-19-19: Balanced, all stages\n• 20-20-0: Vegetative growth\n• 10-26-26: Flowering/fruiting\n• 12-32-16: Root crops\n\nAlways soil test before applying!";
    }
    
    if (msg.includes('deficiency') || msg.includes('lack')) {
        return "⚠️ Nutrient Deficiency Symptoms:\n\n🟡 Nitrogen:\n• Yellowing of older leaves\n• Stunted growth\n• Solution: Urea, compost\n\n🟣 Phosphorus:\n• Purple/dark green leaves\n• Poor root development\n• Solution: DAP, bone meal\n\n🟤 Potassium:\n• Brown leaf edges\n• Weak stems\n• Solution: MOP, wood ash\n\n🟢 Iron:\n• Yellow leaves, green veins\n• New growth affected\n• Solution: Iron chelate, lower pH\n\n⚪ Calcium:\n• Blossom end rot in tomatoes\n• Tip burn in lettuce\n• Solution: Lime, gypsum\n\n🟡 Magnesium:\n• Yellowing between veins\n• Older leaves first\n• Solution: Epsom salt, dolomite";
    }
    
    return "🌿 Fertilizer Information:\n\nI can help with:\n• Organic fertilizers (compost, manure, vermicompost)\n• NPK chemical fertilizers\n• Nutrient deficiency identification\n• Application timing and rates\n• Soil amendments\n\nWhat specific fertilizer information do you need?";
}

// Soil query handler
function handleSoilQuery(msg) {
    if (currentSoilType && soilTypes[currentSoilType]) {
        const soil = soilTypes[currentSoilType];
        return `${soil.icon} Your ${soil.name} Analysis:\n\npH Range: ${soil.phRange}\nDrainage: ${soil.drainage}\nWater Retention: ${soil.waterRetention}\nNutrients: ${soil.nutrients}\n\n${soil.description}\n\nWould you like crop recommendations for this soil?`;
    }
    
    return "🌱 Soil Type Information:\n\nI have detailed data on 6 soil types:\n\n🏖️ Sandy - Light, drains fast\n🌾 Loamy - Perfect balance (best!)\n🧱 Clay - Heavy, retains water\n💧 Silty - Smooth, fertile\n🌿 Peaty - Acidic, organic\n⚪ Chalky - Alkaline, stony\n\nUse the Soil Analysis feature to select your soil type and get personalized recommendations!";
}

// Crop-specific query handler
function handleCropSpecificQuery(msg, cropKey) {
    if (globalCropsDatabase[cropKey]) {
        const crop = globalCropsDatabase[cropKey];
        let response = `${crop.icon} ${crop.name} Complete Guide:\n\n`;
        response += `📊 pH Requirements:\n• Optimal: ${crop.optimal}\n• Range: ${crop.phMin} - ${crop.phMax}\n\n`;
        response += `📅 Growing Info:\n• Season: ${crop.season}\n• Duration: ${crop.duration}\n• Regions: ${crop.region}\n\n`;
        
        if (cropTimeline[cropKey]) {
            const timeline = cropTimeline[cropKey];
            response += `⏱️ Timeline: ${timeline.total_duration}\n`;
            response += `⚠️ Watch for: ${timeline.common_issues}\n\n`;
        }
        
        response += "Ask me about:\n• Detailed growth stages\n• Fertilizer schedule\n• Pest management\n• Market prices";
        
        return response;
    }
    
    return `I have information about ${cropKey}! Ask me specific questions about:\n• pH requirements\n• Growing season\n• Timeline and stages\n• Pest management\n• Market prices`;
}

// Season query handler
function handleSeasonQuery(msg) {
    if (msg.includes('kharif') || msg.includes('monsoon')) {
        return "🌧️ Kharif Season (Monsoon)\n\nTiming: June-September\n\n🌾 Major Crops:\n• Rice - Main crop\n• Cotton - Cash crop\n• Soybean - Oilseed\n• Corn/Maize - Cereal\n• Groundnut - Oilseed\n• Sugarcane - Cash crop\n• Pulses - Moong, Urad\n\n💧 Characteristics:\n• High rainfall\n• Warm temperatures\n• High humidity\n\n⚠️ Challenges:\n• Waterlogging\n• Fungal diseases\n• Pest pressure\n\n💡 Tips:\n• Ensure good drainage\n• Use disease-resistant varieties\n• Monitor pests regularly";
    }
    
    if (msg.includes('rabi') || msg.includes('winter')) {
        return "❄️ Rabi Season (Winter)\n\nTiming: October-March\n\n🌾 Major Crops:\n• Wheat - Main crop\n• Barley - Cereal\n• Mustard - Oilseed\n• Chickpea - Pulse\n• Lentil - Pulse\n• Peas - Vegetable\n• Potato - Vegetable\n• Onion - Vegetable\n\n💧 Characteristics:\n• Low rainfall\n• Cool temperatures\n• Low humidity\n\n⚠️ Challenges:\n• Frost damage\n• Irrigation needs\n• Aphid infestation\n\n💡 Tips:\n• Ensure irrigation\n• Protect from frost\n• Use timely sowing";
    }
    
    if (msg.includes('zaid') || msg.includes('summer')) {
        return "☀️ Zaid Season (Summer)\n\nTiming: March-June\n\n🌾 Major Crops:\n• Watermelon - Fruit\n• Muskmelon - Fruit\n• Cucumber - Vegetable\n• Bitter gourd - Vegetable\n• Pumpkin - Vegetable\n• Fodder crops\n\n💧 Characteristics:\n• High temperatures\n• Low rainfall\n• High evaporation\n\n⚠️ Challenges:\n• Water stress\n• Heat damage\n• High irrigation needs\n\n💡 Tips:\n• Mulch heavily\n• Frequent irrigation\n• Use shade nets";
    }
    
    return "📅 Cropping Seasons in India:\n\n🌧️ Kharif (Monsoon): June-September\nRice, Cotton, Soybean, Corn\n\n❄️ Rabi (Winter): October-March\nWheat, Barley, Mustard, Chickpea\n\n☀️ Zaid (Summer): March-June\nWatermelon, Cucumber, Vegetables\n\nWhich season would you like to know more about?";
}

// Organic farming query handler
function handleOrganicQuery(msg) {
    return "🌿 Organic Farming Guide:\n\n✅ Principles:\n• No synthetic chemicals\n• Soil health focus\n• Biodiversity\n• Sustainability\n\n🌱 Organic Fertilizers:\n• Compost (5-10 tons/acre)\n• Vermicompost (2-3 tons/acre)\n• Green manure\n• Biofertilizers (Rhizobium, Azotobacter)\n\n🐛 Organic Pest Control:\n• Neem oil spray\n• Bt (Bacillus thuringiensis)\n• Pheromone traps\n• Beneficial insects\n• Companion planting\n\n🌾 Organic Weed Control:\n• Mulching\n• Hand weeding\n• Crop rotation\n• Cover crops\n\n💰 Benefits:\n• Premium prices (20-50% higher)\n• Better soil health\n• Environmental sustainability\n• Growing market demand\n\n📋 Certification:\n• Takes 2-3 years\n• Regular inspections\n• Documentation required\n• Worth the investment!";
}

// Help response
function getHelpResponse() {
    return `🌾 AgriBot - Your Complete Farming Assistant!\n\nI have extensive knowledge about:\n\n🌱 Soil Analysis:\n• 6 soil types with characteristics\n• pH optimization\n• 40+ crop recommendations\n\n🌤️ Weather Intelligence:\n• Seasonal patterns (Monsoon, Winter, Summer)\n• Weather alerts (Flood, Drought, Frost, Heatwave)\n• Irrigation planning\n\n🐛 Pest Management:\n• 6 major diseases (Blight, Rust, Mildew, Wilt, Virus, Rot)\n• 6 common pests (Aphids, Caterpillars, Whiteflies, Mites, Thrips, Beetles)\n• Organic & chemical treatments\n• IPM strategies\n\n📅 Crop Timeline:\n• Detailed growth stages\n• Fertilizer schedules\n• Activity planning\n• Harvest timing\n\n💰 Market Intelligence:\n• Pricing factors\n• 5 selling strategies\n• Price trends\n• Profit maximization\n\n🌾 Crop Information:\n• 40+ crops worldwide\n• pH requirements\n• Growing seasons\n• Regional suitability\n\nAsk me anything about farming - I'm here to help!`;
}

// Intelligent general response
function getIntelligentGeneralResponse(msg) {
    // Try to extract keywords and provide relevant info
    const keywords = {
        'yield': "To increase yield: Use quality seeds, maintain optimal pH, apply balanced fertilizers, ensure proper irrigation, control pests early, and harvest at right time. Expected improvement: 15-30%!",
        'profit': "To maximize profit: Choose high-value crops, time your harvest for off-season, use efficient irrigation, minimize input costs, sell directly to consumers or through cooperatives. Potential increase: 20-50%!",
        'water': "Water management tips: Use drip irrigation (saves 30-70%), mulch heavily, irrigate morning/evening, check soil moisture, harvest rainwater. Proper watering is key to success!",
        'seed': "Seed selection tips: Use certified seeds, choose disease-resistant varieties, match to your soil/climate, treat seeds before sowing, store properly. Good seeds = 20-30% better yield!",
        'spacing': "Proper spacing ensures: Better air circulation, reduced disease, easier management, optimal sunlight, higher yields. Follow recommended spacing for each crop!",
        'rotation': "Crop rotation benefits: Breaks pest cycles, improves soil health, reduces disease, increases yields. Rotate: Legumes → Cereals → Root crops!",
        'compost': "Composting guide: Mix green (nitrogen) + brown (carbon) materials, maintain moisture, turn weekly, ready in 2-3 months. Apply 5-10 tons/acre for best results!",
        'mulch': "Mulching benefits: Conserves moisture (50%), controls weeds, regulates temperature, adds organic matter. Use straw, leaves, or plastic mulch!",
    };
    
    for (const [keyword, response] of Object.entries(keywords)) {
        if (msg.includes(keyword)) {
            return `💡 ${response}\n\nWant more specific information? Ask about:\n• Soil analysis\n• Weather patterns\n• Pest control\n• Crop timelines\n• Market strategies`;
        }
    }
    
    // If still no match, provide encouraging response
    return `I'm here to help with your farming questions! 🌾\n\nI have detailed information about:\n• Soil types and pH management\n• Weather patterns and alerts\n• Pest and disease control\n• Crop growing timelines\n• Market prices and strategies\n• Irrigation methods\n• Fertilizer recommendations\n• Organic farming\n\nCould you rephrase your question or ask about a specific topic? For example:\n• "How to control aphids?"\n• "When to plant wheat?"\n• "Best irrigation for vegetables?"\n• "Market prices for tomatoes?"\n\nI'm ready to provide detailed answers!`;
}
async function fetchChatGPTResponse(userMessage) {
    // Check if API key is configured
    if (!CHATGPT_API_KEY || CHATGPT_API_KEY === 'YOUR_OPENAI_API_KEY_HERE') {
        // Provide intelligent fallback without API
        setTimeout(() => {
            const fallbackResponse = getIntelligentGeneralResponse(userMessage.toLowerCase());
            addMessage(fallbackResponse, false);
        }, 800);
        return;
    }
    
    // Show thinking indicator
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'thinking-indicator';
    thinkingDiv.innerHTML = `
        <div class="thinking-dots">
            <span></span><span></span><span></span>
        </div>
        <span>Consulting AI knowledge base...</span>
    `;
    const thinkingMsg = addMessage(thinkingDiv, false);
    
    try {
        const response = await fetch(CHATGPT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHATGPT_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: "system", content: "You are an expert agricultural assistant with deep knowledge of farming, crops, soil, weather, pests, and markets. Provide practical, detailed advice. Be specific with numbers, timings, and methods. Always give actionable recommendations." },
                    ...conversationHistory
                ],
                max_tokens: 600,
                temperature: 0.7
            })
        });
        
        // Remove thinking indicator
        if (thinkingMsg && thinkingMsg.parentNode) {
            thinkingMsg.remove();
        }
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        
        addMessage(`🤖 ${aiResponse}`, false);
        conversationHistory.push({ role: "assistant", content: aiResponse });
        
    } catch (error) {
        console.error('ChatGPT API Error:', error);
        
        // Remove thinking indicator
        if (thinkingMsg && thinkingMsg.parentNode) {
            thinkingMsg.remove();
        }
        
        // Provide intelligent fallback
        const fallbackResponse = getIntelligentGeneralResponse(userMessage.toLowerCase());
        addMessage(fallbackResponse, false);
    }
}

// Event listeners
sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});

// Close modal on outside click
chatModal.addEventListener('click', (e) => {
    if (e.target === chatModal) {
        chatModal.classList.remove('active');
    }
});
