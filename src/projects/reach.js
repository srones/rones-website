export const reachJSX = 
<>
    <h3>About</h3>
    <p>
        Have you ever wanted to find out what events and activities are happening around you? Many people still rely on word of
        mouth, direct messaging, or google search to figure out where to go when they are out on the town. Reach is an
        iOS platform that enables you to discover exciting and personalized events in your area that are happening in real time.
        Unlike other social platforms, the goal of Reach is to get you off of your phone and back into the world around you!
    </p>
    <p>
        You can check out the project at <a href="https://www.reachevents.social">reachevents.social</a> or on the iOS App Store
        as <a href="https://apps.apple.com/us/app/reach-discover-events/id1637415875">Reach: Discover Events</a>. 
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
</>
 