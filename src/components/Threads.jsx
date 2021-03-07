import { Card, ListGroup } from 'react-bootstrap'

const Threads = () => {
    return (
        <Card>
            <Card.Header>People</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export { Threads };