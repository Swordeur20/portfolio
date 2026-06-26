
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

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    // Active l'animation de l'interrupteur
    toggleBtn.classList.toggle('nightactive');
    
    // JavaScript va chercher tous les éléments <a> du HTML et les stocke ici
    const tousLesLiens = document.querySelectorAll('a');
    
    if (toggleBtn.classList.contains('nightactive')) {
        // --- MODE NUIT ---
        document.body.style.backgroundColor = "#081826";
        document.body.style.color = "#ffffff";
        
        document.querySelector('.semaine1').style.backgroundColor = "#073A59";
        document.querySelector('h1.mes-passions').style.backgroundColor = "#073A59";
        document.querySelector('h1.mes-projets').style.backgroundColor = "#073A59";
        document.querySelector('.cs').style.backgroundColor = "#073A59";
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = "#073A59";
        });
        
        // On change la couleur de chaque lien trouvé
        tousLesLiens.forEach(lien => {
            lien.style.color = "#ffffff";
        });

    } else {
        // --- MODE JOUR ---
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        
        document.querySelector('.semaine1').style.backgroundColor = "#EE2449";
        document.querySelector('h1.mes-passions').style.backgroundColor = "#EE2449";
        document.querySelector('h1.mes-projets').style.backgroundColor = "#EE2449";
        document.querySelector('.cs').style.backgroundColor = "#EE2449";
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = "#EE2449";
        });
        
        // On change la couleur de chaque lien trouvé
        tousLesLiens.forEach(lien => {
            lien.style.color = "#073A59";
        });
    }
});