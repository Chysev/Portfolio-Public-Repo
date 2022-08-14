import AOS from 'aos'
AOS.init();

const Buttons = () => {
    return (
        <div data-aos="fade-down" className="flex gap-2 items-center">
            <button className="bg-button border-button border-solid rounded-md text-xl px-6 p-2 transparent-style-two">My Skills</button>
            <a href="" className="text-black underline">Download CV</a>
        </div>
    )
}

export default Buttons