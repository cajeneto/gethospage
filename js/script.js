function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.getElementById('contatoForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
  
    console.log("Dados enviados:", { nome, email, whatsapp });
  
    document.getElementById('mensagem-enviada').textContent = 'Obrigado! Seus dados foram recebidos.';
    this.reset();
  });
  