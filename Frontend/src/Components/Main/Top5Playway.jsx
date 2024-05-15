import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const TopPlayway = () => {
  const [Playway, setPlayway] = useState([])
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
  const calculateAvgRating = (reviews, playwayId) => {
    const playwayReviews = reviews.filter(review => review.playway === playwayId);
    if (playwayReviews.length === 0) {
      return 0;
    }
    const totalRating = schoolReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / schoolReviews.length;
  }
  const fetchPlaywayData = async () => {
    const res = await fetch("http://localhost:3000/playway/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data)
      const ratingsData = await fetchReviews();
      let temp = data.map(playway => (
        {
          ...playway,
          avgRating: calculateAvgRating(ratingsData, playway._id)
        }
      ));
      // sort playways according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setPlayway(temp);

    }
  }
  useEffect(() => {
    fetchPlaywayData()
  }, [])
  {/*const filterByCourses = (course) => {
    console.log(course);
    const filteredSchools = filterList.filter(col => col.courses.toLowerCase().includes(course.toLowerCase()));
    setSchool(filteredSchools);
  }*/}
  const displayPlaywayData = () => {
    if (Playway.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }
    return Playway.slice(0, 5).map((col) => (
      <>
        <div className="row h-50 mt-5 shadow mb-3">
          <div className="col-md-3  ">
            <Link to={`/Main/ViewPlayway/${col._id}`}> <img src={'http://localhost:3000/' + col.image} alt="" className="card-img-top p-3" style={{ objectFit: "cover", height: 200 }} />
            </Link>
          </div>
          <div className="col-md-6 py-4">
            <h2 className=' fw-semibold fs-5 mt-3 mb-3 ' style={{ fontFamily: "serif" }}>{col.playwayname}</h2>
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
        {displayPlaywayData()}
      </div>

    </>
  )
}

export default TopPlayway