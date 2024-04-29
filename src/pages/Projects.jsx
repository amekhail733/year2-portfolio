import '../css/Projects.css'
import Favicon from '../assets/favicon.png'
function Projects(){
    return(
        <>
            <div style={{"padding":"20px", "textAlign":"center"}}>
                <h2>My Coding Projects</h2>
                <p>Welcome to my coding projects showcasing where I've crafted these projects using HTML, JavaScript, React, and Express. Within these digital creations lie the culmination of my programming journey, each project a testament to my dedication and passion for coding. From dynamic web applications to interactive user interfaces, explore the diverse range of projects, including those from my endeavors last year. Dive in and witness the fusion of creativity and technical proficiency!</p>
            </div>
            <div className="main-project-container">
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 1</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 2</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 3</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 4</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 5</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 6</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 7</h3>
                    <button>View</button>
                </div>
                <div className="project-card">
                    <img className="thumbnail" alt="thumbnail" src={Favicon} />
                    <h3>Project 8</h3>
                    <button>View</button>
                </div>
            </div>
        </>
    )
}
export default Projects