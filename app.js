// Mock data for listings
const mockListings = [
    {
        id: 1,
        title: "Mercedes-Benz G-Class 4,0L 2026",
        price: 285000,
        priceDisplay: "€285.000",
        location: "Limassol",
        category: "motors",
        status: "active",
        views: 245,
        favorites: 12,
        image: "https://picsum.photos/seed/car1/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-04-14'),
        statusText: "Active until 14.04.2026, 17:29",
        vipText: "VIP until 14.04.2026, 17:29"
    },
    {
        id: 2,
        title: "MW X6 3,0L 2022",
        price: 61500,
        priceDisplay: "€61.500",
        location: "Nicosia",
        category: "motors",
        status: "active",
        views: 189,
        favorites: 8,
        image: "https://picsum.photos/seed/car2/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-14'),
        statusText: "Active until 14.04.2026, 17:29"
    },
    {
        id: 3,
        title: "Land Rover Range Rover Evoque 2,0L 2017",
        price: 17700,
        priceDisplay: "€17.700",
        location: "Paphos",
        category: "motors",
        status: "active",
        views: 312,
        favorites: 15,
        image: "https://picsum.photos/seed/car3/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-10'),
        statusText: "Active until 14.04.2026, 17:29"
    },
    {
        id: 4,
        title: "Audi A4 Quattro S-Line 2022",
        price: 42000,
        priceDisplay: "€42.000",
        location: "Larnaca",
        category: "motors",
        status: "pending",
        views: 156,
        favorites: 6,
        image: "https://picsum.photos/seed/car4/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-08'),
        statusText: "Pending moderation"
    },
    {
        id: 5,
        title: "Honda Civic Type R 2023",
        price: 48000,
        priceDisplay: "€48.000",
        location: "Limassol",
        category: "motors",
        status: "active",
        views: 423,
        favorites: 28,
        image: "https://picsum.photos/seed/car5/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-05'),
        statusText: "Active until 14.04.2026, 17:29"
    },
    {
        id: 6,
        title: "3 Bedroom Apartment in City Center",
        price: 285000,
        priceDisplay: "€285.000",
        location: "Nicosia",
        category: "property",
        status: "active",
        views: 198,
        favorites: 11,
        image: "https://picsum.photos/seed/apt1/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-03'),
        statusText: "Active until 14.04.2026, 17:29"
    },
    {
        id: 7,
        title: "Italian Leather Sofa Set",
        price: 2500,
        priceDisplay: "€2.500",
        location: "Paphos",
        category: "furniture",
        status: "expired",
        views: 87,
        favorites: 3,
        image: "https://picsum.photos/seed/sofa1/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-03-01'),
        statusText: "Expired on 01.03.2024"
    },
    // Additional Motors listings
    {
        id: 8,
        title: "Toyota Camry 2.5L Hybrid 2023",
        price: 35000,
        priceDisplay: "€35.000",
        location: "Nicosia",
        category: "motors",
        status: "active",
        views: 178,
        favorites: 9,
        image: "https://picsum.photos/seed/car8/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-12'),
        statusText: "Active until 12.04.2026, 14:30"
    },
    {
        id: 9,
        title: "Porsche 911 Carrera S 2021",
        price: 145000,
        priceDisplay: "€145.000",
        location: "Limassol",
        category: "motors",
        status: "active",
        views: 567,
        favorites: 42,
        image: "https://picsum.photos/seed/car9/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-11'),
        statusText: "Active until 11.04.2026, 10:15",
        vipText: "VIP until 18.04.2026, 10:15"
    },
    {
        id: 10,
        title: "Volkswagen Golf GTI 2022",
        price: 32500,
        priceDisplay: "€32.500",
        location: "Larnaca",
        category: "motors",
        status: "active",
        views: 234,
        favorites: 17,
        image: "https://picsum.photos/seed/car10/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-09'),
        statusText: "Active until 09.04.2026, 16:45"
    },
    {
        id: 11,
        title: "Nissan Patrol 5.6L V8 2024",
        price: 89000,
        priceDisplay: "€89.000",
        location: "Paphos",
        category: "motors",
        status: "active",
        views: 312,
        favorites: 23,
        image: "https://picsum.photos/seed/car11/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-04-07'),
        statusText: "Active until 07.04.2026, 09:20",
        vipText: "VIP until 14.04.2026, 09:20"
    },
    {
        id: 12,
        title: "Ford Mustang GT 5.0L 2023",
        price: 58000,
        priceDisplay: "€58.000",
        location: "Nicosia",
        category: "motors",
        status: "active",
        views: 445,
        favorites: 31,
        image: "https://picsum.photos/seed/car12/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-06'),
        statusText: "Active until 06.04.2026, 11:00"
    },
    {
        id: 13,
        title: "Mazda CX-5 2.5L AWD 2022",
        price: 28500,
        priceDisplay: "€28.500",
        location: "Limassol",
        category: "motors",
        status: "pending",
        views: 89,
        favorites: 4,
        image: "https://picsum.photos/seed/car13/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-04'),
        statusText: "Pending moderation"
    },
    {
        id: 14,
        title: "Tesla Model 3 Long Range 2023",
        price: 52000,
        priceDisplay: "€52.000",
        location: "Larnaca",
        category: "motors",
        status: "active",
        views: 678,
        favorites: 56,
        image: "https://picsum.photos/seed/car14/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-02'),
        statusText: "Active until 02.04.2026, 13:45",
        vipText: "VIP until 09.04.2026, 13:45"
    },
    {
        id: 15,
        title: "Chevrolet Corvette C8 2022",
        price: 95000,
        priceDisplay: "€95.000",
        location: "Paphos",
        category: "motors",
        status: "active",
        views: 389,
        favorites: 27,
        image: "https://picsum.photos/seed/car15/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-03-30'),
        statusText: "Active until 30.03.2026, 15:30"
    },
    {
        id: 16,
        title: "Kia Sportage 1.6T 2024",
        price: 31000,
        priceDisplay: "€31.000",
        location: "Nicosia",
        category: "motors",
        status: "active",
        views: 156,
        favorites: 11,
        image: "https://picsum.photos/seed/car16/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-03-28'),
        statusText: "Active until 28.03.2026, 08:00"
    },
    {
        id: 17,
        title: "Lexus RX 450h Hybrid 2023",
        price: 72000,
        priceDisplay: "€72.000",
        location: "Limassol",
        category: "motors",
        status: "active",
        views: 267,
        favorites: 19,
        image: "https://picsum.photos/seed/car17/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-03-25'),
        statusText: "Active until 25.03.2026, 12:15",
        vipText: "VIP until 01.04.2026, 12:15"
    },
    // Additional Property listings
    {
        id: 18,
        title: "Luxury Villa with Pool in Limassol",
        price: 850000,
        priceDisplay: "€850.000",
        location: "Limassol",
        category: "property",
        status: "active",
        views: 456,
        favorites: 34,
        image: "https://picsum.photos/seed/prop1/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-13'),
        statusText: "Active until 13.04.2026, 10:00",
        vipText: "VIP until 20.04.2026, 10:00"
    },
    {
        id: 19,
        title: "2 Bedroom Apartment Sea View",
        price: 195000,
        priceDisplay: "€195.000",
        location: "Paphos",
        category: "property",
        status: "active",
        views: 289,
        favorites: 21,
        image: "https://picsum.photos/seed/prop2/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-12'),
        statusText: "Active until 12.04.2026, 14:30"
    },
    {
        id: 20,
        title: "Penthouse 4 Bedrooms Downtown",
        price: 520000,
        priceDisplay: "€520.000",
        location: "Nicosia",
        category: "property",
        status: "active",
        views: 378,
        favorites: 29,
        image: "https://picsum.photos/seed/prop3/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-04-10'),
        statusText: "Active until 10.04.2026, 09:45",
        vipText: "VIP until 17.04.2026, 09:45"
    },
    {
        id: 21,
        title: "Studio Apartment Near Beach",
        price: 85000,
        priceDisplay: "€85.000",
        location: "Larnaca",
        category: "property",
        status: "active",
        views: 167,
        favorites: 12,
        image: "https://picsum.photos/seed/prop4/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-08'),
        statusText: "Active until 08.04.2026, 16:00"
    },
    {
        id: 22,
        title: "Modern Townhouse 3 Floors",
        price: 340000,
        priceDisplay: "€340.000",
        location: "Limassol",
        category: "property",
        status: "pending",
        views: 45,
        favorites: 2,
        image: "https://picsum.photos/seed/prop5/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-06'),
        statusText: "Pending moderation"
    },
    {
        id: 23,
        title: "Commercial Office Space 200m²",
        price: 450000,
        priceDisplay: "€450.000",
        location: "Nicosia",
        category: "property",
        status: "active",
        views: 234,
        favorites: 8,
        image: "https://picsum.photos/seed/prop6/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-05'),
        statusText: "Active until 05.04.2026, 11:30"
    },
    {
        id: 24,
        title: "Detached House with Garden",
        price: 275000,
        priceDisplay: "€275.000",
        location: "Paphos",
        category: "property",
        status: "active",
        views: 312,
        favorites: 18,
        image: "https://picsum.photos/seed/prop7/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-03'),
        statusText: "Active until 03.04.2026, 08:15",
        vipText: "VIP until 10.04.2026, 08:15"
    },
    {
        id: 25,
        title: "1 Bedroom Flat for Investment",
        price: 120000,
        priceDisplay: "€120.000",
        location: "Larnaca",
        category: "property",
        status: "active",
        views: 198,
        favorites: 14,
        image: "https://picsum.photos/seed/prop8/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-01'),
        statusText: "Active until 01.04.2026, 13:00"
    },
    {
        id: 26,
        title: "Seafront Apartment Complex",
        price: 1200000,
        priceDisplay: "€1.200.000",
        location: "Limassol",
        category: "property",
        status: "active",
        views: 567,
        favorites: 41,
        image: "https://picsum.photos/seed/prop9/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-03-29'),
        statusText: "Active until 29.03.2026, 10:45",
        vipText: "VIP until 05.04.2026, 10:45"
    },
    {
        id: 27,
        title: "Mountain View Chalet 5 Rooms",
        price: 380000,
        priceDisplay: "€380.000",
        location: "Troodos",
        category: "property",
        status: "active",
        views: 145,
        favorites: 9,
        image: "https://picsum.photos/seed/prop10/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-03-27'),
        statusText: "Active until 27.03.2026, 15:20"
    },
    // Additional Electronics/Furniture listings
    {
        id: 28,
        title: "Samsung 75\" QLED Smart TV",
        price: 1800,
        priceDisplay: "€1.800",
        location: "Nicosia",
        category: "furniture",
        status: "active",
        views: 234,
        favorites: 18,
        image: "https://picsum.photos/seed/elec1/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-04-14'),
        statusText: "Active until 14.04.2026, 11:00",
        vipText: "VIP until 21.04.2026, 11:00"
    },
    {
        id: 29,
        title: "Apple MacBook Pro M3 16\"",
        price: 2800,
        priceDisplay: "€2.800",
        location: "Limassol",
        category: "furniture",
        status: "active",
        views: 456,
        favorites: 32,
        image: "https://picsum.photos/seed/elec2/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-13'),
        statusText: "Active until 13.04.2026, 09:30",
        vipText: "VIP until 20.04.2026, 09:30"
    },
    {
        id: 30,
        title: "Dining Table Oak Wood 8 Seats",
        price: 1200,
        priceDisplay: "€1.200",
        location: "Paphos",
        category: "furniture",
        status: "active",
        views: 167,
        favorites: 11,
        image: "https://picsum.photos/seed/furn1/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-11'),
        statusText: "Active until 11.04.2026, 14:15"
    },
    {
        id: 31,
        title: "PlayStation 5 + 10 Games Bundle",
        price: 650,
        priceDisplay: "€650",
        location: "Larnaca",
        category: "furniture",
        status: "active",
        views: 389,
        favorites: 28,
        image: "https://picsum.photos/seed/elec3/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-09'),
        statusText: "Active until 09.04.2026, 16:45"
    },
    {
        id: 32,
        title: "King Size Bed with Mattress",
        price: 950,
        priceDisplay: "€950",
        location: "Nicosia",
        category: "furniture",
        status: "active",
        views: 145,
        favorites: 8,
        image: "https://picsum.photos/seed/furn2/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-07'),
        statusText: "Active until 07.04.2026, 10:30"
    },
    {
        id: 33,
        title: "Canon EOS R5 Camera Kit",
        price: 4200,
        priceDisplay: "€4.200",
        location: "Limassol",
        category: "furniture",
        status: "active",
        views: 278,
        favorites: 19,
        image: "https://picsum.photos/seed/elec4/160/160",
        hasVip: true,
        hasTop: true,
        date: new Date('2024-04-05'),
        statusText: "Active until 05.04.2026, 12:00",
        vipText: "VIP until 12.04.2026, 12:00"
    },
    {
        id: 34,
        title: "Modern L-Shape Sectional Sofa",
        price: 1650,
        priceDisplay: "€1.650",
        location: "Paphos",
        category: "furniture",
        status: "pending",
        views: 56,
        favorites: 3,
        image: "https://picsum.photos/seed/furn3/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-04-03'),
        statusText: "Pending moderation"
    },
    {
        id: 35,
        title: "iPhone 15 Pro Max 256GB",
        price: 1350,
        priceDisplay: "€1.350",
        location: "Nicosia",
        category: "furniture",
        status: "active",
        views: 512,
        favorites: 37,
        image: "https://picsum.photos/seed/elec5/160/160",
        hasVip: false,
        hasTop: true,
        date: new Date('2024-04-01'),
        statusText: "Active until 01.04.2026, 08:45"
    },
    {
        id: 36,
        title: "Office Desk with Drawers",
        price: 380,
        priceDisplay: "€380",
        location: "Larnaca",
        category: "furniture",
        status: "active",
        views: 98,
        favorites: 5,
        image: "https://picsum.photos/seed/furn4/160/160",
        hasVip: false,
        hasTop: false,
        date: new Date('2024-03-29'),
        statusText: "Active until 29.03.2026, 15:00"
    },
    {
        id: 37,
        title: "Dyson V15 Vacuum Cleaner",
        price: 680,
        priceDisplay: "€680",
        location: "Limassol",
        category: "furniture",
        status: "active",
        views: 187,
        favorites: 14,
        image: "https://picsum.photos/seed/elec6/160/160",
        hasVip: true,
        hasTop: false,
        date: new Date('2024-03-27'),
        statusText: "Active until 27.03.2026, 11:30",
        vipText: "VIP until 03.04.2026, 11:30"
    }
];

