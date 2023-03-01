import {
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPython,
    DiAndroid,
    DiJava,
    DiMongodb,
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'python', name: 'Python', icon: <DiPython /> },
    { id: 'java', name: 'java', icon: <DiJava /> },
    { id: 'android', name: 'Android', icon: <DiAndroid /> },
    { id: 'mongodb', name: 'Mongodb', icon: <DiMongodb /> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div
                        className="technology-card"
                        id={tech.id}
                        key={tech.id}
                        alt={tech.name}
                    >
                        {tech.icon}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;
