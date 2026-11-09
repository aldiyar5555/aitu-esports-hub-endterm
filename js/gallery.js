/**
 * AITU Esports Hub - Gallery Modal & Tabs
 */

const galleryItems = [
  { id: 1, title: "CS2 Final Arena Match", category: "cs2", image: "https://picsum.photos/id/1060/800/600" },
  { id: 2, title: "Dota 2 Trophy Ceremony", category: "dota", image: "https://picsum.photos/id/1059/800/600" },
  { id: 3, title: "MVP Award Presentation", category: "awards", image: "https://picsum.photos/id/1058/800/600" },
  { id: 4, title: "Cyber Eagles Clutch Moment", category: "cs2", image: "https://picsum.photos/id/1047/800/600" },
  { id: 5, title: "Dota 2 Grand Finals Stage", category: "dota", image: "https://picsum.photos/id/1048/800/600" },
  { id: 6, title: "Champions Celebration", category: "awards", image: "https://picsum.photos/id/1050/800/600" }
];

function renderGallery(filterCategory = 'all') {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = '';

  const filtered = filterCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filterCategory);

  filtered.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    col.innerHTML = `
      <div class="card h-100 shadow-sm gallery-card">
        <img src="${item.image}" class="card-img-top gallery-img" alt="${item.title}" style="height: 200px; object-fit: cover; cursor: pointer;">
        <div class="card-body">
          <p class="card-text fw-bold text-center">${item.title}</p>
        </div>
      </div>
    `;

    // Event 5: mouseover effect visually
    const img = col.querySelector('img');
    img.addEventListener('click', () => openModal(item.image, item.title));
    
    container.appendChild(col);
  });
}

function openModal(src, caption) {
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  modalImg.src = src;
  modalCaption.textContent = caption;

  const bsModal = new bootstrap.Modal(document.getElementById('imageModal'));
  bsModal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();

  const tabBtns = document.querySelectorAll('.gallery-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderGallery(cat);
    });
  });
});
