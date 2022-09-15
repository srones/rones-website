import teamImage from '../images/reach/reach_team.jpeg'
import reachImage from '../images/reach/reach-image.png'
import appstoreImage from '../images/reach/app-store.png'

const appStoreLink = "https://apps.apple.com/us/app/reach-discover-events/id1637415875"
const startupWorcesterLink = "https://www.worcesterchamber.org/startup-worcester/"
const IDEALink = "https://www.northeastern.edu/idea/"
const townsquareLink = "https://centralmasstownsquare.com/reach-for-the-skies/"

export const reachJSX = 
<>
    <p></p>
    <img src={reachImage} alt='img' className='project-image' />
    <h3>About</h3>
    <p>
        Have you ever wanted to find out what events and activities are happening around you? Many people still rely on word of
        mouth, direct messaging, or internet search to figure out where to go when they are out on the town. Reach is an
        iOS platform that enables you to discover exciting and personalized events in your area that are happening in real time.
        Unlike other social platforms, the goal of Reach is to get you off of your phone and back into the world around you!
    </p>
    <p>
        You can check out the project at <a href="https://www.reachevents.social">reachevents.social</a> or on the iOS App Store
        as <a href={appStoreLink}>Reach: Discover Events</a>. 
        <a href={appStoreLink}>
            <img src={appstoreImage} alt='img' className='project-image' style={{width: "200px"}}></img>
        </a>
    </p>
    
    <h3>Technology</h3>
    <p>The front end iOS interface is build in XCode with Swift and the 
        <a href="https://developer.apple.com/documentation/uikit"> UIKit </a>component library. The interactive map interface
        is powered by <a href="https://docs.mapbox.com/ios/maps/guides/">Mapbox SDK.</a> 
    </p>
    <p><a href="https://firebase.google.com/">Firebase</a> back end service is used to host user and event data, as well as 
        manage user authentication and push notifications. A relational schema was implemented on the cloud hosted 
        transactional Firestore database, and utilizes Geohashing to effeciently store and query events by coordinate. 
        Database triggers were scripted using NodeJS to dynamically send push notifications to relevant users via 
        Firebase Cloud Messaging. 
    </p>
    <h3>Team</h3>
    <p>Reach is a platform that I solo-developed, with the business and marketing support of my co-founders 
        <a href="https://www.linkedin.com/in/alex-jayyosi-0a48b917a/"> Alex Jayyosi </a> and
        <a href = "https://www.linkedin.com/in/nijel-hunt-bb30b814a/"> Nijel Hunt </a>
    </p>
    <img src={teamImage} alt='img' className="project-image"></img>
    <h3 >Achievements</h3>
    <p>
        <ul>
            <li>Accepted as one of twelve <a href={startupWorcesterLink}>Startup Worcester's</a> 2021-2022 Cohort members</li>
            <li>Progressed to the Set Stage of <a href={IDEALink}>Northeastern IDEA</a> startup accelerator</li>
            <li>Featured in Town Square article: <a href={townsquareLink} >Reach for the Skies</a></li>
        </ul>
    </p>
</>
 