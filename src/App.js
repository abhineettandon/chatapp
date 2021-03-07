import { Col, Row } from 'react-bootstrap'

import Layout from './layout/Layout'
import { Threads } from './components/Threads'
import { Messages } from './components/Messages'

const App = () => {
  return (
    <Layout>
      <div className="chat-wrapper">
        <Row>
          <Col md={3}>
            <Threads />
          </Col>
          <Col md={9}>
            <Messages />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default App;