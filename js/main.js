/**
 * AITU Esports Hub - Main JS File
 * Demonstrates JS Fundamentals & DOM Manipulation
 */

// Array 1: Global system notifications
const globalAnnouncements = [
  "Welcome to AITU Esports Hub!",
  "CS2 Registration closes November 15th.",
  "Dota 2 Finals schedule published!"
];

// Function 1: Reusable theme toggle function (returns boolean dark state)
function toggleDarkTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  return isDark;
}

// Function 2: Helper function with parameters to format badges
function createBadgeHTML(status) {
  let badgeClass = 'bg-secondary';
  if (status === 'Open') badgeClass = 'bg-success';
  if (status === 'Upcoming') badgeClass = 'bg-primary';
  if (status === 'Closed') badgeClass = 'bg-danger';
  return `<span class="badge ${badgeClass}">${status}</span>`;
}

// DOM Event Listener: DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Theme switcher initialization
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    // Check saved local storage
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleBtn.textContent = '☀️ Light Mode';
    }

    // Event 1: click event listener
    themeToggleBtn.addEventListener('click', () => {
      const isDark = toggleDarkTheme();
      themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }

  // Quick Search setup on Home Page
  const quickInput = document.getElementById('quickSearchInput');
  const quickResults = document.getElementById('quickSearchResults');

  if (quickInput && quickResults) {
    const quickItems = ["CS2 Championship", "Dota 2 Autumn Cup", "Valorant Tournament", "AITU Cyber Eagles", "Astana Phoenix"];

    // Event 2: input event listener
    quickInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      quickResults.innerHTML = '';
      if (query === '') return;

      // Loop 1: for...of loop for searching
      for (const item of quickItems) {
        if (item.toLowerCase().includes(query)) {
          const li = document.createElement('li');
          li.className = 'list-group-item';
          li.textContent = item;
          quickResults.appendChild(li);
        }
      }
    });
  }
});
