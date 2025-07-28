function carregar(pagina, linkAtivo = null) {
  fetch('Contents/' + pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById('conteudo').innerHTML = html;

      // Remove classe 'active' de todos os links
      document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.classList.remove('active');
      });

      // Adiciona classe 'active' ao link clicado
      if (linkAtivo) {
        linkAtivo.classList.add('active');
      }
    });
}

// Carrega conteúdo padrão ao iniciar e ativa menu
window.onload = () => {
  const primeiroLink = document.querySelector('.sidebar ul li a[href="#"]');
  carregar('inicio.html', primeiroLink);
};
