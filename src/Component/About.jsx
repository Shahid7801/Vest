import "../Style/About.css"
import Img from "../assets/img.webp"

const About = () => {
    return (
        <div className="about">
            <h1>About US</h1>
            <div className="about-box">
                <div className="about-img">
                    <img src={Img} alt="" />
                </div>
                <div className="content">
                    <h1>Lorem ipsum </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia aperiam numquam, rem similique corporis eligendi, porro vero et omnis voluptatem. Saepe nobis autem itaque doloremque facilis officia vero quisquam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum quisquam amet est quas atque alias modi pariatur voluptate, praesentium nam eligendi perspiciatis, molestiae nisi doloremque dolore dignissimos animi explicabo.

                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur minima maxime sit quaerat. Quod voluptatem dolorum ab earum cupiditate vitae ipsa aliquid tempore, magnam repellat eveniet maiores natus dicta ipsum.</p>
                    <div className="grid">

                        <ul>
                            <li>BUILDING</li>
                            <li>RENOVATION</li>
                            <li>DIGGING</li>
                            <li>INTERIOR</li></ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;