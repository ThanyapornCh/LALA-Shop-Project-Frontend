import { Carousel } from 'flowbite-react';
import bg1pic from '../assets/images/bg1.png';
import bg2pic from '../assets/images/bg2.jpg';
import bg3pic from '../assets/images/bg3.jpg';
import bg4pic from '../assets/images/bg4.jpg';
import bg5pic from '../assets/images/bg5.jpg';

export default function CarouselItem() {
  return (
    <>
      <div className=" sticky w-full">
        <Carousel className="h-56 w-full ">
          <img src={bg1pic} alt="..." className="h-56 w-full object-cover" />
          <img
            src={bg2pic}
            alt="..."
            className="h-56 first-letter:w-full object-cover"
          />
          <img src={bg3pic} alt="..." className="h-56 w-full object-cover" />
          <img src={bg4pic} alt="..." className="h-56 w-full object-cover" />
          <img src={bg5pic} alt="..." className="h-56 w-full object-cover" />
        </Carousel>
      </div>
    </>
  );
}
