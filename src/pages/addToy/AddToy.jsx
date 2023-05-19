import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";
import Select from 'react-select';


const AddToy = () => {




    const {user} = useContext(AuthContext)
    // const service = useLoaderData()
    // const {title,price,_id,img} = service


    //select option
    const options = [
        { value: 'Anime', label: 'Anime' },
        { value: 'Marvel', label: 'Marvel' },
        { value: 'Star wars', label: 'Star wars' },
        { value: 'DC', label: 'DC' },
        
      ];
      const customStyles = {
        control: (provided) => ({
          ...provided,
          height: '50px',
          borderRadius: '10px',
        }),
      };

      const [selectedOption, setSelectedOption] = useState(null);

      const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        // console.log('Selected option:', selectedOption);
      };

      
      //Add toy
    const handleAddToy = (e) => {
        e.preventDefault()
        
        const from = e.target ;
        const sellerName = from.sellerName.value;
        const toyName = from.toyName.value;
        const price = from.price.value;
        const email = user?.email;
        const rating = from.rating.value;
        const toyImg = from.toyImg.value;
         const description = from.description.value;
         const toyCategory = selectedOption.value;

        const order = { sellerName,
            toyName,
            toyImg,
            price,
            email,
            description,rating,
            toyCategory
            
        }

        console.log(order);
        
    //    fetch('https://car-doctor-server-eight-eta.vercel.app/addorder',{
    //        method:'POST',
    //        headers:{'Content-Type':'application/json'},
    //        body:JSON.stringify(order)
    //      })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.insertedId){
    //                 Swal.fire({
    //                     position: 'center',
    //                     icon: 'success',
    //                     title: 'Toy created Successfully',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                   })
                   
    //             }
    //         }
    //         )
         


    }



    return (
        <>

          
<h2  className="text-4xl text-[#FFC107] text-center font-bold my-10">Add Your  Toy</h2>
           {/* from start  */}

     
    <div className="  rounded-lg bg-info my-20">
     <form onSubmit={handleAddToy} className="p-5" >
     <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="form-control">
         
          <input type="text" name="sellerName" defaultValue={user.displayName} placeholder="Seller Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
         
        </div>

        <div className="form-control">
         
         <input type="text" name="toyName"  placeholder="Toy Name" className="input input-bordered" />
       </div>


        <div className="form-control">
          
          <input type="text" name="price"  placeholder="Price" className="input input-bordered" />
         
        </div>

       <div className="form-control">
        <Select 
         value={selectedOption}
         onChange={handleSelectChange}
      options={options}
      placeholder="Select Toy Category"
      styles={customStyles}
    />
       </div>
        
        
        <div className="form-control">
          
          <input type="number" name="rating"  placeholder="Rating" className="input input-bordered" />
         
        </div>
      </div>

      <div className="form-control p-5">
          
          <input type="text" name="toyImg"  placeholder="Toy image" className="input input-bordered" />
         
        </div>


      <div className="form-control p-5 ">
          
          <input type="text" name="description"  placeholder="Toy description" className="input input-bordered h-40" />
         
        </div>
      <div className="form-control mt-6 p-5">
        
          <input type="submit" className="btn btn-main" value="Add Toy" />
        </div>
     </form>
    </div>
 





                 {/* from end  */}




        </>
    );
};

export default AddToy;
