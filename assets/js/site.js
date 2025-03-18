// - **`document.addEventListener("keydown", function(event) {`** betyder, at vi lytter efter en tast, der bliver trykket.  
// - **`event`** indeholder oplysninger om, hvilken tast der blev trykket.  
document.addEventListener("keydown", function(event) {
    console.log(event);
    
    // giver os bogstavet eller symbolet på den tast, der blev trykket.  
    // Opret et nyt element til bogstavet
    let key = event.key;
//     - **`document.createElement("div")`** laver et nyt `<div>`-element, som vi vil bruge til at vise bogstavet.  
// - **`letter.classList.add("letter")`** tilføjer CSS-klassen `"letter"`, så vi kan style det.  
// - **`letter.textContent = key`** sætter bogstavet inde i `<div>`.  
    let letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent = key;

// - **`Math.random()`** laver et tilfældigt tal mellem `0` og `1`.  
// - **`Math.random() * window.innerWidth`** vælger en tilfældig position fra `0` til hele skærmens bredde.  
// - **`letter.style.left = `${x}px`;`** placerer elementet på den vandrette akse.  
// - **`letter.style.top = `${y}px`;`** placerer det lodret. 
    // Tilfældig startposition
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    letter.style.left = `${x}px`;
    letter.style.top = `${y}px`;

//- **`hsl(hue, saturation, lightness)`** bruges til at lave farver i CSS.  
//- **`Math.random() * 360`** vælger en tilfældig farve mellem `0°` og `360°` (forskellige nuancer).  
    // Tilfældig farve
    letter.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
// - **`appendChild(letter)`** tilføjer det nye element inde i `<div id="container">`, så det vises på skærmen.  
    document.getElementById("container").appendChild(letter);

// - **`setTimeout(() => {...}, 50);`** venter **50 millisekunder**, før animationen starter.  
// - **`letter.style.transform = "translateY(-100px)";`** flytter bogstavet **100px opad**.  
// - **`letter.style.opacity = "0";`** gør bogstavet gennemsigtigt.  
    // Start animation (flyt opad og forsvind)
    setTimeout(() => {
        letter.style.transform = "translateY(-100px)";
        letter.style.opacity = "0";
    }, 50);

// - **Efter 2 sekunder (`2000ms`) bliver elementet fjernet fra DOM'en**, så det ikke fylder unødvendig hukommelse.  
    // Fjern element efter animation
    setTimeout(() => {
        letter.remove();
    }, 2000);
});
