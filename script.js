const sections = document.querySelectorAll('#home, #sobre, #projetos, #contato');
const navLinks = document.querySelectorAll('nav ul li a'); // links do menu

const options = {
  root: null,
  threshold: 0.10 // quando 60% da seção está visível
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove a classe ativa de todos os links
      navLinks.forEach(link => {
        link.classList.remove('change-color');
      });

      // Adiciona a classe ativa ao link correspondente à seção visível
      const id = entry.target.getAttribute('id'); // pega o id da seção
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('change-color');
      }
    }
  });
}, options);

// Observar todas as seções
sections.forEach(section => {
  observer.observe(section);
});

function openModal(id) {
      document.getElementById(id).style.display = 'block';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Fechar o modal ao clicar fora
    window.onclick = function (event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
