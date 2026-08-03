import GithubSection from "../Content/Github-cons.jsx"
import { FaUser, FaEnvelope, FaRegMessage, FaRegEnvelope } from "react-icons/fa6"
import Footer from '../Sections/Footer.jsx'
import "../Styles/Footer.css"
import { useState } from "react"

function Contact() {
    const [status, setStatus] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(import.meta.env.VITE_BACKEND_CONTACT_FORM, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setStatus("Message sent!")

            setTimeout(() => {
                setStatus("")
            }, 2000)

            setFormData({
                name: "",
                email: "",
                message: "",
            })
        } else {
            setStatus("Failed to send message")
        }
    }

    return (
        <div id="contact" className="contact-outer-container">
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
                    <label className="label" htmlFor="input-name">{<FaUser size={15} color="#333" />}  YOUR NAME</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        id="input-name"
                        type="text"
                        placeholder="John Doe"
                        className="contact-input"
                        required
                    />

                    <label className="label" htmlFor="input-email">{<FaEnvelope size={15} color="#333" />}  YOUR EMAIL</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        id="input-email"
                        type="email"
                        placeholder="JohnDoe@gmail.com"
                        className="contact-input"
                        required
                    />
                    <label className="label" htmlFor="textarea-id">{<FaRegMessage size={15} color="#333" />}  YOUR MESSAGE</label>
                    <textarea
                        name="textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        id="textarea-id"
                        placeholder="Tell me about your project..."
                        className="contact-textarea"
                        required
                    />

                    <button type="submit" className="contact-button">
                        {status ? (<p style={{ color: "#02831e", margin: "0px" }}>{status}</p>) : (<>Send Message {<FaRegEnvelope size={15} color="#ffffff" />} </>)}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;