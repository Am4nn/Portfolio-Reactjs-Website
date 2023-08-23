import React from 'react'
import { skills } from '../../../../utils/config'
import './Skills.css'

const Skills = () => {
    return (
        <div>
            {skills.map((skill, idx) => (
                <SkillCategory
                    name={skill.name}
                    items={skill.items}
                    key={idx}
                />
            ))}
        </div>
    );
}

const SkillCategory = ({ name, items }) => {
    return (
        <div className="skill-category-container" data-aos="fade-up">
            <div className="skill-title">
                <div className="arrow-img-container">
                    <img src="skills/arrow1.svg" alt="" />
                </div>
                <h3>{name}</h3>
            </div>
            <div className="skills_container">
                {items.map((item, idx) => (
                    <SkillBubble name={item} key={idx} />
                ))}
            </div>
        </div>
    );
}

const SkillBubble = ({ name }) => {
    return (
        <div className="skill-bubble-container">
            <img src={`skills/` + name + `.svg`} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default Skills;
