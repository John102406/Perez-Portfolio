let toggleBtn = document.getElementById('mode-toggle');
let body = document.body;

if(localStorage.getItem('theme') === "dark"){
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        toggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }else{
        toggleBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});