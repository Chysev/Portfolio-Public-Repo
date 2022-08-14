// Components
import { Fragment } from 'react'

// Components
import Header from '../components/App/Header'
import FirstPage from '../components/Home/1_Page'
import SecondPage from '../components/Home/2_Page'
import ThirdPage from '../components/Home/3_Page'
import FourthPage from '../components/Home/4_Page'
import Footer from '../components/App/Footer'


const Home = () => {
    return (
        <Fragment>

            {/* Header | Navigation */}
            <Header />

            {/* Pages */}
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />

            {/* Footer */}
            <Footer />

        </Fragment>
    )
}

export default Home