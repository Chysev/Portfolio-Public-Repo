const FourthPage = () => {
    return (
        <div className="container-100 flex bg-backgroundgray min-height-20vh">
            <div className="grp-cards items-center justify-center gap-20 m-auto width-1280 max-width-1300-p-0-20">
                <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-center cards">
                    <i className="fa-brands fa-github text-8xl text-blue"></i>
                    <a href="https://github.com/Chysev"><h1 className="text-2xl underline">GitHub</h1></a>
                    <h2 className="text-xl">Follow me on GitHub</h2>
                </div>

                <div data-aos="fade-down" data-aos-duration="500" className="flex flex-col items-center cards">
                    <i className="fa-brands fa-facebook text-8xl text-blue"></i>
                    <a href="https://fb.com/Chysev"><h1 className="text-2xl underline">Facebook</h1></a>
                    <h2 className="text-xl">Follow me on Facebook</h2>
                </div>
            </div>
        </div>
    )
}

export default FourthPage