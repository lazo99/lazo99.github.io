// =================================================================
// CONFIDENTIAL & PROPRIETARY
//
// © 2026 Andrew Lazo. All rights reserved.
//
// This software is proprietary and confidential. Unauthorized copying,
// distribution, or use of this software, via any medium, is strictly 
// prohibited without express written permission from the Architect.
// 
// [INTERNAL_TRANSITION_MARKER: PROPRIETARY_V1]
// =================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Generate vCard data (v3.0 format for maximum compatibility)
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Lazo;Andrew;;;
FN:Andrew Lazo
TITLE:Senior Architect & Compliance Officer | Event Coordinator
ORG:ARL LLC
TEL;TYPE=CELL:(510) 621-3091
EMAIL:lazo99@gmail.com
ADR;TYPE=HOME:;;San Francisco Bay Area;CA;;;USA
URL:https://lazo99.github.io
END:VCARD`;

    // Initialize QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    if (qrcodeContainer) {
        new QRCode(qrcodeContainer, {
            text: vcard,
            width: 100,
            height: 100,
            colorDark : "#0f172a", // Slate 900
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.M
        });
    }

    // SPA Tab Switching Logic
    const navButtons = document.querySelectorAll(".nav-toggle .nav-btn");
    const architectPane = document.getElementById("architect-pane");
    const personalPane = document.getElementById("personal-pane");
    const blob1 = document.getElementById("blob1");
    const blob2 = document.getElementById("blob2");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Toggle Active State on Buttons
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Switch Panes with a smooth transition
            if (targetTab === "architect") {
                personalPane.classList.remove("active");
                // Wait briefly for transition out before showing the other
                setTimeout(() => {
                    personalPane.style.display = "none";
                    architectPane.style.display = "block";
                    setTimeout(() => architectPane.classList.add("active"), 50);
                }, 200);

                // Morph background blobs for Architect styling (blue/indigo glow)
                if (blob1 && blob2) {
                    blob1.style.background = "linear-gradient(135deg, #3b82f6, #6366f1)";
                    blob2.style.background = "linear-gradient(135deg, #8b5cf6, #a78bfa)";
                }
            } else if (targetTab === "personal") {
                architectPane.classList.remove("active");
                setTimeout(() => {
                    architectPane.style.display = "none";
                    personalPane.style.display = "block";
                    setTimeout(() => personalPane.classList.add("active"), 50);
                }, 200);

                // Morph background blobs for Personal styling (purple/pink glow)
                if (blob1 && blob2) {
                    blob1.style.background = "linear-gradient(135deg, #a78bfa, #8b5cf6)";
                    blob2.style.background = "linear-gradient(135deg, #ec4899, #d946ef)";
                }
            }
        });
    });
});
