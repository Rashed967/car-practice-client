import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">

          {/* first slide  */}
  <div id="slide1" className="carousel-item relative w-full">
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 flex items-center'>
      <div className='text-left w-1/3 pl-14 text-white space-y-4'>
      <h2 className='text-4xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
      <button className="btn btn-warning">Discover More</button>
      <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
      </div>
    </div>
    <img src={image1} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-16 right-16 space-x-3 ">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  {/* 2nd slide  */}
  <div id="slide2" className="carousel-item relative w-full">
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 flex items-center'>
      <div className='text-left w-1/3 pl-14 text-white space-y-4'>
      <h2 className='text-4xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
      <button className="btn btn-warning">Discover More</button>
      <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
      </div>
    </div>
    <img src={image2} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-16 right-16 space-x-3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  {/* 3rd slide  */}
  <div id="slide3" className="carousel-item relative w-full">
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 flex items-center'>
      <div className='text-left w-1/3 pl-14 text-white space-y-4'>
      <h2 className='text-4xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
      <button className="btn btn-warning">Discover More</button>
      <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
      </div>
    </div>
    <img src={image3} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-16 right-16 space-x-3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 


  {/* 4th slide  */}
  <div id="slide4" className="carousel-item relative w-full">
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 flex items-center'>
      <div className='text-left w-1/3 pl-14 text-white space-y-4'>
      <h2 className='text-4xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-4'>
      <button className="btn btn-warning">Discover More</button>
      <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
      </div>
    </div>
    <img src={image4} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 bottom-16 right-16 space-x-3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


  {/* slide end, this is closing tag of first div tag  */}
</div>
    );
};

export default Banner;