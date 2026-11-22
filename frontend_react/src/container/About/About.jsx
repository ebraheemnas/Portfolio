import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import apiBackendImage from '../../assets/api-backend.webp';
import agileQualityImage from '../../assets/agile-quality.webp';
import {AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';
import {client, urlFor} from '../../client';

const currentQualifications = [
    {
        title: 'API & Backend Development',
        description: 'Building REST APIs with .NET, Spring Boot, Node.js and Express, documented with Swagger and backed by SQL databases.',
        localImage: apiBackendImage,
    },
    {
        title: 'Agile & Quality Engineering',
        description: 'Working in Agile/Scrum teams with Jira, CI/CD pipelines, Docker, and unit and integration testing.',
        localImage: agileQualityImage,
    },
];

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            const normalized = data.map((about) => (
                about._id === '01593e6d-f8f1-4345-9f5d-e25d51326249'
                    ? {...about, description: 'B.Sc. in Business Information Systems'}
                    : about
            ));
            setAbouts([...normalized, ...currentQualifications]);
        }).catch(() => {
            setAbouts(currentQualifications);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">MY <span>Qualifications</span>{/*<br />I like <span>to show</span> */} </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        {about.localImage || about.imgUrl ? (
                            <img
                                src={about.localImage || urlFor(about.imgUrl)}
                                alt={about.title}
                            />
                        ) : null}
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);