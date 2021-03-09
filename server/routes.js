const router = require('express').Router()

const { threads, messages } = require('./data')

router.get('/threads', (req, res) => {
    return res.json(threads)
})

router.get('/threads/:id/messages', (req, res) => {
    const data = messages.filter(message => message.thread_id === req.params.id)
    return res.json(data)
})

module.exports = router