import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


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
const db = getFirestore(app);

let isLoggingOut = false; 

// Verificar autenticação ao carregar a página
onAuthStateChanged(auth, (user) => {
    if (!user && !isLoggingOut) {
        // Exibe alerta apenas se o usuário não está logado e não está saindo
        alert("Você não está autenticado!");
        window.location.href = "/index.html";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const botaoSair = document.getElementById('sair');

    if (botaoSair) {
        botaoSair.addEventListener('click', () => {
            isLoggingOut = true; 
            signOut(auth)
                .then(() => {
                    alert('Você saiu com sucesso!');
                    window.location.href = "/index.html"; // Redirecionar para a página de login
                })
                .catch((error) => {
                    isLoggingOut = false;
                    console.error('Erro ao sair:', error.message);
                });
        });
    }
});


// Chama a função fetchVagas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    fetchVagas(); // Carrega as vagas automaticamente
});

//Função para Buscar Dados

async function fetchVagas(){

    try {
        const querySnapshot = await getDocs(collection(db, "vagas"));
        const vagasContainer = document.querySelector('.conteudo');
        vagasContainer.innerHTML = "";

        querySnapshot.forEach((doc) =>{
            const vaga = doc.data();

            vagasContainer.innerHTML += `

            <div class="vaga-card">
                <h2>${vaga.nomeDaVaga}</h2>
                <p>${vaga.descricaoVaga}</p><br>
                <p><strong>Estado: </strong>${vaga.estadoVaga}</p><br>
                <p><strong>Cidade: </strong>${vaga.cidadeVaga}</p><br>
                <div class="contatoPropostar">
                    ${vaga.telefone ? `<p><strong>Telefone/whatsapp:</strong> ${vaga.telefone}</p>` : ""}
                    <button id ="propostar">Fazer uma propostar</button>
                </div>
                
            </div>

            `;    

        
        });    
    }catch (error) {
        console.error("Erro ao buscar as vagas:", error);
        alert("Não foi possível carregar as vagas. Tente novamente mais tarde.");
    }

}


