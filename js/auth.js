// Shared auth and theme helpers
applySavedTheme();

// Route guard for protected pages.
function checkAuth() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        window.location.replace("login.html");
    }
}

// Display name with email fallback.
function getCurrentUser() {
    var name = localStorage.getItem("profileName") || localStorage.getItem("displayName");
    var email = localStorage.getItem("userEmail");

    if (name && email) {
        return name + " (" + email + ")";
    }

    return name || email || "User";
}

// Clear session and go back to login.
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    window.location.replace("login.html");
}

// Render current user in header.
function displayUserInfo() {
    var el = document.getElementById("userEmail");
    if (el) {
        el.textContent = getCurrentUser();
    }
}

// Apply saved dark mode choice.
function applySavedTheme() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    if (document.body) {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }
}

// Save and apply dark mode choice.
function setDarkMode(enabled) {
    var isEnabled = !!enabled;
    localStorage.setItem("darkMode", isEnabled ? "true" : "false");
    if (document.body) {
        document.body.classList.toggle("dark-mode", isEnabled);
    }
}
