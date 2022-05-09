import { useEffect, useState } from "react";
import { CarouselData } from "../../appStructure/models";
import {
   listText,
   mainText,
   mainTextEmph,
   subSubTitle,
   subTitle,
} from "../../appStructure/constants";
import { Link } from "react-router-dom";
import "./home.scss";
import deskImg from "../../assets/shutterstock_696636415.jpg";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Home() {
   const [carouselState, setCarousel] = useState<CarouselData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<boolean>(false);

   useEffect(() => {
      fetch(
         "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      )
         .then((response) => response.json())
         .then((data) => {
            if (data.Status === "1") {
               const cArray = [];
               for (let index = 0; index < data.Details.length; index++) {
                  const rawData: CarouselData = data.Details[index];
                  cArray.push(rawData);
               }
               setCarousel(cArray);
               setLoading(false);
            } else if (data.Status === "0") {
               setLoading(false);
               setError(true);
            }
         })
         .catch((e) => {
            setLoading(false);
            setError(true);
         });
   }, []);

   const GetCarosaul = (): JSX.Element => {
      if (loading === true) {
         return <div>Loading</div>;
      } else if (error === true) {
         return <div>Error</div>;
      }

      return (
         <div className="container">
            <Swiper
               spaceBetween={50}
               navigation={true}
               effect={"fade"}
               loop={true}
               pagination={{
                  clickable: true,
               }}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className="fade">
                     <div className="carouselTextHolder">
                        <h1>{carouselState[0].Title}</h1>
                        <p className={subSubTitle}>
                           {carouselState[2].Subtitle}
                        </p>
                        <Link to="/contact-us">
                           <button className="contactUs">Contact us</button>
                        </Link>
                     </div>
                  </div>
                  <img id="img1" src={carouselState[0].ImageUrl} alt="c"></img>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="fade">
                     <div className="carouselTextHolder">
                        <h1>{carouselState[0].Title}</h1>
                        <p className={subSubTitle}>
                           {carouselState[2].Subtitle}
                        </p>
                        <Link to="/contact-us">
                           <button className="button">Contact us</button>
                        </Link>
                     </div>
                  </div>
                  <img id="img2" src={carouselState[1].ImageUrl} alt="c"></img>
               </SwiperSlide>
            </Swiper>
         </div>
      );
   };

   return (
      <div>
         {GetCarosaul()}
         <div className="secondRowContainer">
            <div className="secondRow">
               <div className="textHolder">
                  <p className={subTitle}>
                     Justo petentium te vix, scripta regione urbanitas
                  </p>
                  <p className={mainText}>
                     Populo facilisi nam no, dolor deleniti deseruisse ne cum,
                     nam quodsi aliquam eligendi ne. Ferri euismod accusata te
                     nec, summo accumsan at vix. Ad vix legere impetus, nam
                     consequat reformidans ut. No sit consul integre
                     voluptatibus, omnium lucilius ne mel. Et ancillae recteque
                     deterruisset sed, ea nec odio option, ferri assum eum et.
                  </p>
                  <ul className={listText}>
                     <li>
                        Te pri efficiendi assueverit, id molestie suavitate per
                     </li>
                     <li>
                        Te nam dolorem rationibus repudiandae, ne ius falli
                        aliquip consetetur
                     </li>
                     <li>Ut qui dicant copiosae interpretaris</li>
                     <li>
                        Ut indoctum patrioque voluptaria duo, ut vis semper
                        abhorreant
                     </li>
                  </ul>
                  <button>Learn more</button>
               </div>
               <div className="imgHolder">
                  <img className="img" src={deskImg} alt="aimg"></img>
               </div>
            </div>
         </div>

         <div className="thirdRowContainer">
            <div className="thirdRow">
               <div className="textHolder">
                  <p className={subTitle}>
                     Nulla sem urna, dictum sed nisi in, viverra rutrum neque{" "}
                  </p>
                  <p className={mainText}>
                     Cras sit amet dapibus magna. Orci varius natoque penatibus
                     et magnis dis parturient montes, nascetur ridiculus mus.
                     Donec finibus nulla quis lorem mollis lacinia. Fusce ut
                     arcu ligula. Pellentesque augue ex, pellentesque ut maximus
                     non, eleifend ut lorem. Vestibulum rutrum malesuada turpis,
                     molestie mattis velit maximus ac. Quisque iaculis hendrerit
                     ex et tincidunt. Aenean eu magna ut nisi placerat fringilla
                     in sed diam.
                  </p>

                  <button>Log In</button>
               </div>
            </div>
         </div>

         <div className="fourthRowContainer">
            <div className="fourthRow">
               <p className={subTitle}>
                  Sed libero justo, lobortis sit amet suscipit non
               </p>
               <p className={subSubTitle}>taria duo ut vis semper abhorreant</p>
               <p className={mainText}>
                  <u className={mainTextEmph}>
                     Pellentesque ac condimentum felis. Suspendisse vel suscipit
                     dolor, nec laoreet nulla. Nam auctor ultricies dapibus.
                     Donec ac interdum dui, quis finibus lectus. Cras in
                     ultrices neque. Curabitur eget turpis iaculis diam congue
                     sagittis a vel ligula. Mauris ut arcu ex. Nullam quis orci
                     ante. Nunc felis massa, posuere non gravida in, commodo in
                     arcu. In feugiat magna non volutpat faucibus. Nam aliquam
                     justo nec aliquam iaculis. Integer laoreet pulvinar elit
                     pulvinar fermentum. Morbi vehicula sodales nunc ac varius.
                     Proin porttitor porttitor libero vel pharetra.
                  </u>
                  <br></br>
                  <br></br>
                  Cras sit amet dapibus magna. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Donec
                  finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula.
                  Pellentesque augue ex, pellentesque ut maximus non, eleifend
                  ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis
                  velit maximus ac. Quisque iaculis hendrerit ex et tincidunt.
                  Aenean eu magna ut nisi placerat fringilla in sed diam.
                  Suspendisse tristique vel dui nec imperdiet. Cras mattis
                  ligula quis fermentum suscipit. Proin et elementum arcu, sit
                  amet porttitor diam. Curabitur euismod, erat vitae tristique
                  volutpat, augue lectus dignissim justo, at faucibus orci est a
                  elit.
                  <br></br>
                  <br></br>
                  Sed sed sapien pretium, maximus felis vel, mollis elit. Sed
                  libero justo, lobortis sit amet suscipit non, auctor non
                  libero. Maecenas quis nisl eget enim porta blandit a nec
                  sapien. Mauris porttitor lorem ut egestas euismod. Donec
                  molestie tempor nibh, nec venenatis arcu ullamcorper sit amet.
                  Nulla facilisi. Proin cursus neque ut tortor scelerisque, at
                  iaculis nunc ornare. Pellentesque non nunc nulla. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Aenean et
                  sodales diam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fusce porttitor magna augue, non auctor quam
                  placerat nec. Nulla sem urna, dictum sed nisi in, viverra
                  rutrum neque. Aliquam ipsum nunc, porta a augue nec, fringilla
                  mollis arcu. In a vehicula odio. Praesent vulputate turpis
                  eleifend egestas ultrices. Proin nec sagittis nibh. Curabitur
                  fringilla felis a porttitor maximus. Vestibulum aliquet ante
                  nec leo malesuada porttitor sit amet et magna.
               </p>
               <Link to="/contact-us">
                  <button className="button">Contact us</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Home;
