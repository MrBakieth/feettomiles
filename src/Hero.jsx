import './Hero.css'

const Hero = () => {
    return (
        <section className='flex items-center justify-center flex-col min-h-screen font-Inter bg-cover bg-center' >
            <div className="flex items-center justify-center border border-solid border-white w-full max-w-[1024px] backdrop-blur-md rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out p-5 ">
                <h2 className='text-9xl text-center w-min max-lg:text-8xl max-sm:text-5xl break-normal tracking-wide text-white animate-fade-in'>
                    <span className='flex flex-col text-yellow-500'>
                        From One Step To Thousand Of Miles
                    </span>
                </h2>
            </div>
            <div className="border border-solid border-gray-200 text-yellow-500 hover:text-yellow-300 backdrop-blur-md p-2 mt-5 font-Inter text-2xl max-sm:text-sm animate-fade-in transition-colors duration-300 ease-in-out">
                <a href="#" className="hover:underline">For more information...</a>
            </div>
        </section>
    );
}

export default Hero;