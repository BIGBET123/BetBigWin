<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BetBigWin VIP - Football Predictions</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="app-wrapper">
    <!-- Home Page -->
    <div id="home-page" class="page active">
        <header class="app-header">
            <div class="header-content">
                <div class="logo-with-icon-small">
                    <div class="trophy-icon-small">🏆</div>
                    <h1 class="app-title">BetBigWin VIP</h1>
                </div>
            </div>
        </header>

        <div class="page-container">
            <div class="welcome-section">
                <div class="welcome-card">
                    <h2>Welcome to BetBigWin VIP 👋</h2>
                    <p>Get accurate football predictions, match analysis, and expert betting insights.</p>
                </div>
            </div>

            <section class="stats-section">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">📊</div>
                        <div class="stat-content">
                            <span class="stat-value">500+</span>
                            <span class="stat-label">Predictions</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">✅</div>
                        <div class="stat-content">
                            <span class="stat-value">85%</span>
                            <span class="stat-label">Accuracy</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-content">
                            <span class="stat-value">10K+</span>
                            <span class="stat-label">Users</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features-section">
                <h3 class="section-title">Our Features</h3>
                <div class="features-grid">
                    <div class="feature-card">
                        <i class="fas fa-star"></i>
                        <h4>Free Predictions</h4>
                        <p>Access daily free game predictions</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-crown"></i>
                        <h4>VIP Unlock</h4>
                        <p>Premium correct score tips</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-sync"></i>
                        <h4>Daily Updates</h4>
                        <p>Live scores and results</p>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Results Page -->
    <div id="results-page" class="page">
        <header class="page-header">
            <button onclick="navigateTo('home')" class="btn-back"><i class="fas fa-arrow-left"></i></button>
            <h1>Results</h1>
            <div style="width: 40px;"></div>
        </header>

        <div class="page-container">
            <section class="results-section">
                <div class="section-header">
                    <h3 class="section-title">
                        <i class="fas fa-check-circle"></i>
                        Latest Results
                    </h3>
                </div>

                <div id="results-container" class="results-list"></div>
            </section>
        </div>
    </div>

    <!-- Free Games Page -->
    <div id="free-games-page" class="page">
        <header class="page-header">
            <button onclick="navigateTo('home')" class="btn-back"><i class="fas fa-arrow-left"></i></button>
            <h1>Free Games</h1>
            <div style="width: 40px;"></div>
        </header>

        <div class="page-container">
            <section class="games-section">
                <div class="section-header">
                    <h3 class="section-title">
                        <i class="fas fa-gamepad"></i>
                        Free Predictions
                    </h3>
                    <span class="badge">Updated Daily</span>
                </div>

                <div id="free-games-container" class="predictions-grid"></div>
            </section>
        </div>
    </div>

    <!-- VIP Unlock Page -->
    <div id="vip-unlock-page" class="page">
        <header class="page-header">
            <button onclick="navigateTo('home')" class="btn-back"><i class="fas fa-arrow-left"></i></button>
            <h1>VIP Unlock</h1>
            <div style="width: 40px;"></div>
        </header>

        <div class="page-container">
            <section class="vip-section">
                <div class="vip-banner">
                    <i class="fas fa-crown"></i>
                    <h2>Premium Predictions</h2>
                    <p>Unlock exclusive correct score tips and advanced match analysis</p>
                </div>

                <div class="section-header">
                    <h3 class="section-title">VIP Correct Score Tips</h3>
                </div>

                <div id="vip-container" class="vip-grid"></div>
            </section>
        </div>
    </div>

    <!-- Daily Updates Page -->
    <div id="daily-updates-page" class="page">
        <header class="page-header">
            <button onclick="navigateTo('home')" class="btn-back"><i class="fas fa-arrow-left"></i></button>
            <h1>Daily Updates</h1>
            <div style="width: 40px;"></div>
        </header>

        <div class="page-container">
            <section class="daily-section">
                <div class="section-header">
                    <h3 class="section-title">
                        <i class="fas fa-calendar-alt"></i>
                        Today's Games & Results
                    </h3>
                </div>

                <div id="daily-container" class="daily-grid"></div>
            </section>
        </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
        <button onclick="navigateTo('home')" class="nav-item active" id="nav-home">
            <i class="fas fa-home"></i>
            <span>Home</span>
        </button>
        <button onclick="navigateTo('results')" class="nav-item" id="nav-results">
            <i class="fas fa-check-circle"></i>
            <span>Results</span>
        </button>
        <button onclick="navigateTo('free-games')" class="nav-item" id="nav-free-games">
            <i class="fas fa-star"></i>
            <span>Free Games</span>
        </button>
        <button onclick="navigateTo('vip-unlock')" class="nav-item" id="nav-vip-unlock">
            <i class="fas fa-crown"></i>
            <span>VIP</span>
        </button>
        <button onclick="navigateTo('daily-updates')" class="nav-item" id="nav-daily-updates">
            <i class="fas fa-fire"></i>
            <span>Updates</span>
        </button>
    </nav>
</div>

<!-- Toast Notification -->
<div id="toast-notification" class="toast-notification"></div>

<script src="script.js"></script>

</body>
</html>
