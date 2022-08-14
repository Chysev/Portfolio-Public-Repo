import Layda from '../../public/assets/Layda.png'
import AOS from 'aos'
AOS.init();

// Components
import Icons from '../Home/components/Icons'
import Buttons from '../Home/components/Buttons'

const SecondPage = () => {
    return (
        <div id="aboutme" className="container-100 flex bg-backgroundsmoke min-height-60vh Second">
            <div className="flex justify-between items-center m-auto width-1280 max-width-1300-p-0-20 1024max:gap-6 1024max:flex-col">
                <div data-aos="fade-down" data-aos-duration="500" className="left">
                    <img src={Layda} alt="" />
                </div>
                <div className="right flex flex-col gap-3">
                    <h1 data-aos="fade-down" data-aos-duration="500" className="text-3xl font-medium 380max:text-2xl">I am John Albert Layda</h1>
                    <h2 data-aos="fade-down" data-aos-duration="500" className='text-justify max-width-text-700 text-xl font-normal 380max:text-x'>A Programmer, Web Developer, Student GitHub Developer and a Basketball player. I am currently a Senior High School Student Studying in The Philippine School Dubai.</h2>

                    <Icons />
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default SecondPage