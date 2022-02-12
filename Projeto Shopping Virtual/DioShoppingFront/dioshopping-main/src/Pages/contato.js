import { useState, useEffect } from 'react';
import './contato.css'

const Contatos = () => {

  const url = 'http://localhost:5000/message'
  const [message, setMessage] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [validator, setValidator] = useState(false);
  const [render, setRender] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(url)
      const data = await response.json();
      setMessage(data);
    }
    loadData()
  }, [render])

  const sendMessage = () => {
    setValidator(false);
    if(author.length <= 0 || content.length <= 0){
        return setValidator(!validator)
    }
    const bodyForm = {
        email: author,
        message: content,
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyForm)
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.id) {
            setRender(true);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 5000)
        }
    })
    
    setAuthor('');
    setContent('');
    
    console.log(content)
  }  

  return(
    <>
      <div className="container">
        <h3 className="titleContact">Deixe sua mensagem</h3>  
        <form className="form-container">
          <label>Nome:</label>
          <input type="text" id="name" placeholder="Digite seu nome" value={author} onChange={(event)=>{setAuthor(event.target.value)}} />
          <label>Mensagem:</label>
          <textarea id="message" placeholder="Digite sua mensagem" value={content} onChange={(event)=>{setContent(event.target.value)}} />
        </form>
        
        {validator && 
            <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                <strong>Por favor preencha todos os campos!</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        }

        {success && 
            <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                <strong>Mensagem foi enviada</strong>
            </div>
        }

        <button onClick={sendMessage} className="sendButton">
          Enviar
        </button>
      

        {message.map((content) => {
          return(
            <div className="card mt-2" key={content.id}>
              <div className="card-body">
                <h5 className="card-title">{content.email}</h5>
                <p className="card-text">{content.message}</p>
                <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Contatos;