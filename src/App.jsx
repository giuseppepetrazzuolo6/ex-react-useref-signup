import { useRef, useState } from "react"

function App() {
  const nomeCompletoRef = useRef()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const specializzazioneRef = useRef()
  const anniEsperienzaRef = useRef()
  const [descrizione, setDescrizione] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nomeCompletoRef.current.value.trim() === '' ||
      username.trim() === '' ||
      password.trim() === '' ||
      specializzazioneRef.current.value.trim() === 'default' ||
      anniEsperienzaRef.current.value <= 0 ||
      descrizione.trim() === '') {
      console.error('Compila tutti i campi prima di inviare il form')
      return;
    }
    console.log(`
      nome: ${nomeCompletoRef.current.value}
      cognome: ${username}
      password: ${password}
      specializzazione: ${specializzazioneRef.current.value}
      anni di Esperienza: ${anniEsperienzaRef.current.value}
      descrizione: ${descrizione}
      `)
  }

  const isUsernameValid =
    username.length >= 6 &&
    [...username].every(c =>
      letters.includes(c.toLowerCase()) ||
      numbers.includes(c)
    )

  const hasLetter = [...password].some(c =>
    letters.includes(c.toLowerCase())
  )
  const hasNumber = [...password].some(c =>
    numbers.includes(c)
  )
  const hasSymbol = [...password].some(c =>
    symbols.includes(c)
  )

  const isPasswordValid =
    password.length >= 8 &&
    hasLetter &&
    hasNumber &&
    hasSymbol

  const descrizioneTrim = descrizione.trim()
  const isDescrizioneValid =
    descrizioneTrim.length >= 100 &&
    descrizioneTrim.length <= 1000


  return (
    <>
      <section>
        <h1>Compila il form con i tuoi dati!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text"
              placeholder="Nome Completo"
              ref={nomeCompletoRef} />
          </div>
          <div>
            <input type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)} />
            <strong style={{ color: isUsernameValid ? "green" : "red" }}>
              {isUsernameValid ? "Username valido" : "Solo lettere o numeri (min 6)"}
            </strong>
          </div>
          <div>
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
            <strong style={{ color: isPasswordValid ? "green" : "red" }}>
              {isPasswordValid ? "Username valido" : "8 caratteri, lettera, numero e simbolo"}
            </strong>
          </div>
          <div>
            <select ref={specializzazioneRef}>
              <option value="default">Seleziona una specializzazione</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div>
            <input type="number"
              placeholder="Anni di esperienza"
              ref={anniEsperienzaRef} />
          </div>
          <div>
            <textarea
              placeholder="Descrizione..."
              value={descrizione}
              onChange={e => setDescrizione(e.target.value)} />
            <strong style={{ color: isDescrizioneValid ? "green" : "red" }}>
              {isDescrizioneValid
                ? "Descrizione valida"
                : "Tra 100 e 1000 caratteri"}
            </strong>
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
