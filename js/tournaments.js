/**
 * AITU Esports Hub - Tournaments Logic
 * Arrays, DOM Manipulation, Dynamic Rendering, Filtering, Favorites
 */

// Array 2: Storing tournament dataset objects
const tournamentsData = [
  { id: 1, title: "CS2 Inter-Faculty Championship", game: "CS2", prize: "500,000 KZT", status: "Open", date: "Nov 20, 2026" },
  { id: 2, title: "Dota 2 Astana Cup", game: "Dota 2", prize: "350,000 KZT", status: "Open", date: "Nov 25, 2026" },
  { id: 3, title: "Valorant Student Masters", game: "Valorant", prize: "250,000 KZT", status: "Upcoming", date: "Dec 01, 2026" },
  { id: 4, title: "FC 24 Campus League", game: "FC 24", prize: "100,000 KZT", status: "Closed", date: "Nov 05, 2026" },
  { id: 5, title: "CS2 1v1 Aim Showdown", game: "CS2", prize: "150,000 KZT", status: "Open", date: "Dec 05, 2026" }
];

let favorites = [];

// Function 3: Render tournaments dynamically (DOM manipulation)
function renderTournaments(tournamentsList) {
  const container = document.getElementById('tournamentsGrid');
  if (!container) return;

  container.innerHTML = '';

  if (tournamentsList.length === 0) {
    container.innerHTML = '<div class="col-12"><div class="alert alert-warning">No tournaments found matching your criteria.</div></div>';
    return;
  }

  // Loop 2: forEach loop processing array objects
  tournamentsList.forEach(t => {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-4 mb-4 tournament-card-col';

    const isFav = favorites.some(fav => fav.id === t.id);

    cardCol.innerHTML = `
      <div class="card h-100 shadow-sm tournament-card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-secondary">${t.game}</span>
            ${createBadgeHTML(t.status)}
          </div>
          <h5 class="card-title">${t.title}</h5>
          <p class="card-text mb-1"><strong>Prize Pool:</strong> ${t.prize}</p>
          <p class="card-text text-muted small"><strong>Start Date:</strong> ${t.date}</p>
        </div>
        <div class="card-footer bg-transparent border-top-0 pb-3">
          <button class="btn ${isFav ? 'btn-danger' : 'btn-outline-warning'} btn-sm fav-btn w-100" data-id="${t.id}">
            ${isFav ? '❌ Remove Favorite' : '⭐ Add to Favorites'}
          </button>
        </div>
      </div>
    `;

    container.appendChild(cardCol);
  });

  attachFavoriteEvents();
}

// Function 4: Filter tournaments function (Returns filtered array)
function filterTournaments(searchQuery, selectedGame) {
  return tournamentsData.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'All' || t.game === selectedGame;
    return matchesSearch && matchesGame;
  });
}

function attachFavoriteEvents() {
  const favBtns = document.querySelectorAll('.fav-btn');
  favBtns.forEach(btn => {
    // Event 3: click event listener on favorite buttons
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      toggleFavorite(id);
    });
  });
}

function toggleFavorite(id) {
  const tourney = tournamentsData.find(t => t.id === id);
  const index = favorites.findIndex(f => f.id === id);

  if (index > -1) {
    // Remove element dynamically
    favorites.splice(index, 1);
  } else {
    // Add element dynamically
    if (tourney) favorites.push(tourney);
  }

  updateFavoritesUI();
  // Re-render to sync button states
  const currentSearch = document.getElementById('searchInput').value;
  const currentGame = document.getElementById('gameFilter').value;
  renderTournaments(filterTournaments(currentSearch, currentGame));
}

function updateFavoritesUI() {
  const favList = document.getElementById('favoritesList');
  const favCount = document.getElementById('favCount');
  if (!favList) return;

  favCount.textContent = favorites.length;
  favList.innerHTML = '';

  if (favorites.length === 0) {
    favList.innerHTML = '<li class="list-group-item text-muted">No favorite tournaments added yet.</li>';
    return;
  }

  favorites.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span><strong>${item.title}</strong> (${item.game}) - ${item.prize}</span>
      <button class="btn btn-sm btn-outline-danger remove-fav-btn" data-id="${item.id}">Remove</button>
    `;
    favList.appendChild(li);
  });

  document.querySelectorAll('.remove-fav-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      toggleFavorite(id);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTournaments(tournamentsData);

  const searchInput = document.getElementById('searchInput');
  const gameFilter = document.getElementById('gameFilter');
  const resetBtn = document.getElementById('resetFiltersBtn');

  const handleFilterUpdate = () => {
    const filtered = filterTournaments(searchInput.value, gameFilter.value);
    renderTournaments(filtered);
  };

  if (searchInput && gameFilter) {
    // Event 4: change event
    gameFilter.addEventListener('change', handleFilterUpdate);
    // input event
    searchInput.addEventListener('input', handleFilterUpdate);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      gameFilter.value = 'All';
      renderTournaments(tournamentsData);
    });
  }
});
