

const MyToyTableRow = ({toy}) => {


    const {toyName,
        toyImg,
        price,
        sellerName,
        email,
        description,
        // rating,
        toyCategory,
        Quantity} = toy;
    return (
        <>
             <tr>
      <td></td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              <img src={toyImg } alt="toy picture" />
            </div>
          </div>
          
        </div>
      </td>

      <td>
      <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">category :  {toyCategory} </div>
          </div>
      </td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>$ {price}</td>
      
      <td><div>
         <p className="">
         {description.slice(0, 15)}....
         </p>
        </div></td>
     
      <td>{Quantity}</td>
       <td>
        <button className=" btn btn-success ">Update</button>
       </td>
       <td>
        <button className=" btn btn-warning btn-circle btn-outline ">X</button>
       </td>

    </tr>   
        </>
    );
};

export default MyToyTableRow;