/** @format */

import { FaArrowRightLong } from "react-icons/fa6";
import "./BlogSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxArrowTopRight } from "react-icons/rx";
const BlogSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
      };
  const data = [
    {
      area: `Finance`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/support.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Business`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/business1.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Marketing`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/support.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Finance`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/support.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Business`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/business1.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Marketing`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `src/assets/support.svg`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
  ];
  return (
    <div className='main-blogs-container'>
      <div className='blogs-title'>
        <h2>Blogs</h2>
        <p>Explore the impact we've delivered</p>
        <button className="view">
        View All
        <FaArrowRightLong />
        </button>
      </div>
      <div className='w-3/4 m-auto main-bg-card' >
        <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='blogs-card-content'>
              <div className='my-img-blogs'>
                <img src={d.img} alt='' />
              </div>
              <div className='my-text-blogs'>
                <h3>{d.area}</h3>
                <h1>{d.heading}</h1>
                <p>{d.msg}</p>
                <button className='read'>
                  Read more
                  <RxArrowTopRight />
                </button>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
