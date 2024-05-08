import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCollege = () => {

  const Navigate = useNavigate();
  const [selFile, setSelFile] = useState("");

  const addCollegeForm = useFormik({
      initialValues: {
          collegename: "",      
          collegedetail: "",
          collegeaddress: "",
          phone: "",  
          email: "",
          fees: "",
          image: "",
          courses: "",
      },

      onSubmit: async (values, action) => {
          values.image = selFile;
          console.log(values);
          const res = await fetch("http://localhost:3000/college/add", {
              method: "POST",
              body: JSON.stringify(values),
              headers: { "Content-type": "application/json" },
          });
          console.log(res.status);
          // action.resetForm();
          if (res.status === 200) {
              enqueueSnackbar("Item uploaded successfully")
              Navigate("/Main/College")
          }
          else {
              enqueueSnackbar("Something went wrong")
          }
      },


  });

  const uploadFile = async (e) => {
      let file = e.target.files[0];
      setSelFile(file.name);
      const fd = new FormData();
      fd.append('myfile', file);

      const res = await fetch('http://localhost:3000/util/uploadfile', {
          method: 'POST',
          body: fd
      })
      console.log(res.status);
  }

  return (
    <>
    
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="text-2xl py-4 px-6 bg-white text-blue-900 text-center font-bold uppercase">
    Add Colleges
  </div>
  <form className="py-4 px-6" onSubmit={addCollegeForm.handleSubmit} method="POST">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="collegename">
        College Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="collegename"
        type="text"
        placeholder="Enter colege name"
        value={addCollegeForm.values.collegename}
        onChange={addCollegeForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="collegedetail">
        College Detail
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="collegedetail"
        type="text"
        placeholder="Enter your email"
        value={addCollegeForm.values.collegedetail}
        onChange={addCollegeForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="collegeaddress">
        College Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="collegeaddress"
        type="text"
        placeholder="Enter address"
        value={addCollegeForm.values.collegeaddress}
        onChange={addCollegeForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="tel"
        placeholder="enter phone number"
        value={addCollegeForm.values.phone}
        onChange={addCollegeForm.handleChange}
      />
  </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Enter your email"
        value={addCollegeForm.values.email}
        onChange={addCollegeForm.handleChange}
      />
  </div>
  <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="courses">
        Courses
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="courses"
        type="text"
        placeholder="Enter course"
        value={addCollegeForm.values.courses}
        onChange={addCollegeForm.handleChange}
      />
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
        Fees
      </label>
    <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fees"
        rows={4}
        placeholder="Enter fees"
        value={addCollegeForm.values.message}
        onChange={addCollegeForm.handleChange}
        defaultValue={""}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
        Image
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image"
        type="image"
        placeholder="enter images"
        value={addCollegeForm.values.image}
        onChange={addCollegeForm.handleChange}
      />
  </div>
    <div className="flex items-center justify-center mb-4">
      <button
        className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        type="submit"
      >Submit College
      </button>
    </div>
  </form>
</div>

    
    </>
  )
}

export default AddCollege