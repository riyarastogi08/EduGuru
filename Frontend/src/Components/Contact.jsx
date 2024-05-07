import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
    .required(' required')
    .min(3, 'First Name must be atleast 3 characters')
    .max(15, 'Name must be atmost 15 characters '),
    lastName: Yup.string()
    .required(' required')
    .min(3, 'Name must be atleast 3 characters')
    .max(15, 'Name must be atmost 15 characters '),
    email: Yup.string()
    .required('Email is required')
    .email ('Email is in valid'),
    address: Yup.string()
    .required('Email is required')
    .email ('Email is in valid'),
    password: Yup.string()
    .required('Passwaord is required')
    .min(8, 'Password must be atleast 8 characters')
    .max(15, 'Password must be atmost 15 characters')
    
  })

const Contact = () => {
    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{
                                                borderTopLeftRadius: ".25rem",
                                                borderBottomLeftRadius: ".25rem"
                                            }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">
                                                Feedback
                                            </h3>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1m"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1m">
                                                            First name
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1n"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1n">
                                                            Last name
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                          { /* <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1m1"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1m1">
                                                            Mother's name
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1n1"
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1n1">
                                                            Father's name
                                                        </label>
                                                    </div>
                                                </div>
                                        </div>*/}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example8"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example8">
                                                    Address
                                                </label>
                                            </div>
                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                <h6 className="mb-0 me-4">Gender: </h6>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="femaleGender"
                                                        defaultValue="option1"
                                                    />
                                                    <label className="form-check-label" htmlFor="femaleGender">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="maleGender"
                                                        defaultValue="option2"
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id="otherGender"
                                                        defaultValue="option3"
                                                    />
                                                    <label className="form-check-label" htmlFor="otherGender">
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                           {/* <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <select data-mdb-select-init="">
                                                        <option value={1}>State</option>
                                                        <option value={2}>Andhra Pradesh</option>
                                                        <option value={3}>Arunachal pradesh</option>
                                                        <option value={4}>Assam</option>
                                                        <option value={5}>Bihar</option>
                                                        <option value={6}>Chhattisgarh</option>
                                                        <option value={7}>Goa</option>
                                                        <option value={8}>Gujarat</option>
                                                        <option value={9}>Haryana</option>
                                                        <option value={10}>Himanchal Pradesh</option>
                                                        <option value={11}>Jharkhand</option>
                                                        <option value={12}>Karnataka</option>
                                                        <option value={13}>Kerala</option>
                                                        <option value={14}>Madhya Pradesh</option>
                                                        <option value={15}>Maharashtra</option>
                                                        <option value={16}>Manipur</option>
                                                        <option value={17}>Meghlaya</option>
                                                        <option value={18}>Mizoram</option>
                                                        <option value={19}>Nagaland</option>
                                                        <option value={20}>Odisha</option>
                                                        <option value={21}>Punjab</option>
                                                        <option value={22}>Rajasthan</option>
                                                        <option value={23}>Sikkim</option>
                                                        <option value={24}>Tamil Nadu</option>
                                                        <option value={25}>Telagana</option>
                                                        <option value={26}>Tripura</option>
                                                        <option value={27}>Uttrakhand</option>
                                                        <option value={28}>Uttar Pradesh</option>
                                                        <option value={29}>West Bengal</option>
                                                        
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <select data-mdb-select-init="">
                                                        <option value={1}>City</option>
                                                        <option value={2}>Option 1</option>
                                                        <option value={3}>Option 2</option>
                                                        <option value={4}>Option 3</option>
                                                    </select>
                                                </div>
                                    </div>*/}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example9"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example9">
                                                    DOB
                                                </label>
                                            </div>
                                          {/*  <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example90"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example90">
                                                    Pincode
                                                </label>
                                </div>*/}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example99"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example99">
                                                    Course
                                                </label>
                                            </div>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example97"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example97">
                                                    Email ID
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-end pt-3">
                                                <button
                                                    type="button"
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-light btn-lg"
                                                >
                                                    Reset all
                                                </button>
                                                <button
                                                    type="button"
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-warning btn-lg ms-2"
                                                >
                                                    Submit form
                                                </button>
                                            </div>
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

export default Contact