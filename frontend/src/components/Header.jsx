import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
            {/* -------- Left side ----------- */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw] md:mb-[-30px]">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                    Book Appointment <br /> With Trusted Doctors
                </p>

                <div className="flex flex-col md:flex-row items-center text-white gap-4 text-sm font-light">
                    <img className="w-28" src={assets.group_profiles} alt="Group Profiles" />
                    <p className="text-left">
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        and schedule your appointment hassle-free.
                    </p>
                </div>

                <a
                    href="#speciality"
                    className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
                    Book Appointment
                    <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
                </a>
            </div>

            {/* -------- Right side ----------- */}
            <div className="md:w-1/2 relative flex justify-center md:justify-end">
                <img
                    className="w-full md:w-auto md:absolute bottom-0 h-auto rounded-lg object-contain max-h-[400px]"
                    src={assets.header_img}
                    alt="Header Illustration"
                />
            </div>
        </div>
    )
}

export default Header
