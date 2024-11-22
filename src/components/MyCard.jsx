import { Card } from "react-bootstrap";
import Boton from "./Boton";

const myCard = () => {
    return (
        <> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='public\imgs\mar-plata.png'/>
        <Card.Body>
          <Card.Title>Lavken</Card.Title>
          <Boton/>
        </Card.Body>
      </Card>
        </>
    )
}
export default myCard