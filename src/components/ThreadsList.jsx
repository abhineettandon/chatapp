import { Card, ListGroup } from 'react-bootstrap'

const ThreadsList = ({ threads, onThreadClick, activeThread }) => {

    const handleThredClick = (thread) => {
        onThreadClick(thread)
    }

    return (
        <Card>
            <Card.Header>Threads</Card.Header>
            <ListGroup variant="flush">
                {
                    threads.map((thread, index) => (
                        <ListGroup.Item
                            key={ thread.thread_id }
                            onClick={ () => handleThredClick(thread) }
                            active={activeThread && thread.thread_id === activeThread.thread_id}
                        >
                            { thread.user_info.field_full_name }
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Card>
    )
}

export { ThreadsList };