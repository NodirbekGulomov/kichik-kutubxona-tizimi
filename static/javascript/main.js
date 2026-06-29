/* ============================================
   Kichik Kutubxona Tizimi — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Search Functionality ----------
    initSearch();

    // ---------- Form Enhancements ----------
    initFormEnhancements();

    // ---------- Card Hover Effects ----------
    initCardEffects();

    // ---------- Smooth page load ----------
    document.body.classList.add('loaded');
});


// ========== SEARCH ==========
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const booksGrid = document.getElementById('books-grid');
    const noResults = document.getElementById('no-results');

    if (!searchInput || !booksGrid) return;

    const cards = booksGrid.querySelectorAll('.book-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        // Show/hide clear button
        if (searchClear) {
            searchClear.classList.toggle('visible', query.length > 0);
        }

        let visibleCount = 0;

        cards.forEach(card => {
            const title = (card.dataset.title || '').toLowerCase();
            const author = (card.dataset.author || '').toLowerCase();
            const genre = (card.dataset.genre || '').toLowerCase();
            const year = (card.dataset.year || '').toLowerCase();

            const matches = title.includes(query) ||
                            author.includes(query) ||
                            genre.includes(query) ||
                            year.includes(query);

            if (matches) {
                card.style.display = '';
                card.style.animation = 'fadeInUp 0.3s ease-out both';
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.style.animation = 'none';
            }
        });

        // Show no results message
        if (noResults) {
            noResults.classList.toggle('visible', visibleCount === 0 && query.length > 0);
        }

        // Update stats badge
        const statsBadge = document.getElementById('books-count');
        if (statsBadge) {
            if (query.length > 0) {
                statsBadge.textContent = `${visibleCount} ta topildi`;
            } else {
                statsBadge.textContent = `${cards.length} ta kitob`;
            }
        }
    });

    // Clear search
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
        });
    }

    // Keyboard shortcut: Ctrl+K or / to focus search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        // Escape to clear and blur
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
}


// ========== FORM ENHANCEMENTS ==========
function initFormEnhancements() {
    const form = document.querySelector('.form-card form');
    if (!form) return;

    // Add floating label effect
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        // Add focus animation
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
            if (input.value.trim()) {
                input.parentElement.classList.add('filled');
            } else {
                input.parentElement.classList.remove('filled');
            }
        });

        // Live validation visual
        input.addEventListener('input', () => {
            if (input.value.trim().length > 0) {
                input.style.borderColor = '';
            }
        });
    });

    // Submit button loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        form.addEventListener('submit', () => {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="spinner"></span>
                Saqlanmoqda...
            `;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
        });
    }
}


// ========== CARD EFFECTS ==========
function initCardEffects() {
    const cards = document.querySelectorAll('.book-card');

    cards.forEach(card => {
        // Subtle parallax tilt on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `translateY(-4px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}


// ========== UTILITY: Debounce ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
