import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    title: "100Books",
    description: 'Finding, Filtering, & Searching the books'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav/>
                    <br/>
                    {children}
                </main>
            </body>
            <Footer/>
        </html>
    )
}

export default RootLayout;