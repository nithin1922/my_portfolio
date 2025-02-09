// pages/page.tsx
import { HeroScrollDemo } from "../components/Container.js"
import { TimelineDemo } from "../components/Timeline.js";
import { AuroraBackgroundDemo } from "../components/AuroraBackground.js";
import { TracingBeam } from "../components/ui/tracing-beam.tsx";
import { Footer} from "../components/Footer.tsx"


export default function Home() {
    return(
    <TracingBeam>
        {/* <NavbarDemo />  //Add After Projects section is built*/}
        <AuroraBackgroundDemo/>
        <HeroScrollDemo/>     
        <TimelineDemo/>
        <Footer/>
    </TracingBeam>
        

    )
}