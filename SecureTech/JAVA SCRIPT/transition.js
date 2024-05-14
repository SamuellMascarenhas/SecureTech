// Adicione um ouvinte de evento de clique a todos os links do menu de navegação
document.querySelectorAll('.menunav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação

        // Oculta o conteúdo da página atual definindo a opacidade para 0
        document.body.style.opacity = '0';

        // Após um pequeno intervalo, navegue para a página correspondente
        setTimeout(function() {
            window.location.href = link.href;
        }, 500); // Tempo de espera correspondente à duração da transição CSS
    });
});
