import { useState, useRef, useEffect } from 'react'
import { Card, Form, Media } from 'react-bootstrap'

const currentUserId = 75

const Messages = ({ messages, onSendMessage, activeThread }) => {
    const [message, setMessage] = useState('')
    const messageEndRef = useRef()

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            })
        }
    }

    const handleInputChange = ({ target }) => {
        setMessage(target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (message) {
            onSendMessage(message)
            setMessage('')
            scrollToBottom()
        }
    }

    return (
        <Card>
            <Card.Header>
                <span>Messages</span>
                <a href="#" className="float-right">Delete</a>
            </Card.Header>
            <Card.Body className="chat-body">
                <ul className="chat-box-wrapper">
                    {
                        messages.map(message => (
                            <li className="chat-message" key={message.id}>
                                <Media className="message">
                                    {
                                        currentUserId !== Number(message.uid)
                                            ?
                                            (
                                                <img
                                                    width={64}
                                                    height={64}
                                                    className="mr-3"
                                                    src="https://via.placeholder.com/64"
                                                    alt="Generic placeholder"
                                                />
                                            )
                                            : null
                                    }
                                    <Media.Body>
                                        <p className="m-0">{ message.message }</p>
                                    </Media.Body>
                                    {
                                        currentUserId === Number(message.uid)
                                            ?
                                            (
                                                <img
                                                    width={64}
                                                    height={64}
                                                    className="ml-3"
                                                    src="https://via.placeholder.com/64"
                                                    alt="Generic placeholder"
                                                />
                                            )
                                            : null
                                    }
                                </Media>
                            </li>
                        ))
                    }
                </ul>
                <div ref={messageEndRef}></div>
            </Card.Body>
            <Card.Footer>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail" className="m-0">
                        <Form.Control
                            type="text"
                            name="message"
                            placeholder="Type message and hit enter"
                            onChange={handleInputChange}
                            value={message}
                        />
                    </Form.Group>
                </Form>
            </Card.Footer>
        </Card>
    )
}

export { Messages }