const sections = document.querySelectorAll('#home, #sobre, #projetos, #contato');
const navLinks = document.querySelectorAll('nav ul li a');

const options = {
  root: null,
  threshold: 0.10
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('change-color');
      });

      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('change-color');
      }
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener("DOMContentLoaded", function () {
  const fade = document.querySelector("#fade");

  // Pega todos os botões que abrem modais
  const openButtons = document.querySelectorAll("[data-open-modal]");

  // Adiciona evento para cada botão de abrir modal
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalName = button.getAttribute("data-open-modal"); // Pega o nome do modal
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      toggleModal(modal);
    });
  });

  // Pega todos os botões de fechar modal
  const closeButtons = document.querySelectorAll(".close-modal");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal"); // Encontra o modal pai
      toggleModal(modal);
    });
  });

  // Fecha o modal clicando no fundo escuro
  fade.addEventListener("click", () => {
    document.querySelectorAll(".modal:not(.hide)").forEach((modal) => {
      toggleModal(modal);
    });
  });

  // Função que abre ou fecha o modal recebido
  function toggleModal(modal) {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  }
});
