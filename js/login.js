import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

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

document.addEventListener('DOMContentLoaded', () => {
    const entrar = document.getElementById("entrar");


    
    entrar.addEventListener('click', () => {
        const email = document.getElementById("email").value; 
        const senha = document.getElementById("senha").value; 
    
        signInWithEmailAndPassword(auth, email, senha)
            .then(response => {
                console.log("Usuário logado:", response.user);
                window.location.href = "/html/conteudo.html";
                
            })
            .catch(error => {
                console.error("Erro ao fazer login:", error.message); 
                alert("Erro ao fazer login: ");
                
                document.getElementById("email").value = '';
                document.getElementById("senha").value = '';
            });
    });

});



document.getElementById("buttonSenha").addEventListener("click", function () {

    const senha = document.getElementById("senha");
    const iconeSenha = document.getElementById("iconeSenha");

    if(senha.type === "password"){
        senha.type = 'text';
        iconeSenha.classList.remove("fa-eye");
        iconeSenha.classList.add("fa-eye-slash");

    }else{
        senha.type = 'password';
        iconeSenha.classList.remove("fa-eye-slash"); 
        iconeSenha.classList.add("fa-eye");
    }

});



