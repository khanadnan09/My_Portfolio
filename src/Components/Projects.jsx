import React from 'react'
import styled from 'styled-components'
import Headin from './Headin'
import disney from '../img/disney.jpeg'
import Todo from '../img/Todo.jpeg'
import TV from '../img/TvApp.jpeg'
import whatsapp from '../img/whatsapp.jpeg'
import Foodies from '../img/Foodies.jpeg'
import WordGame from '../img/WordGame.jpeg'
import MusicPlayer from '../img/MusicPlayer.jpeg'
import Dictionary from '../img/Dictionary.jpeg'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <Headin title="My Projects" />
            <div style={{
                textAlign: "center",
                color: "#fff",
                position: "relative",
                top: "-30px",
                fontSize: "20px"
            }}>Here are my some projects , where i used HTML , CSS , JS and React Js.</div>
            <ProjectsWrapper>
                <ProjectCard img={disney}
                    name="Disney plus clone"
                    desc="This is the Disney plus india clone using React , Firebase and Redux and Styled Components."
                    href="https://disney-plus-clone22.netlify.app/"
                />
                <ProjectCard img={Todo}
                    name="ToDo List App"
                    desc="This is the ToDo List App using React with dark and light mode feature and many more."
                    href="https://list22.netlify.app/"
                />
                <ProjectCard img={TV}
                    name="Tv App"
                    desc="This is the Tv App using React with Redux."
                    href="https://tvapp22.netlify.app/"
                />
                <ProjectCard img={whatsapp}
                    name="WhatsApp Web Clone"
                    desc="This is the WhatsApp Web Clone using HTML , CSS , JS and BootStarp."
                    href="https://mywhatsappwebclone.netlify.app/"
                />
                <ProjectCard img={Foodies}
                    name="Foodies"
                    desc="This is the Food website using HTML , CSS , JS and BootStarp."
                    href="https://foodies11.netlify.app/"
                />
                <ProjectCard img={WordGame}
                    name="WordGame"
                    desc="This is the WordGame using pure HTML , CSS and JS."
                    href="https://wordgame22.netlify.app/"
                />
                <ProjectCard img={MusicPlayer}
                    name="Music Player"
                    desc="This is the Music Player using pure HTML , CSS and JS."
                    href="https://music-player19.netlify.app/"
                />
                <ProjectCard img={Dictionary}
                    name="Dictionary"
                    desc="This is the Dictionary App using pure HTML , CSS and JS."
                    href="https://dictionary22.netlify.app/"
                />
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}
const ProjectsContainer = styled.div``
const ProjectsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`
export default Projects