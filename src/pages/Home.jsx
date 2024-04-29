import Header from '../components/Header.jsx'
import '../css/Home.css'
import Portrait from '../images/portrait.jpg'
function Home(){
    return(
        <>
            <Header />
            <div className='homeContent'>
                <div className='aboutMe'>
                    <div id='aboutDesc'>
                        <h3>About Me</h3>
                        <p>Hello there! I'm Andrew Mekhail, a passionate Year 2 coding student at West-MEC, currently on track to graduate in the Class of 2024 at Willow Canyon High School. I'm fueled by a deep curiosity for front-end web development. Crafting engaging and user-friendly interfaces is my forte, and I'm on a mission to bring creativity and functionality together in every project I undertake. With a keen eye for design and a love for clean, efficient code, I'm dedicated to making the web a more visually appealing and seamless experience for users. Join me on my coding journey as I continue to explore and expand my skills, turning ideas into interactive and visually stunning web applications. Let's build the future one line of code at a time!</p>
                    </div>
                    <div id="portDiv">
                        <img src={Portrait} alt="Portrait" id='portrait' />
                    </div>
                </div>
                <div className='myFavProjects'>
                    <h3>My Favorite Projects</h3>
                    <p>Shown below is some of my favorite projects I have had the honor of working on. Click on the <i><b>"View all projects..."</b></i> button to see the rest of my projects.</p>
                    <div className='projectsContainer'>
                        <div className='projectCard'>
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus assumenda corporis dolorem fugit. Omnis reprehenderit explicabo magnam eaque quos dolorem voluptatum itaque ea. Corporis fuga blanditiis maiores corrupti praesentium.</p>
                            <button>View</button>
                        </div>
                        <div className='projectCard'>
                            <h3>Project 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus assumenda corporis dolorem fugit. Omnis reprehenderit explicabo magnam eaque quos dolorem voluptatum itaque ea. Corporis fuga blanditiis maiores corrupti praesentium.</p>
                            <button>View</button>
                        </div>
                        <div className='projectCard'>
                            <h3>Goofy Realtors</h3>
                            <p>This website was made using the components of Bootstrap 5. The purpose of this website was to make an ecommerce website. The website I made is called "Goofy Realtors" which is a realtor website selling houses found in cartoons, or houses that are impossible to buy.</p>
                            <button onClick={() => window.open("https://amekhail733.github.io/goofy-realtors/", "_blank")}>View</button>
                        </div>
                        <div className='projectCard'>
                            <h3>Random Number Guesser</h3>
                            <p>A throw back to year 1 of my West-MEC school year. This game is made using Javascript. The goal is for the user to input a random number between 1-10. When they click the button, the code will see if it matches the randomly generated number, which was made by using math.random().</p>
                            <button onClick={() => window.open("https://amekhail733.github.io/Number-Guessing-Game/", "_blank")}>View</button>
                        </div>
                        <div className='projectCard'>
                            <h3>Project 5</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus assumenda corporis dolorem fugit. Omnis reprehenderit explicabo magnam eaque quos dolorem voluptatum itaque ea. Corporis fuga blanditiis maiores corrupti praesentium.</p>
                            <button>View</button>
                        </div>
                    </div>
                    <button style={{"margin": "15px"}}><a style={{"textDecoration":"none", "color":"white"}} href="projects">View all projects...</a></button>
                </div>
            </div>
        </>
    )
}
export default Home
