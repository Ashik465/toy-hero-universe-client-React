import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyTableRow from "./MyToyTableRow";







const MyToys = () => {

    const {user} = useContext(AuthContext)

    const [myToys,setMyToys] = useState([])

    //fetch my toys data by email

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
            console.log(data);
        })
    },[user?.email])








    return (
        <>
          
  
  
  {/* All-toy table start */}

  <div className="overflow-x-auto  w-full my-10">
        <table className="table w-full ">
          {/* head */}
          <thead >
            <tr >
              <th className=" bg-amber-100"></th>
              <th className=" bg-amber-100">Image </th>
              <th className=" bg-amber-100">Toy Name & Category </th>
              <th className=" bg-amber-100">Seller Name </th>
              <th className=" bg-amber-100">Email </th>
              <th className=" bg-amber-100">Price</th>
              <th className=" bg-amber-100">Details</th>
              <th className=" bg-amber-100">Quantity</th>
              <th className=" bg-amber-100">Update</th>
              <th className=" bg-amber-100">Delete</th>

              <th className=" bg-amber-100"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myToys.map((toy,index ) => (
              <MyToyTableRow
              index={index}
                toy={toy}
                key={toy._id}
               
              ></MyToyTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* All-toy table end */}


        </>
    );
};

export default MyToys;