import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <nav>
      <h2>My Mini Site</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="page">
      <h1>Welcome to my Mini Website</h1>
      <p>This is my website.</p>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        I am John Viel Limocon,  a BSIT 3rd Year student.
        This is my mini website activity.
      </p>
    </div>
  )
}

function Contact() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '') {
      setError('Please enter your name and email.')
      return
    }

    setError('')
    navigate('/thank-you')
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        ></textarea>

        {error && <p className="error">{error}</p>}
<br></br>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

function ThankYou() {
  return (
    <div className="page">
      <h1>Thank You!</h1>
      <p>Your message has been submitted successfully.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App