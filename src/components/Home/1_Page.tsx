import AOS from 'aos'
AOS.init();

const FistPage = () => {
    return (
        <div className="container-100 flex bg-backgroundgray min-height-100vh First">
            <div data-aos="fade-down" data-aos-duration="800" className="flex justify-between m-auto width-1205 max-width-1300-p-0-20">
                <div className="text-white">
                    <p className="text-3xl 768max:text-2xl 560max:text-2xl">Hello, my name is</p>
                    <h1 className="text-7xl font-bold mt-3 768max:text-6xl 640max:text-5xl 560max:text-4xl 380max:text-3xl">John Albert Layda</h1>
                    <h2 className="text-4xl mt-3 560max:text-3xl 380max:text-2xl">A Full Stack Developer</h2>
                    <a href="#aboutme">
                        <button className="bg-button border-button border-solid mt-5 rounded-md text-2xl px-10 p-3 transparent-style">About Me</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FistPage