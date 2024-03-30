import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import "react-vertical-timeline-component/style.min.css";




const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
        background: "white",
        color: "black",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" // Adding shadow effect
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className='text-[#22222] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const VerticalAbout = () => {
  return (
    <>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const experiences = [
    {
      title: "OSINT",
      company_name: "Head:Aswath Harish",
    
      iconBg: "#fffff",
      date: "March 2020 - Present",
      points: [
        "The OSINT (Open Source INTelligence) Team, headed by Aswath Harish is responsible for contributing to already-existing open source intelligence projects to improve the world of Cybersecurity. Click the title to see tools published by our set of skilled OSINT developers on GitHub.",
      ],
    },
    {
      title: "Intel",
      company_name: "Head:Ashwant Krishna",
    
      iconBg: "#fffff",
      date: "Jan 2021 - Feb 2022",
      points: [
        "The Intel Team, headed by Ashwant Krishna, develops cybersecurity solutions for proprietary use within The Eye based on Python and the NMap Scripting Language for already-available tools like Maltego, NMap and other custom tools created by The Eye. Click the title to see any tools published by our set of skilled intelligence developers.",
      ],
    },
    {
      title: "Oculus UI",
      company_name: "Head: Navaneetha Krishnan K S ",
   
      iconBg: "#fffff",
      date: "Jan 2022 - present",
      points: [
        "Oculus UI, headed by Navaneetha Krishnan S is a secure coding project under the web development stream, simplifying the everyday club tasks within The Eye - for internal usage.",
      ],
    },
    {
      title: "Training",
      company_name: "Head:Swetha M ",
     
      iconBg: "#fffff",
      date: "Jan 2023 - Present",
      points: [
        "The Training Team, coordinated by Swetha M, consists of a few core members - who organize self assessment-based cybersecurity training programmes exclusive to all the members of The Eye.",
      ],
    },
    {
      title: "Events and Social Media",
      company_name: "Head:Dhanush Gowthaman ",

      iconBg: "#fffff",
      date: "Jan 2023 - Present",
      points: [
        'The Eye organizes cybersecurity-based events in order to spread awareness - like workshops, hackathons and treasure-hunts. The Events and Social Media team, headed by Dhanush Gowdhaman, are responsible for ideating and conducting events, as well as handling the Social Media handles of The Eye.'
      ],
    },
    {
      title: "Documentation",
      company_name: "Head: Adithya Rengarajan ",
     
      iconBg: "#fffff",
      date: "Jan 2023 - Present",
      points: [
        'The Documentation Team is responsible for writing and creating articles, research-work, and more relevant document-related tasks. There are 3 projects under the documentation team, headed by Aaditya Rengarajan - namely - the Case Study project where the team aims to work on case studies of security incidents worldwide, the Research Project where the team aims to perform R&D and write a research paper on something new, and the Articles Project where the team aims to write Security Guidelines, Quarterly Reports and Whitepapers for the club.'
      ],
    },
    {
      title: "Youtube",
      company_name: "Head:Rohith Sundaramurthy  ",
    
      iconBg: "#fffff",
      date: "Jan 2023 - Present",
      points: [
        'The YouTube Team, headed by Rohith Sundharamurthy, works on YouTube videos to be released on the YouTube platform under The Eye.'
      ],
    },
  ];
  
export default VerticalAbout
