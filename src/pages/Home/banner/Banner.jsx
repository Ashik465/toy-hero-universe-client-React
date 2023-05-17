
import buzz from '../../../assets/buzzlighter.jpg'
import superHero from '../../../assets/superheros.jpg'
import demon from '../../../assets/demonslayer.jpg'
import spidy from '../../../assets/spidy.jpg'


const Banner = () => {
  return (
    <>
     <div className="carousel w-full h-96 my-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={superHero} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={demon} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={spidy} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={buzz} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-[#FFC107] border-none opacity-50 text-black hover:bg-[#DC143C] ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#FFC107] border-none  text-black hover:bg-[#DC143C]">❯</a>
    </div>
  </div>
</div>
    </>
  );
};

export default Banner;
