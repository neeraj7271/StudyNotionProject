import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    Description: "Fully committedto success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexiblity",
    Description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the Problem",
    Description: "Code your way to a solution",
  },
];

function TimelineSection() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-20 items-center">

        <div className="lg:w-[45%] flex flex-col gap-5">
          {timeline.map((element, index) => {
            return (
              
              <div className="flex flex-col lg:gap-6" key={index}>

              <div className="flex flex-row gap-6" key={index}>

                <div className="w-[50px] h-[50px] bg-white flex items-center justify-center shadow-[#00000012] shadow-[0_0_62px_0] rounded-full">
                  <img src={element.logo} />
                </div>

                <div>
                  <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                  <p className="lg:text-base text-[14px]">{element.Description}</p>
                </div>
                
              </div>

              <div
                  className={` ${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  }  h-10 lg:h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
              
            );
          })}
        </div>

          <div className="relative shadow-blue-200 shadow-[0px_0px_30px_0px]">

            <img src={timelineImage} alt="timelineImage" className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] rounded-md" />
 
            <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7  left-[50%] translate-x-[-50%] translate-y-[-50%]">

                <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
                    <p className="text-3xl font-bold">10</p>
                    <p className="text-caribbeangreen-300">Years of Experience</p>
                </div>

                <div className="flex gap-5 items-center px-7">
                <p className="text-3xl font-bold">250</p>
                    <p className="text-caribbeangreen-300">Type of courses</p>
                </div>

            </div>

          </div>

      </div>
    </div>
  );
}

export default TimelineSection;
