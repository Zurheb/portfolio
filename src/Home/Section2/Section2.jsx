import React, { useState } from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { useTransition, animated } from "@react-spring/web";
import AnimatedTitle from "../../Smth/Animation";
import { useTranslation } from "react-i18next";
import i42 from "../../assets/42.png";
import elixer from "../../assets/Elixer.png";
import spin from "../../assets/spin.png";
import github02 from "../../assets/github02.png";
import link from "../../assets/link.png";
import linklight from "../../assets/linklight.png";
import githublight from "../../assets/githublight.png";

const projects = [
  {
    id: 1,
    image: i42,
    projectsname: "42",
    livePreview: "https://42-delta.vercel.app/",
    viewCode: "https://github.com/Zurheb/42_",
    languages: ["React", "TailwindCss", "JavaScript"],
  },
  {
    id: 2,
    image: elixer,
    projectsname: "Elixer",
    livePreview: "https://elixer-ecru.vercel.app/",
    viewCode: "https://github.com/Zurheb/elixer",
    languages: ["React", "TailwindCss", "JavaScript"],
  },
  {
    id: 3,
    image: spin,
    projectsname: "Spin",
    livePreview: "https://demo-spin-behruzs-projects-cd010115.vercel.app/",
    viewCode: "https://github.com/Zurheb/spin",
    languages: ["React", "TailwindCss", "JavaScript"],
  },
];

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const transition = useTransition(!!project, {
    from: { opacity: 0, transform: "scale(0.95)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.95)" },
  });

  if (!project) return null;

  return transition(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed inset-0 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="bg-white dark:bg-[#2C2C2C] p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2
              id="project-modal-title"
              className="text-2xl font-bold mb-4 text-[#42446E] dark:text-[#CCCCCC]"
            >
              {project.projectsname}
            </h2>
            <img
              src={project.image}
              alt={project.projectsname}
              className="w-full h-64 object-bottom mb-4"
            />
            
            <Typography className="mb-2 text-[#42446E] dark:text-[#CCCCCC]">
              <strong>{t("section2.StartDate")}:</strong>{" "}
              {project.id === 1
                ? t("section2.data1")
                : project.id === 2
                ? t("section2.data2")
                : t("section2.data3")}
            </Typography>
            <Typography className="mb-2 text-[#42446E] dark:text-[#CCCCCC]">
              <strong>{t("section2.EndDate")}:</strong>{" "}
              {project.id === 1
                ? t("section2.end1")
                : project.id === 2
                ? t("section2.end2")
                : t("section2.end3")}
            </Typography>
            <Typography className="mb-4 text-[#42446E] dark:text-[#CCCCCC]">
              <strong>{t("section2.LanguagesUsed")}:</strong>{" "}
              {project.languages.join(", ")}
            </Typography>
            <div className="flex justify-between items-center mb-4">
              <a
                href={project.livePreview}
                className="flex items-center text-blue-500 hover:text-blue-700"
                aria-label="Live Preview"
              >
                <img
                  src={linklight}
                  alt="link"
                  className="link-icon-light w-5 h-5 mr-2"
                />
                <img
                  src={link}
                  alt="link"
                  className="link-icon-dark w-5 h-5 mr-2"
                />
                <span>{t("section2.live")}</span>
              </a>
              <a
                href={project.viewCode}
                className="flex items-center text-blue-500 hover:text-blue-700"
                aria-label="View Code"
              >
                <img
                  src={githublight}
                  alt="github"
                  className="github-icon-light w-5 h-5 mr-2"
                />
                <img
                  src={github02}
                  alt="github"
                  className="github-icon-dark w-5 h-5 mr-2"
                />
                <span>{t("section2.code")}</span>
              </a>
            </div>
          </div>
        </animated.div>
      )
  );
};

export const Section2 = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
   
  };

  return (
    <section
      id="projects"
      className="py-16 bg-[#F5F5F5] dark:bg-[#191919]"
      data-aos="zoom-in-down"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#42446E] mb-4">
          <AnimatedTitle>
            <span className="text-[#42446E] dark:text-[#CCCCCC]">
              {t("section2.projects")}
            </span>
          </AnimatedTitle>
        </h1>
        <h2 className="text-lg lg:text-xl text-[#666666] dark:text-[#A7A7A7] mb-12">
          {t("section2.p")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white dark:bg-[#2C2C2C] text-[#42446E] dark:text-[#CCCCCC]"
              onClick={() => handleProjectClick(project)}
              role="button"
              tabIndex={0}
              aria-label={`View project ${project.projectsname}`}
            >
              <CardHeader className="h-56 overflow-hidden relative">
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.projectsname}
                    className="w-full h-full object-bottom transition-transform duration-300 transform hover:scale-105 hover:rotate-2"
                  />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Section2;
