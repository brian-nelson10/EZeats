import React from "react";


const Image = ({ src, fallback, type = "image/webp", alt, className }) => {
  return (
    <picture>
      <source srcSet={src} type={type} className={className}/>
      <img src={fallback} alt={alt} className={className}/>
    </picture>
  );
};

export default Image;