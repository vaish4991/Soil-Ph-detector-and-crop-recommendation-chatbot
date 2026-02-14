// Comprehensive Agricultural Knowledge Base

// Weather Intelligence Data
const weatherKnowledge = {
    patterns: {
        monsoon: {
            name: "Monsoon Season",
            months: "June-September",
            characteristics: "Heavy rainfall, high humidity, moderate temperatures",
            crops: ["Rice", "Cotton", "Soybean", "Corn", "Sugarcane", "Groundnut"],
            precautions: "Ensure proper drainage, watch for fungal diseases, protect from waterlogging",
            irrigation: "Minimal irrigation needed, focus on drainage management"
        },
        winter: {
            name: "Winter Season",
            months: "October-March",
            characteristics: "Cool temperatures, low rainfall, dry conditions",
            crops: ["Wheat", "Barley", "Mustard", "Chickpea", "Lentil", "Peas"],
            precautions: "Protect from frost, ensure adequate irrigation, watch for aphids",
            irrigation: "Regular irrigation required, drip irrigation recommended"
        },
        summer: {
            name: "Summer Season",
            months: "April-June",
            characteristics: "High temperatures, low humidity, water stress",
            crops: ["Watermelon", "Cucumber", "Muskmelon", "Vegetables"],
            precautions: "Mulching essential, frequent irrigation, shade protection",
            irrigation: "High water requirement, morning/evening irrigation best"
        }
    },
    
    alerts: {
        flood: {
            warning: "Heavy rainfall expected (>100mm in 24hrs)",
            action: "Ensure drainage channels clear, harvest mature crops, protect livestock, store equipment on high ground",
            crops_affected: "All crops, especially root vegetables and cereals",
            recovery: "Wait 2-3 days for water to recede, check for disease, replant if necessary"
        },
        drought: {
            warning: "No rainfall for 15+ days, soil moisture below 30%",
            action: "Implement water conservation, use mulching, prioritize critical crops, consider drought-resistant varieties",
            crops_affected: "All crops, especially water-intensive ones like rice and sugarcane",
            recovery: "Gradual irrigation, add organic matter, use drought-tolerant crops next season"
        },
        frost: {
            warning: "Temperature expected below 0°C",
            action: "Cover sensitive plants, use smoke/heaters, harvest mature crops, water before frost",
            crops_affected: "Tomatoes, potatoes, beans, tender vegetables",
            recovery: "Remove damaged parts, apply fertilizer, protect from further frost"
        },
        heatwave: {
            warning: "Temperature above 40°C for 3+ days",
            action: "Increase irrigation frequency, use shade nets, mulch heavily, avoid fertilization",
            crops_affected: "Leafy vegetables, flowers, young plants",
            recovery: "Gradual recovery, maintain moisture, prune damaged parts"
        },
        hailstorm: {
            warning: "Hail expected with strong winds",
            action: "Cover crops with nets, harvest ready produce, secure structures, protect young plants",
            crops_affected: "Fruits, vegetables, flowers - physical damage",
            recovery: "Prune damaged parts, apply fungicide, support broken stems"
        }
    },
    
    irrigation: {
        drip: {
            name: "Drip Irrigation",
            efficiency: "90-95%",
            water_saving: "30-70% compared to flood",
            best_for: "Vegetables, fruits, cash crops, water-scarce areas",
            cost: "High initial, low operational",
            maintenance: "Regular filter cleaning, check emitters monthly"
        },
        sprinkler: {
            name: "Sprinkler Irrigation",
            efficiency: "70-85%",
            water_saving: "20-50% compared to flood",
            best_for: "Cereals, vegetables, lawns, uneven terrain",
            cost: "Moderate initial and operational",
            maintenance: "Check nozzles, clean filters, winterize in cold areas"
        },
        flood: {
            name: "Flood/Surface Irrigation",
            efficiency: "40-60%",
            water_saving: "Baseline method",
            best_for: "Rice, wheat in flat areas with abundant water",
            cost: "Low initial, moderate operational",
            maintenance: "Level fields, maintain channels, control weeds"
        }
    }
};

