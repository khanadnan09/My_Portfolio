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
import chatApp from '../img/chat-app.jpeg'
import blogApp from '../img/blog-app.jpeg'
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
            }}>My projects, expertly crafted with HTML, CSS, JavaScript, and React.</div>
            <ProjectsWrapper>
                <ProjectCard img={chatApp}
                    name="Your Ultimate Chat Experience"
                    desc="Embark on a transformative chat experience powered by Firebase, Redux, and React Router. Enjoy secure login, real-time messaging, and seamless navigation. Share text, images, videos, and more effortlessly, ensuring a dynamic and engaging communication platform."
                    href="https://chat-app-23.netlify.app/"
                    github="https://github.com/khanadnan09/Chat-app"
                />
                <ProjectCard img={disney}
                    name="Disney plus clone"
                    desc="Experience the magic of Disney on my meticulously crafted clone of Disney Plus India, built using cutting-edge technologies such as React, Firebase, Redux and elegantly styled with Styled Components."
                    href="https://disney-plus-clone22.netlify.app/"
                    github="https://github.com/khanadnan09/HostarCloneReact"
                />
                <ProjectCard img={blogApp}
                    name="Explore and Share Your Thoughts"
                    desc="Discover a dynamic blogging platform enhanced by Firebase, Redux, React Router, TinyMCE, empowering seamless login, intuitive content creation with TinyMCE, efficient form handling via React Hook Form."
                    href="https://blog-app-2024.netlify.app/"
                    github="https://github.com/khanadnan09/Blog-app-24"
                />
                <ProjectCard img={Todo}
                    name="ToDo List App"
                    desc="Efficiently manage your tasks with my sleek ToDo App.
                    Expertly built using React, it offers a seamless dark/light mode switch.
                    Perfect for daily planning, grocery lists and work tracking.
                    Elevate your productivity with my ToDo App"
                    href="https://list22.netlify.app/" github="https://github.com/khanadnan09/ToDo-List-App"
                />
                <ProjectCard img={TV}
                    name="Tv App"
                    desc="Unlock the world of television with my feature-packed TV App, masterfully built using React and Redux, and data from APIs. The powerful search function allows you to easily find and explore your favorite TV shows."
                    href="https://tvapp22.netlify.app/"
                    github="https://github.com/khanadnan09/TvApp"
                />
                <ProjectCard img={whatsapp}
                    name="WhatsApp Web Clone"
                    desc="Experience the elegance of WhatsApp on the web with my beautifully designed clone of WhatsApp Web, expertly crafted using HTML, CSS, JavaScript, and Bootstrap for a stunning frontend interface. No backend technology used."
                    href="https://khanadnan09.github.io/WhatsApp-Web-Clone/"
                    github="https://github.com/khanadnan09/WhatsApp-Web-Clone"
                />
                <ProjectCard img={Foodies}
                    name="Foodies"
                    desc="Savor the flavors of the world with my beautifully designed Food Website, expertly crafted using HTML, CSS, JavaScript, and Bootstrap for a seamless frontend experience. With no backend technology used."
                    href="https://foodies11.netlify.app/"
                    github="https://github.com/khanadnan09/Food-website-template"
                />
                <ProjectCard img={WordGame}
                    name="WordGame"
                    desc="Test your word prowess and improve your vocabulary with my visually stunning WordGame, expertly crafted using pure HTML, CSS, and JavaScript. The challenge is to find the correct word from the given scrambled words within a given time frame."
                    href="https://wordgame22.netlify.app/"
                    github="https://github.com/khanadnan09/WordGame"
                />
                <ProjectCard img={MusicPlayer}
                    name="Music Player"
                    desc="Unleash the power of music with my elegantly designed Music Player, expertly crafted using pure HTML, CSS, and JavaScript for a visually stunning and highly interactive listening experience."
                    href="https://khanadnan09.github.io/Music_player_24/"
                    github="https://github.com/khanadnan09/Music-Player"
                />
                <ProjectCard img={Dictionary}
                    name="Dictionary"
                    desc="Expand your vocabulary and improve your language skills with my aesthetically pleasing Dictionary App, expertly crafted using pure HTML, CSS, and JavaScript for a visually stunning and interactive interface."
                    href="https://dictionary22.netlify.app/"
                    github="https://github.com/khanadnan09/Dictionary"
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