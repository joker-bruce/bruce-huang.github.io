// Fishing Interaction System

class FishingGame {
	constructor() {
		this.caughtFish = 0;
		this.fishTypes = {
			"ai-for-chemistry": { emoji: "🐠", name: "AI Fish", color: "#ff6384" },
			chemistry: { emoji: "🐟", name: "Chemistry Fish", color: "#36a2eb" },
			others: { emoji: "🐡", name: "Special Fish", color: "#66bb6a" },
		};
		this.init();
	}

	init() {
		this.createCatchCounter();
		this.createBubbles();
		this.setupFishItems();
		this.fixAccordionColors();
	}

	fixAccordionColors() {
		// Override accordion yellow backgrounds
		const accordions = document.querySelectorAll(
			".colorlib-projects .accordion",
		);
		accordions.forEach((accordion) => {
			accordion.style.background =
				"linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)";
			accordion.style.border = "2px solid rgba(100, 181, 246, 0.3)";
			accordion.style.boxShadow = "0 4px 15px rgba(33, 150, 243, 0.1)";
		});

		const submenus = document.querySelectorAll(".colorlib-projects .submenu");
		submenus.forEach((submenu) => {
			submenu.style.background = "rgba(227, 242, 253, 0.5)";
		});
	}

	createCatchCounter() {
		const counter = document.createElement("div");
		counter.className = "catch-counter";
		counter.id = "catch-counter";
		counter.innerHTML = `🎣 Caught: <span id="catch-count">0</span> 🐟`;
		document.body.appendChild(counter);
	}

	createBubbles() {
		const projectSection = document.querySelector(
			".colorlib-projects .colorlib-narrow-content",
		);
		if (!projectSection) return;

		for (let i = 0; i < 15; i++) {
			const bubble = document.createElement("div");
			bubble.className = "bubble";
			const size = Math.random() * 30 + 10;
			bubble.style.width = `${size}px`;
			bubble.style.height = `${size}px`;
			bubble.style.left = `${Math.random() * 100}%`;
			bubble.style.animationDelay = `${Math.random() * 6}s`;
			bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
			projectSection.appendChild(bubble);
		}
	}

	setupFishItems() {
		const categories = ["ai-for-chemistry", "chemistry", "others"];

		categories.forEach((categoryId) => {
			const categoryElement = document.getElementById(categoryId);
			if (!categoryElement) return;

			const fishType = this.fishTypes[categoryId];

			// Add fish category header
			const categoryHeader = categoryElement.closest("li");
			if (categoryHeader) {
				const headerDiv = categoryHeader.querySelector(".link");
				if (
					headerDiv &&
					!headerDiv.classList.contains("fish-category-header")
				) {
					headerDiv.classList.add("fish-category-header");
				}
			}

			// Wait for projects to be populated, then add fish styling
			setTimeout(() => {
				this.styleFishItems(categoryElement, categoryId, fishType);
			}, 500);
		});
	}

	styleFishItems(container, categoryId, fishType) {
		const projectCards = container.querySelectorAll(".project-card");

		projectCards.forEach((card, index) => {
			// Wrap in fish container
			if (!card.parentElement.classList.contains("fish-item")) {
				const fishItem = document.createElement("div");
				fishItem.className = `fish-item ${categoryId.replace("ai-for-chemistry", "ai")}-fish`;
				fishItem.style.animationDelay = `${index * 0.2}s`;

				// Add fish icon
				const fishIcon = document.createElement("div");
				fishIcon.className = "fish-icon";
				fishIcon.innerHTML = fishType.emoji;

				// Wrap the card
				card.parentNode.insertBefore(fishItem, card);
				fishItem.appendChild(card);
				fishItem.appendChild(fishIcon);

				// Add click event for catching fish
				this.addFishingEvent(fishItem, fishType);
			}
		});
	}

	addFishingEvent(fishItem, fishType) {
		fishItem.addEventListener("click", (e) => {
			// Don't catch if clicking on a link
			if (e.target.tagName === "A" || e.target.closest("a")) {
				return;
			}

			e.preventDefault();
			this.catchFish(fishItem, fishType);
		});
	}

	catchFish(fishItem, fishType) {
		// Prevent catching the same fish multiple times
		if (fishItem.classList.contains("fish-caught")) {
			return;
		}

		// Add caught animation
		fishItem.classList.add("fish-caught");

		// Create ripple effect
		const ripple = document.createElement("div");
		ripple.className = "ripple-effect";
		fishItem.appendChild(ripple);

		// Update counter
		this.caughtFish++;
		const counterElement = document.getElementById("catch-counter");
		const countElement = document.getElementById("catch-count");

		if (counterElement && countElement) {
			counterElement.classList.add("show");
			countElement.textContent = this.caughtFish;

			// Animate counter
			counterElement.style.animation = "none";
			setTimeout(() => {
				counterElement.style.animation = "bounceIn 0.5s ease";
			}, 10);
		}

		// Show celebration message
		this.showCatchMessage(fishType);

		// Remove ripple after animation
		setTimeout(() => {
			ripple.remove();
		}, 600);

		// Restore fish after 3 seconds
		setTimeout(() => {
			fishItem.classList.remove("fish-caught");
			fishItem.style.animation = "swim 3s ease-in-out infinite";
		}, 3000);
	}

	showCatchMessage(fishType) {
		const messages = [
			`Nice catch! You got one ${fishType.name}! 🎉`,
			`Wow! One ${fishType.name} is hooked! 🎣`,
			`Great job! ${fishType.name} caught! ✨`,
			`Amazing! You caught one ${fishType.name}! 🌟`,
		];

		const message = messages[Math.floor(Math.random() * messages.length)];

		// Create toast notification
		const toast = document.createElement("div");
		toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, ${fishType.color} 0%, ${this.adjustColor(fishType.color, -20)} 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
            pointer-events: none;
        `;
		toast.innerHTML = message;

		document.body.appendChild(toast);

		setTimeout(() => {
			toast.remove();
		}, 3000);
	}

	adjustColor(color, amount) {
		const num = parseInt(color.replace("#", ""), 16);
		const r = Math.max(0, Math.min(255, (num >> 16) + amount));
		const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
		const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
		return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
	}
}

// Add slide animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize fishing game when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		new FishingGame();
	});
} else {
	new FishingGame();
}
