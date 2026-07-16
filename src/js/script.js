const getForm = document.getElementById('info-form');
const getInput = document.getElementById('info-input');

getForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (getInput.value === "") {
        getForm.classList.add("error");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getInput.value))) {
        getForm.classList.add("error");
    } else {
        getForm.classList.remove("error");
    }
});