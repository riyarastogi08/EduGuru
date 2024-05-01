import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const AddCollegeSchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(15, 'Name must be at most 15 characters'),

})

const AddCollege = () => {
  // step 1: formik initialization
  const productForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      
      phNo:'',
      fees:''
    },

    /*onSubmit: (values, {resetForm}) =>{
      console.log(values)
      enqueueSnackbar('Signup successfully', {varient: 'success'})
      resetForm()

    },*/
    onSubmit: async(values,action) => {
      console.log(values);
      const res=await fetch('http://localhost:5000/college/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('College added successfully', {varient: 'success'})
      }else {
        enqueueSnackbar('Something went wrong', {varient:'error'})

      }
    },
    validationSchema: AddCollegeSchema
  })
    return (
        <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>College</h3>
                    </div>
                    <div className="card-body">
                      {/* step2: handling when submit */ }
                      <form onSubmit={productForm.handleSubmit}>
                        <div className="form-group">
                            <label>College Name</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.name && productForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                            id="name"
                            onChange={productForm.handleChange}
                            value={productForm.values.name}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.email && productForm.errors.email}</span>
                            <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={productForm.handleChange}
                            value={productForm.values.email} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.address && productForm.errors.address}</span>
                            <input type="text" className="form-control mb-4"
                            id="address"
                            onChange={productForm.handleChange}
                            value={productForm.values.address} />
                        </div>
                     
                        <div className="form-group">
                            <label>Phone No.</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.phNo && productForm.errors.phNo}</span>
                            <input type="text" className="form-control mb-4"
                            id="phNo"
                            onChange={productForm.handleChange}
                            value={productForm.values.phNo} />
                        </div>
                        <div className="form-group">
                            <label>Fees</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.fees && productForm.errors.fees}</span>
                            <input type="text" className="form-control mb-4"
                            id="fees"
                            onChange={productForm.handleChange}
                            value={productForm.values.fees} />
                        </div>
                        <button type='submit' className="btn btn-primary">Submit College</button>
                    </form> 
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default AddCollege