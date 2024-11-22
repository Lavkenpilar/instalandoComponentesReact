import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'


function App() {
    return (
    <>
      <h1>Reutilizando componentes</h1>
      <Button>Botón de Bootstrap</Button>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='public\imgs\mar-plata.png' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
