import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

const Playway = () => {
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
    const totalRating = playwayReviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / playwayReviews.length;
  }

  const fetchPlaywayData = async () => {
    const res = await fetch("http://localhost:3000/playway/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setfilterList(data);
      const ratingsData = await fetchReviews();
      let temp = data.map(playway => (
        {
          ...playway,
          avgRating: calculateAvgRating(ratingsData, playway._id)
        }
      ));
      // sort colleges according to avg rating
      temp.sort((a, b) => b.avgRating - a.avgRating);
      console.log(temp);
      setCollege(temp);

    }
  }

  useEffect(() => {
    fetchPlaywayData()
  }, [])

  const filterproduct = (e) => {
    const value = e.target.value;
    setPlayway(filterList.filter((col) => {
      return (col.playwayname.toLowerCase().includes(value.toLowerCase()))
    }))
  }

  const filterByClasses = (classes) => {
    console.log(classes);
    const filteredPlayways = filterList.filter(col => col.classes.toLowerCase().includes(classes.toLowerCase()));
    setCollege(filteredPlayways);
  }

  const displayPlaywayData = () => {
    if (Playway.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return Playway.map((col) => (
      <>
        <div className="grid grid-cols-3 h-50 mt-5 shadow  mb-4">
          <div className=" ">
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
            <p className='text-muted me-3' style={{ fontFamily: "serif" }}>{col.classes}</p>
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


      <div className="container mb-4">
        <div className=" w-full shadow py-2 border-none">
          <h5 className="font-serif text-2xl text-blue-900 font-bold text-center py-2">An Easier way to find your Playway</h5>
          <div className="input-group flex mb-3 block mx-auto">
            <input type="text" onChange={filterproduct} className="form-control border-blue-900  text-blue-900" placeholder="Start Typing.." aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text bg-blue-900 text-white text-2xl" id="basic-addon2"><FaSearch /></button>
            </div>
            <Link to='/Mainpage/Top5College'> <button className="bg-blue-900 mx-2 px-5  font-serif text-white rounded">Top 5</button>
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="text-white flex justify-between bg-blue-900 container font-serif text-xl">
        <button id="Pre Nursery" value='a' onClick={(e) => filterByClassses("Pre Nursery")} >Pre Nursery</button>
        <button id="Nursery" value='a' onClick={(e) => filterByClasses("Nersery")}>Nursery</button>
        <button id="LKG" value='a' onClick={(e) => filterByClasses("LKG")}>LKG</button>
        <button id="UKG" value='a' onClick={(e) => filterByClasses("UKG")}>UKG</button>
        
      </div>


      <div className="">
        {displayPlaywayData()}
      </div>

    </>
  )
}

export default Playway