import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import StarRatings from 'react-star-ratings';
import { enqueueSnackbar } from 'notistack';

const ViewCollege = () => {
    const { id } = useParams();
    const [CollegeList, setCollegeList] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const reviewRef = useRef();
    const [rating, setRating] = useState(3);
    // console.log(currentUser);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/college/getbyid/' + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setCollegeList(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const [reviews, setreviews] = useState([])

    const fetchreviewsDAta = async () => {
        const res = await fetch("http://localhost:3000/reviews/getbycollege/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setreviews(data)
        }
    }

    useEffect(() => {
        fetchreviewsDAta()
    }, [])

    const ratingForm = () => {
        if (currentUser !== null) {
            return <div className='px-5'>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    changeRating={setRating}
                    numberOfStars={5}
                />

                <div className="">
                    <textarea className='bg-blue-100 w-96 mt-3' ref={reviewRef}></textarea> <br />
                    <button className='bg-blue-900 text-white px-2 py-1 mt-2 mb-12 font-serif rounded' onClick={submitReview}>Submit Review</button>

                </div>

            </div>
        } else {
            return <p>login to give review</p>
        }
    }

    const submitReview = async () => {
        const res = await fetch('http://localhost:3000/reviews/add', {
            method: 'POST',
            body: JSON.stringify({
                comment: reviewRef.current.value,
                rating: rating,
                user: currentUser._id,
                college: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 200) {
            console.log('review submitted');
            enqueueSnackbar('Review submitted', { variant: 'success' });
            fetchreviewsDAta();
        } else {
            console.log(err);
        }
    }

    const ReviewsData = () => {
        if (reviews.length === 0) {
            return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }
        return reviews.map((rev) => (
            <>
                <div className="mx-12 h-50">
                    <div className="rev-md-6 grid shadow-lg mt-5 grid-cols-12 py-4">
                        <div className='col-span-1'>
                        <img className='w-12 h-12 rounded-full' src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
                        </div>
                        <div className="col-span-11">
                        <p className='text-red-600  ' style={{ fontFamily: "cursive" }}>{rev.rating}Star</p>
                        <p className=' fw-semibold fs-5  ' style={{ fontFamily: "serif" }}>{rev.name}</p>
                        <p className=' '>{rev.comment}</p>
                        </div>
                    
                    </div>
                </div>
         
            </>
        ))
    }

    return (
        <>
            {
                CollegeList !== null ? (

                    <div className="grid-cols-3 grid px-10 mb-5">
                        <div className=" text-center col-span-1 flex align-items-center  flex-col me-5">
                            <div className="col-md-5" style={{ border: "none", width: 400 }}>
                                <img src={'http://localhost:3000/' + CollegeList.image} onClick={window.scrollTo(0, 0)} alt="" className="img-fluid d-block mx-auto mb-3" style={{ height: 500, width: 1000 }} />
                            </div>
                        </div>
                        <div className=' px-4 col-span-2 my-auto py-12 border-none col-md-8 shadow-xl'>
                            <p className=' fw-semibold text-blue-900 fs-2 mt-5 mb-1' style={{ fontFamily: "serif" }}>{CollegeList.collegename}</p>
                            <p className='mb-3 fs-5' style={{ fontFamily: "serif" }}>{CollegeList.collegeaddress}</p>
                            <div className="grid grid-cols-6 ">
                                <div className=" mb-3 col-span-1">
                                    <h5 className="fs-5 ms-2 font-serif mt-3">Contact <br /> Details </h5>
                                </div>
                                <div className="col-span-5 mt-2">
                                    <p className=' fs-5  text-secondary' >Email : {CollegeList.email}</p>
                                    <p className=' fs-5  mb-2 text-secondary'>Contact : {CollegeList.phone}</p>
                                </div>
                            </div>
                            <p className=' fs-5 text-secondary mb-5'>{CollegeList.collegedetail}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        Loading
                    </div>
                )
            }
            <div className="container mt-24 text-blue-900">
                <div className="row card py-3 px-4 border-none  shadow">
                    <div className="col-md-8">
                        <p className="px-5 text-xl ">Reviews And Ratings</p>
                        <p className="fs-4 mb-2"></p>
                        {ratingForm()}
                    </div>
                </div>
            </div>
            <div className="row">
                {ReviewsData()}
            </div>

        </>
    )
}


export default ViewCollege