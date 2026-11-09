# 🎮 AITU Esports Hub - Endterm Web Development Project

## 📌 Overview
**AITU Esports Hub** is the official web portal for managing esports tournaments, rosters, event galleries, and registration at Astana IT University. This project is the continuation of the Midterm project, expanded with dynamic JavaScript capabilities, DOM manipulation, form validation, and jQuery animations.

---

## 👥 Group Members & Contributions
- **Aldiyar Aimbetov** - Project Lead, JS Fundamentals, DOM Manipulation, jQuery Integration, Form Validation, README & Deployment.
- **Dossymzhan** - Responsive Layout Enhancements, HTML/Bootstrap Structure, Content & Media Integration.

---

## 🚀 Key Endterm Features & Technical Requirements Met

### 1. Project Continuation (10 pts)
- Preserved 5 interconnected responsive HTML pages (`index.html`, `tournaments.html`, `teams.html`, `gallery.html`, `register.html`).
- Maintained Bootstrap 5 navbar, responsive cards, modals, and grid system.

### 2. JavaScript Fundamentals (10 pts)
- **Arrays**: `tournamentsData` (stores tournament objects) and `globalAnnouncements` (stores string notifications).
- **Loops**: `for...of` loop in `main.js` (quick search processing) and `forEach` loop in `tournaments.js` (dynamic grid rendering).
- **Functions**: `toggleDarkTheme()` (returns boolean), `createBadgeHTML(status)`, `renderTournaments(list)`, `filterTournaments(query, category)`.

### 3. DOM Manipulation & Events (10 pts)
- **Dynamic Content**: Cards generated on-the-fly from JS dataset.
- **Add/Remove DOM Elements**: Favorites list updates dynamically on user click.
- **Features Included**:
  1. Theme Switcher (Dark/Light mode).
  2. Live Filter & Search system.
  3. Favorites List.
  4. Interactive Image Gallery Modal.
  5. Roster Toggle Accordion.
- **Events Used**: `click`, `input`, `change`, `submit`, `DOMContentLoaded`.

### 4. Form Validation (10 pts)
- Robust JavaScript validation on `register.html`.
- Validates Team Name length (>= 3 chars), Captain Email format, Game Selection, Roster Player Count (1-5), Password length (>= 6 chars), and Password Confirmation matching.
- Highlights invalid fields visually with red error messages and displays a green success alert upon successful validation without reloading.

### 5. jQuery Integration (10 pts)
- **Selectors**: Class selectors (`.toggle-roster-btn`), ID selectors (`#tournamentsGrid`), and Descendant selectors (`.card-body .roster-details`).
- **Traversal Methods**: `.closest()` and `.find()`.
- **Effects & Animations**: `.slideToggle()` for team rosters and `.animate()` for smooth hover effects.

---

## 🧪 Instructions for Testing Interactive Features

1. **Dark/Light Mode**: Click the **"🌙 Dark Mode"** button in the top navigation bar on any page.
2. **Search & Filter Tournaments**: Navigate to `tournaments.html`. Type "CS2" in the search box or choose a game from the dropdown filter.
3. **Add/Remove Favorites**: Click **"⭐ Add to Favorites"** on any tournament card. Notice the live counter update at the bottom of the page.
4. **Interactive Roster Toggle**: Navigate to `teams.html` and click **"Show Roster"** on any team card to trigger the jQuery slide animation.
5. **Form Validation**: Navigate to `register.html`. Submit an empty form to see error indicators, then fill in valid data to see the success message.
6. **Gallery Lightbox**: Go to `gallery.html`, switch between tabs, and click any photo card to open the preview modal.

---

## 🌐 Live Demo & Deployment
- **GitHub Repository**: `https://github.com/aldiyar5555/aitu-esports-hub`
- **GitHub Pages Link**: `https://aldiyar5555.github.io/aitu-esports-hub/`
