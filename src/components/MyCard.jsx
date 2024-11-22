import { Card } from "react-bootstrap";

const myCard = () => {
    return (
        <> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='public\imgs\mar-plata.png'/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
        </>
    )
}
export default myCard