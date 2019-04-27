import React, { Fragment } from 'react';
import Icon from '../Icon'
import { Line } from 'rc-progress';
import SkillsData from './skills_data';
import ReactTooltip from 'react-tooltip';



import './Skills.css';

const Skills = () => (
    <div className="skills-container">

        <div className="skill-content">
            <div className="info-icon"
                data-tip="A porcentagem é baseada na experiência e dôminio da linguagem ou ferramenta">
                <Icon name="info" width="30px" height="30px" fill="#8c43ff" />
            </div>
            {SkillsData.map(({ icon_name, categories, title }, index) => (
                <div className="column" key={index}>
                    <Icon name={icon_name} width="70px" height="70px" fill="#8c43ff" />
                    <p className="title skill"> {title} </p>
                    {categories.map(({ category_name, skills }, index) => (
                        <Fragment key={index}>
                            <p className="description languages">
                                {category_name}
                            </p>
                            <div className="description skill-details">
                                {skills.map(({ skill_name, percent }, index) => (
                                    <p className="skill-item" key={index} data-tip={`${percent}%`}>
                                        {skill_name}
                                        <Line
                                            percent={percent}
                                            strokeWidth="10"
                                            trailWidth="10"
                                            strokeColor="#8c43ff" />
                                    </p>
                                ))}
                            </div>
                        </Fragment>
                    ))}
                </div>
            ))}
        </div>
        <ReactTooltip place="right" type="dark" effect="float" />
    </div >
)
export default Skills;