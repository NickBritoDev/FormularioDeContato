import React, { useState }  from "react";
import emailjs from '@emailjs/browser'
import './app.css'

export default function App() {

  //armazena o nome digitado no campo input
  const [name, setName] = useState('')
  //armazena o email digitado no campo input
  const [email, setEmail] = useState('')
  //armazena o mensagem digitado no campo input
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    //verifica se tem algo escrito dentro de todos os campos do formulario
    if(name === '' || email === '' || message === ''){
      alert("Preencher todos os campos (nome, email e mensagem)😅")
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send('service_h3sdie6', 'template_eb2j6bl', templateParams, 'cj3uFcdBMZFwfhzPW' )
    .then((response) => {
      alert("Email enviado com sucesso ! ✔", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
      alert('Erro: EMAIL NÃO ENVIADO, TENTE NOVAMENTE❌', error)
    })
  }

  return (
    <div className="container">
      <h1 className="title">Em que posso ajudar ?</h1>

      <form className="form" onSubmit={sendEmail}>
      <input
        className="input"
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setName(e.target.value)}
        value={name}/>

        <input
        className="input"
        type="text"
        placeholder="Digite seu e-mail..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}/>

        <textarea
        className="textArea"
        placeholder="Qual assunto deseja tratar ?"
        onChange={(e) => setMessage(e.target.value)}
        value={message}/>

        <input 
        className="btn" 
        type="submit" 
        value="Enviar"/>

      </form>
    </div>
  );
}