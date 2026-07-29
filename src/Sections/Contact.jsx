import GithubSection from "..//Content/Github-cons.jsx"
import { FaUser, FaEnvelope, FaRegMessage, FaRegEnvelope } from "react-icons/fa6"
import Footer from '../Sections/Footer.jsx'
import "../Styles/Footer.css"

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <div className="contact-outer-container">
            <div className="git-contributions">
                <h2>Github Contributions</h2>
                <GithubSection />
            </div>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <h2>Send a Message</h2>
                        <p>I'll get back to you within 24 hours.</p>
                    </div>
                    <label className="label" for="input-name">{<FaUser size={15} color="#333" />}  YOUR NAME</label>
                    <input
                        id="input-name"
                        type="text"
                        placeholder="John Doe"
                        className="contact-input"
                        required
                    />

                    <label className="label" for="input-email">{<FaEnvelope size={15} color="#333" />}  YOUR EMAIL</label>
                    <input
                        id="input-email"
                        type="email"
                        placeholder="JohnDoe@gmail.com"
                        className="contact-input"
                        required
                    />
                    <label className="label" for="textarea-id">{<FaRegMessage size={15} color="#333" />}  YOUR MESSAGE</label>
                    <textarea
                        id="textarea-id"
                        placeholder="Tell me about your project..."
                        className="contact-textarea"
                        required
                        placeholderColor="#333"
                    />

                    <button type="submit" className="contact-button">Send Message {<FaRegEnvelope size={15} color="#ffffff" />}</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;