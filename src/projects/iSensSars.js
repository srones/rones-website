import interfaceImage from '../images/iSenSARS/interface-image.png'
import coverImage from '../images/iSenSARS/breathalyzer.webp'

const grantLink = "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2031142&HistoricalAwards=false"
const nianLink = "https://coe.northeastern.edu/people/sun-nian-xiang/"
const aamlLink = "https://web.northeastern.edu/sunlab/˜"
const playstoreLink = "https://play.google.com/store/apps/details?id=com.iSensSARS.iSensSARS&hl=en&gl=US"
const wiredArticle = "https://www.wired.com/story/could-breathalyzers-make-covid-testing-quicker-and-easier/"
const kwokLink = "https://www.linkedin.com/in/joshua-kwok-neu22/"

export const iSenSARSJSX = 
<>
    <img src={coverImage} alt='img' className="project-image"/>
    <h3>About</h3>
    <p>
        The <a href={aamlLink}>Advanced Materials and Microsystems Laboratory </a> 
        led by<a href={nianLink}> Dr. Nian Sun </a> specializes in developing cutting 
        edge ultra-sensitive and highly specific gas sensor microsystems for sensing 
        different pathogens and biomarkers for the diagnosis of various diseases. 
    </p>
    <p> 
        In June of 2020, the lab was awarded an <a href={grantLink}>NSF grant </a> to 
        develop a handheld gas sensor that uses this novel sensor technology to instantly
        detect the SARS-CoV-2 virus from exhaled breath. This "Covid Breathalyzer" offers
        the ability to provide instant point of care diagnosis for COVID-19, which would
        drastically improve the testing process. The device only needs a 15 second
        breath sample for diagnosis, one minute between samples to reset. 
    </p> 
    <p>More about this project can be read in the featured <a href={wiredArticle}>WIRED article</a>.</p>
    <h3>Mobile App</h3>
    <p>I was brought onto the team to lead the developement of a mobile interface that
        allows medical practitioners to wirelessly pair with a nearby device in order
        to initiate the test, read the sensor data, and use machine learning algorithms
        to provide a diagnosis. With the help of Co-op <a href={kwokLink}> Joshua Kwok</a>, 
        the Android mobile app was developed and published to the Google Play store 
        as <a href={playstoreLink}>iSenSARS</a>.
    </p>
    <img src={interfaceImage} alt='img' className="project-image"/>
    <h3>Technology</h3>
    <p>
        The mobile app was developed with Java in Android Studio. Using the
        android bluetooth package and permissions the app could discover, 
        pair and communicate with an ESP32 microcontroller onboard the breathalyzer.
        By scripting the ESP32 with C++ and coordinating BT protocols, the interface
        could communicate with the sensor to allow initiating the test via that app,
        and reading a live stream of sensor results.
    </p>
</>