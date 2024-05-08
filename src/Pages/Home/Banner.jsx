import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    
    return (
        <div className="carousel w-full h-[50vh]">
  <div id="slide1" className="carousel-item relative w-full rounded-xl">
    <img src={img1} className="w-full h-full rounded-xl" />
    <div className='absolute space-y-6 rounded-xl bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide6" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full h-full rounded-xl" />
    <div className='absolute space-y-6 rounded-xl bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full h-full rounded-xl" />
    <div className='absolute space-y-6 rounded-xl bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full h-full rounded-xl" />
    <div className='absolute space-y-6 rounded-xl bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full h-full rounded-xl" />
    <div className='absolute space-y-6 rounded-xl bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full h-full rounded-xl"  />
    <div className='absolute space-y-6 rounded-xl  bg-gradient-to-r from-black to-transparent h-full flex flex-col  justify-center pl-20 w-1/3'>
        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='flex gap-5'>
        <button className="btn btn-secondary">Discover more</button>
        <button className="btn btn-outline btn-success">Latest project</button>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide5" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;