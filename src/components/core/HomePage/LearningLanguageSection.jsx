import React from "react";
import HightlightText from "./HightlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../../core/HomePage/Button"
import { FaArrowRight } from "react-icons/fa";

function LearningLanguageSection() {
  return (
  <div className="mt-[130px]">
    <div className="flex flex-col gap-5 items-center mb-20">

        <div className=" text-3xl lg:text-4xl font-semibold lg:text-center">
            Your Swiss Knife for
            <HightlightText text={" Learning any language"} />
        </div>
        <div className="lg:text-center text-richblack-600 mx-auto mt-3 text-base font-medium lg:w-[70%]
        ">
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-5  mb-5">
            <img src={know_your_progress} alt="knowYourProgress" className="object-contain -mr-32"  />
            <img src={compare_with_others} alt="compareWithOthers" className="object-contain lg:-mb-10 lg:-mt-0 -mt-12" />
            <img src={plan_your_lessons} alt="planYourLessons" className="object-contain lg:-ml-36 lg:-mt-5 -mt-16" />
           
        </div>

        <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
            <div className="flex gap-2 items-center">
            Learn more
            <FaArrowRight />
            </div>
        </CTAButton>
        </div>
       
        
    </div>
  </div>
  );
}

export default LearningLanguageSection;
