const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        // si on clique sur une card déjà ouverte → on ferme
        if (card.classList.contains("active")) {
            card.classList.remove("active");
            return;
        }

        // sinon on ferme toutes les autres
        cards.forEach(c => c.classList.remove("active"));

        // puis on ouvre celle cliquée
        card.classList.add("active");
    });
});