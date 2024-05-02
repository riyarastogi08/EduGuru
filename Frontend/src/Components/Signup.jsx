import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import image from '../assets/image1.jpg'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .required(' required')
  .min(3, 'Name must be atleast 3 characters')
  .max(15, 'Name must be atmost 15 characters '),
  email: Yup.string()
  .required('Email is required')
  .email ('Email is in valid'),
  password: Yup.string()
  .required('Passwaord is required')
  .min(8, 'Password must be atleast 8 characters')
  .max(15, 'Password must be atmost 15 characters')
  
})


const Signup = () => {
  const navigate = useNavigate();
    // step 1: formik initialisation
    const signupForm = useFormik({
      initialValues: {
        name: '',
        email: '',
        password:''
      },
      // step 5: validation schema
      onSubmit: async(values, action) => {
        console.log(values);
        const res = await fetch('http://localhost:5000/user/add',{
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status)
        action.resetForm()
  
        if(res.status === 200){
          enqueueSnackbar('Signup Successfully', {variant: 'success'})
          navigate('/login')
        } else {
          enqueueSnackbar('Signup Failed', {variant: 'error'})
        }
       
      },
      validationSchema:SignupSchema,
     }) 
     return (
   
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <span style={{color:'red', fontSize:10}}>{signupForm.touched.name &&signupForm.errors.name} </span>

                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              values={signupForm.values.name}
                              onChange={signupForm.handleChange}
                              required=''
                            />
                            <label className="form-label" htmlFor="form3Example1c">
                              Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <span style={{color:'red', fontSize:10}}>{signupForm.touched.email &&signupForm.errors.email} </span>

                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              values={signupForm.values.email}
                              onChange={signupForm.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                               Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <span style={{color:'red', fontSize:10}}>{signupForm.touched.password &&signupForm.errors.password} </span>

                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              values={signupForm.values.password}
                              onChange={signupForm.handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg"
                          >
                            SignUp
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={image}
                        className="img-fluid"
                        alt="Sample image"
                        style={{  height:"95%", width:"95 %"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup