// Mobile Menu Toggle Functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}
       // Toggle de tema
        document.addEventListener('DOMContentLoaded', function() {
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;
            
            // Verificar preferência de tema salva
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                body.classList.add('light-theme');
                themeToggle.classList.add('active');
            }
            
            // Alternar tema ao clicar no botão
            themeToggle.addEventListener('click', function() {
                body.classList.toggle('light-theme');
                themeToggle.classList.toggle('active');
                
                // Salvar preferência do usuário
                const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
                localStorage.setItem('theme', currentTheme);
            });
            
            // Menu mobile
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });