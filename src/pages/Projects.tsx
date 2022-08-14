import { Fragment } from 'react'

// Components
import Header from '../components/App/Header'
import Page from '../components/Projects/1_Page'
import Footer from '../components/App/Footer'


const Projects = () => {
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

export default Projects