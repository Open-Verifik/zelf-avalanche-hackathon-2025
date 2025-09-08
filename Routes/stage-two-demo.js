/**
 * Stage Two Demo Video Route - Displays the Stage 2 demonstration video
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Handle Stage Two demo video display
 * @param {Object} ctx - Koa context
 */
const handleStageTwo = async (ctx) => {
	try {
		// Generate the HTML response
		const html = generateDemoHTML();

		ctx.type = "html";
		ctx.body = html;
	} catch (error) {
		console.error("Error handling Stage Two demo:", error);

		const errorHtml = generateErrorHTML(error.message);
		ctx.type = "html";
		ctx.body = errorHtml;
		ctx.status = 500;
	}
};

/**
 * Generate HTML for the Stage Two demo page
 * @returns {string} HTML string
 */
const generateDemoHTML = () => {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>ZelfKeys Stage 2 Demo - Avalanche Hackathon 2025</title>
		<meta name="description" content="Watch the revolutionary ZelfKeys demo showcasing biometric password management on Avalanche blockchain">
		<meta property="og:title" content="ZelfKeys Stage 2 Demo - Revolutionary Biometric Security">
		<meta property="og:description" content="See how ZelfKeys transforms password management with Zero Knowledge Face Proofs on Avalanche">
		<meta property="og:type" content="video.other">
		<meta property="og:url" content="https://www.youtube.com/watch?v=o96avadJVE8">
		<link rel="icon" type="image/x-icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzY2N0VFQSIvPgo8cGF0aCBkPSJNMTYgOEMxOS4zIDggMjIgMTAuNyAyMiAxNFYxOEMyMiAyMS4zIDE5LjMgMjQgMTYgMjRIMTBDNi43IDI0IDQgMjEuMyA0IDE4VjE0QzQgMTAuNyA2LjcgOCAxMCA4SDE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+">
		<style>${getStyles()}</style>
	</head>
	<body>
		<div class="demo-container">
			<!-- Background Animation -->
			<div class="bg-animation">
				<div class="floating-element"></div>
				<div class="floating-element"></div>
				<div class="floating-element"></div>
			</div>

			<!-- Header -->
			<header class="demo-header">
				<div class="logo-container">
					<div class="logo">
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="48" height="48" rx="12" fill="url(#gradient)"/>
							<path d="M24 12C28.4 12 32 15.6 32 20V28C32 32.4 28.4 36 24 36H16C11.6 36 8 32.4 8 28V20C8 15.6 11.6 12 16 12H24Z" fill="white"/>
							<circle cx="20" cy="22" r="2" fill="#667EEA"/>
							<circle cx="28" cy="22" r="2" fill="#667EEA"/>
							<path d="M18 28C18 26.9 18.9 26 20 26H28C29.1 26 30 26.9 30 28C30 29.1 29.1 30 28 30H20C18.9 30 18 29.1 18 28Z" fill="#667EEA"/>
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" style="stop-color:#667EEA"/>
									<stop offset="100%" style="stop-color:#764BA2"/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div class="logo-text">
						<h1>ZelfKeys</h1>
						<p>Avalanche Hackathon 2025</p>
					</div>
				</div>
				<div class="stage-badge">
					<span class="stage-number">Stage 2</span>
					<span class="stage-text">Demo</span>
				</div>
			</header>

			<!-- Main Content -->
			<main class="demo-content">
				<div class="content-wrapper">
					<!-- Hero Section -->
					<section class="hero-section">
						<div class="hero-content">
							<h2 class="hero-title">
								<span class="gradient-text">Revolutionary</span>
								<span class="hero-subtitle">Biometric Password Management</span>
							</h2>
							<p class="hero-description">
								Watch our Stage 2 demonstration of ZelfKeys - the world's first zero-knowledge biometric password manager built on Avalanche blockchain. See how we've transformed password security forever.
							</p>
							
							<div class="feature-highlights">
								<div class="feature-item">
									<div class="feature-icon">🔐</div>
									<span>Zero Knowledge Face Proof</span>
								</div>
								<div class="feature-item">
									<div class="feature-icon">⚡</div>
									<span>Avalanche Integration</span>
								</div>
								<div class="feature-item">
									<div class="feature-icon">🌐</div>
									<span>IPFS Decentralization</span>
								</div>
								<div class="feature-item">
									<div class="feature-icon">🖼️</div>
									<span>NFT Ownership</span>
								</div>
							</div>
						</div>
					</section>

					<!-- Video Section -->
					<section class="video-section">
						<div class="video-container">
							<div class="video-frame">
								<iframe 
									src="https://www.youtube.com/embed/o96avadJVE8?rel=0&showinfo=0&modestbranding=1&autoplay=0&controls=1&fs=1&cc_load_policy=1&iv_load_policy=3"
									title="ZelfKeys Stage 2 Demo - Avalanche Hackathon 2025"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen>
								</iframe>
							</div>
							<div class="video-info">
								<h3>🎥 Stage 2 Demonstration</h3>
								<p>Complete walkthrough of ZelfKeys' revolutionary features including:</p>
								<ul class="demo-features">
									<li>✅ Biometric password creation and storage</li>
									<li>✅ Real-world website integration</li>
									<li>✅ AVAX crypto payment system</li>
									<li>✅ NFT minting on Avalanche</li>
									<li>✅ IPFS decentralized storage</li>
									<li>✅ Zero-knowledge face verification</li>
								</ul>
							</div>
						</div>
					</section>

					<!-- Technology Showcase -->
					<section class="tech-showcase">
						<h3 class="section-title">🚀 Technology Highlights</h3>
						<div class="tech-grid">
							<div class="tech-card">
								<div class="tech-icon">🔐</div>
								<h4>Zero Knowledge Face Proof™</h4>
								<p>Revolutionary biometric encryption that never stores your face data. 350-byte proofs that only work with your unique biometric signature.</p>
							</div>
							<div class="tech-card">
								<div class="tech-icon">⚡</div>
								<h4>Avalanche Integration</h4>
								<p>Lightning-fast NFT minting with sub-penny costs. Smart contracts deployed on Avalanche C-Chain for maximum compatibility.</p>
							</div>
							<div class="tech-card">
								<div class="tech-icon">🌐</div>
								<h4>IPFS Decentralization</h4>
								<p>Permanent, censorship-resistant storage via Pinata. Your encrypted data lives forever on the decentralized web.</p>
							</div>
							<div class="tech-card">
								<div class="tech-icon">🖼️</div>
								<h4>NFT Ownership</h4>
								<p>Every password becomes an NFT proving your ownership. Trade, transfer, or inherit your digital credentials securely.</p>
							</div>
						</div>
					</section>

					<!-- Stats Section -->
					<section class="stats-section">
						<h3 class="section-title">📊 Stage 2 Achievements</h3>
						<div class="stats-grid">
							<div class="stat-item">
								<div class="stat-number">90%</div>
								<div class="stat-label">Platform Complete</div>
							</div>
							<div class="stat-item">
								<div class="stat-number">95%</div>
								<div class="stat-label">Test Coverage</div>
							</div>
							<div class="stat-item">
								<div class="stat-number">1000+</div>
								<div class="stat-label">Websites Supported</div>
							</div>
							<div class="stat-item">
								<div class="stat-number">350</div>
								<div class="stat-label">Bytes Per Proof</div>
							</div>
						</div>
					</section>

					<!-- Call to Action -->
					<section class="cta-section">
						<div class="cta-content">
							<h3>🎯 Ready to Experience the Future?</h3>
							<p>ZelfKeys is revolutionizing password management with true decentralization and zero-knowledge biometrics.</p>
							<div class="cta-buttons">
								<a href="https://github.com/zelfkeys/avalanche-hackathon-2025" target="_blank" class="btn-primary">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V16M22 16L20 14L18 16M22 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									View Source Code
								</a>
								<a href="/dashboard/billing" class="btn-secondary">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
									Try Live Demo
								</a>
							</div>
						</div>
					</section>
				</div>
			</main>

			<!-- Footer -->
			<footer class="demo-footer">
				<div class="footer-content">
					<div class="footer-links">
						<a href="https://snowtrace.io/address/0x6C995090C530756d59E6eEa5a3bA209863e0E167" target="_blank">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 13V19A2 2 0 0116 21H5A2 2 0 013 19V8A2 2 0 015 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<polyline points="15,3 21,3 21,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Smart Contract
						</a>
						<a href="https://github.com/zelfkeys/avalanche-hackathon-2025" target="_blank">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							GitHub Repository
						</a>
						<a href="/dashboard" target="_blank">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
								<circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="2"/>
								<path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2"/>
							</svg>
							Live Application
						</a>
					</div>
					<div class="footer-text">
						<p>Built with ❤️ on Avalanche • Hackathon 2025 • Team ZelfKeys</p>
					</div>
				</div>
			</footer>
		</div>

		<script>
			// Analytics and interaction tracking
			document.addEventListener('DOMContentLoaded', function() {
				// Track video play events
				const iframe = document.querySelector('iframe');
				if (iframe) {
					iframe.addEventListener('load', function() {
						console.log('🎥 Stage 2 demo video loaded successfully');
					});
				}

				// Add smooth scroll for any anchor links
				document.querySelectorAll('a[href^="#"]').forEach(anchor => {
					anchor.addEventListener('click', function (e) {
						e.preventDefault();
						const target = document.querySelector(this.getAttribute('href'));
						if (target) {
							target.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							});
						}
					});
				});

				// Add loading animation for external links
				document.querySelectorAll('a[target="_blank"]').forEach(link => {
					link.addEventListener('click', function() {
						this.style.opacity = '0.7';
						setTimeout(() => {
							this.style.opacity = '1';
						}, 300);
					});
				});
			});
		</script>
	</body>
	</html>
	`;
};

/**
 * Generate error HTML
 * @param {string} message - Error message
 * @returns {string} HTML string
 */
const generateErrorHTML = (message) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Error - ZelfKeys Demo</title>
		<style>${getStyles()}</style>
	</head>
	<body>
		<div class="demo-container">
			<div class="error-container">
				<div class="error-icon">⚠️</div>
				<h1>Something went wrong</h1>
				<p>${message}</p>
				<a href="/dashboard" class="btn-primary">Return to Dashboard</a>
			</div>
		</div>
	</body>
	</html>
	`;
};

