import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Banner from "../banner/Banner";
import Brand from "../brand/Brand";
import Gallary from "../gallary/Gallary";
import OurServices from "../ourServices/OurServices";
import LoadingSpinner from "../../../loader/LoadingSpinner";
import ShopByCategory from "../shopByCategory/ShopByCategory";
import useTitle from "../../../hooks/useTitle";


const Home = () => {

    useTitle('Home')

    const {loader } = useContext(AuthContext)

// loader 

if(loader){
  return <LoadingSpinner></LoadingSpinner>
}
    return (
        <>
            <Banner></Banner>
            <Gallary></Gallary>
            <ShopByCategory></ShopByCategory>
            <Brand></Brand>
            <OurServices></OurServices>

        </>
    );
};

export default Home;