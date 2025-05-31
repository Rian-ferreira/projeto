document.addEventListener("DOMContentLoaded", function() {
    // Mostrar mensagem ao enviar contato
    const form = document.getElementById("formContato");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("msgEnviada").style.display = "inline";
            setTimeout(() => {
                document.getElementById("msgEnviada").style.display = "none";
                form.reset();
            }, 2000);
        });
    }
});
