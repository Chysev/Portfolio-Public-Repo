import AOS from 'aos'
AOS.init();

const FirstPage = () => {
    return (
        <div className="flex bg-backgroundgray 560max:bg-whitesmoke min-height-110vh">
            <form data-aos="fade-down" data-aos-duration="500" className="justify-center bg-whitesmoke items-center" action="/">
                <h1 className="text-3xl font-semibold">Hello!</h1>
                <div>
                    <input type="name" id="name" name="name" placeholder="Name Required" required />
                </div>

                <div>
                    <input type="email" id="email" name="email" placeholder="Email Required" required />
                </div>

                <div>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea>
                </div>

                <button className="bg-button border-button mt-1 border-solid rounded-md text-xl px-6 p-1 transparent-style-two" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FirstPage