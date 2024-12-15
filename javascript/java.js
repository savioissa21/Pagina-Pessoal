document.addEventListener("DOMContentLoaded", function() {
    (function() {
        emailjs.init("DzVJWU-B2p-J6C6gh");
    })();

    document.getElementById('forms-pessoal').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobrenome').value;
        let email = document.getElementById('email').value;
        let assunto = document.getElementById('assunto').value;
        let mensagem = document.getElementById('mensagem').value;

        if (!nome || !sobrenome || !email || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        let templateParams = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        emailjs.send('service_mq4ywvw', 'template_37jxc79', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email enviado com sucesso!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Falha ao enviar o email.");
            });
    });
});
