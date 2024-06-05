function updateColor() {
    const cards = document.querySelectorAll(".card");


    cards.forEach((card)=>{
        const logo = card.querySelector(".card-logo");
        const btn = card.querySelector(".card-button-btn");
        btn.computedStyleMap.color = "black";
        logo.computedStyleMap.backgroundColor = "black";
    })
}