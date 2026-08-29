window.addEventListener("load", () => {

  /* ===== SEARCH ===== */
  const input = document.querySelector('.search input');
  const cards = document.querySelectorAll('#games .game-card');

  if (input) {
    input.addEventListener('input', () => {
      const searchTerm = input.value.toLowerCase();

      cards.forEach(card => {
        const img = card.querySelector('img');
        const name = img ? img.alt.toLowerCase() : "";

        card.style.display = name.includes(searchTerm) ? "" : "none";
      });
    });
  }

  /* ===== FAVORITES ===== */
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  /* LOAD FAVORITES ON START */
  document.querySelectorAll(".game-card").forEach(card => {
    const name = card.dataset.name;
    const btn = card.querySelector(".fav-btn");

    if (btn && favorites.includes(name)) {
      btn.classList.add("active");
    }
  });

  /* CLICK FAVORITE */
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const card = btn.closest(".game-card");
      if (!card) return;

      const name = card.dataset.name;
      if (!name) return;

      if (favorites.includes(name)) {
        favorites = favorites.filter(f => f !== name);
        btn.classList.remove("active");
      } else {
        favorites.push(name);
        btn.classList.add("active");
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });

});