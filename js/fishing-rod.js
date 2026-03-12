// Fishing Rod and Line Animation

class FishingRod {
	constructor() {
		this.rodTip = { x: 0, y: 0 };
		this.mousePos = { x: 0, y: 0 };
		this.init();
	}

	init() {
		this.createFishingLine();
		this.createFishingHook();
		this.updateRodTipPosition();
		this.setupEventListeners();
		this.animate();
	}

	createFishingLine() {
		const lineContainer = document.createElement("div");
		lineContainer.className = "fishing-line";
		lineContainer.innerHTML = `
            <svg>
                <path id="fishing-line-path" d="M 0 0" />
            </svg>
        `;
		document.body.appendChild(lineContainer);
		this.linePath = document.getElementById("fishing-line-path");
	}

	createFishingHook() {
		const hook = document.createElement("div");
		hook.className = "fishing-hook";
		hook.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2 L12 16 M12 16 Q12 20 8 20 Q4 20 4 16" 
                      stroke="#333" 
                      stroke-width="2" 
                      fill="none"
                      stroke-linecap="round"/>
                <circle cx="4" cy="16" r="2" fill="#666"/>
                <line x1="12" y1="2" x2="16" y2="5" 
                      stroke="#333" 
                      stroke-width="1.5"
                      stroke-linecap="round"/>
            </svg>
        `;
		document.body.appendChild(hook);
		this.hook = hook;
	}

	updateRodTipPosition() {
		const authorImg = document.querySelector(".author-img");
		if (authorImg) {
			const rect = authorImg.getBoundingClientRect();
			// Calculate the tip of the fishing rod image
			// Rod image is 250px, positioned at bottom 15%, right 15%
			// Rotated -35 degrees, transform-origin is bottom left
			const rodLength = 250;
			const rodAngle = -35 * (Math.PI / 180); // Convert to radians

			// Starting point (bottom left of rod image = hand position)
			const startX = rect.right - rect.width * 0.15;
			const startY = rect.bottom - rect.height * 0.15;

			// End point (tip of rod) - extending to the upper right
			// The rod extends from bottom-left corner of the image
			this.rodTip.x = startX + rodLength * Math.cos(rodAngle);
			this.rodTip.y = startY + rodLength * Math.sin(rodAngle);
		}

		// Update on window resize and scroll
		const updatePosition = () => {
			if (authorImg) {
				const rect = authorImg.getBoundingClientRect();
				const rodLength = 250;
				const rodAngle = -35 * (Math.PI / 180);
				const startX = rect.right - rect.width * 0.15;
				const startY = rect.bottom - rect.height * 0.15;
				this.rodTip.x = startX + rodLength * Math.cos(rodAngle);
				this.rodTip.y = startY + rodLength * Math.sin(rodAngle);
			}
		};

		window.addEventListener("resize", updatePosition);
		window.addEventListener("scroll", updatePosition);
	}

	setupEventListeners() {
		document.addEventListener("mousemove", (e) => {
			this.mousePos.x = e.clientX;
			this.mousePos.y = e.clientY;
		});

		// Hide fishing line and hook when not in publications section
		document.addEventListener("mousemove", (e) => {
			const projectsSection = document.querySelector(".colorlib-projects");
			if (projectsSection) {
				const rect = projectsSection.getBoundingClientRect();
				const isInSection = e.clientY >= rect.top && e.clientY <= rect.bottom;

				if (this.linePath && this.hook) {
					this.linePath.style.opacity = isInSection ? "1" : "0";
					this.hook.style.opacity = isInSection ? "1" : "0";
				}
			}
		});
	}

	animate() {
		this.updateFishingLine();
		requestAnimationFrame(() => this.animate());
	}

	updateFishingLine() {
		if (!this.linePath || !this.hook) return;

		// Fishing line connects to mouse position (top of hook)
		const dx = this.mousePos.x - this.rodTip.x;
		const dy = this.mousePos.y - this.rodTip.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		// Control point for the curve (creates a natural sag)
		const sagAmount = Math.min(distance * 0.2, 50);
		const midX = (this.rodTip.x + this.mousePos.x) / 2;
		const midY = (this.rodTip.y + this.mousePos.y) / 2 + sagAmount;

		// Create quadratic bezier curve to mouse position
		const pathD = `M ${this.rodTip.x} ${this.rodTip.y} Q ${midX} ${midY} ${this.mousePos.x} ${this.mousePos.y}`;
		this.linePath.setAttribute("d", pathD);

		// Update hook position - hook hangs below the line connection point
		this.hook.style.left = `${this.mousePos.x}px`;
		this.hook.style.top = `${this.mousePos.y}px`;

		// Add slight rotation to hook based on movement
		// Transform centers the hook horizontally but keeps top at mouse position
		const angle = Math.atan2(dy, dx) * (180 / Math.PI);
		this.hook.style.transform = `translate(-12px, 0) rotate(${angle * 0.1}deg)`;
	}
}

// Initialize fishing rod when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		// Wait a bit for the page to settle
		setTimeout(() => {
			new FishingRod();
		}, 500);
	});
} else {
	setTimeout(() => {
		new FishingRod();
	}, 500);
}
