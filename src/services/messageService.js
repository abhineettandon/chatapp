import http from '../utils/http'

export const getThreads = () => {
    return http.get('/threads')
}

export const getThreadMessages = (threadId) => {
    return http.get(`/threads/${threadId}/messages`)
}