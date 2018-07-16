// EventListener
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});

// Functions
function loadPortfolio() {
    fetch('data.json')
    .then( response => {
        return response.json();
    })
    .then( data => {
        let html = '';

        data.portfolio.forEach( portfolio => {

            // Crear el template
            html += `
                <div class="element">
                    <img src="./img/${portfolio.id}.jpg">
                    <div class="content">
                        <h3>${portfolio.name}</h3>
                        <p>${portfolio.desc}</p>
                    </div>
                </div>
            `;
        });

        // Inyectar el html
        document.querySelector('#list').innerHTML = html;
    })
    .catch(function (error) {
        console.log(error);
    });
}