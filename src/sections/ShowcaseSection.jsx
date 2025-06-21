import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { firstProject, OtherProjects } from "../constants";
import { useState } from "react";
import Divider from "../components/Divider";



gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
          },
        }
      );
    });
  }, []);





  const totalPages = Math.ceil(OtherProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = OtherProjects.slice(startIndex, startIndex + itemsPerPage);


  return (

    <div>
      <Divider />

      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full ">

          <TitleHeader title="My Portfolio" sub='Visit My Portfolio & Keep Your Feedback' />

          <div className="showcaselayout mt-17 relative">
            <div ref={rydeRef} className="first-project-wrapper card2 p-5">
              {firstProject.map(({ imgPath, alt, projectName, github, GithubIcon, UrlIcon, url, desc }, index) => (
                <div key={index}>
                  <div className="image-wrapper ">
                    <img src={imgPath} alt={alt} />
                  </div>
                  <div className="text-content ">
                    <div className="flex justify-between">
                      <h3 className="font2 text-2xl font-bold bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] bg-clip-text text-transparent ">
                        {projectName}
                      </h3>
                      <span className="flex gap-5">
                        <a href={github} target="_blank" rel="noopener noreferrer"><GithubIcon className="text-white size-7" /></a>
                        <a href={url} target="_blank" rel="noopener noreferrer"> <UrlIcon className="text-white size-7" /></a>
                      </span>
                    </div>
                    <p className="text-white-50 md:text-xl font2">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="project-list-wrapper" ref={libraryRef}>
              {paginatedProjects.map(({ imgPath, alt, projectName, github, GithubIcon, UrlIcon, url, desc }, index) => (
                <div key={index} className="card2 w-[100%] md:w-[45%] p-5">
                  <div className="project">
                    <img src={imgPath} alt={alt} />
                    <div className="flex justify-between gap-3  md:gap-4">
                      <h2 className="font2 text-xl md:text-2xl font-bold bg-gradient-to-tr from-[#17EAD9] to-[#6078EA] bg-clip-text text-transparent">
                        {projectName}
                      </h2>
                      <div className="flex gap-3 md:gap-5 mt-5">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="text-white size-7" />
                        </a>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <UrlIcon className="text-white size-7" />
                        </a>
                      </div>
                    </div>
                    <p className="text-white-50 mt-5 font2">{desc}</p>
                  </div>
                </div>
              ))}




            </div>


          </div>
          <div className="flex justify-center mt-8 gap-4 ">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 card2 "
            >
              Prev
            </button>

            <span className="text-white text-lg">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 card2 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AppShowcase;