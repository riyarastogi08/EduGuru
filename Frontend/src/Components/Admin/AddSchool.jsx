import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {

  const Navigate = useNavigate();
  const [selFile, setSelFile] = useState("");

  const addSchoolForm = useFormik({
      initialValues: {
          schoolname: "",      
          schooldetail: "",
          schooladdress: "",
          phone: "",  
          email: "",
          fees: "",
          image: "",
          
      },

      onSubmit: async (values, action) => {
          values.image = selFile;
          console.log(values);
          const res = await fetch("http://localhost:3000/school/add", {
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
  <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
    Add Schools
  </div>
  <form className="py-4 px-6" onSubmit={addSchoolForm.handleSubmit} method="POST">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="schoolname">
        School Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="schoolname"
        type="text"
        placeholder="Enter school name"
        value={addSchoolForm.values.schoolname}
        onChange={addSchoolForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="schooldetail">
        School Detail
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="schooldetail"
        type="text"
        placeholder="Enter school detail"
        value={addSchoolForm.values.schooldetail}
        onChange={addSchoolForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="schooladdress">
        School Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="schooladdress"
        type="text"
        placeholder="Enter address"
        value={addSchoolForm.values.schooladdress}
        onChange={addSchoolForm.handleChange}
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
        value={addSchoolForm.values.phone}
        onChange={addSchoolForm.handleChange}
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
        value={addSchoolForm.values.email}
        onChange={addSchoolForm.handleChange}
      />
  </div>
  


    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="fees">
        Fees
      </label>
    <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fees"
        rows={4}
        placeholder="Enter fees"
        value={addSchoolForm.values.message}
        onChange={addSchoolForm.handleChange}
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
        value={addSchoolForm.values.image}
        onChange={addSchoolForm.handleChange}
      />
  </div>
    <div className="flex items-center justify-center mb-4">
      <button
        className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        type="submit"
      >Submit School
      </button>
    </div>
  </form>
</div>

    
    </>
  )
}

export default AddSchool