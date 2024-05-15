import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const TopSchool = () => {
  const [School, setSchool] = useState([])
  const [filterList, setfilterList] = useState([])
  const [products, setProducts] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch("http://localhost:3000/reviews/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  }
  const calculateAvgRating = (reviews, schoolId) => {
    const schoolReviews = reviews.filter(review => review.school === schoolId);
    if (schoolReviews.length === 0) {
      return 0;
    }
    const totalRating = schoolReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / schoolReviews.length;
  }
  const fetchSchoolData = async () => {
    const res = await fetch("http://localhost:3000/school/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data)
      const ratingsData = await fetchReviews();
      let temp = data.map(school => (
        {
          ...school,
          avgRating: calculateAvgRating(ratingsData, school._id)
        }
      ));
      // sort colleges according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setSchool(temp);

    }
  }
  useEffect(() => {
    fetchSchoolData()
  }, [])
  {/*const filterByCourses = (course) => {
    console.log(course);
    const filteredSchools = filterList.filter(col => col.courses.toLowerCase().includes(course.toLowerCase()));
    setSchool(filteredSchools);
  }*/}
  const displaySchoolData = () => {
    if (School.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }
    return School.slice(0, 5).map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Main/ViewSchool/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.schoolname}</h2>
            <StarRatings
              rating={col.avgRating}
              starRatedColor="#ffbe00"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
            <p className='text-muted me-3' style={{ fontFamily: "serif" }}>{col.courses}</p>
            <p className='text-muted me-3' style={{ fontFamily: "cursive" }}>{col.phone}</p>
            <p className='text-muted ' style={{ fontFamily: "cursive" }}>{col.email}</p>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </>
    ))
  }

  return (
    <>

      <div className="">
        {displaySchoolData()}
      </div>

    </>
  )
}

export default TopSchool