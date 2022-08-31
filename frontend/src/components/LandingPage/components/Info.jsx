const Info = () => {
    return (
        <section className="bg-white flex justify-center items-center m-8 mt-[4rem] flex-col md:flex-row gap-y-16 md:gap-y-0">
            <div
                className="flex md:justify-between justify-center text-center items-center md:text-left md:items-start flex-col w-[100%] gap-y-8">
                <h4 className="md:pl-8 text-[#3B73C6] font-[700]">What is Noteslify?</h4>
                <p className="md:pl-8 w-[75%] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro odio incidunt inventore iste sunt numquam? Velit illum
                    laborum dolor perferendis reprehenderit odit distinctio illo ipsum, sit quidem minima qui nam.</p>
                <div className="px-8">
                    <button className="text-base py-[0.7rem] px-[2rem] bg-[#3B73C6] text-white rounded-[25px] ">Get
                        Started</button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="bg-[#F5F9FF] p-8">
                    <h5 className="p-4 text-[#3B73C6]  font-[700] text-xl">hello</h5>
                    <p className="text-base font-[300]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, reprehenderit.
                    </p>
                </div>
                <div className="bg-[#F5F9FF] p-8 ">
                    <h5 className="p-4 text-[#3B73C6] font-[700] text-xl">hello</h5>
                    <p className="px-2 text-base font-[300]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                        reprehenderit.
                    </p>
                </div>
                <div className="bg-[#F5F9FF] p-8 ">
                    <h5 className="p-4 text-[#3B73C6] font-[700] text-xl">hello</h5>
                    <p className=" text-base font-[300]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                        reprehenderit.
                    </p>
                </div>
                <div className="bg-[#F5F9FF] p-8 ">
                    <h5 className="p-4 text-[#3B73C6] font-[700] text-xl">hello</h5>
                    <p className="text-base  font-[300]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                        reprehenderit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Info