import reachImage from '../images/reach.png'
import subsetSumImage from '../images/exhaustive_tree.png'
import cvImage from '../images/cv-image.png'
import visualizationImage from '../images/visualization-image.png'
import iSensSarsImage from '../images/iSensSarsImage.png'
import HPCImage from '../images/hpc-image.png'
import renewableImage from '../images/renewable-image.png'
import image from '../images/image.jpeg'

import { reachJSX } from './reach.js'

export const projects_list =  [
    {
        id: "reach",
        title: "Reach - Discover Events",
        date: "August 2022",
        description: "Reach is an events-based social networking platform for iOS of which I am the co-founder and sole developer",
        image: reachImage,
        pinned: true,
        tags: ["Mobile App", "Swift", "Firebase", "Maps"],
        jsx: reachJSX
    },
    {
        id: "subset-sum",
        title: "Subset Sum Hueristics",
        description: "Algorithms for solving Subset Sum: an NP-Complete combinatorial optimization problem",
        image: subsetSumImage,
        pinned: false,
        tags: ["Algorithms", "Python", "Optimization"],
        jsx: <><h1>Subset Sum Hueristics</h1></>
    },
    {
        id: "hpc",
        title: "High Performance Computing",
        description: "Paper I authored for my HPC class summarizes 10 publications about GPU optimization of DNNs, followed by a discussion of the topic.",
        image: HPCImage,
        pinned: false,
        tags: ["Machine Learning", "Neural Networks", "Optimization", "GPU"],
        jsx: <><h1>High Performance Computing</h1></>
    },
    {
        id: "renewable-simulation",
        title: "Renewable Energy Simulation",
        description: "Simulated renwable energy plant in various geographical loations",
        image: renewableImage,
        pinned: false,
        tags: ["Simulation", "Python"],
        jsx: <><h1>Renewable Energy Simulation</h1></>
    },
    {
        id: "stat-inference",
        title: "Statistical Inference",
        description: "Various techniques to extract information from noisy data",
        image: image,
        pinned: false,
        tags: ["Algorithms", "Matlab"],
        jsx: <><h1>Statistical Inference</h1></>
    },
    {
        id: "computer-vision",
        title: "Computer Vision",
        description: "Series of Computer Vision experiments in Python (Motion detection, image mosaicing, stero image object depth calculation",
        image: cvImage,
        pinned: false,
        tags: ["Algorithms", "Computer Vision", "Python"],
        jsx: <><h1>Computer Vision</h1></>
    },
    {
        id: "capstone",
        title: "Capstone Project",
        description: "Cross platorm mobile interface made in Flutter that communicates with microcontroller over BT",
        image: image,
        pinned: false,
        tags: ["Mobile App", "Flutter", "Embedded"],
        jsx: <><h1>Capstone Project</h1></>
    },
    {
        id: "cyber",
        title: "Cyber Security",
        description: "Various projects relating to cyber security",
        image: image,
        pinned: false,
        tags: [],
        jsx: <><h1>Cyber Security</h1></>
    },
    {
        id: "covid-visualization",
        title: "Covid Visualization",
        description: "iOS app that visualizes live covid case data",
        image: visualizationImage,
        pinned: false,
        tags: ["Swift", "Maps", "Visualization"],
        jsx: <><h1>Covid Visualization</h1></>
    },
    {
        id: "hanoi",
        title: "Towers of Hanoi",
        description: "Towers of Hanoi visualization in Java that demonstrates sound Object Oriente Design",
        image: image,
        pinned: false,
        tags: ["Java", "OOD", "Algorithms", "Visualization"],
        jsx: <><h1>Towers of Hanoi</h1></>
    },
    {
        id: "iSensSars",
        title: "iSensSars",
        description: "Developed an Android mobile interface for a novel covid-breathalyzer system that detects sars-cov-2 instantly from exhaled breath",
        image: iSensSarsImage,
        pinned: true,
        tags: ["Mobile app", "Java", "Embedded"],
        jsx: <><h1>iSensSars</h1></>
    },
    {
        id: "ML",
        title: "ML and Pattern Recognition",
        description: "ML algorithms in python",
        image: image,
        pinned: false,
        tags: ["Machine Learning", "Algorithms"],
        jsx: <><h1>Machine Learning and Pattern Recognition</h1></>
    },
    {
        id: "Algo",
        title: "C++ Algoirithms",
        description: "Various fundamental algorithms in C++ such as sorting, data-structures and tree traversals",
        image: image,
        pinned: false,
        tags: ["Algorithms", "C++"],
        jsx: <><h1>Engineering Algorithms</h1></>
    },
    {
        id: "textron",
        title: "Textron Weapon and Sensor Systems",
        description: "Various projects I worked on for my Co-op",
        image: image,
        pinned: false,
        tags: ["Matlab", "Embedded", "C++", "Data Visualization"],
        jsx: <><h1>Textron Weapon and Sensor Systems</h1></>
    },
    
]