// Package configuration
const packageConfig = {
    name: 'VIP for 5 days',
    totalSlots: 5,
    usedSlots: 0,
    pricePerAd: 2.50
};

// Wallet configuration
const walletConfig = {
    balance: 25.00,
    pricePerAd: 2.50
};

// State
let state = {
    currentScreen: 'screen-my-listings',
    selectedListings: new Set(),
    filters: {
        category: '',
        status: '',
        promotion: '',
        keyword: '',
        location: '',
        priceFrom: '',
        priceTo: ''
    },
    sort: 'date-desc',
    pendingPromotionType: null,
    lastAppliedListings: []
};

// Social proof messages for different listing types
const socialProofMessages = [
    { text: "Похожий продался за 3 дня с VIP", type: "success", icon: "🎉" },
    { text: "92% продавцов используют TOP", type: "info", icon: "📊" },
    { text: "+280% просмотров с VIP", type: "success", icon: "📈" },
    { text: "В топе поиска последние 24ч", type: "info", icon: "🔥" },
    { text: "5 человек смотрят прямо сейчас", type: "warning", icon: "👀" },
    { text: "Высокий спрос в этой категории", type: "success", icon: "💎" }
];

// Generate smart suggestions based on listings data
function generateSmartSuggestions() {
    const suggestions = [];

    // Find most viewed without VIP
    const mostViewed = mockListings
        .filter(l => l.status === 'active' && !l.hasVip)
        .sort((a, b) => b.views - a.views)
        .slice(0, 1)[0];

    if (mostViewed) {
        suggestions.push({
            listing: mostViewed,
            reason: `${mostViewed.views} просмотров — VIP увеличит на 40%`,
            icon: "📈",
            action: "Добавить VIP"
        });
    }

    // Find premium cars without promotion
    const premiumCar = mockListings
        .find(l => l.status === 'active' && l.price > 80000 && !l.hasVip && !l.hasTop && l.category === 'motors');

    if (premiumCar) {
        suggestions.push({
            listing: premiumCar,
            reason: "Премиум авто — TOP выделит среди конкурентов",
            icon: "💎",
            action: "Добавить TOP"
        });
    }

    // Find listings with high favorites but no VIP
    const highFavorites = mockListings
        .filter(l => l.status === 'active' && l.favorites > 20 && !l.hasVip)
        .sort((a, b) => b.favorites - a.favorites)
        .slice(0, 1)[0];

    if (highFavorites) {
        suggestions.push({
            listing: highFavorites,
            reason: `${highFavorites.favorites} в избранном — горячий интерес!`,
            icon: "❤️",
            action: "Продвинуть"
        });
    }

    return suggestions;
}

