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
      title: "Lecturer",
      company_name: "PSG College of Technology",
    
      iconBg: "#fffff",
      date: "February - 1997 ",
      points: [
        "Mentoring students through teaching and project guidance",
      ],
    },
    {
      title: "Cognizant Open Source Laboratory",
      company_name: "PSG College of Technology",
    
      iconBg: "#fffff",
      date: "June - 2004",
      points: [
        "Mentoring through OSI projects industry collaboration and course in curriculum. 30 batch of students opted and resulted in good placement.",
      ],
    },
    {
      title: "PSG-CORDYS SOA Laboratory",
      company_name: "PSG College of Technology",
   
      iconBg: "#fffff",
      date: "August - 2007",
      points: [
        "Course on web services SOA introduced, 30 student ambassadors 10 faculty were mentored carried out remote internships. Trained students placed in top MNCs.",
      ],
    },
    {
      title: "PSG-CORDYS Cloud Computing Laboratory",
      company_name: "PSG College of Technology",
     
      iconBg: "#fffff",
      date: "July - 2009",
      points: [
        "Course on Cloud introduced. 30 student ambassadors and 10 faculty trained won in National level contests, carried out remote internships. Cordys,Vanenburg offered Placements, mentees placed in top MNCs.",
      ],
    },
    {
      title: "Iaas Data Center funded by AICTE RPS",
      company_name: "PSG College of Technology",

      iconBg: "#fffff",
      date: "July - 2014",
      points: [
        '10 Papers published, Course on Cloud computing handled by investigators, 5 PhDs were producedbased on the work.'
      ],
    },
    {
      title: "PSG-Impiger Center for AIR",
      company_name: "PSG Collge of Technology",
     
      iconBg: "#fffff",
      date: "July - 2019",
      points: [
        '30 faculty trained. 50+ Students given remote internships. Post graduate certificate course in “Data analytics and management in Bioinformatics” funded by DBT (90.25 L) was handled in this Center.'
      ],
    },
    {
      title: "PSG-HPE Center for Teaching & Experiencing Security & Infrastructure",
      company_name: "PSG Collge of Technology",
     
      iconBg: "#fffff",
      date: "July - 2019",
      points: [
        'Mobile Apps Sklanot Exordium developed (Google playstore). Students placed in top MNCs. Publications, Credits in App (evidences of mentoring). Version 2 in progress'
      ],
    },
    {
      title: "Professor In-Charge Library",
      company_name: "PSG Collge of Technology",
     
      iconBg: "#fffff",
      date: "July - 2019",
      points: [
        'Automation during Covid, Mobile APP Development, Internship programme , Mentoring in Organizing programmes'
      ],
    },
    {
      title: "DST CSRI Grant",
      company_name: "PSG Collge of Technology",
     
      iconBg: "#fffff",
      date: "September - 2021",
      points: [
        'Design and development of AI powered cognitive remediation therapy through gaming for schizophrenia patients. Mentored through collaborations Publications, best project awards'
      ],
    },
    {
      title: "New BE CSE( AI & ML) programme",
      company_name: "PSG Collge of Technology",
     
      iconBg: "#fffff",
      date: "June - 2022",
      points: [
        'Mentoring Students as Professor, Programme Coordinator, Involving students in projects publications and Designing Specialized Centers.'
      ],
    },
  ];
  
export default VerticalAbout
