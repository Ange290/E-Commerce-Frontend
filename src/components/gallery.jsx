import '../index.css';
import image7 from '../images/7.png';
import image20 from '../images/20.png';
import image21 from '../images/21.png';
import image10 from '../images/10.png';

const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-8 px-4 md:px-8 lg:px-12 min-h-[400px] md:min-h-[500px] border-b border-gray-100">
      {/* Left images */}
      <div className="flex items-end justify-center space-x-4 md:space-x-8 lg:space-x-12 h-full flex-shrink-0 mb-6 md:mb-0">
        <img src={image21} alt="Fashion Model 1" className="h-64 md:h-80 lg:h-[400px] object-contain" />
        <img src={image7} alt="Fashion Model 2" className="h-72 md:h-96 lg:h-[400px] object-contain" />
      </div>

      {/* Center text */}
      <div className="flex flex-col items-center justify-center text-center mx-4 md:mx-8 lg:mx-12 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide">
          HerBeauty 
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-2 font-medium">
          Store
        </p>
        <hr className='border-t-2 border-lime-500 w-28 mt-2 mb-4 ' />
        <p className="text-sm md:text-base text-black-500 mt-4 max-w-xs leading-relaxed">
          make your everyday look prettier <br /> with HerBeauty Korean Made
        </p>
      </div>

      {/* Right images */}
      <div className="flex items-end justify-center space-x-4 md:space-x-0 h-full flex-shrink-0">
        <img src={image20} alt="Fashion Model 3" className="h-80 md:h-96 lg:h-[400px] object-contain pr-2" />
        <img src={image10} alt="Fashion Model 4" className="h-80 md:h-96 lg:h-[400px] object-contain" />
      </div>
    </div>
  );
};

export default Gallery;
