import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HightlightText from "../components/core/HomePage/HightlightText";
import CTAButton from "../components/core/HomePage/Button.jsx";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx";
import Footer from "../components/common/Footer.jsx";
import TimelineSection from "../components/core/HomePage/TimelineSection.jsx";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection.jsx";
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx";
import ExploreMore from "../components/core/HomePage/ExploreMore.jsx";

function Home() {
  return (
    <div>
      {/* Section-1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between  max-w-maxContent">
        {/* Button */}
        <Link to={"/signup"}>
          <div className="mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 mt-16 p-1 group drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 hover:scale-95 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="lg:text-center lg:text-4xl text-3xl font-semibold mt-7">
          Empower Your Future with
          <HightlightText text={"Coding Skills"} />
        </div>
        {/* SubHeading */}
        <div className="w-[100%] lg:w-[80%] lg:text-center text-lg font-bold text-richblack-300 mt-3">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="shadow-blue-200 mx-3 my-7 shadow-[10px_-5px_50px_-5px]">
          <video
            className="shadow-[10px_10px_rgba(255,255,255)] lg:shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HightlightText text={"Coding Potential"} />
                with our online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a>\n <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroudGradient={<div className="codeblock1 absolute"></div>}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* Code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HightlightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a>\n <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroudGradient={<div className="codeblock2 absolute"></div>}
            codeColor={"text-yellow-25"}
          />
        </div>

            <ExploreMore />

      </div>

      {/* Section-2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg lg:h-[310px] h-[100px]">
          <div className="w-11/12 max-w-maxContent flex flex-col justify-center items-center mx-auto">
            <div className="lg:h-[150px] h-[50px]"></div>

            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                  Explore full catelog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"signup"}>
                <div className="flex gap-2 items-center">
                  Learn more
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-col gap-5 mb-10  mt-[55px] lg:mt-20 lg:flex-row lg:gap-0">
            <div className=" text-3xl lg:text-4xl font-semibold lg:w-[45%]">
              Get the skills you need for a
              <HightlightText text={"job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 lg:w-[45%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"signup"}>
                Learn more
              </CTAButton>
            </div>
          </div>

          {/* TimeLineSection */}
          <TimelineSection />

          {/* Learning Language Section */}
          <LearningLanguageSection />
          
        </div>
      </div>

      {/* Section-3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

            <InstructorSection />

            <h2 className="text-center text-4xl font-semibold mt-10">Reviews from other learners</h2>

            {/* Review slider here */}

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
