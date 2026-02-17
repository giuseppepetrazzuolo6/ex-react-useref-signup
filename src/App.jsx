import { useState } from "react"

function App() {
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("default")
  const [anniEsperienza, setAnniEsperienza] = useState(0)
  const [descrizione, setDescrizione] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nomeCompleto.trim() === '' ||
      surname.trim() === '' ||
      password.trim() === '' ||
      specializzazione.trim() === 'default' ||
      anniEsperienza <= 0 ||
      descrizione.trim() === '') {
      console.error('Compila tutti i campi prima di inviare il form')
      return;
    }
    console.log(`
      nome: ${nomeCompleto}
      cognome: ${surname}
      password: ${password}
      specializzazione: ${nomeCompleto}
      anni di Esperienza: ${anniEsperienza}
      descrizione: ${descrizione}
      `)
  }
  return (
    <>
      <section>
        <h1>Compila il form con i tuoi dati!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text"
              placeholder="inserisci il tuo nome"
              value={nomeCompleto}
              onChange={e => setNomeCompleto(e.target.value)} />
            <input type="text"
              placeholder="Inserisci il tuo cognome"
              value={surname}
              onChange={e => setSurname(e.target.value)} />
          </div>
          <div>
            <input type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <select value={specializzazione} onChange={e => setSpecializzazione(e.target.value)}>
              <option value="default">Seleziona una specializzazione</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div>
            <input type="number"
              placeholder="Inserisci un numero"
              value={anniEsperienza}
              onChange={e => setAnniEsperienza(e.target.value)} />
          </div>
          <div>
            <textarea type="text"
              placeholder=""
              value={descrizione}
              onChange={e => setDescrizione(e.target.value)} />
          </div>
          <div>
            <button>Invia Form</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default App
