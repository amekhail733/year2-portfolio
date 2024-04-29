import '../css/Footer.css'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="copyright">
                        <p><b>&copy; 2023-2024 Andrew Mekhail. All Rights Reserved.</b></p>
                        <p>AMekha733@west-mec.org | 123-456-7890</p>
                    </div>
                    <div className="footer-content">
                        <h3 className="bold" style={{"display":"flex", "flexDirection":"column"}}>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_lY6JfwtP3uHr7X7-xmKZI5hfIperHFuUx0kSHW8NwTk_YA/viewform?usp=sf_link" target="_blank">
                                <i className="fas fa-paper-plane"> Contact Form</i>
                            </a>
                            <a href='https://amekhail733.github.io/My-Year-1-Portfolio/' target='_blank'>
                                <i className="fas fa-briefcase"> My Year 1 Portfolio</i>
                            </a>
                        </h3>
                        <div className="social-media">
                            <div className="social-icons">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                   <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://github.com/amekhail733" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer