import { useState } from "react"
import { Link } from 'react-router-dom'

const Header = () => {

    let [open, setOpen] = useState(false)

    return (
        <header className="bg-backgroundgraysurface fixed z-50 main-navigation ">
            <div className="bg-backgroundgraysurface flex justify-between items-center navigation  max-width-1205">

                <div className="title">
                    <h1 className="text-white">Portfolio</h1>
                </div>

                <button className="MobileNavigation hidden 768max:block z-40" onClick={() => setOpen(!open)} name={open ? 'close' : 'menu'}>
                    <i className={`text-white hidden 768max:block fa-solid fa-bars-staggered ${open ? '768max:rotate-0' : '768max:rotate-180'}`}></i>
                </button>


                <nav data-visible="false" className={`flex NavRowList z-30 ${open ? '768max:translate-x-0' : '768max:translate-x-full'}`}>
                    <ul className="flex text-white gap-6 NavRowListTwo">
                        <li><Link className="hover:text-Hover hover:underline transition-all" to="/">Home</Link></li>
                        <li><Link className="hover:text-Hover hover:underline transition-all" to="/projects">Projects</Link> </li>
                        <li><Link className="hover:text-Hover hover:underline transition-all" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header