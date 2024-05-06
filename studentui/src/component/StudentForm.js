import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentForm = () => {
    
    const [student, setStudent] = useState({
        name: '',
        address: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);

        try {
            axios.post('http://localhost:8080/student/add', student)
                .then((res) => {
                    console.log(res);
                    setStudent('')
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-[100px]">
            <div className="mb-5">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your name" 
                    value={student.name}
                    onChange={handleChange}
                    required 
                />
            </div>

            <div className="mb-5">
                <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Address
                </label>
                <input 
                    type="text" 
                    name="address" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your address" 
                    value={student.address}
                    onChange={handleChange}
                    required 
                />
            </div>
            
            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    )
}

export default StudentForm