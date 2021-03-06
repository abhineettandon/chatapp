import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="chat-container">
                { children }
            </div>
        </>
    )
}

export default Layout