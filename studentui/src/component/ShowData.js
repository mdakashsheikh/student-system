import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowData = () => {
    const [student, setStudent] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/student/getAll')
            .then((res) => setStudent(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="mx-[500px] mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Student Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                {student?.map((std, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {std.id}
                        </th>
                        <td className="px-6 py-4">
                            {std.name}
                        </td>
                        <td className="px-6 py-4">
                            {std.address}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}

export default ShowData