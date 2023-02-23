const Features = ({ dark }) => {


  return (
    <div>
      
      <section
      className={`${
        dark ? "bg-[#030414]" : "bg-white"
      } py-24 sm:py-32 lg:py-40 transition-all`}
      id="features"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-blue-600">
            Features
          </h2>
          <h1 className="mb-4 text-4xl font-extrabold mt-4 md:text-4xl xl:text-5xl">Why choose Noteslify?</h1>
          <p className="mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Make plans. Keep a journal. Clip anything from the web. Noteslify lets you collect information quickly, organize it easily, and find it when you need it.</p>
          <a href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-900 focus:ring-4">
              Get started for free
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="/pricing" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center dark:border-gray-700 dark:text-white text-gray-900 border border-gray-300 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                View Pricing
            </a>
        </div>

        <section >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img className="rounded-lg" src="https://cdn.noteslify.stonecss.com/cdn/assets/opensourcelp.png" alt="mockup"></img>
              </div>  
              <div className="ml-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">Open-Source</h1>
                  <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Unlock the power of teamwork with our open source notes app, built by and for the community with 80+ stars on Github.</p>
              </div>                
          </div>
        </section>
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">Cloud Synced</h1>
                  <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Tired of not having the right info handy when you need it? Noteslify automatically saves notes online and syncs them to all your devices.</p>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img className="rounded-lg" src="https://cdn.noteslify.stonecss.com/cdn/assets/comingsoonlp.png" alt="mockup"></img>
              </div>                
          </div>
        </section>
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img className="rounded-lg" src="https://cdn.noteslify.stonecss.com/cdn/assets/comingsoonlp.png" alt="mockup"></img>
              </div>  
              <div className="ml-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">Capture Infinitely</h1>
                  <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Store as many notes you can safely backed up on cloud. Get all arranged in one place safely and securely.</p>
              </div>                
          </div>
        </section>
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">Web application</h1>
                  <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Many note-taking apps lack a fully functional web application. Noteslify offers a complete lineup of features from any major browser.</p>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img className="rounded-lg" src="https://cdn.noteslify.stonecss.com/cdn/assets/comingsoonlp.png" alt="mockup"></img>
              </div>                
          </div>
        </section>
      
      </div>
      </section>

    </div>
  );
};

export default Features;
