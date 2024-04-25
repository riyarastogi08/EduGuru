import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const AddPlaywaySchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(15, 'Name must be at most 15 characters'),

})

const AddPlayway = () => {
  // step 1: formik initialization
  const productForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      address: '',
      description: ''
    },

    /*onSubmit: (values, {resetForm}) =>{
      console.log(values)
      enqueueSnackbar('Signup successfully', {varient: 'success'})
      resetForm()

    },*/
    onSubmit: async(values,action) => {
      console.log(values);
      const res=await fetch('http://localhost:5000/playway/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('Playway added successfully', {varient: 'success'})
      }else {
        enqueueSnackbar('Something went wrong', {varient:'error'})

      }
    },
    validationSchema: AddPlaywaySchema
  })
    return (
        <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>Playway</h3>
                    </div>
                    <div className="card-body">
                      {/* step2: handling when submit */ }
                        <form onSubmit={productForm.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.name && productForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                            id="name"
                            onChange={productForm.handleChange}
                            value={productForm.values.name}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.category && productForm.errors.category}</span>
                            <input type="text" className="form-control mb-4"
                            id="category"
                            onChange={productForm.handleChange}
                            value={productForm.values.category} />
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
                            <label>Description</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.description && productForm.errors.description}</span>
                            <input type="text" className="form-control mb-4"
                            id="description"
                            onChange={productForm.handleChange}
                            value={productForm.values.description} />
                        </div>
                        <button type='submit' className="btn btn-primary">Submit Playway</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default AddPlayway