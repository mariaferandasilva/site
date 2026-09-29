const form =
    document.getElementById("cadastroForm");

const cpf =
    document.getElementById("cpf");

const senha =
    document.getElementById("senha");

const confirmarSenha =
    document.getElementById("confirmarSenha");

const mensagem =
    document.getElementById("mensagem");


// =========================
// CPF
// =========================

cpf.addEventListener("input", function () {

    // Remove letras e símbolos
    let valor =
        cpf.value.replace(/\D/g, "");

    // Permite no máximo 11 números
    valor =
        valor.substring(0, 11);

    // Formato:
    // 000.000.000-00

    if (valor.length > 9) {

        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{0,2})$/,
            "$1.$2.$3-$4"
        );

    }

    else if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{0,3})$/,
            "$1.$2.$3"
        );

    }

    else if (valor.length > 3) {

        valor = valor.replace(
            /^(\d{3})(\d{0,3})$/,
            "$1.$2"
        );

    }

    cpf.value = valor;

});


// =========================
// FORMULÁRIO
// =========================

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        mensagem.className = "";

        mensagem.textContent = "";


        // SENHA

        if (senha.value.length < 6) {

            mensagem.textContent =
                "A senha precisa ter pelo menos 6 caracteres.";

            mensagem.classList.add("erro");

            senha.focus();

            return;
        }


        // CONFIRMAR SENHA

        if (
            senha.value !==
            confirmarSenha.value
        ) {

            mensagem.textContent =
                "As senhas não são iguais.";

            mensagem.classList.add("erro");

            confirmarSenha.focus();

            return;
        }


        // CPF

        const cpfNumeros =
            cpf.value.replace(/\D/g, "");

        if (cpfNumeros.length !== 11) {

            mensagem.textContent =
                "Digite exatamente os 11 números do CPF.";

            mensagem.classList.add("erro");

            cpf.focus();

            return;
        }


        // SUCESSO

        mensagem.textContent =
            "Conta criada com sucesso! 💗";

        mensagem.classList.add("sucesso");


        // Limpa o formulário

        form.reset();

    }
);