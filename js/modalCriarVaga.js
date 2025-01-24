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
