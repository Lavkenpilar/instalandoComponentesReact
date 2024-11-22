import { Card } from "react-bootstrap";
import Boton from "./Boton";
// agregamos props como argumentos en MyCard
const myCard = ({image, title, colorButton, textButton}) => {
    return (
        <> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Boton colorButton={colorButton} textButton={textButton}/>
        </Card.Body>
      </Card>
        </>
    )
}
export default myCard