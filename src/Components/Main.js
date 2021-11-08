import React from "react";
import About from "./About";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Skills from "./Skills";

// My work experience is in teh below object
const workExp = [
  {
    id: "1",
    company: "Old Mutual",
    job_title: "Sales Manager",
    period: "Jan. 2010 ‑ Feb. 2021",
    description:
      "Achieve annual budget through the effective management of 15 sales agents. Managed the distribution of laptops to employees in the contact center during our work from home conversion. Developed a coaching plan to enhance the skill set of each sales agent under my supervision. Prepare for and deliver monthly presentations on the teams KPI’s to management. Assisted three employees under my supervision to achieve adequate management competencies, who are now currently in leadership roles.",
  },
  {
    id: "2",
    company: "Old Mutual",
    job_title: "Sales Consultant",
    period: "Apr. 2008 ‑ Dec. 2009",
    description:
      "Achieved monthly and annual sales targets through selling insurance products and investments. Maintained high standard of quality and compliance throughout my tenure as sales agent. Achieving an award for Top Quality and Compliance in 2008.",
  },
  {
    id: "3",
    company: "Direct Fin Solutions",
    job_title: "Sales Agent",
    period: "Feb. 2007 ‑ Feb. 2008",
    description:
      "Achieved monthly target selling AIG accidental death and disability cover.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "React",
  "Leadership",
  "Git & Github",
  "Markdown",
  "Excellent communication, both written and verbal",
  "Command Line",
  "Figma",
];

const education = [
  {
    id: "1",
    course: "THE COMPLETE 2021 WEB DEVELOPMENT BOOT‑CAMP",
    period: "Nov. 2020 ‑ June. 2021",
    institution: "Udemy",
  },
  {
    id: "2",
    course: "FiNANCE FOR NON ‑ FiNANCiAL MANAGERS",
    period: "2016",
    institution: "Old Mutual Business School",
  },
  {
    id: "3",
    course: "MANAGER OF OTHERS DEVELOPMENT PROGRAMME",
    period: "2011",
    institution: "Old Mutual Business School",
  },
  {
    id: "4",
    course: "WEALTH MANAGEMENT NQF5",
    period: "2009",
    institution: "Recognition of prior learning",
  },
  {
    id: "5",
    course: "Matric",
    period: "2005",
    institution: "Belhar Senior Secondary",
  },
];

function Main() {
  return (
    <main>
      <About />
      <WorkExp workExp={workExp} />
      <Skills skills={skills} />
      <Education education={education} />
    </main>
  );
}

export default Main;
