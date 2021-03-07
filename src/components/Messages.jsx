import { Card, Form, Media } from 'react-bootstrap'

const Messages = () => {
    return (
        <Card>
            <Card.Header>
                <span className="align-bottom">John Doe</span>
                <a href="#" className="float-right">Delete</a>
            </Card.Header>
            <Card.Body className="chat-body">
                <ul className="chat-box-wrapper">
                    <li className="chat-message">
                        <Media className="message">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src="https://via.placeholder.com/64"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <p className="m-0">
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                            </Media.Body>
                        </Media>
                    </li>
                    <li className="chat-message">
                        <Media className="message">
                            <Media.Body>
                                <p className="m-0">
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                            </Media.Body>
                            <img
                                width={64}
                                height={64}
                                className="ml-3"
                                src="https://via.placeholder.com/64"
                                alt="Generic placeholder"
                            />
                        </Media>
                    </li>
                    <li className="chat-message">
                        <Media className="message">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src="https://via.placeholder.com/64"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <p className="m-0">
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                                </p>
                            </Media.Body>
                        </Media>
                    </li>
                </ul>
            </Card.Body>
            <Card.Footer>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="m-0">
                        <Form.Control type="email" placeholder="Type message and hit enter" />
                    </Form.Group>
                </Form>
            </Card.Footer>
        </Card>
    )
}

export { Messages }