const About = () => {
    return (
        <section className=" z-[-1] ">
            <div className="mt-[9rem]  md:px-[22vw] flex items-center justify-center flex-col">
                <p className=" text-2xl text-center font-[600] 
                md:leading-[2rem] lg:leading-[3rem] xl:leading-[4rem] xl:text-5xl lg:text-4xl">
                    Your
                    Privacy Friendly,
                    Open Source.
                    Notes App.</p>
                <p className="text-base text-center mt-6 px-24">A Notes Taking Web App Built with Simplicity.</p>
                <button className="md:text-xl text-base px-8 py-3.5 bg-[#3B73C6] font-[400] mt-6 rounded-[30px] text-white">Get
                    Started
                    For
                    Free</button>
                <p className="md:text-base text-xs text-center md:leading-[3] leading-[2]">No Credit Card Required</p>
            </div>
            <div className="flex justify-end items-center flex-col ">
                <img src="assets/bgimage.png" alt="img-short-look" />
            </div>
            <div>
                <img src="assets/Vector.png" alt="design-pattern" />
            </div>

        </section>
    )
}

export default About 