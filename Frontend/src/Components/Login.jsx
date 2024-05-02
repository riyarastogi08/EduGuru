import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import image from '../assets/image.jpg'

const LoginSchema =Yup.object().shape({
 
  email: Yup.string()
  .required('Email is required')
  .email ('Email is in valid'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters')
})



const Login = () => {
   // step 1: formik initialisation
   const LoginForm = useFormik({
    initialValues: {
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
        enqueueSnackbar('Login Successfully', {variant: 'success'})

      } else {
        enqueueSnackbar('Login Failed', {variant: 'error'})
      }
     
    },
    validationSchema: LoginSchema,
   }) 
   return (
 
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={image}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height:"95%", width:"95 %"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={LoginForm.handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          
                        </div>
                        <h2
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Login into your account
                        </h2>
                        < div data-mdb-input-init="" className="form-outline mb-4">
                        <span style={{color:'red', fontSize:10}}>{LoginForm.touched.email && LoginForm.errors.email} </span>
                        
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            values={LoginForm.values.email}
                            onChange={LoginForm.handleChange}
                            required=''
                          />
                          
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                         
                        </div>
                        <div data-mdb-input-init="" className="form-outline mb-4">
                        <span style={{color:'red', fontSize:10}}>{LoginForm.touched.password && LoginForm.errors.password} </span>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                            values={LoginForm.values.password}
                            onChange={LoginForm.handleChange}
                            required=''
                          />
                          
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-dark btn-lg btn-block"
                            type="sumbit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
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

export default Login