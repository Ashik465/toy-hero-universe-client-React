import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Banner from "../banner/Banner";
import Brand from "../brand/Brand";
import Gallary from "../gallary/Gallary";
import OurServices from "../ourServices/OurServices";
import LoadingSpinner from "../../../loader/LoadingSpinner";


const Home = () => {

    const {loader } = useContext(AuthContext)

// loader 

if(loader){
  return <LoadingSpinner></LoadingSpinner>
}
    return (
        <>
            <Banner></Banner>
            <Gallary></Gallary>
            <Brand></Brand>
            <OurServices></OurServices>

        </>
    );
};

export default Home;