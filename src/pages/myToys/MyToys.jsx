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

  <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image </th>
              <th>Toy Name & Category </th>
              <th>Seller Name </th>
              <th>Email </th>
              <th>Price</th>
              <th>Details</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myToys.map((toy) => (
              <MyToyTableRow
               
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