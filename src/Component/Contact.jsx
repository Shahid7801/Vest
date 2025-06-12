import "../Style/Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="cont">
                <div className="left-cont">
                    <h1>Contact Us</h1>
                    <div className="title">
                        <p>Edvard Hagman</p>
                        <span>Digital Literature</span>
                        <span>983928928329</span>
                        <span>fdjhfddjhf@gmail.com</span>
                    </div>
                    <div className="title">
                        <p>Edvard Hagman</p>
                        <span>Digital Literature</span>
                        <span>983928928329</span>
                        <span>fdjhfddjhf@gmail.com</span>
                    </div>
                </div>
                <div className="right-cont">
                    <h1>Send us a Message</h1>
                    <form>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="number" placeholder="Enter Your Contact Number" />
                        <input type="email" placeholder="Enter Your Email Id" />
                        <textarea placeholder="Enter Your Message" />
                        <button type="submit">SEND MESSAGE</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
export default Contact;