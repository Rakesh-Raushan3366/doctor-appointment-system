import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { AdminContext } from '../../context/adminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [speciality, setSpeciality] = useState('General physician');
    const [degree, setDegree] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [available, setAvailable] = useState(true);

    const { backendUrl, aToken } = useContext(AdminContext);

    const onsubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error('Image Not Selected');
            }

            const formData = new FormData();
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('speciality', speciality);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));
            formData.append('available', available);

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            })

            const { data } = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, { headers: { aToken } });

            if (data.success) {
                toast.success(data.message)
                setDocImg(false);
                setName('');
                setEmail('');
                setPassword('');
                setAddress1('');
                setAddress2('');
                setDegree('');
                setAbout('');
                setFees('');
                setAvailable('true');
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
    };



    return (
        <form onSubmit={onsubmitHandler} className="m-5 w-full">
            <p className="text-2xl font-bold text-gray-700 mb-6 text-center w-full underline">Add Doctor</p>

            <div className="bg-white px-6 py-8 border rounded-xl w-full max-w-7xl shadow-lg mx-auto overflow-y-auto max-h-[85vh]">
                {/* Profile Upload */}
                <div className="flex items-center gap-5 mb-8 text-gray-600">
                    <label htmlFor="doc-img" className="cursor-pointer">
                        <img
                            className="w-20 h-20 object-cover bg-gray-100 border rounded-full hover:scale-105 transition-transform duration-300"
                            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                            alt="Upload Area"
                        />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload <strong>Doctor Picture</strong><br /><span className="text-xs text-gray-500">Only image formats</span></p>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700">
                    {/* Left Section */}
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="block font-medium mb-1">Doctor Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Full Name" className="input-style" required />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Doctor Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="input-style" required />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="input-style" required />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Experience</label>
                            <select onChange={(e) => setExperience(e.target.value)} value={experience} className="input-style">
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i}>{i + 1} Year</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Fees</label>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Consultation Fee" className="input-style" required />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="block font-medium mb-1">Speciality</label>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="input-style">
                                <option>General physician</option>
                                <option>Gynecologist</option>
                                <option>Dermatologist</option>
                                <option>Pediatrician</option>
                                <option>Neurologist</option>
                                <option>Gastroenterologist</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Degree</label>
                            <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="e.g. MBBS, MD" className="input-style" required />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Address</label>
                            <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address Line 1" className="input-style" required />
                            <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address Line 2" className="input-style mt-2" required />
                        </div>
                    </div>
                </div>

                {/* About Doctor */}
                <div className="mt-6">
                    <label className="block font-medium mb-2">About Doctor</label>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} rows="4" placeholder="Write about doctor..." className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm" required ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button type="submit" className="bg-primary hover:bg-primary-dark px-10 py-3 text-white rounded-full transition duration-300 text-base">
                        Add Doctor
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddDoctor