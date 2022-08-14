const ThirdPage = () => {
    return (
        <div className="container-100 flex bg-backgroundgray min-height-50vh">
            <div className="grp-cards items-center justify-center gap-20 m-auto width-1280 max-width-1300-p-0-20">
                <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-center cards">
                    <i className="fa-solid fa-paintbrush text-8xl text-red"></i>
                    <h1 className="text-2xl">Frontend Developer</h1>
                    <h2 className="text-xl">React, Next, Vue and Nuxt 3</h2>
                </div>

                <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-center cards">
                    <i className="fa-solid fa-code text-8xl text-red"></i>
                    <h1 className="text-2xl">Backend Developer</h1>
                    <h2 className="text-xl">Express, Fastify, Django</h2>
                </div>

                <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-center cards">
                    <i className="fa-solid fa-server text-8xl text-red"></i>
                    <h1 className="text-2xl">Software Developer</h1>
                    <h2 className="text-xl">Python and C++</h2>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage