import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>


                <div>
                    {/* ------------------ Left Section ------------------ */}
                    <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ex quibusdam nostrum dolores, ea quas, asperiores maxime distinctio tempore facilis vitae blanditiis quos facere non corporis saepe quam harum aperiam.</p>
                </div>

                <div>
                    {/* ------------------ Center Section ------------------ */}
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    {/* ------------------ Right Section ------------------ */}
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-8287769377</li>
                        <li>beststackdev@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                {/* ------------------ CopyRight Section ------------------ */}
                <hr />
                <p className='py-5 text-sm text-center'>© 2025 Prescripto. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer