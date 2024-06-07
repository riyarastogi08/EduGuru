import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAppContext from '../Context/UserContext';

const Login = () => {

  const { setCurrentUser, setLoggedIn } = useAppContext();

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch("http://localhost:3000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },


      })
      console.log(res.status);
      if (res.status === 200) {
        setLoggedIn(true);
        const data = await res.json();
        console.log(data);
        setCurrentUser(data);
        sessionStorage.setItem('isloggedin', true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/Admin/Dashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
          enqueueSnackbar("user loggedIn Successfully", { variant: "success" })
          navigate("/")
        }
      } else {
        enqueueSnackbar("somthing went wrong", { variant: "warning" })
      }
    }
  });
  return (

    <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="shadow rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-blue-900 font-serif">Login</h2>
          <p className="text-sm mt-4 mb-3 text-[#002D74]">
            If you already a member, easily log in now.
          </p>
          <form onSubmit={loginForm.handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8] rounded-xl border"
              type="email"
              name="email"
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                id="password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                placeholder="Password"
              />

            </div>
            <div className=" text-sm  text-lue-900 border-gray-500  ">
              
              <Link to="/ForgetPassword" className="text-sm text-blue-500">
                  Forget Password?
                </Link>
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>



          <div className="mt-4 text-sm flex justify-between items-center container-mr">
            <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
            <Link to="/signup" className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
              Register
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src="https://static.vecteezy.com/system/resources/previews/015/732/713/original/education-and-money-illustration-flat-cartoon-graduation-hat-and-coins-cash-concept-of-scholarship-cost-or-loan-tuition-or-study-fee-value-of-student-knowledge-learning-success-vector.jpg "
            alt="login form image"
          />
        </div>
      </div>
    </section>


  )
}

export default Login