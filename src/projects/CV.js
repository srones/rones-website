import image1 from '../images/CV/cover-image.png'
import cornerImage1 from '../images/CV/corner1.jpg'
import cornerImage2 from '../images/CV/corner2.jpg'
import matchesImage from '../images/CV/matches1.jpg'
import mosaic1 from '../images/CV/mosaic1.jpg'
import mosaic2 from '../images/CV/mosaic2.jpg'

const campsLink = "https://coe.northeastern.edu/people/camps-octavia/"
const homographyLink = "https://docs.opencv.org/4.x/d9/dab/tutorial_homography.html"
const openCVLink = "https://docs.opencv.org/4.x/"

export const cvJSX = <>

    <h2>About</h2>
    <p>
        The following projects were part of EECE 5639 Fall 2021 with professor 
        <a href={campsLink}> Dr. Octavia Camps.</a> The experiments were programmed in 
        Python3, and some methods utilized functions from the open source computer vision library
        <a href={openCVLink}> OpenCV2</a>. The following topics are explored:
        <ul>
            <li>Box and Gaussian Smoothing Filters</li>
            <li>Motion detection</li>
            <li>Edge and Corner Detection</li>
            <li>Normalized Cross Correlation</li>
            <li>RANSAC Homography Estimation</li>
            <li>Image Mosaicing</li>
        </ul>
    </p>
    <h3>Project 1 - Motion Detection </h3>
    <p>
        This project implemented motion detection in image sequences captured with a stationary 
        camera. Most of the pixels in each frame belong to a stationary background, and 
        a relatively small moving objects pass in front of the camera. The two image sequences 
        both involved a person walking through a room. Motion is detected by looking 
        at large temporal gradients of each pixel value.
    </p>
    <img src={image1} alt='' className="project-image" />
    <br/>
    <div style={{textAlign: "center"}} >
        <i>Motion Detection from Image set 1</i>
    </div>
    <p>
        Two techniques were applied in order to impropve the acuracy of the object detection. Firstly,
        the images were pre-processed before applying the temoporal filter by converting to grayscale
        and smoothing via spatial gaussian filtration. Secondly, the value of the temporal gradient 
        threshold to determine movement was tuned relative to the noise. 
    </p>
    <h3>Project 2 - Image Mosaicing</h3>
    <p>
        Image mosaicing takes two images of the same scene with slightly different points
        of view and combines them into one large image. The best example of this is using
        a panoramic feature on a smartphone. Two sets of images were used to perform mosaicing,
        and each set had 2 images. Since the two images had different coordinate systems, a 
        <a href={homographyLink}> homography </a> needed to be estimated to properly warp one 
        image before it was combined with the other.
        </p>
    <p>
        First, a Harris corner detector was used with non-max suppression to find a sparse set of corner 
        features in each image. Then, these features were matched using thresholded Normalized Cross Correlation.
        This process is pictured below. 
    </p>
    <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
        <img src={cornerImage1} alt='' style={{width: "48%"}}/>
        <img src={cornerImage2} alt='' style={{width: "48%"}}/>
    </div>
    <div style={{textAlign: "center"}} >
        <br/>
        <i>Harris corner detection from hallway image set</i>
    </div>
    <p>
        Next, normalized cross correlation (NCC) was used to find a sparce set of correspondences. 
        When tuning the window size for the corner detector and  NCC, a 7 pixel diameter window centered at the corner feaure 
        was found to work best. The matches were visualized using cv2.drawMatches().
    </p>
    <img src={matchesImage} alt='' className="project-image"/>
    <div style={{textAlign: "center"}} >
        <br/>
        <i>Harris corner detection from hallway image set</i>
    </div>
    <p>
        Finally, a series of OpenCV functions such as cv2.findHomography(), cv2.perspectiveTransform() and 
        cv2.warpPerspective() were used create a hompgraphy with the correspondences using RANSAC, warp one of 
        the images based on the homgraphy, and then merge the warped image into the other image to create a mosaic. 
        The results can be seen below.
    </p>
    <img src={mosaic1} alt='' className="project-image"/>
    <div style={{textAlign: "center"}} >
        <p>
            <i>Mosaiced images from set 1</i>
        </p>
    </div>
    <img src={mosaic2} alt='' className="project-image"/>
    <div style={{textAlign: "center"}} >
    <p>
            <i>Mosaiced images from set 2</i>
        </p>
    </div>
    <h3>Project 3</h3>
</>