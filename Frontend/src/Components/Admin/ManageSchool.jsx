import { React, useState, useEffect } from 'react'

const ManageSchool = () => {
  const [Data, setData] = useState([]);
  //User fetch func
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/school/getall');

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, [])

  //Delete func
  const deleteFunction = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/school/delete/' + id, { method: 'DELETE' })

    if (res.status === 200) {
      fetchUserData();
    }
  }
  //User Display func
  const displayUsers = () => {
    return Data.map((obj) => (
      <>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://i.pravatar.cc/150?img=1"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{obj.schoolname}</div>
                
              </div>
             
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              Regional Paradigm Technician
            </div>
            <div className="text-sm text-gray-500">Optimization</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="text-sm text-gray-500">{obj.email}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <a href="#" className="ml-2 text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>
      </>
    ))
  }


  return (
    <>
      <div className="py-3 px-10 ">
        <p className="text-center py-2 text-2xl font-serif mb-5 bg-blue-900 text-white">School</p>
        <table className="min-w-full shadow  divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {displayUsers()}
            {/* More rows... */}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default ManageSchool