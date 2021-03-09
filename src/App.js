import { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import io from 'socket.io-client'

import Layout from './layout/Layout'
import { ThreadsList } from './components/ThreadsList'
import { Messages } from './components/Messages'
import { getThreads, getThreadMessages } from './services/messageService'

const App = () => {
  const [threads, setThreads] = useState([]);
  const [activeThread, setActiveThread] = useState(null)
  const [messages, setMessages] = useState([])
  const socketRef = useRef()

  useEffect(() => {
    getThreads()
      .then(({ data: threads }) => {
        setThreads(threads)
      })
    
    socketRef.current = io.connect(process.env.REACT_APP_SOCKET_SERVER_ENDPOINT)
    
    socketRef.current.on('message', (data) => {
      handleSocketResponse(data)
    })

    return () =>  {
      socketRef.current.removeAllListeners()
      socketRef.current.close()
    }

  }, [activeThread])

  const handleSocketResponse = (data) => {
    if (Number(data.thread_id) === Number(activeThread.thread_id)) {
      setMessages(messages => [...messages, data])
    }
  }

  const handleSendMessage = (message) => {
    socketRef.current.emit('message', {
      thread_id: activeThread.thread_id,
      message
    });
  }

  const handleThreadClick = (thread) => {
    setActiveThread(thread)
    getThreadMessages(thread.thread_id)
      .then(({ data: messages }) => setMessages(messages))
  }

  return (
    <Layout>
      <div className="chat-wrapper">
        <Row>
          <Col md={3}>
            <ThreadsList
              threads={threads}
              onThreadClick={handleThreadClick}
              activeThread={activeThread}
            />
          </Col>
          <Col md={9}>
            {
              activeThread
                ?
                (
                  <Messages
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    activeThread={activeThread}
                  />
                )
                :
                (
                  <h4>Select a thread to start chat</h4>
                )
            }
            
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default App;