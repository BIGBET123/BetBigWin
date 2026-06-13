// ========================================
// BETBIGWIN VIP - JAVASCRIPT APPLICATION
// ========================================

// ========== DATA MANAGEMENT ==========
const predictionData = [
    {
        id: 1,
        league: "Premier League",
        match: "Manchester United vs Liverpool",
        date: "2026-06-14",
        time: "15:00",
        prediction: "Over 2.5",
        odds: "1.85",
        confidence: 92,
        status: "locked"
    },
    {
        id: 2,
        league: "La Liga",
        match: "Real Madrid vs Barcelona",
        date: "2026-06-14",
        time: "20:00",
        prediction: "Home Win",
        odds: "2.10",
        confidence: 88,
        status: "locked"
    },
    {
        id: 3,
        league: "Serie A",
        match: "Juventus vs Inter Milan",
        date: "2026-06-15",
        time: "18:30",
        prediction: "Draw",
        odds: "3.50",
        confidence: 78,
        status: "locked"
    },
    {
        id: 4,
        league: "Bundesliga",
        match: "Bayern Munich vs Borussia Dortmund",
        date: "2026-06-15",
        time: "19:30",
        prediction: "Over 3.5",
        odds: "1.95",
        confidence: 85,
        status: "locked"
    },
    {
        id: 5,
        league: "Ligue 1",
        match: "Paris Saint-Germain vs Olympique Marseille",
        date: "2026-06-16",
        time: "21:00",
        prediction: "Home Win",
        odds: "1.50",
        confidence: 95,
        status: "locked"
    }
];

const historyData = [
    {
        id: 1,
        match: "Man City vs Tottenham",
        prediction: "Over 2.5",
        result: "Over 3.5",
        status: "won",
        odds: "1.85",
        date: "2026-06-12",
        profit: "GH₵ 850"
    },
    {
        id: 2,
        match: "Chelsea vs Arsenal",
        prediction: "Draw",
        result: "Chelsea 2-1",
        status: "lost",
        odds: "3.50",
        date: "2026-06-11",
        profit: "-GH₵ 500"
    },
    {
        id: 3,
        match: "Everton vs Brighton",
        prediction: "Under 2.5",
        result: "Under 1.5",
        status: "won",
        odds: "2.20",
        date: "2026-06-10",
        profit: "GH₵ 1,100"
    }
];

const transactionData = [
    {
        type: "Deposit",
        amount: "+GH₵ 5,000.00",
        date: "2026-06-13",
        method: "Paystack"
    },
    {
        type: "Purchase - Premium Tips",
        amount: "-GH₵ 500.00",
        date: "2026-06-12",
        method: "Account Balance"
    },
    {
        type: "Winnings",
        amount: "+GH₵ 2,450.00",
        date: "2026-06-10",
        method: "Account Credit"
    },
    {
        type: "Withdrawal",
        amount: "-GH₵ 3,000.00",
        date: "2026-06-08",
        method: "Bank Transfer"
    }
];

// ========== PAGE NAVIGATION ==========
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ========== DASHBOARD NAVIGATION ==========
function navigateTo(section) {
    // Make sure we're on dashboard
    const dashboardPage = document.getElementById('dashboard-page');
    if (!dashboardPage.classList.contains('active')) {
        showPage('dashboard');
    }
    
    // Hide all page content
    const pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected section
    const selectedContent = document.getElementById(section + '-content');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Update nav buttons
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    if (section === 'dashboard') {
        document.getElementById('nav-home').classList.add('active');
    } else {
        const navButton = document.getElementById('nav-' + section);
        if (navButton) {
            navButton.classList.add('active');
        }
    }
    
    // Load content for the section
    if (section === 'predictions') {
        loadAllPredictions();
    } else if (section === 'history') {
        loadHistory();
    } else if (section === 'wallet') {
        loadTransactions();
    } else if (section === 'profile') {
        loadProfile();
    } else if (section === 'dashboard') {
        loadTodayPredictions();
    }
}

