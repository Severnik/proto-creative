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

    // Update promotion button visibility
    const promotionBtn = document.getElementById('promotion-btn');
    if (promotionBtn) {
        promotionBtn.style.display = count > 0 ? 'block' : 'none';
        const countSpan = document.getElementById('selected-count');
        if (countSpan) countSpan.textContent = count;
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
