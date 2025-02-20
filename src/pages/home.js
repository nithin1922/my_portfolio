// pages/page.tsx
import { HeroScrollDemo } from "../components/Container.js"
import { TimelineDemo } from "../components/Timeline.js";
import { AuroraBackgroundDemo } from "../components/AuroraBackground.js";
import { TracingBeam } from "../components/ui/tracing-beam.tsx";
import { Footer} from "../components/Footer.tsx"
import Chatbot  from "../components/Chatbot.js"
import NavbarDemo from "../components/Navbar.js"
 

export default function Home() {
    return(
    <TracingBeam>
        <NavbarDemo /> 
        <AuroraBackgroundDemo/>
        <HeroScrollDemo/>     
        <TimelineDemo/>
        <Footer/>
        {/* <Chatbot/> */}
    </TracingBeam>
        

    )
}