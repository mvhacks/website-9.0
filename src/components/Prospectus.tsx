import prospectusImage from "../images/prospectus.png";
export default function Prospectus() {
    return (<div>
        <div id="blurbSponsors">
            <h1>Sponsor MVHacks 8.0!</h1>
            <p>MVHacks is now in its 8th year of inspiring high school students throughout the country to get together and build great projects. As a prestigious, in-person hackathon, our past events have consistently attracted over 200 unique and diverse attendees. With your support, we aim to engage over 250+ students for MVHacks.</p>
            <p>To discover more about sponsorship opportunities, please download our Sponsorship Prospectus below and reach out to us at&nbsp;
                <a id="email" href="mailto:hello@mvhacks.io">hello@mvhacks.io</a>.</p>
            <p>Join us, and let's make MVHacks 8.0 an unforgettable experience. We eagerly await the participation of your company!</p>
            <a id="downloadProspectus" href="about:blank">Download the Sponsorship Prospectus</a>
        </div>
        <img src={prospectusImage}
            alt="prospectus"
            id="prospectusImage"
            width="80%"
            height="auto"/>
    </div>)
}