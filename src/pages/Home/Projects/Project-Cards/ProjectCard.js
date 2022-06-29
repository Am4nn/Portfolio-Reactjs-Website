import React from "react";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from 'react-icons/ai'
import { Chip } from '@mui/material'
import './projectCard.css';

/*
 props.data = {
    img, title, description, tech[], site, github
 }
*/

function ProjectCards(props) {
    const { data } = props;
    return (
        <div className="project-card">
            <Card className="project-card-view">
                <Card.Img className="card-img" variant="top" src={data.img} alt="card-img" />
                <Card.Body>
                    <Card.Title className="card-title">{data.title}</Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                        {data.description}
                    </Card.Text>
                    <Card.Subtitle>
                        {data.tech.map((text, index) =>
                            <Chip key={index} className='chips-render' label={text} variant="outlined" />
                        )}
                    </Card.Subtitle>
                    <Card.Body>
                        {data.site && <Card.Link className='card-link' href={data.site}><BiLinkExternal /> Visit Site</Card.Link>}
                        {data.github && <Card.Link className='card-link' href={data.github}><AiFillGithub /> GitHub</Card.Link>}
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ProjectCards;