// Pest Management Comprehensive Database
const pestKnowledge = {
    diseases: {
        blight: {
            name: "Blight (Early & Late)",
            type: "Fungal",
            symptoms: "Brown/black spots on leaves, yellowing, leaf drop, fruit rot",
            affected_crops: ["Tomato", "Potato", "Pepper", "Eggplant"],
            causes: "High humidity, warm temperatures, poor air circulation",
            organic_treatment: "Neem oil spray, copper fungicide, remove infected parts, improve spacing",
            chemical_treatment: "Mancozeb, Chlorothalonil - apply every 7-10 days",
            prevention: "Crop rotation, resistant varieties, proper spacing, avoid overhead watering",
            severity: "High - can destroy entire crop"
        },
        rust: {
            name: "Rust Disease",
            type: "Fungal",
            symptoms: "Orange/brown pustules on leaves, yellowing, premature leaf drop",
            affected_crops: ["Wheat", "Beans", "Coffee", "Corn"],
            causes: "Moderate temperatures, high humidity, dew on leaves",
            organic_treatment: "Sulfur spray, remove infected leaves, improve air flow",
            chemical_treatment: "Propiconazole, Tebuconazole - 2-3 applications",
            prevention: "Resistant varieties, proper spacing, avoid late planting",
            severity: "Moderate to High"
        },
        powdery_mildew: {
            name: "Powdery Mildew",
            type: "Fungal",
            symptoms: "White powdery coating on leaves, stunted growth, leaf curling",
            affected_crops: ["Grapes", "Cucumber", "Pumpkin", "Roses"],
            causes: "Warm days, cool nights, high humidity, poor air circulation",
            organic_treatment: "Baking soda spray (1 tbsp/gallon), milk spray, neem oil",
            chemical_treatment: "Sulfur, Myclobutanil - apply at first sign",
            prevention: "Resistant varieties, good spacing, prune for airflow, avoid overhead watering",
            severity: "Moderate"
        },
        bacterial_wilt: {
            name: "Bacterial Wilt",
            type: "Bacterial",
            symptoms: "Sudden wilting, yellowing, slimy stem interior, plant death",
            affected_crops: ["Tomato", "Potato", "Eggplant", "Cucumber"],
            causes: "Soil-borne bacteria, wounds, insect vectors, contaminated tools",
            organic_treatment: "Remove infected plants immediately, solarize soil, use resistant varieties",
            chemical_treatment: "No effective chemical treatment - prevention is key",
            prevention: "Crop rotation (3-4 years), clean tools, control insects, avoid wounding plants",
            severity: "Very High - no cure once infected"
        },
        mosaic_virus: {
            name: "Mosaic Virus",
            type: "Viral",
            symptoms: "Mottled yellow/green leaves, stunted growth, distorted leaves, reduced yield",
            affected_crops: ["Tomato", "Cucumber", "Tobacco", "Beans"],
            causes: "Aphid transmission, infected seeds, contaminated tools",
            organic_treatment: "Remove infected plants, control aphids, use reflective mulch",
            chemical_treatment: "No cure - focus on aphid control with insecticidal soap",
            prevention: "Resistant varieties, control aphids, use certified seeds, wash hands after smoking",
            severity: "High - spreads rapidly"
        },
        root_rot: {
            name: "Root Rot",
            type: "Fungal",
            symptoms: "Wilting despite wet soil, yellowing, brown mushy roots, plant death",
            affected_crops: "Most crops, especially in poorly drained soil",
            causes: "Overwatering, poor drainage, soil-borne fungi",
            organic_treatment: "Improve drainage, reduce watering, apply beneficial fungi (Trichoderma)",
            chemical_treatment: "Metalaxyl, Fosetyl-Al - drench soil",
            prevention: "Well-draining soil, proper watering, raised beds, crop rotation",
            severity: "High"
        }
    },
    
    pests: {
        aphids: {
            name: "Aphids",
            type: "Insect - Sucking",
            appearance: "Small (1-3mm), soft-bodied, green/black/yellow, clustered on new growth",
            damage: "Stunted growth, curled leaves, honeydew secretion, virus transmission",
            affected_crops: "Most vegetables, fruits, ornamentals",
            lifecycle: "7-10 days, multiple generations per season",
            organic_control: "Ladybugs, lacewings, neem oil, insecticidal soap, strong water spray",
            chemical_control: "Imidacloprid, Acetamiprid - systemic insecticides",
            prevention: "Reflective mulch, companion planting (marigolds), remove weeds, encourage beneficial insects",
            severity: "Moderate - High (virus transmission)"
        },
        caterpillars: {
            name: "Caterpillars (Various)",
            type: "Insect - Chewing",
            appearance: "Larvae of moths/butterflies, various colors, 1-5cm long",
            damage: "Holes in leaves, defoliation, fruit boring, stem cutting",
            affected_crops: "Cabbage, tomato, corn, cotton, most vegetables",
            lifecycle: "2-4 weeks as larvae, pupate for 1-2 weeks",
            organic_control: "Bt (Bacillus thuringiensis), handpicking, neem oil, parasitic wasps",
            chemical_control: "Spinosad, Chlorantraniliprole - selective caterpillar control",
            prevention: "Row covers, pheromone traps, encourage birds, crop rotation",
            severity: "Moderate to High"
        },
        whiteflies: {
            name: "Whiteflies",
            type: "Insect - Sucking",
            appearance: "Tiny white flying insects (1-2mm), found on leaf undersides",
            damage: "Yellowing leaves, stunted growth, honeydew, sooty mold, virus transmission",
            affected_crops: "Tomato, cucumber, cotton, ornamentals",
            lifecycle: "3-4 weeks, rapid reproduction in warm weather",
            organic_control: "Yellow sticky traps, neem oil, insecticidal soap, vacuum",
            chemical_control: "Spiromesifen, Pyriproxyfen - growth regulators",
            prevention: "Reflective mulch, screen houses, remove infected plants early",
            severity: "High - difficult to control"
        },
        spider_mites: {
            name: "Spider Mites",
            type: "Arachnid - Sucking",
            appearance: "Tiny (0.5mm), red/brown, barely visible, fine webbing",
            damage: "Stippled leaves, yellowing, bronzing, webbing, leaf drop",
            affected_crops: "Beans, tomatoes, strawberries, ornamentals",
            lifecycle: "5-7 days, thrives in hot dry conditions",
            organic_control: "Strong water spray, predatory mites, neem oil, sulfur spray",
            chemical_control: "Abamectin, Bifenazate - miticides (not insecticides)",
            prevention: "Maintain humidity, avoid water stress, remove dusty conditions",
            severity: "Moderate to High in dry conditions"
        },
        thrips: {
            name: "Thrips",
            type: "Insect - Rasping",
            appearance: "Tiny (1mm), slender, yellow/brown/black, fast-moving",
            damage: "Silvery streaks on leaves, distorted growth, scarred fruit, virus transmission",
            affected_crops: "Onion, tomato, pepper, flowers",
            lifecycle: "2-3 weeks, multiple generations",
            organic_control: "Blue sticky traps, spinosad, neem oil, predatory mites",
            chemical_control: "Spinetoram, Methiocarb - systemic action",
            prevention: "Remove weeds, use reflective mulch, screen houses",
            severity: "Moderate - High (virus transmission)"
        },
        beetles: {
            name: "Beetles (Various)",
            type: "Insect - Chewing",
            appearance: "Hard-shelled, various sizes (2-20mm), many colors",
            damage: "Holes in leaves, defoliation, root damage (larvae), fruit scarring",
            affected_crops: "Potato, beans, cucumber, corn, stored grains",
            lifecycle: "Varies by species, 4-8 weeks",
            organic_control: "Handpicking, neem oil, diatomaceous earth, crop rotation",
            chemical_control: "Carbaryl, Permethrin - contact insecticides",
            prevention: "Crop rotation, trap crops, mulching, remove crop debris",
            severity: "Moderate"
        }
    },
    
    ipm_strategies: {
        cultural: "Crop rotation, resistant varieties, proper spacing, sanitation, timing of planting",
        mechanical: "Handpicking, traps, barriers, mulching, pruning, row covers",
        biological: "Beneficial insects, parasitic wasps, predatory mites, Bt, nematodes",
        chemical: "Last resort, rotate modes of action, follow label, use selective products, proper timing"
    }
};

