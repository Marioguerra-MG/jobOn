// cadastro.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6v51nTXWwa2WlBv9WXZ36J0jK6M4I6aw",
    authDomain: "jobon-bd.firebaseapp.com",
    projectId: "jobon-bd",
    storageBucket: "jobon-bd.firebasestorage.app",
    messagingSenderId: "501974791321",
    appId: "1:501974791321:web:e230379df99f9694787408"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Espera o carregamento completo da página e então define o event listener
document.addEventListener('DOMContentLoaded', () => {
    const registar = document.getElementById("registar");

    // Adiciona o event listener ao botão
    registar.addEventListener("click", () => {
        const email = document.getElementById("emailUsuario").value;
        const senha = document.getElementById("senhaUsuario").value;
        const confirmarSenha = document.getElementById("confirmarSenhaUsuario").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then(function(user) {
                alert("Cadastrado com sucesso!");
                // Limpa os campos após o cadastro
                document.getElementById("nomeUsario").value = "";
                document.getElementById("emailUsuario").value = "";
                document.getElementById("senhaUsuario").value = "";
                document.getElementById("confirmarSenhaUsuario").value = "";

                window.location.href ="/index.html"
            })
            .catch(function(error) {
                alert("Falha ao cadastrar. Por favor, tente novamente.");
            });
    });
});

document.getElementById("buttonSenhaUsuario").addEventListener("click", function () {

    const senhaUsuario = document.getElementById("senhaUsuario");
    const iconeSenhaUsuario = document.getElementById("iconeSenhaUsuario");

    if(senhaUsuario.type === "password"){
        senhaUsuario.type = 'text';
        iconeSenhaUsuario.classList.remove("fa-eye");
        iconeSenhaUsuario.classList.add("fa-eye-slash");

    }else{
        senhaUsuario.type = 'password';
        iconeSenhaUsuario.classList.remove("fa-eye-slash"); 
        iconeSenhaUsuario.classList.add("fa-eye");
    }

});


document.getElementById("buttonSenhaConfirmar").addEventListener("click", function () {

    const confirmarSenhaUsuario = document.getElementById("confirmarSenhaUsuario");
    const confirmariconeSenhaUsuario = document.getElementById("confirmariconeSenhaUsuario");

    if(confirmarSenhaUsuario.type === "password"){
        confirmarSenhaUsuario.type = 'text';
        confirmariconeSenhaUsuario.classList.remove("fa-eye");
        confirmariconeSenhaUsuario.classList.add("fa-eye-slash");

    }else{
        confirmarSenhaUsuario.type = 'password';
        confirmariconeSenhaUsuario.classList.remove("fa-eye-slash"); 
        confirmariconeSenhaUsuario.classList.add("fa-eye");
    }

});

