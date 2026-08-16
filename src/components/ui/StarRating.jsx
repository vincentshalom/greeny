import { useState } from "react";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

function StarRating({ maxRating, rating, color }) {
  const [rating, setRating] = useState(0);

  function handleRating() {}

  return (
    <div className="" onClick={handleRating}>
      {Array.from({ length: maxRating }).map((rate, index) => {
        return <MdOutlineStarOutline />;
      })}
    </div>
  );
}

export default StarRating;