/**
 * Get CSS styles for the demo page
 * @returns {string} CSS string
 */
const getStyles = () => {
	return `
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			min-height: 100vh;
			color: #333;
			overflow-x: hidden;
		}

		.demo-container {
			position: relative;
			min-height: 100vh;
			z-index: 1;
		}

		/* Background Animation */
		.bg-animation {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
			z-index: 0;
		}

		.floating-element {
			position: absolute;
			width: 100px;
			height: 100px;
			background: rgba(255, 255, 255, 0.1);
			border-radius: 50%;
			animation: float 20s infinite linear;
		}

		.floating-element:nth-child(1) {
			top: 20%;
			left: 10%;
			animation-delay: 0s;
			animation-duration: 25s;
		}

		.floating-element:nth-child(2) {
			top: 60%;
			right: 10%;
			animation-delay: 10s;
			animation-duration: 30s;
		}

		.floating-element:nth-child(3) {
			bottom: 20%;
			left: 30%;
			animation-delay: 5s;
			animation-duration: 35s;
		}

		@keyframes float {
			0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
			33% { transform: translateY(-30px) rotate(120deg); opacity: 0.6; }
			66% { transform: translateY(30px) rotate(240deg); opacity: 0.3; }
			100% { transform: translateY(0px) rotate(360deg); opacity: 0.3; }
		}

		/* Header */
		.demo-header {
			position: relative;
			z-index: 2;
			padding: 32px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(20px);
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}

		.logo-container {
			display: flex;
			align-items: center;
			gap: 16px;
		}

		.logo-text h1 {
			font-size: 32px;
			font-weight: 700;
			color: white;
			margin: 0;
			text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		}

		.logo-text p {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.8);
			margin: 0;
			font-weight: 500;
		}

		.stage-badge {
			background: rgba(255, 255, 255, 0.2);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.3);
			border-radius: 12px;
			padding: 12px 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4px;
		}

		.stage-number {
			font-size: 24px;
			font-weight: 700;
			color: white;
			line-height: 1;
		}

		.stage-text {
			font-size: 12px;
			color: rgba(255, 255, 255, 0.8);
			text-transform: uppercase;
			letter-spacing: 1px;
		}

		/* Main Content */
		.demo-content {
			position: relative;
			z-index: 2;
			padding: 0 32px 64px;
		}

		.content-wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		/* Hero Section */
		.hero-section {
			text-align: center;
			margin-bottom: 80px;
		}

		.hero-content {
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(20px);
			border-radius: 24px;
			padding: 64px 48px;
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
		}

		.hero-title {
			font-size: 48px;
			font-weight: 800;
			margin-bottom: 16px;
			line-height: 1.2;
		}

		.gradient-text {
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			display: block;
		}

		.hero-subtitle {
			color: #333;
			display: block;
			margin-top: 8px;
		}

		.hero-description {
			font-size: 20px;
			color: #666;
			line-height: 1.6;
			margin-bottom: 40px;
			max-width: 800px;
			margin-left: auto;
			margin-right: auto;
		}

		.feature-highlights {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 24px;
			margin-top: 40px;
		}

		.feature-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 12px;
			padding: 24px;
			background: rgba(102, 126, 234, 0.1);
			border-radius: 16px;
			border: 1px solid rgba(102, 126, 234, 0.2);
		}

		.feature-icon {
			font-size: 32px;
			margin-bottom: 8px;
		}

		.feature-item span {
			font-weight: 600;
			color: #333;
			text-align: center;
		}

		/* Video Section */
		.video-section {
			margin-bottom: 80px;
		}

		.video-container {
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(20px);
			border-radius: 24px;
			padding: 48px;
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
		}

		.video-frame {
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 56.25%; /* 16:9 aspect ratio */
			margin-bottom: 32px;
			border-radius: 16px;
			overflow: hidden;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
		}

		.video-frame iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: none;
		}

		.video-info h3 {
			font-size: 24px;
			font-weight: 700;
			color: #333;
			margin-bottom: 16px;
		}

		.video-info p {
			font-size: 16px;
			color: #666;
			line-height: 1.6;
			margin-bottom: 20px;
		}

		.demo-features {
			list-style: none;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 12px;
		}

		.demo-features li {
			font-size: 15px;
			color: #555;
			padding: 8px 0;
			display: flex;
			align-items: center;
			gap: 8px;
		}

		/* Technology Showcase */
		.tech-showcase {
			margin-bottom: 80px;
		}

		.section-title {
			font-size: 32px;
			font-weight: 700;
			text-align: center;
			color: white;
			margin-bottom: 48px;
			text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		}

		.tech-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
			gap: 24px;
		}

		.tech-card {
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(20px);
			border-radius: 20px;
			padding: 32px;
			text-align: center;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
			transition: transform 0.3s ease, box-shadow 0.3s ease;
		}

		.tech-card:hover {
			transform: translateY(-8px);
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
		}

		.tech-icon {
			font-size: 48px;
			margin-bottom: 20px;
		}

		.tech-card h4 {
			font-size: 20px;
			font-weight: 700;
			color: #333;
			margin-bottom: 16px;
		}

		.tech-card p {
			font-size: 15px;
			color: #666;
			line-height: 1.6;
		}

		/* Stats Section */
		.stats-section {
			margin-bottom: 80px;
		}

		.stats-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 24px;
		}

		.stat-item {
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(20px);
			border-radius: 20px;
			padding: 40px 24px;
			text-align: center;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
		}

		.stat-number {
			font-size: 40px;
			font-weight: 800;
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			margin-bottom: 8px;
		}

		.stat-label {
			font-size: 16px;
			color: #666;
			font-weight: 600;
		}

		/* CTA Section */
		.cta-section {
			text-align: center;
		}

		.cta-content {
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(20px);
			border-radius: 24px;
			padding: 64px 48px;
			box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.5);
		}

		.cta-content h3 {
			font-size: 32px;
			font-weight: 700;
			color: #333;
			margin-bottom: 16px;
		}

		.cta-content p {
			font-size: 18px;
			color: #666;
			margin-bottom: 32px;
			line-height: 1.6;
		}

		.cta-buttons {
			display: flex;
			gap: 20px;
			justify-content: center;
			flex-wrap: wrap;
		}

		.btn-primary, .btn-secondary {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			padding: 16px 32px;
			border-radius: 12px;
			font-size: 16px;
			font-weight: 600;
			text-decoration: none;
			transition: all 0.3s ease;
			border: none;
			cursor: pointer;
		}

		.btn-primary {
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			color: white;
			box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
		}

		.btn-primary:hover {
			transform: translateY(-3px);
			box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
		}

		.btn-secondary {
			background: rgba(255, 255, 255, 0.9);
			color: #667eea;
			border: 2px solid #667eea;
		}

		.btn-secondary:hover {
			background: #667eea;
			color: white;
			transform: translateY(-2px);
		}

		/* Footer */
		.demo-footer {
			position: relative;
			z-index: 2;
			background: rgba(0, 0, 0, 0.8);
			backdrop-filter: blur(20px);
			color: white;
			padding: 32px;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}

		.footer-content {
			max-width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			gap: 24px;
		}

		.footer-links {
			display: flex;
			gap: 32px;
			flex-wrap: wrap;
		}

		.footer-links a {
			color: rgba(255, 255, 255, 0.8);
			text-decoration: none;
			font-size: 14px;
			font-weight: 500;
			display: flex;
			align-items: center;
			gap: 6px;
			transition: color 0.2s ease;
		}

		.footer-links a:hover {
			color: white;
		}

		.footer-text p {
			color: rgba(255, 255, 255, 0.6);
			font-size: 14px;
		}

		/* Error Styles */
		.error-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			min-height: 100vh;
			text-align: center;
			color: white;
		}

		.error-icon {
			font-size: 64px;
			margin-bottom: 24px;
		}

		.error-container h1 {
			font-size: 32px;
			font-weight: 700;
			margin-bottom: 16px;
			color: white;
		}

		.error-container p {
			font-size: 18px;
			color: rgba(255, 255, 255, 0.8);
			margin-bottom: 32px;
		}

		/* Responsive Design */
		@media (max-width: 768px) {
			.demo-header {
				padding: 24px;
				flex-direction: column;
				gap: 16px;
				text-align: center;
			}

			.demo-content {
				padding: 0 24px 48px;
			}

			.hero-content {
				padding: 48px 32px;
			}

			.hero-title {
				font-size: 36px;
			}

			.hero-description {
				font-size: 18px;
			}

			.video-container {
				padding: 32px 24px;
			}

			.tech-grid {
				grid-template-columns: 1fr;
			}

			.stats-grid {
				grid-template-columns: repeat(2, 1fr);
			}

			.cta-content {
				padding: 48px 32px;
			}

			.cta-buttons {
				flex-direction: column;
				align-items: center;
			}

			.btn-primary, .btn-secondary {
				width: 100%;
				max-width: 280px;
				justify-content: center;
			}

			.footer-content {
				flex-direction: column;
				text-align: center;
			}

			.footer-links {
				justify-content: center;
			}
		}

		@media (max-width: 480px) {
			.demo-header {
				padding: 20px;
			}

			.demo-content {
				padding: 0 20px 40px;
			}

			.hero-content {
				padding: 40px 24px;
			}

			.hero-title {
				font-size: 28px;
			}

			.video-container {
				padding: 24px 20px;
			}

			.tech-card {
				padding: 24px 20px;
			}

			.cta-content {
				padding: 40px 24px;
			}

			.stats-grid {
				grid-template-columns: 1fr;
			}
		}
	`;
};

export default (server) => {
	// Stage Two demo video route (unprotected)
	server.get("/stage-two-video", handleStageTwo);
};
