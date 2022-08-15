import { Fragment } from "react"
import VSCODE from '../../../public/assets/visual-studio-code.png'
import HTML from '../../../public/assets/html.png'
import CSS from '../../../public/assets/css.png'
import JS from '../../../public/assets/javascript.png'
import VUE from '../../../public/assets/vuejs-brands.svg'
import MONGO from '../../../public/assets/mongodb.png'
import SQL from '../../../public/assets/sql.png'
import NODEJS from '../../../public/assets/nodejs.png'
import GITHUB from '../../../public/assets/github.png'
import GIT from '../../../public/assets/git.png'
import TERMINAL from '../../../public/assets/terminal.png'

const Icons = () => {
    return (
        <Fragment>
            <h1 data-aos="fade-down" className='text-2xl font-medium'>Language and Tools</h1>
            <div className='flex gap-2 460max:grid 460max:grid-cols-7'>
                <img data-aos="fade-down" data-aos-duration="500" className="h-8 w-8" src={VSCODE} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={HTML} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-down" data-aos-duration="500" className="h-8 w-8" src={CSS} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={JS} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-down" data-aos-duration="500" className="h-8 w-8" src={VUE} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={MONGO} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={SQL} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={NODEJS} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-down" data-aos-duration="500" className="h-8 w-8" src={GITHUB} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-up" data-aos-duration="500" className="h-8 w-8" src={GIT} alt="OpenSource Portfolio created by John Layda (Chysev)" />
                <img data-aos="fade-down" data-aos-duration="500" className="h-8 w-8" src={TERMINAL} alt="OpenSource Portfolio created by John Layda (Chysev)" />
            </div>
        </Fragment>
    )
}

export default Icons