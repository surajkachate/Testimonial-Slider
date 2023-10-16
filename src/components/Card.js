import React, {useState} from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
    const [showFullText, setShowFullText] = useState(false);
  return (
    <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
            <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image} alt="Image" />
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        </div>

        <div className="text-center mt-7">
            <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
        </div>

        <div className="text-cente">
            <p className="text-violet-300 text-sm uppercase">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
        </div>

        <div className="text-center mt-4 text-slate-500">
        {showFullText ? review.text : review.text.slice(0, 200)}
      {review.text.length > 200 && (
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-blue-500 hover:text-blue-700"
        >
          {showFullText ? ' read less' : '...read more'}
        </button>
      )}
        </div>

        <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight/>
        </div>
    </div>
  )
}

export default Card