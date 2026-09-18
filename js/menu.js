document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  if (menuToggle && menuItems) {
    menuToggle.addEventListener('click', () => {
      menuItems.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    menuItems.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        menuItems.classList.remove('active');
      }
    });
  }
});

/* === KEYNOTES PAGE === */

.keynotes-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2rem 0 3.5rem;
}

.keynote-card {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.04);
}

.keynote-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.keynote-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #f1f5f9;
}

.keynote-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
}

.keynote-position {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.keynote-link {
  font-size: 0.85rem;
  color: #222222;
  text-decoration: underline;
  font-weight: 400;
}

.keynote-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.talk-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.keynote-section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.25rem;
  display: block;
}

.keynote-bio,
.talk-description {
  font-size: 0.92rem;
  color: #334155;
  line-height: 1.55;
}

.keynote-divider {
  border: none;
  border-top: 1px solid #f1f5f9;
  margin: 0.5rem 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .keynote-card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
}