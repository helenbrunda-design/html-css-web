const filterInput = document.getElementById('searchInput');
const citiesList = document.querySelectorAll('li');

filterInput.addEventListener('input', (event) => {
    let filterValue = event.target.value;

    citiesList.forEach((city) => {
        const cityName = city.textContent.toLowerCase().trim();

        if (!cityName.includes(filterValue.toLowerCase().trim())) {
            city.style.display = 'none';
        } else {
            city.style.display = 'block';
        }
    });
});