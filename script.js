// Gallery is managed through gallery.json. Add approved photos to assets/gallery/,
// or use public image URLs from a repository intended for public viewing.
const gallery = document.querySelector('#gallery-grid');
const hint = document.querySelector('#gallery-hint');
const lightbox = document.querySelector('#gallery-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const closeLightbox = document.querySelector('#lightbox-close');

function openPhoto(photo) {
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt || photo.caption || 'Bluebelle Mind school photo';
  lightboxCaption.textContent = photo.caption || '';
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  closeLightbox.focus();
}
function hidePhoto() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  document.body.classList.remove('lightbox-open');
}
closeLightbox.addEventListener('click', hidePhoto);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) hidePhoto(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !lightbox.hidden) hidePhoto(); });

fetch('gallery.json')
  .then((response) => {
    if (!response.ok) throw new Error('Gallery manifest not found');
    return response.json();
  })
  .then((photos) => {
    if (!Array.isArray(photos) || photos.length === 0) return;
    gallery.innerHTML = '';
    photos.forEach((photo) => {
      if (!photo || typeof photo.src !== 'string' || !photo.src.trim()) return;
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = 'gallery-tile';
      tile.setAttribute('aria-label', `View ${photo.caption || photo.alt || 'school photo'}`);
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt || photo.caption || 'Bluebelle Mind school photo';
      img.loading = 'lazy';
      img.addEventListener('error', () => tile.remove());
      tile.appendChild(img);
      if (photo.caption) {
        const caption = document.createElement('span');
        caption.className = 'tile-label';
        caption.textContent = photo.caption;
        tile.appendChild(caption);
      }
      tile.addEventListener('click', () => openPhoto(photo));
      gallery.appendChild(tile);
    });
    if (gallery.children.length) hint.hidden = true;
  })
  .catch(() => { /* An empty gallery is expected until real school photos are added. */ });

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
