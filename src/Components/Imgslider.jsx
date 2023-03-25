import React from 'react'
// import  Carousel from 'react-bootstrap';
import './Imgslider.css';
import image1 from '../images/home1.jpg';
import image2 from '../images/home2.jpg';
import image3 from '../images/home3.jpg';
// import image4 from '../images/home4.jpg';
// import image5 from '../images/home5.jpg';
// import image6 from '../images/home6.jpg';
// import image7 from '../images/home7.jpg';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {image2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

// export default function Imgslider() {
//   return (
//     <div>
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//           src={image1}
//           alt="First slide"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//           src={image2}
//           alt="Second slide"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//         src ={image3}
//           alt="Third slide"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//         src ={image4}
//           alt="Third slide"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//         src ={image5}
//           alt="Third slide"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//         src ={image6}
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100 home-image"
//         src ={image7}
//           alt="Third slide"
//         />
//       </Carousel.Item>

//     </Carousel>

//     </div>
//   );
// }