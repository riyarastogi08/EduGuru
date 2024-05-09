import React from 'react'

const ManageSchool = () => {
  return (
    <>
    <>
  {/* component */}
  <div className="text-gray-900 bg-gray-200">
    <div className="p-4 flex">
      <h1 className="text-3xl">Manage School</h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr className="border-b">
            <th className="text-left p-3 px-5">School Name</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">School Detail</th>
            <th className="text-left p-3 px-5">Playway Address</th>
            <th className="text-left p-3 px-5">Image</th>
            <th className="text-left p-3 px-5">Classes</th>
            <th className="text-left p-3 px-5">Phone number</th>
            <th className="text-left p-3 px-5">Fees</th>
            <th />
          </tr>
          <tr className="border-b hover:bg-orange-100 bg-gray-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schooldetail"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.address"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>

            <td className="p-3 px-5">
              <input
                type="image"
                defaultValue="school.image"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.cousrse"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.phone"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.fees"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>

            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
           
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="playway.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
           
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="schjool.schoolname"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>
            <td className="p-3 px-5">
              <input
                type="text"
                defaultValue="school.email"
                className="bg-transparent border-b-2 border-gray-300 py-2"
              />
            </td>

            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>

    </>
  )
}

export default ManageSchool