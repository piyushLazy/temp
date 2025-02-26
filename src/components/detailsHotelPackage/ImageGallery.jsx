// "use client";

// import React from "react";
// import Image from "next/image";
// import "./ImageGallery.css";

// const ImageGallery = ({ images }) => {
//   if (!images || images.length === 0) {
//     return <p>No images to display</p>;
//   }

//   return (
//     <div className="hotel-gallery-container">
//       <div className="hotel-gallery-grid">
//         {/* First Large Image (Left) */}
//         <div className="hotel-gallery-left">
//           {images[0] && (
//             <div className="hotel-gallery-item large">
//               <Image
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 width={500}
//                 height={500}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           )}
//         </div>

//         {/* Middle Images */}
//         <div className="hotel-gallery-middle">
//           {images.slice(1, 3).map((image) => (
//             <div key={image.id} className="hotel-gallery-item small">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={250}
//                 height={250}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Next Middle Images */}
//         <div className="hotel-gallery-middle">
//           {images.slice(3, 5).map((image) => (
//             <div key={image.id} className="hotel-gallery-item small">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={250}
//                 height={250}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Last Large Image (Right) */}
//         <div className="hotel-gallery-right">
//           {images[5] && (
//             <div className="hotel-gallery-item large">
//               <Image
//                 src={images[5].src}
//                 alt={images[5].alt}
//                 width={500}
//                 height={500}
//                 layout="responsive"
//                 objectFit="cover"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

//=============================================
"use client";
import Image from "next/image";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {/* First large image (left) */}
        <div className="gallery-left">
          {images[0] && (
            <div className="gallery-item large">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={400}
                height={400}
                style={{ width: "100%", height: "100%" }}
                priority
              />
            </div>
          )}
        </div>

        {/* Middle images */}
        <div className="gallery-middle">
          {images.slice(1, 3).map((image) => (
            <div key={image.id} className="gallery-item small">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>

        {/* Next set of middle images */}
        <div className="gallery-middle">
          {images.slice(3, 5).map((image) => (
            <div key={image.id} className="gallery-item small">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>

        {/* Last large image (right) */}
        <div className="gallery-right">
          {images[5] && (
            <div className="gallery-item large">
              <Image
                src={images[5].src}
                alt={images[5].alt}
                width={400}
                height={400}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
