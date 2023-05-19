import { useEffect, useState } from "react";
import AllToyTableRow from "./AllToyTableRow";




const AllToy = () => {

const  [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data =>{ setToys(data)
            console.log(data);})
    },[])



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
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {toys.map((toy) => (
              <AllToyTableRow
               
                toy={toy}
                key={toy._id}
               
              ></AllToyTableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* All-toy table end */}



        </>
    );
};

export default AllToy;