// Render smart suggestions
function renderSmartSuggestions() {
    const container = document.getElementById('suggestions-carousel');
    if (!container) return;

    const suggestions = generateSmartSuggestions();

    if (suggestions.length === 0) {
        document.getElementById('smart-suggestions').style.display = 'none';
        return;
    }

    container.innerHTML = suggestions.map(s => `
        <div class="suggestion-card" onclick="applySuggestion(${s.listing.id})">
            <div class="suggestion-header">
                <img src="${s.listing.image}" alt="${s.listing.title}" class="suggestion-image">
                <div class="suggestion-info">
                    <div class="suggestion-title">${s.listing.title}</div>
                    <div class="suggestion-stats">
                        <span>👁 ${s.listing.views}</span>
                        <span>❤️ ${s.listing.favorites}</span>
                    </div>
                </div>
            </div>
            <div class="suggestion-reason">
                <span class="reason-icon">${s.icon}</span>
                <span class="reason-text">${s.reason}</span>
            </div>
            <div class="suggestion-action">
                <button class="suggestion-btn">${s.action}</button>
            </div>
        </div>
    `).join('');
}

// Apply suggestion (quick VIP)
function applySuggestion(listingId) {
    state.selectedListings.clear();
    state.selectedListings.add(listingId);
    updateSelectionUI();
    navigateTo('screen-package-apply');

    // Auto-scroll to the listing
    setTimeout(() => {
        const card = document.querySelector(`#listings-package .listing-card[data-id="${listingId}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight');
            setTimeout(() => card.classList.remove('highlight'), 2000);
        }
    }, 300);
}

// Apply bundle strategy
function applyBundle(bundleType) {
    state.selectedListings.clear();

    let selectedIds = [];

    switch (bundleType) {
        case 'fast-sale':
            // Top 3 most viewed active listings without VIP
            selectedIds = mockListings
                .filter(l => l.status === 'active' && !l.hasVip)
                .sort((a, b) => b.views - a.views)
                .slice(0, 3)
                .map(l => l.id);
            break;

        case 'premium':
            // All cars over €50k without TOP
            selectedIds = mockListings
                .filter(l => l.status === 'active' && l.category === 'motors' && l.price > 50000 && !l.hasTop)
                .map(l => l.id);
            break;

        case 'refresh':
            // Listings older than 7 days
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            selectedIds = mockListings
                .filter(l => l.status === 'active' && l.date < sevenDaysAgo)
                .map(l => l.id);
            break;
    }

    selectedIds.forEach(id => state.selectedListings.add(id));
    updateSelectionUI();

    // Navigate to appropriate screen
    navigateTo('screen-package-apply');

    // Show toast with bundle info
    showBundleToast(bundleType, selectedIds.length);
}

// Show bundle applied toast
function showBundleToast(bundleType, count) {
    const messages = {
        'fast-sale': `🔥 Выбрано ${count} самых просматриваемых`,
        'premium': `💎 Выбрано ${count} премиум объявлений`,
        'refresh': `🔄 Выбрано ${count} объявлений для обновления`
    };

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'bundle-toast';
    toast.textContent = messages[bundleType];
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Update package health bar
function updatePackageHealthBar() {
    const remaining = packageConfig.totalSlots - packageConfig.usedSlots;
    const segments = document.querySelectorAll('.battery-segment');
    const batteryCount = document.getElementById('battery-count');

    if (batteryCount) {
        batteryCount.textContent = `${remaining}/${packageConfig.totalSlots}`;
    }

    segments.forEach((seg, index) => {
        seg.classList.remove('filled', 'warning', 'critical');

        if (index < remaining) {
            if (remaining <= 1) {
                seg.classList.add('critical');
            } else if (remaining <= 2) {
                seg.classList.add('warning');
            } else {
                seg.classList.add('filled');
            }
        }
    });

    // Update tip based on remaining
    const healthTip = document.getElementById('health-tip');
    if (healthTip) {
        if (remaining <= 1) {
            healthTip.innerHTML = `
                <span class="tip-icon">⚠️</span>
                <span class="tip-text" style="color: #B42525;">Остался последний слот!</span>
            `;
        } else if (remaining <= 2) {
            healthTip.innerHTML = `
                <span class="tip-icon">💡</span>
                <span class="tip-text">Используйте на самые важные</span>
            `;
        }
    }
}

// Get random social proof for a listing
function getRandomSocialProof(listing) {
    // Only show for some listings to not overwhelm
    if (Math.random() > 0.4) return null;

    // Higher chance for popular listings
    if (listing.views > 300 || listing.favorites > 20) {
        return socialProofMessages[Math.floor(Math.random() * socialProofMessages.length)];
    }

    return socialProofMessages[Math.floor(Math.random() * 3)];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderListings('listings-main', mockListings);
    renderListings('listings-package', mockListings.filter(l => l.status === 'active'));
    renderListings('listings-wallet', mockListings.filter(l => l.status === 'active'));
    renderListings('listings-success', mockListings);

    setupSelectAllHandlers();
    updateSortDisplay();
    updateDropdownSelections();
    updateProgressBar();
    updateWalletDisplay();
    renderSmartSuggestions();
    updatePackageHealthBar();
});

// Navigation
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;

    // Reset selection when navigating
    if (screenId === 'screen-my-listings') {
        state.selectedListings.clear();
        updateSelectionUI();
    }
}

// Render listings
function renderListings(containerId, listings) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Apply filters
    let filteredListings = applyFiltersToListings(listings);

    // Apply sort
    filteredListings = applySortToListings(filteredListings);

    if (filteredListings.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h3>No listings found</h3>
                <p>Try adjusting your filters to see more results</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredListings.map(listing => {
        const badgesHtml = [];
        if (listing.hasVip) badgesHtml.push('<span class="badge vip">VIP</span>');
        if (listing.hasTop) badgesHtml.push('<span class="badge top">TOP</span>');

        // Get social proof for this listing (only for listings without promotions)
        const socialProof = (!listing.hasVip && !listing.hasTop) ? getRandomSocialProof(listing) : null;
        const socialProofHtml = socialProof ? `
            <div class="social-proof ${socialProof.type}">
                <span class="social-proof-icon">${socialProof.icon}</span>
                <span class="social-proof-text">${socialProof.text}</span>
            </div>
        ` : '';

        return `
        <div class="listing-card" data-id="${listing.id}">
            <div class="listing-checkbox">
                <input type="checkbox" class="checkbox listing-check" data-id="${listing.id}" ${state.selectedListings.has(listing.id) ? 'checked' : ''}>
            </div>
            <img src="${listing.image}" alt="${listing.title}" class="listing-image">
            <div class="listing-info">
                ${badgesHtml.length > 0 ? `
                <div class="listing-price-row">
                    <div class="listing-badges">${badgesHtml.join('')}</div>
                    <div class="listing-price">${listing.priceDisplay}</div>
                </div>
                ` : `<div class="listing-price">${listing.priceDisplay}</div>`}
                <div class="listing-title">${listing.title}</div>
                <div class="listing-status">${listing.statusText || `${listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}`}${listing.hasVip && listing.vipText ? `<br>${listing.vipText}` : ''}</div>
                ${socialProofHtml}
            </div>
        </div>
    `;}).join('');

    // Add click handlers
    container.querySelectorAll('.listing-check').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            if (e.target.checked) {
                state.selectedListings.add(id);
            } else {
                state.selectedListings.delete(id);
            }
            updateSelectionUI();
        });
    });
}

// Apply filters
function applyFiltersToListings(listings) {
    return listings.filter(listing => {
        // Category filter
        if (state.filters.category && listing.category !== state.filters.category) {
            return false;
        }

        // Status filter
        if (state.filters.status && listing.status !== state.filters.status) {
            return false;
        }

        // Promotion filter
        if (state.filters.promotion) {
            if (state.filters.promotion === 'vip' && !listing.hasVip) return false;
            if (state.filters.promotion === 'top' && !listing.hasTop) return false;
            if (state.filters.promotion === 'none' && (listing.hasVip || listing.hasTop)) return false;
        }

        // Keyword filter
        if (state.filters.keyword) {
            const keyword = state.filters.keyword.toLowerCase();
            if (!listing.title.toLowerCase().includes(keyword)) {
                return false;
            }
        }

        // Location filter
        if (state.filters.location) {
            const location = state.filters.location.toLowerCase();
            if (!listing.location.toLowerCase().includes(location)) {
                return false;
            }
        }

        // Price range filter
        if (state.filters.priceFrom && listing.price < parseFloat(state.filters.priceFrom)) {
            return false;
        }
        if (state.filters.priceTo && listing.price > parseFloat(state.filters.priceTo)) {
            return false;
        }

        return true;
    });
}

// Apply sort
function applySortToListings(listings) {
    const sorted = [...listings];

    switch (state.sort) {
        case 'date-desc':
            sorted.sort((a, b) => b.date - a.date);
            break;
        case 'date-asc':
            sorted.sort((a, b) => a.date - b.date);
            break;
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'views-desc':
            sorted.sort((a, b) => b.views - a.views);
            break;
    }

    return sorted;
}

// Update all listings
function updateAllListings() {
    renderListings('listings-main', mockListings);
    renderListings('listings-package', mockListings.filter(l => l.status === 'active'));
    renderListings('listings-wallet', mockListings.filter(l => l.status === 'active'));
    renderListings('listings-success', mockListings);
}

// Selection UI
function updateSelectionUI() {
    const count = state.selectedListings.size;

    // Update selection actions bar visibility (for My Listings screen)
    const selectionActionsBar = document.getElementById('selection-actions-bar');
    if (selectionActionsBar) {
        selectionActionsBar.style.display = count > 0 ? 'flex' : 'none';
        const countSpan = document.getElementById('selected-count');
        if (countSpan) countSpan.textContent = count;
    }

    // Hide old promotion button if exists
    const promotionBtn = document.getElementById('promotion-btn');
    if (promotionBtn) {
        promotionBtn.style.display = 'none';
    }

    // Update package apply count
    const packageCount = document.getElementById('package-selected-count');
    if (packageCount) packageCount.textContent = count;

    // Update wallet apply count and total
    const walletCount = document.getElementById('wallet-selected-count');
    if (walletCount) walletCount.textContent = count;

    const walletTotal = document.getElementById('wallet-total');
    if (walletTotal) walletTotal.textContent = (count * walletConfig.pricePerAd).toFixed(2);

    // Update progress bar
    updateProgressBar();

    // Update wallet display
    updateWalletDisplay();
}

// Update progress bar
function updateProgressBar() {
    const count = state.selectedListings.size;
    const available = packageConfig.totalSlots - packageConfig.usedSlots;
    const newUsed = packageConfig.usedSlots + count;
    const percentage = (newUsed / packageConfig.totalSlots) * 100;

    const progressSection = document.getElementById('package-progress-section');
    const progressLabel = document.getElementById('progress-label');
    const progressCount = document.getElementById('progress-count');
    const progressBarFill = document.getElementById('progress-bar-fill');

    if (!progressSection) return;

    // Update text
    if (progressCount) progressCount.textContent = `${newUsed}/${packageConfig.totalSlots}`;

    // Update bar width
    if (progressBarFill) progressBarFill.style.width = `${Math.min(percentage, 100)}%`;

    // Update state classes
    progressSection.classList.remove('limit-warning', 'limit-reached');

    if (count > available) {
        progressSection.classList.add('limit-reached');
    } else if (newUsed >= packageConfig.totalSlots - 1) {
        progressSection.classList.add('limit-warning');
    }
}

// Update wallet display
function updateWalletDisplay() {
    const count = state.selectedListings.size;
    const totalCost = count * walletConfig.pricePerAd;

    const walletTotalDisplay = document.getElementById('wallet-total-display');
    const walletBalanceSection = document.querySelector('.wallet-balance-section');

    if (walletTotalDisplay) {
        walletTotalDisplay.textContent = `€${totalCost.toFixed(2)}`;
    }

    if (walletBalanceSection) {
        walletBalanceSection.classList.toggle('insufficient', totalCost > walletConfig.balance);
    }
}

// Setup select all handlers
function setupSelectAllHandlers() {
    document.querySelectorAll('[id^="select-all-"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const containerId = e.target.id.replace('select-all-', 'listings-');
            const container = document.getElementById(containerId);
            if (!container) return;

            container.querySelectorAll('.listing-check').forEach(listingCheckbox => {
                listingCheckbox.checked = e.target.checked;
                const id = parseInt(listingCheckbox.dataset.id);
                if (e.target.checked) {
                    state.selectedListings.add(id);
                } else {
                    state.selectedListings.delete(id);
                }
            });
            updateSelectionUI();
        });
    });
}

// Category dropdown
function openCategoryDropdown() {
    document.getElementById('category-dropdown').style.display = 'flex';
}

function closeCategoryDropdown() {
    document.getElementById('category-dropdown').style.display = 'none';
}

function selectCategory(value) {
    state.filters.category = value;
    document.getElementById('category-display').textContent = value ?
        value.charAt(0).toUpperCase() + value.slice(1) : 'All categories';
    closeCategoryDropdown();
    updateDropdownSelections();
    updateFilterBadge();
    updateAllListings();
}

// Status dropdown
function openStatusDropdown() {
    document.getElementById('status-dropdown').style.display = 'flex';
}

function closeStatusDropdown() {
    document.getElementById('status-dropdown').style.display = 'none';
}

function selectStatus(value) {
    state.filters.status = value;
    document.getElementById('status-display').textContent = value ?
        value.charAt(0).toUpperCase() + value.slice(1) : 'All status';
    closeStatusDropdown();
    updateDropdownSelections();
    updateFilterBadge();
    updateAllListings();
}

// Promotion dropdown
function openPromotionDropdown() {
    document.getElementById('promotion-dropdown').style.display = 'flex';
}

function closePromotionDropdown() {
    document.getElementById('promotion-dropdown').style.display = 'none';
}

function selectPromotion(value) {
    state.filters.promotion = value;
    let displayText = 'Promotion';
    if (value === 'vip') displayText = 'VIP';
    else if (value === 'top') displayText = 'TOP';
    else if (value === 'none') displayText = 'No promotion';

    document.getElementById('promotion-display').textContent = displayText;
    closePromotionDropdown();
    updateDropdownSelections();
    updateFilterBadge();
    updateAllListings();
}

// Update dropdown selections visually
function updateDropdownSelections() {
    // Category
    document.querySelectorAll('#category-dropdown .dropdown-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.value === state.filters.category);
    });

    // Status
    document.querySelectorAll('#status-dropdown .dropdown-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.value === state.filters.status);
    });

    // Promotion
    document.querySelectorAll('#promotion-dropdown .dropdown-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.value === state.filters.promotion);
    });
}

// Filter badge
function updateFilterBadge() {
    const badge = document.getElementById('filter-badge');
    if (!badge) return;

    const hasActiveFilters = state.filters.keyword ||
                            state.filters.location ||
                            state.filters.priceFrom ||
                            state.filters.priceTo;

    badge.style.display = hasActiveFilters ? 'block' : 'none';
}

// Filters Screen (More Filters)
function openFiltersModal() {
    document.getElementById('filter-keyword').value = state.filters.keyword || '';
    document.getElementById('filter-price-from').value = state.filters.priceFrom || '';
    document.getElementById('filter-price-to').value = state.filters.priceTo || '';

    // Show filters screen
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
        screen.classList.remove('active');
    });
    document.getElementById('filters-modal').style.display = 'flex';
    document.getElementById('filters-modal').classList.add('active');
}

function closeFiltersModal() {
    document.getElementById('filters-modal').style.display = 'none';
    document.getElementById('filters-modal').classList.remove('active');

    // Return to My Listings
    document.getElementById('screen-my-listings').style.display = 'flex';
    document.getElementById('screen-my-listings').classList.add('active');
}

function applyFilters() {
    state.filters.keyword = document.getElementById('filter-keyword').value;
    state.filters.priceFrom = document.getElementById('filter-price-from').value;
    state.filters.priceTo = document.getElementById('filter-price-to').value;

    closeFiltersModal();
    updateFilterBadge();
    updateAllListings();
}

function resetFilters() {
    state.filters = {
        category: '',
        status: '',
        promotion: '',
        keyword: '',
        location: '',
        priceFrom: '',
        priceTo: ''
    };

    document.getElementById('filter-keyword').value = '';
    document.getElementById('filter-price-from').value = '';
    document.getElementById('filter-price-to').value = '';

    document.getElementById('category-display').textContent = 'All categories';
    document.getElementById('status-display').textContent = 'All status';
    document.getElementById('promotion-display').textContent = 'Promotion';

    updateDropdownSelections();
    updateFilterBadge();
    updateAllListings();
}

// Sort Modal
function openSortModal() {
    document.getElementById('sort-modal').style.display = 'flex';
    updateSortDisplay();
}

function closeSortModal() {
    document.getElementById('sort-modal').style.display = 'none';
}

function selectSort(value) {
    state.sort = value;
    updateSortDisplay();
    closeSortModal();
    updateAllListings();
}

function updateSortDisplay() {
    // Update radio buttons
    document.querySelectorAll('.sort-option .radio').forEach(radio => {
        radio.classList.remove('selected');
    });

    const selectedRadio = document.getElementById(`sort-${state.sort}`);
    if (selectedRadio) {
        selectedRadio.classList.add('selected');
    }

    // Update sort display text
    const sortLabels = {
        'date-desc': 'Newest first',
        'date-asc': 'Oldest first',
        'price-asc': 'Price ↑',
        'price-desc': 'Price ↓',
        'views-desc': 'Most viewed'
    };

    const sortDisplay = document.getElementById('sort-display');
    if (sortDisplay && state.sort !== 'date-desc') {
        sortDisplay.textContent = sortLabels[state.sort] || 'Sort';
    }
}

// Apply Promotion - now shows confirmation dialog
function applyPromotion(type) {
    const count = state.selectedListings.size;
    if (count === 0) return;

    state.pendingPromotionType = type;

    // Update confirmation dialog
    const confirmCount = document.getElementById('confirm-count');
    const confirmPackage = document.getElementById('confirm-package');
    const confirmRemaining = document.getElementById('confirm-remaining');

    if (confirmCount) confirmCount.textContent = count;
    if (confirmPackage) confirmPackage.textContent = packageConfig.name;

    const remaining = packageConfig.totalSlots - packageConfig.usedSlots - count;
    if (confirmRemaining) confirmRemaining.textContent = `${Math.max(0, remaining)}/${packageConfig.totalSlots}`;

    // Show confirmation modal
    document.getElementById('confirm-modal').style.display = 'flex';
}

// Close confirmation modal
function closeConfirmModal() {
    document.getElementById('confirm-modal').style.display = 'none';
    state.pendingPromotionType = null;
}

// Confirm and apply promotion
function confirmApplyPromotion() {
    const count = state.selectedListings.size;
    const type = state.pendingPromotionType;

    // Store applied listings for undo
    state.lastAppliedListings = Array.from(state.selectedListings);

    // Update package usage
    if (type === 'package') {
        packageConfig.usedSlots += count;
    }

    // Close confirmation modal
    closeConfirmModal();

    // Show success animation on selected cards
    state.selectedListings.forEach(id => {
        const card = document.querySelector(`.listing-card[data-id="${id}"]`);
        if (card) {
            card.classList.add('success-applied');
            // Add VIP badge with animation
            const badgesContainer = card.querySelector('.listing-badges');
            if (badgesContainer && !badgesContainer.querySelector('.badge.vip')) {
                const vipBadge = document.createElement('span');
                vipBadge.className = 'badge vip animate-in';
                vipBadge.textContent = 'VIP';
                badgesContainer.prepend(vipBadge);
            }
        }
    });

    // Navigate to success screen after animation
    setTimeout(() => {
        navigateTo('screen-success');

        // Update snackbar message
        const snackbarText = document.getElementById('snackbar-text');
        if (snackbarText) {
            snackbarText.textContent = `VIP applied to ${count} ads`;
        }

        // Show snackbar
        const snackbar = document.getElementById('snackbar');
        if (snackbar) {
            snackbar.style.animation = 'none';
            snackbar.offsetHeight; // Trigger reflow
            snackbar.style.animation = 'slideUp 0.3s ease-out';
        }

        // Clear selection
        state.selectedListings.clear();
        updateSelectionUI();
    }, 800);
}

// Undo promotion
function undoPromotion() {
    if (state.lastAppliedListings.length === 0) return;

    const count = state.lastAppliedListings.length;

    // Restore package usage
    packageConfig.usedSlots = Math.max(0, packageConfig.usedSlots - count);

    // Remove success animation and VIP badges from cards
    state.lastAppliedListings.forEach(id => {
        const card = document.querySelector(`.listing-card[data-id="${id}"]`);
        if (card) {
            card.classList.remove('success-applied');
            const animatedBadge = card.querySelector('.badge.vip.animate-in');
            if (animatedBadge) {
                animatedBadge.remove();
            }
        }
    });

    // Update snackbar
    const snackbarText = document.getElementById('snackbar-text');
    if (snackbarText) {
        snackbarText.textContent = `Promotion undone for ${count} ads`;
    }

    // Clear last applied
    state.lastAppliedListings = [];

    // Hide snackbar after delay
    setTimeout(() => {
        const snackbar = document.getElementById('snackbar');
        if (snackbar) {
            snackbar.style.animation = 'slideUp 0.3s ease-out reverse';
        }
    }, 2000);
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
    }
});

// Hide selected ads
function hideSelectedAds() {
    const count = state.selectedListings.size;
    if (count === 0) return;

    // Update listing status to hidden (mock action)
    state.selectedListings.forEach(id => {
        const listing = mockListings.find(l => l.id === id);
        if (listing) {
            listing.status = 'hidden';
        }
    });

    // Clear selection
    state.selectedListings.clear();
    updateSelectionUI();
    updateAllListings();

    // Show success toast
    showActionToast(`${count} ad${count > 1 ? 's' : ''} hidden`);
}

// Open delete confirmation modal
function openDeleteConfirmModal() {
    const count = state.selectedListings.size;
    if (count === 0) return;

    // Update modal text with count
    const modalText = document.querySelector('.delete-modal-text');
    if (modalText) {
        modalText.textContent = `The ad${count > 1 ? 's' : ''} will disappear from your account. This action cannot be undone.`;
    }

    document.getElementById('delete-confirm-modal').style.display = 'flex';
}

// Close delete confirmation modal
function closeDeleteConfirmModal() {
    document.getElementById('delete-confirm-modal').style.display = 'none';
}

// Confirm delete ads
function confirmDeleteAds() {
    const count = state.selectedListings.size;
    if (count === 0) return;

    // Remove listings from mock data
    const idsToDelete = Array.from(state.selectedListings);
    idsToDelete.forEach(id => {
        const index = mockListings.findIndex(l => l.id === id);
        if (index > -1) {
            mockListings.splice(index, 1);
        }
    });

    // Close modal
    closeDeleteConfirmModal();

    // Clear selection
    state.selectedListings.clear();
    updateSelectionUI();
    updateAllListings();

    // Show success toast
    showActionToast(`${count} ad${count > 1 ? 's' : ''} deleted`);
}

// Show action toast notification
function showActionToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.action-toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'bundle-toast action-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}
