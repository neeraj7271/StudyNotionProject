import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore.js";
import HightlightText from "./HightlightText";
import CourseCard from "./CourseCard.jsx";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
]

export default function ExploreMore() {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
      HomePageExplore[0].courses[0].heading
    );
  
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
      };
    
  return (
    <div>
        <div className="text-4xl font-semibold px-3 lg:text-center">
            Unlock the 
            <HightlightText text={"Power of code"} />
        </div>

        <p className="text-richblack-300  mt-3 text-[16px] lg:text-center text-lg px-3">
            Learn to build anything you can imagine
        </p>

        <div className="lg:flex gap-5 mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 lg:rounded-full rounded-md font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] lg:mb-2 mb-4">
            {
                tabsName.map((element, index) => {
                    return (
                        <div className={ `text-[16px]
                         flex flex-row items-center justify-center gap-2 ${currentTab == element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200" } lg:rounded-full rounded-md  transition-all duration-200 hover:bg-richblue-900 hover: text-richblack-5 px-4 py-2
                        `}
                        key={index}
                        onClick={()=> setMyCards(element)}
                        >
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className="hidden lg:block lg:h-[300px]"></div>

        {/* Gourp of course cards */}
        <div className="lg:absolute flex flex-row  gap-10 lg:justify-between w-full lg:gap-0 justify-center flex-wrap lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[30%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
            {
                courses.map((element, index)=> {
                    return (
                        <CourseCard
                        key={index}
                        cardData = {element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard}
                         />
                    )
                })
            }
        </div>

    </div>
  );
}
