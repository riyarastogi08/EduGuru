import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddPlayway = () => {

  const Navigate = useNavigate();
  const [selFile, setSelFile] = useState("");

  const addPlaywayForm = useFormik({
      initialValues: {
          playwayname: "",      
          playwaydetail: "",
          playwayaddress: "",
          phone: "",  
          email: "",
          fees: "",
          image: "",
        
      },

      onSubmit: async (values, action) => {
          values.image = selFile;
          console.log(values);
          const res = await fetch("http://localhost:3000/playway/add", {
              method: "POST",
              body: JSON.stringify(values),
              headers: { "Content-type": "application/json" },
          });
          console.log(res.status);
          // action.resetForm();
          if (res.status === 200) {
              enqueueSnackbar("Item uploaded successfully")
              Navigate("/Main/Playway")
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
    
    <div className="max-w-md mx-auto mt-10 bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden">
  <div className="text-2xl py-4 px-6 bg-white text-blue-900 text-center font-bold uppercase">
    Add playways
  </div>
  <form className="py-4 px-6" onSubmit={addPlaywayForm.handleSubmit} method="POST">
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="playwayname">
        Playway Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="playwayname"
        type="text"
        placeholder="Enter playway name"
        value={addPlaywayForm.values.playwayname}
        onChange={addPlaywayForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="playwaydetail">
        Playway Detail
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="playwaydetail"
        type="text"
        placeholder="Enter playway detail"
        value={addPlaywayForm.values.playwaydetail}
        onChange={addPlaywayForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="playwayaddress">
        Playway Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="playwayaddress"
        type="text"
        placeholder="Enter address"
        value={addPlaywayForm.values.playwayaddress}
        onChange={addPlaywayForm.handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="phone">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="tel"
        placeholder="enter phone number"
        value={addPlaywayForm.values.phone}
        onChange={addPlaywayForm.handleChange}
      />
  </div>
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Enter your email"
        value={addPlaywayForm.values.email}
        onChange={addPlaywayForm.handleChange}
      />
  </div>

  


    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="fees">
        Fees
      </label>
    <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fees"
        rows={4}
        placeholder="Enter fees"
        value={addPlaywayForm.values.message}
        onChange={addPlaywayForm.handleChange}
        defaultValue={""}
      />
    </div>
    <div className="mb-4">
      <label className="block text-blue-900 font-bold mb-2" htmlFor="image">
        Image
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image"
        type="file"
        placeholder="enter images"
       onChange={uploadFile}
      />
  </div>
    <div className="flex items-center justify-center mb-4">
      <button
        className="bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        type="submit"
      >Submit Playway
      </button>
    </div>
  </form>
</div>

    
    </>
  )
}

export default AddPlayway