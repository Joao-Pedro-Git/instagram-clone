import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Mantenha a importação do arquivo firebase.js

function Header(props) {

  useEffect(() => {
    console.log('Usuário no Header:', props.user);
  }, [props.user]); // Verifica sempre que o estado do usuário mudar


  function criarConta(e) {
    e.preventDefault();
    const email = document.getElementById('email-cadastro').value;
    const username = document.getElementById('user-cadastro').value;
    const pass = document.getElementById('senha-cadastro').value;

    // Criar conta no Firebase
    createUserWithEmailAndPassword(auth, email, pass)
      .then((authUser) => {
        // Agora use updateProfile em authUser.user
        return updateProfile(authUser.user, {
          displayName: username,
        });
      })
      .then(() => {
        alert('Conta Criada com Sucesso');
        const openModal = document.querySelector('.modalCriarConta');
        openModal.style.display = "none";
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function logar(e) {
    e.preventDefault();
    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;

    signInWithEmailAndPassword(auth, emailLogin, senhaLogin)
      .then((authUser) => {
        console.log(authUser.user.displayName); // Verifique se está correto
        props.setUser(authUser.user.displayName); // Atualiza o estado no componente pai
        alert('Logado com sucesso');
      })
      .catch((error) => {
        alert(error.message);
      });
  }


  function abrirModalCriarConta(e) {
    e.preventDefault();
    const openModal = document.querySelector('.modalCriarConta');
    const closeModal = document.querySelector('.close-modal-criar');
    openModal.style.display = "block";
    closeModal.addEventListener('click', () => {
      openModal.style.display = "none";
    });
  }

  return (
    <div className="header">
      <div className="modalCriarConta">
        <div className="formCriarConta">
          <h2>Criar Conta</h2>
          <div className="close-modal-criar">X</div>
          <form onSubmit={(e) => criarConta(e)}>
            <input id='email-cadastro' type="text" placeholder='Seu E-mail...' />
            <input id='user-cadastro' type="text" placeholder='Seu Username...' />
            <input id='senha-cadastro' type="password" placeholder='Sua Senha...' />
            <input type="submit" value='Criar Conta' />
          </form>
        </div>
      </div>

      <div className="header__logo">
        <a href="#"><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" width="200" /></a>
      </div>

      {props.user ? (
        <div className="header__logadoInfo">
          <span>Olá, <b>{props.user}</b></span>
          <a href="#">Postar!</a>
        </div>
      ) : (
        <div className="header__loginForm">
          <form onSubmit={(e) => logar(e)}>
            <input id='email-login' type="text" placeholder='Login...' />
            <input id='senha-login' type="password" placeholder='Senha...' />
            <input type="submit" name='acao' value='Logar' />
          </form>
          <div className="btn__criarConta">
            <a onClick={(e) => abrirModalCriarConta(e)} href="#">Criar Conta!</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
