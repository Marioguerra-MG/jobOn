import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyC6v51nTXWwa2WlBv9WXZ36J0jK6M4I6aw",
    authDomain: "jobon-bd.firebaseapp.com",
    projectId: "jobon-bd",
    storageBucket: "jobon-bd.firebasestorage.app",
    messagingSenderId: "501974791321",
    appId: "1:501974791321:web:e230379df99f9694787408"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const modal = document.getElementById('modal');
const openModal = document.getElementById('adicionarJob');
const fechar = document.querySelector('.fechar');

openModal.addEventListener('click', () =>{
    modal.style.display = 'flex';
});

fechar.addEventListener('click', () =>{
    modal.style.display = 'none';
}); 

window.addEventListener('click', (event) =>{
    if(event.target === modal){
        modal.style.display = 'none';
    }
    
})



const form = document.getElementById('formComRolagem');

form.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const nomeDaVaga = document.getElementById('nomeDaVaga').value;
    const descricaoVaga = document.getElementById('descricaoVaga').value;
    const estadoVaga = document.getElementById('estadoVaga').value;
    const cidadeVaga = document.getElementById('cidadeVaga').value;
    const telefone = document.getElementById('telefone').value;


    try{
        await addDoc(collection(db, "vagas"), {
            nomeDaVaga,
            descricaoVaga,
            estadoVaga,
            cidadeVaga,
            telefone: telefone || null,
            criadoEm: new Date()
        });

        alert("Vaga criada com sucesso!");
        form.reset();
        document.getElementById("modal").style.display = "none";
    
    }catch (error){
        console.error("Erro ao salvar a vaga: ", error);
        alert("Erro ao criar a vaga. Tente novamente.");

    }

});

