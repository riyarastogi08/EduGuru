import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
// import useCartContext from '../Context/CartContext';


const ViewPlayway = () => {
  const { id } = useParams();
const {isInCart, addItemToCart} = useCartContext();
  const [playwayList, setplaywayList] = useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/playway/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setplaywayList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <>
      {
        playwayList !== null ? (

          <div className="container pt-24 px-16">
            <div className="row ">
  
              <div className="col-md-4 block m-auto">
                <img src={'http://localhost:3000/' + playwayList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid  w-100  " />

              </div>
              <div className="col-md-6">
              <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{playwayList.pname}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{playwaytList.pprice}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{productList.pdetail}</p>
                <button disabled={isInCart(playwayList)} onClick={e => addItemToCart(playwayList)} className='mt-2 mb-2 bg-success  py-1 px-3 text-white  rounded' >
                        {isInCart(playwayList) ? 'Already Added' : 'Add to Cart'}
                    </button>
                <p className=' mb-2 mt-4 ' ><span className="fw-bold me-1">Category:</span>{playwayList.pcategory}</p>
                <p className=""><span className="fw-bold me-1">Tags:</span>Unique,Latest</p>

              </div>
            </div>


          </div>


        ) : (
          <div>
            Loading
          </div>
        )
      }
    </>


  )
}


export default ViewPlayway