document.addEventListener("DOMContentLoaded", function() {
  let zindex = 10;
  let cards = document.querySelectorAll("div.card");
  let cardsContainer = document.querySelector("div.cards");

  console.log(cards);
  cards.forEach(function(card) {
    card.addEventListener("click", function(event) {
      event.preventDefault();

      let isShowing = false;

      if (this.classList.contains("show")) {
        isShowing = true;
      }

      if (cardsContainer.classList.contains("showing")) {
        
        let showingCard = document.querySelector("div.card.show");
        showingCard.classList.remove("show");

        if (isShowing) {
        
          cardsContainer.classList.remove("showing");
        } else {
        
          this.style.zIndex = zindex;
          this.classList.add("show");
        }

        zindex++;
      } else {
        
        cardsContainer.classList.add("showing");
        this.style.zIndex = zindex;
        this.classList.add("show");

        zindex++;
      }
    });
  });
});
