import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
 <div className='lg:w-1/2 relative w-full'>
 <img src={person} className=" rounded-lg shadow-2xl w-2/3" />
    <img src={parts} className=" rounded-lg shadow-2xl absolute -bottom-16 right-0 w-64 border-4 border-white" />
 </div>
    <div className='lg:w-1/2 text-left'>
      <h1 className="text-base font-bold text-red-700">About Us</h1>
      <h1 className="text-4xl font-bold w-2/3 mt-4">We are qualified & of experience in this field</h1>
     <div className='space-y-6 mt-5 mb-5'>
     <p className="leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
     </div>
      <button className="btn btn-success ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;