// Crop Timeline & Management Data
const cropTimeline = {
    rice: {
        name: "Rice",
        total_duration: "120-150 days",
        stages: {
            land_prep: { days: "0-15", activities: "Plowing, leveling, puddling, bund repair", water: "Flooding for puddling" },
            nursery: { days: "0-25", activities: "Seed treatment, sowing in nursery, maintain 2-3cm water", water: "Light irrigation" },
            transplanting: { days: "25-30", activities: "Uproot seedlings, transplant 2-3 per hill, 20x15cm spacing", water: "Standing water 5cm" },
            vegetative: { days: "30-60", activities: "Weeding, fertilizer application, pest monitoring", water: "Maintain 5-7cm water" },
            reproductive: { days: "60-90", activities: "Panicle initiation, flowering, fertilizer boost", water: "Maintain water, no stress" },
            ripening: { days: "90-120", activities: "Grain filling, drain field 10 days before harvest", water: "Drain gradually" },
            harvest: { days: "120-150", activities: "Cut when 80% grains golden, thresh, dry to 14% moisture", water: "No water" }
        },
        fertilizer_schedule: {
            basal: "Apply 50% N, 100% P, 100% K at transplanting",
            tillering: "Apply 25% N at 20-25 days after transplanting",
            panicle: "Apply 25% N at panicle initiation (50-55 days)"
        },
        common_issues: "Blast disease, stem borer, brown plant hopper, iron deficiency"
    },
    
    wheat: {
        name: "Wheat",
        total_duration: "120-130 days",
        stages: {
            land_prep: { days: "0-7", activities: "Deep plowing, harrowing, leveling, pre-irrigation", water: "Pre-sowing irrigation" },
            sowing: { days: "7-10", activities: "Seed treatment, line sowing 20cm rows, 100kg/ha seed rate", water: "Light irrigation if dry" },
            germination: { days: "10-17", activities: "Ensure moisture, protect from birds", water: "Light irrigation if needed" },
            tillering: { days: "17-40", activities: "First irrigation, weeding, top dressing nitrogen", water: "Crown root initiation (21 days)" },
            jointing: { days: "40-60", activities: "Second irrigation, nitrogen application, pest watch", water: "Late jointing stage" },
            booting: { days: "60-75", activities: "Third irrigation, fungicide if needed", water: "Boot stage" },
            flowering: { days: "75-90", activities: "Fourth irrigation, protect from heat", water: "Flowering stage" },
            grain_filling: { days: "90-110", activities: "Fifth irrigation, monitor for diseases", water: "Milk stage" },
            maturity: { days: "110-120", activities: "Stop irrigation, prepare for harvest", water: "No water last 10 days" },
            harvest: { days: "120-130", activities: "Harvest when moisture 20-25%, thresh, dry", water: "No water" }
        },
        fertilizer_schedule: {
            basal: "Apply 50% N, 100% P, 100% K at sowing",
            first_top: "Apply 25% N at first irrigation (21 days)",
            second_top: "Apply 25% N at second irrigation (40 days)"
        },
        common_issues: "Rust diseases, aphids, termites, lodging in late season"
    },
    
    tomato: {
        name: "Tomato",
        total_duration: "60-85 days from transplanting",
        stages: {
            nursery: { days: "0-25", activities: "Seed sowing in trays, maintain 25-30°C, harden before transplant", water: "Light misting" },
            transplanting: { days: "25-30", activities: "Transplant 4-5 week seedlings, 60x45cm spacing, stake immediately", water: "Heavy watering" },
            vegetative: { days: "30-45", activities: "Staking, pruning suckers, first fertilizer", water: "Regular, avoid wetting leaves" },
            flowering: { days: "45-60", activities: "Pollination (shake plants), calcium spray, pest control", water: "Consistent moisture" },
            fruit_set: { days: "60-70", activities: "Support heavy branches, continue feeding, monitor pests", water: "Increase watering" },
            fruit_development: { days: "70-80", activities: "Reduce nitrogen, increase potassium, prune lower leaves", water: "Consistent, avoid fluctuation" },
            ripening: { days: "80-90", activities: "Harvest when fully colored, reduce watering slightly", water: "Moderate watering" },
            harvest: { days: "90-120", activities: "Pick every 2-3 days, handle carefully, sort by size", water: "Maintain moisture" }
        },
        fertilizer_schedule: {
            transplant: "Apply compost and starter fertilizer",
            vegetative: "NPK 19-19-19 every 2 weeks",
            flowering: "Switch to high K fertilizer (10-20-20)",
            fruiting: "Continue high K, add calcium spray weekly"
        },
        common_issues: "Blight, whiteflies, fruit cracking, blossom end rot, hornworms"
    },
    
    corn: {
        name: "Corn/Maize",
        total_duration: "90-120 days",
        stages: {
            land_prep: { days: "0-7", activities: "Deep plowing, harrowing, make ridges if needed", water: "Pre-sowing irrigation if dry" },
            sowing: { days: "7-10", activities: "Seed treatment, sow 2-3 seeds/hill, 60x20cm spacing", water: "Ensure soil moisture" },
            germination: { days: "10-17", activities: "Thin to 1-2 plants/hill, protect from birds", water: "Light irrigation" },
            vegetative: { days: "17-45", activities: "Weeding, earthing up, first fertilizer", water: "Critical - knee high stage" },
            tasseling: { days: "45-60", activities: "Second fertilizer, ensure pollination, pest control", water: "Most critical stage" },
            silking: { days: "60-70", activities: "Monitor for corn borer, hand pollinate if needed", water: "Critical for kernel set" },
            grain_filling: { days: "70-100", activities: "Protect from birds, monitor moisture", water: "Maintain consistent moisture" },
            maturity: { days: "100-110", activities: "Check kernel moisture, prepare for harvest", water: "Reduce watering" },
            harvest: { days: "110-120", activities: "Harvest when kernels hard, moisture 20-25%, dry properly", water: "No irrigation" }
        },
        fertilizer_schedule: {
            basal: "Apply 25% N, 100% P, 100% K at sowing",
            knee_high: "Apply 50% N at knee-high stage (30 days)",
            tasseling: "Apply 25% N just before tasseling (45 days)"
        },
        common_issues: "Fall armyworm, corn borer, rust, stalk rot, poor pollination"
    }
};

