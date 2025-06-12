import "../Style/Project.css"
import Img from "../assets/img.webp"

const Project = () => {
    return (
        <div className="project">
            <h1>Our Latest Completed Projects</h1>
            <div className="project-1">
                <button className="button">Back</button>
                <div className="project-box">
                    <img src={Img} alt="Loading" />
                    <div className="text">
                        <h2>Lorem Ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut debitis. Perspiciatis ut, officia porro explicabo quos ipsam similique doloremque corporis atque, rem, .</p></div>
                </div>
                <div className="project-box">   <img src={Img} alt="Loading" />
                    <div className="text">
                        <h2>Lorem Ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut debitis. Perspiciatis ut, officia porro explicabo quos ipsam similique doloremque corporis atque, rem, .</p></div></div>
                <div className="project-box">   <img src={Img} alt="Loading" />
                    <div className="text">
                        <h2>Lorem Ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aut debitis. Perspiciatis ut, officia porro explicabo quos ipsam similique doloremque corporis atque, rem, .</p></div></div>
                <button className="button">Next</button>
            </div>
        </div>
    )
}

export default Project;