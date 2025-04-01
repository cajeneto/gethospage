// Função para verificar se a seção está visível
function handleScroll() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      // Se a seção está a 80% visível na tela
      if (sectionTop < windowHeight * 0.8) {
          section.classList.add('visible');
      }
  });
}

// Executa ao rolar e ao carregar a página
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);