// Market Intelligence Data
const marketKnowledge = {
    pricing_factors: {
        supply_demand: {
            factor: "Supply and Demand",
            impact: "High",
            description: "Oversupply drops prices 30-50%, shortage increases 50-100%",
            timing: "Harvest season = low prices, off-season = high prices",
            strategy: "Store produce for off-season, use cold storage, plan harvest timing"
        },
        quality: {
            factor: "Produce Quality",
            impact: "High",
            description: "Grade A can fetch 40-60% premium over Grade C",
            grading: "Size, color, freshness, absence of defects",
            strategy: "Proper harvesting, careful handling, quick cooling, good packaging"
        },
        location: {
            factor: "Market Location",
            impact: "Moderate",
            description: "Urban markets pay 20-40% more than rural",
            transport: "Factor in transport costs (10-15% of price)",
            strategy: "Direct to urban markets, farmer cooperatives, contract farming"
        },
        season: {
            factor: "Seasonal Variation",
            impact: "Very High",
            description: "Prices can vary 100-200% between seasons",
            patterns: "Festival seasons = high demand, post-harvest = low prices",
            strategy: "Greenhouse for off-season, storage, value addition"
        },
        weather: {
            factor: "Weather Events",
            impact: "High",
            description: "Drought/flood can spike prices 50-150%",
            prediction: "Monitor weather forecasts, crop reports",
            strategy: "Flexible planting, insurance, diversification"
        }
    },
    
    selling_strategies: {
        direct_consumer: {
            method: "Direct to Consumer",
            profit_margin: "40-60% higher than wholesale",
            requirements: "Time, transport, market presence",
            best_for: "Vegetables, fruits, organic produce",
            challenges: "Daily effort, perishability, small volumes",
            tips: "Farmers markets, roadside stands, home delivery, social media marketing"
        },
        cooperative: {
            method: "Farmer Cooperative",
            profit_margin: "20-30% higher than individual selling",
            requirements: "Membership, quality standards, collective action",
            best_for: "All crops, especially bulk commodities",
            challenges: "Coordination, quality control, trust",
            tips: "Join established cooperatives, collective bargaining, shared transport"
        },
        contract_farming: {
            method: "Contract Farming",
            profit_margin: "Guaranteed price, reduced risk",
            requirements: "Meet buyer specifications, consistent quality",
            best_for: "Cash crops, vegetables for processing, export crops",
            challenges: "Strict quality norms, dependency on single buyer",
            tips: "Read contracts carefully, maintain quality, diversify buyers"
        },
        value_addition: {
            method: "Value Addition/Processing",
            profit_margin: "100-300% higher than raw produce",
            requirements: "Processing equipment, licenses, packaging",
            best_for: "Fruits (jams, juices), vegetables (pickles, dried), grains (flour)",
            challenges: "Initial investment, shelf life, marketing",
            tips: "Start small, get certifications, focus on quality, unique products"
        },
        online_platforms: {
            method: "Online Marketplaces",
            profit_margin: "30-50% higher, wider reach",
            requirements: "Internet, smartphone, packaging, logistics",
            best_for: "Organic produce, specialty crops, direct consumer sales",
            challenges: "Digital literacy, logistics, payment systems",
            tips: "Use farmer-focused platforms, good photos, prompt delivery, customer service"
        }
    },
    
    price_trends: {
        vegetables: {
            peak_season: "Prices drop 40-60% during peak harvest",
            off_season: "Prices increase 80-150% in off-season",
            storage_potential: "Onion, potato, garlic - good; leafy vegetables - poor",
            best_strategy: "Staggered planting, cold storage, greenhouse for off-season"
        },
        cereals: {
            harvest_time: "Prices lowest immediately after harvest",
            storage_benefit: "Can increase 15-30% over 6 months",
            government_support: "MSP (Minimum Support Price) provides floor",
            best_strategy: "Store if prices below MSP, sell gradually, watch for pest damage"
        },
        fruits: {
            perishability: "High - sell quickly or process",
            quality_premium: "Export quality fetches 100-200% premium",
            processing: "Juice, jam, dried fruit adds 150-300% value",
            best_strategy: "Quick harvest-to-market, cold chain, value addition"
        },
        cash_crops: {
            global_prices: "Influenced by international markets",
            volatility: "Can swing 30-50% based on global supply",
            contracts: "Forward contracts reduce risk",
            best_strategy: "Monitor global trends, hedge with contracts, diversify"
        }
    }
};

// Export all knowledge bases
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { weatherKnowledge, pestKnowledge, cropTimeline, marketKnowledge };
}
