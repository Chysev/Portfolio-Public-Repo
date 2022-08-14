import AOS from 'aos'
AOS.init();

import HTML from '../../public/assets/html.png'
import MONGO from '../../public/assets/mongodb.png'
import NODEJS from '../../public/assets/nodejs.png'


const FistPage = () => {
    return (
        <div className='flex container-100 min-height-150vh bg-backgroundgray'>
            <div data-aos="fade-down" data-aos-duration="800" className='grp-cardss m-auto gap-6 '>
                <div className="cardss">
                    <img className='app' src={NODEJS} alt="" />
                    <h1>Express Ejs App</h1>
                    <h2>npx create-ejs-app</h2>
                    <h2 className='text-justify max-width-text-400' >Express EJS App for begginers, Easy to understand the concept of the code and to install </h2>
                </div>

                <div className="cardss">
                    <img className='app' src={MONGO} alt="" />
                    <h1>PageClip Server</h1>
                    <h2>Open Source</h2>
                    <h2>Contact Page with PageClip Server Database</h2>
                </div>

                <div className="cardss">
                    <img className='app' src={NODEJS} alt="" />
                    <h1>Shop Website</h1>
                    <h2>Open Source</h2>
                    <h2>Built with Express, Ejs and Nedb database</h2>
                </div>

                <div className="cardss">
                    <img className="app" src={HTML} alt="" />
                    <h1>Minecraft Website</h1>
                    <h2>Open Source</h2>
                    <h2>This website is good for Minecraft Survival Server</h2>
                </div>

                <div className="cardss">
                    <img className='app' src={NODEJS} alt="" />
                    <h1>Express with SSL</h1>
                    <h2 className='text-justify max-width-text-400'>Express with SSL for begginers who do not know how to start an app with SSL
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default FistPage