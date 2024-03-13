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
        <div className="text-4xl font-semibold text-center">
            Unlock the 
            <HightlightText text={"Power of coode"} />
        </div>

        <p className="text-richblack-300  mt-3 text-[16px] text-center text-lg">
            Learn to build anything you can imagine
        </p>

        <div className="lg:flex gap-5 mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] mb-2">
            {
                tabsName.map((element, index) => {
                    return (
                        <div className={ `text-[16px]
                         flex flex-row items-center gap-2 ${currentTab == element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200" } rounded-full transition-all duration-200 hover:bg-richblue-900 hover: text-richblack-5 px-4 py-2
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

        <div className="hidden lg:block lg:h-[200px]"></div>

        {/* Gourp of course cards */}
        <div>
            {
                courses.map((element, index)=> {
                    return (
                        <CourseCard />
                    )
                })
            }
        </div>

    </div>
  );
}
