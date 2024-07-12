/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Food Munch on AWS",
    description:
      "Aspiring web developer with proficiency in HTML, CSS, JavaScript, and React. Completed multiple personal projects, showcasing skills in creating responsive and user-friendly websites. Eager to contribute to a dynamic team in an internship role, applying technical expertise to real-world projects, and learning from experienced professionals. Strong problem-solving abilities and a passion for innovative web development solutions. Seeking to gain hands-on experience and further develop professional skills.",
    url: "https://d33c1kaio6u0xj.cloudfront.net",
  },
  {
    title: "Chatbot",
    description:
      "Developed and deployed a conversational AI chatbot, leveraging natural language processing (NLP) to enhance user engagement and streamline customer support. Utilized Python and machine learning frameworks to achieve high accuracy and responsiveness.",
    url: "ptextbot.ccbp.tech",
  },
  {
    title: "Voicebot",
    description:
      "Developed and implemented a sophisticated voicebot using natural language processing and machine learning algorithms. Designed to enhance customer interactions by providing accurate, real-time responses. Led the project lifecycle from concept to deployment, ensuring high functionality, user satisfaction, and seamless integration with existing systems",
    url: "pvoicebot.ccbp.tech",
  },
  {
    title: "Fireplace Theatre Using FrameVR",
    description:
      "Successfully designed and implemented a virtual reality fireplace theatre using FrameVR. Led the project from concept to completion, integrating immersive 3D environments and interactive elements to enhance user experience. Delivered a high-quality, engaging VR experience on schedule.",
    url: "https://framevr.io/class-frame-24",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
