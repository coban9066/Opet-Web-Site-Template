document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${(i - index) * 100}vh)`;
        });
    }

    showSection(currentSectionIndex);

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            }
        } else {
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
            }
        }
        showSection(currentSectionIndex);
    });
});


let initialPrices = {
    benzin: 4400, 
    dizel: 4300,  
    gaz: 2800     
};

function updatePrices(fuelType) {
    let currentPrice = initialPrices[fuelType];
    
    let change = Math.random() < 0.5 ? -10 : 10;
    currentPrice += change;

    initialPrices[fuelType] = currentPrice;

    document.getElementById(`${fuelType}Price`).innerHTML = `${fuelType.charAt(0).toUpperCase() + fuelType.slice(1)} Fiyatı: ${currentPrice / 100} TL`;
}

function selectFuel(fuelType) {
    document.querySelectorAll('#fuelPrices div').forEach(div => {
        div.classList.remove('active');
    });

    document.getElementById(`${fuelType}Price`).classList.add('active');
    
    updatePrices(fuelType);
}

selectFuel('benzin');

setInterval(() => selectFuel(document.querySelector('#fuelOptions button.active').getAttribute('data-fuel')), 5 * 60 * 60 * 1000);