// ========== AUTHENTICATION FUNCTIONS ==========
function handleLogin() {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validation
    if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    if (!email.includes('@')) {
        showToast('Please enter a valid email', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Store user data in localStorage
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_name', email.split('@')[0]);
    localStorage.setItem('is_logged_in', 'true');
    
    // Clear form
    emailInput.value = '';
    passwordInput.value = '';
    
    // Show dashboard
    showPage('dashboard');
    document.getElementById('user-name-welcome').textContent = email.split('@')[0];
    showToast('Login successful!', 'success');
    
    // Load dashboard data
    loadTodayPredictions();
}

function handleRegister() {
    const nameInput = document.getElementById('register-name');
    const emailInput = document.getElementById('register-email');
    const phoneInput = document.getElementById('register-phone');
    const passwordInput = document.getElementById('register-password');
    const confirmInput = document.getElementById('register-confirm');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const confirm = confirmInput.value.trim();
    
    // Validation
    if (!name || !email || !phone || !password || !confirm) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    if (!email.includes('@')) {
        showToast('Please enter a valid email', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    if (password !== confirm) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    // Store user data
    localStorage.setItem('user_name', name);
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_phone', phone);
    localStorage.setItem('is_logged_in', 'true');
    
    // Clear form
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    passwordInput.value = '';
    confirmInput.value = '';
    
    // Show dashboard
    showPage('dashboard');
    document.getElementById('user-name-welcome').textContent = name;
    showToast('Account created successfully!', 'success');
    
    // Load dashboard data
    loadTodayPredictions();
}

function handleLogout() {
    localStorage.clear();
    showPage('auth');
    showToast('Logged out successfully', 'success');
}

// ========== PROFILE FUNCTIONS ==========
function loadProfile() {
    const name = localStorage.getItem('user_name') || 'John Doe';
    const email = localStorage.getItem('user_email') || 'john@example.com';
    const phone = localStorage.getItem('user_phone') || '+233 50 123 4567';
    
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-fullname').textContent = name;
    document.getElementById('profile-email-display').textContent = email;
    document.getElementById('profile-phone').textContent = phone;
}

// ========== PREDICTIONS FUNCTIONS ==========
function loadTodayPredictions() {
    const container = document.getElementById('today-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Filter today's predictions (simplified - just take first 2)
    const todayPredictions = predictionData.slice(0, 2);
    
    todayPredictions.forEach(prediction => {
        container.appendChild(createPredictionCard(prediction));
    });
}

function loadAllPredictions() {
    const container = document.getElementById('predictions-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    predictionData.forEach(prediction => {
        container.appendChild(createPredictionCard(prediction));
    });
}

function createPredictionCard(prediction) {
    const card = document.createElement('div');
    card.className = 'prediction-card locked';
    card.innerHTML = `
        <div class="card-header">
            <span class="prediction-badge badge-vip">VIP</span>
            <span class="prediction-badge">${prediction.date}</span>
        </div>
        
        <div class="card-meta">
            <span class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                ${prediction.date} ${prediction.time}
            </span>
            <span class="meta-item">
                <i class="fas fa-chart-line"></i>
                Odds: ${prediction.odds}
            </span>
        </div>
        
        <div class="league-name">${prediction.league}</div>
        <div class="match-name">${prediction.match}</div>
        
        <div class="prediction-details">
            <div class="detail-item">
                <div class="detail-label">Prediction</div>
                <div class="detail-value">${prediction.prediction}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Odds</div>
                <div class="detail-value">${prediction.odds}</div>
            </div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">Confidence Level</div>
            <div class="confidence-bar">
                <div class="confidence-label">
                    <span>Analyst Confidence</span>
                    <span>${prediction.confidence}%</span>
                </div>
                <div class="confidence-track">
                    <div class="confidence-fill" style="width: ${prediction.confidence}%"></div>
                </div>
            </div>
        </div>
        
        <button onclick="unlockPrediction(${prediction.id})" class="unlock-prediction-btn">
            <i class="fas fa-lock"></i> Unlock Prediction - GH₵ 50
        </button>
    `;
    return card;
}

function filterPredictions(category) {
    // Update active filter tab
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // For now, show all predictions regardless of filter
    loadAllPredictions();
    showToast('Filtered predictions: ' + category, 'info');
}

function unlockPrediction(predictionId) {
    const prediction = predictionData.find(p => p.id === predictionId);
    if (prediction) {
        showToast('Prediction unlocked! Prediction: ' + prediction.prediction, 'success');
    }
}

// ========== HISTORY FUNCTIONS ==========
function loadHistory() {
    const container = document.getElementById('history-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    historyData.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-item-header">
                <span class="history-match">${item.match}</span>
                <span class="history-status ${item.status === 'won' ? 'status-won' : 'status-lost'}">
                    <i class="fas fa-${item.status === 'won' ? 'check' : 'times'}"></i>
                    ${item.status === 'won' ? 'WON' : 'LOST'}
                </span>
            </div>
            
            <div class="history-details">
                <div class="history-detail">
                    <div class="history-detail-label">Prediction</div>
                    <div class="history-detail-value">${item.prediction}</div>
                </div>
                <div class="history-detail">
                    <div class="history-detail-label">Result</div>
                    <div class="history-detail-value">${item.result}</div>
                </div>
                <div class="history-detail">
                    <div class="history-detail-label">Odds</div>
                    <div class="history-detail-value">${item.odds}</div>
                </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="history-date">${item.date}</span>
                <span style="font-weight: 700; color: ${item.status === 'won' ? '#00ff88' : '#ff4757'}">${item.profit}</span>
            </div>
        `;
        container.appendChild(historyItem);
    });
}

// ========== WALLET FUNCTIONS ==========
function loadTransactions() {
    const container = document.getElementById('transactions-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    transactionData.forEach(transaction => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        item.innerHTML = `
            <div class="transaction-info">
                <div class="transaction-type">${transaction.type}</div>
                <div class="transaction-date">${transaction.date} • ${transaction.method}</div>
            </div>
            <div class="transaction-amount">
                <span class="${transaction.amount.includes('+') ? 'amount-in' : 'amount-out'}">
                    ${transaction.amount}
                </span>
            </div>
        `;
        container.appendChild(item);
    });
}

// ========== PAYMENT FUNCTIONS ==========
function selectAmount(amount) {
    const customAmountInput = document.getElementById('custom-amount');
    customAmountInput.value = amount;
    updatePaymentSummary(amount);
}

function updatePaymentSummary(amount) {
    if (!amount || amount === '') {
        document.getElementById('summary-amount').textContent = 'GH₵ 0.00';
        document.getElementById('summary-fee').textContent = 'GH₵ 0.00';
        document.getElementById('summary-total').textContent = 'GH₵ 0.00';
        return;
    }
    
    const numAmount = parseFloat(amount);
    const fee = numAmount * 0.02; // 2% fee
    const total = numAmount + fee;
    
    document.getElementById('summary-amount').textContent = 'GH₵ ' + numAmount.toFixed(2);
    document.getElementById('summary-fee').textContent = 'GH₵ ' + fee.toFixed(2);
    document.getElementById('summary-total').textContent = 'GH₵ ' + total.toFixed(2);
}

function proceedToPayment() {
    const amountInput = document.getElementById('custom-amount');
    const amount = amountInput.value.trim();
    
    if (!amount || amount === '0') {
        showToast('Please enter a valid amount', 'error');
        return;
    }
    
    const numAmount = parseFloat(amount);
    if (numAmount < 50) {
        showToast('Minimum amount is GH₵ 50', 'error');
        return;
    }
    
    showToast('Initializing Paystack payment for GH₵' + numAmount.toFixed(2), 'success');
    
    // Simulate payment success
    setTimeout(() => {
        showToast('Payment successful! Funds added to your account', 'success');
        amountInput.value = '';
        updatePaymentSummary('');
        showPage('dashboard');
    }, 2000);
}

// ========== NOTIFICATIONS ==========
function toggleNotifications() {
    showToast('You have 3 new notifications:\n• New match predictions available\n• Your prediction won!\n• Payment verified', 'info');
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, type = 'info') {
    const toastElement = document.getElementById('toast-notification');
    if (!toastElement) return;
    
    toastElement.textContent = message;
    toastElement.className = 'toast-notification active';
    
    // Add color based on type
    if (type === 'success') {
        toastElement.style.backgroundColor = '#00ff88';
        toastElement.style.color = '#000';
    } else if (type === 'error') {
        toastElement.style.backgroundColor = '#ff4757';
        toastElement.style.color = '#fff';
    } else {
        toastElement.style.backgroundColor = '#ffd700';
        toastElement.style.color = '#000';
    }
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toastElement.classList.remove('active');
    }, 3000);
}

// ========== UTILITY FUNCTIONS ==========
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (isLoggedIn === 'true') {
        const userName = localStorage.getItem('user_name') || 'User';
        showPage('dashboard');
        document.getElementById('user-name-welcome').textContent = userName;
        loadTodayPredictions();
    } else {
        showPage('auth');
    }
}

// ========== INITIALIZE APPLICATION ==========
document.addEventListener('DOMContentLoaded', function() {
    const customAmountInput = document.getElementById('custom-amount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            updatePaymentSummary(this.value);
        });
    }
    
    // Check if user is already logged in
    checkAuthStatus();
    
    // Set initial nav to home
    const navHome = document.getElementById('nav-home');
    if (navHome) {
        navHome.classList.add('active');
    }
    
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
        homeContent.classList.add('active');
    }
});

// ========== SMOOTH PAGE TRANSITIONS ==========
window.addEventListener('beforeunload', function() {
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (isLoggedIn === 'true') {
        localStorage.setItem('last_page', 'dashboard');
    }
});