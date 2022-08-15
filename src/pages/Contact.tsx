import { Fragment } from "react"

// Components
import Header from '../components/App/Header'
import Page from '../components/Contact/1_Page'
import Footer from '../components/App/Footer'

const Contact = () => {
    return (
        <Fragment>

            {/* Header | Navigation */}
            <Header />

            {/* Page */}
            <Page />

            {/* Footer */}
            <Footer />

        </Fragment>
    )
}

export default Contact