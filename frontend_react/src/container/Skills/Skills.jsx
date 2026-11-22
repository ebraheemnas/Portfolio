import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import {
  SiDotnet, SiDocker, SiExpress, SiGithub, SiGithubactions, SiJira,
  SiMicrosoftazure, SiMicrosoftsqlserver, SiMysql, SiNodedotjs,
  SiPostgresql, SiSpringboot, SiSwagger,
} from 'react-icons/si';
import { BsDiagram3, BsKanban, BsCheck2Square } from 'react-icons/bs';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const additionalSkills = [
  'REST APIs', 'Swagger', '.NET / ASP.NET', 'Spring Boot', 'Node.js',
  'Express', 'SQL', 'PostgreSQL', 'SQL Server', 'Docker', 'Git / GitHub',
  'Azure', 'Agile / Scrum', 'Jira', 'CI/CD', 'Unit Testing',
  'Integration Testing',
].map((name) => ({ name, bgColor: '#edf2f8' }));

const skillIcons = {
  'REST APIs': BsDiagram3,
  Swagger: SiSwagger,
  '.NET / ASP.NET': SiDotnet,
  'Spring Boot': SiSpringboot,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  SQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'SQL Server': SiMicrosoftsqlserver,
  Docker: SiDocker,
  'Git / GitHub': SiGithub,
  Azure: SiMicrosoftazure,
  'Agile / Scrum': BsKanban,
  Jira: SiJira,
  'CI/CD': SiGithubactions,
  'Unit Testing': BsCheck2Square,
  'Integration Testing': BsCheck2Square,
};

const skillInitials = (name) => name
  .split(/[\s/.+-]+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0])
  .join('')
  .toUpperCase();

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      const sortedExperiences = [...data].sort(
        (a, b) => Number(b.year) - Number(a.year),
      );
      setExperiences(sortedExperiences);
    });

    client.fetch(skillsQuery).then((data) => {
      const existingNames = new Set(data.map((skill) => skill.name.trim().toLowerCase()));
      const newSkills = additionalSkills.filter(
        (skill) => !existingNames.has(skill.name.toLowerCase()),
      );
      setSkills([...data, ...newSkills]);
    }).catch(() => {
      setSkills(additionalSkills);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                {skillIcons[skill.name.trim()] ? (
                  React.createElement(skillIcons[skill.name.trim()], {
                    className: 'app__skills-icon',
                    'aria-hidden': true,
                  })
                ) : (
                  <span className="app__skills-initials" aria-hidden="true">
                    {skillInitials(skill.name)}
                  </span>
                )}
                {skill.icon && (
                  <img
                    src={urlFor(skill.icon)}
                    alt=""
                    onLoad={(event) => event.currentTarget.classList.add('is-loaded')}
                    onError={(event) => event.currentTarget.remove()}
                  />
                )}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);




