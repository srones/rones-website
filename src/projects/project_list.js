import reachImage from '../images/reach/reach.png'
import iSensSarsImage from '../images/iSenSARS/iSensSarsImage.png'
import subsetSumImage from '../images/subset-sum/exhaustive_tree.png'
import HPCImage from '../images/HPC/hpc-cover.png'
import cvImage from '../images/CV/cover-image.png'
import statImage from '../images/stat-inference/cover-image.png'

import { reachJSX } from './reach.js'
import { iSenSARSJSX } from './iSensSars.js'
import { subsetSumJSX } from './subset-sum.js'
import { hpcJSX } from './HPC'
import { cvJSX } from './CV.js'
import { statJSX } from './stat-inference.js'

export const projects_list =  [
    {
        id: "reach",
        title: "Reach - Discover Events",
        date: "Summer 2022",
        description: "Reach is an events-based social networking platform for iOS of which I am the co-founder and sole developer",
        image: reachImage,
        pinned: true,
        tags: ["Startup","Mobile App", "Swift", "Firebase", "Maps"],
        jsx: reachJSX
    },
    {
        id: "subset-sum",
        title: "Subset Sum Heuristics",
        description: "Various heuristic algorithms for solving Subset Sum: an NP-Complete combinatorial optimization problem. Includes Integer Linear Programming, Dynamic Programming and Local Search.",
        image: subsetSumImage,
        pinned: false,
        date: "Summer 2022",
        tags: ["Algorithms", "Python", "Optimization"],
        jsx: subsetSumJSX
    },
    {
        id: "hpc",
        title: "High Performance Neural Networks using GPUs",
        description: "Paper I authored for my HPC class that summarizes 10 publications about GPU optimization of DNNs, followed by a discussion on the topic.",
        image: HPCImage,
        pinned: false,
        date: "Spring 2022",
        tags: ["Machine Learning", "Neural Networks", "Optimization", "GPU", "Hardware Acceleration"],
        jsx: hpcJSX
    },
    // {
    //     id: "renewable-simulation",
    //     title: "Renewable Energy Simulation",
    //     description: "Simulated renwable energy plant in various geographical loations",
    //     image: renewableImage,
    //     pinned: false,
    //     tags: ["Simulation", "Python"],
    //     jsx: <><h1>Renewable Energy Simulation</h1></>
    // },
    {
        id: "stat-inference",
        title: "Statistical Inference",
        description: "Various techniques to extract meaningful information from noisy data",
        image: statImage,
        pinned: false,
        date: 'Spring 2022',
        tags: ["Algorithms", "Matlab"],
        jsx: statJSX
    },
    {
        id: "computer-vision",
        title: "Computer Vision",
        description: "Series of Computer Vision experiments in Python (Motion Detection, Image Mosaicing, Depth Mapping)",
        image: cvImage,
        pinned: false,
        date: "Fall 2021",
        tags: ["Algorithms", "Computer Vision", "Python"],
        jsx: cvJSX
    },
    // {
    //     id: "capstone",
    //     title: "Capstone Project",
    //     description: "Cross platorm mobile interface made in Flutter that communicates with microcontroller over BT",
    //     image: image,
    //     pinned: false,
    //     tags: ["Mobile App", "Flutter", "Embedded"],
    //     jsx: <><h1>Capstone Project</h1></>
    // },
    // {
    //     id: "cyber",
    //     title: "Cyber Security",
    //     description: "Various projects relating to cyber security",
    //     image: image,
    //     pinned: false,
    //     tags: [],
    //     jsx: <><h1>Cyber Security</h1></>
    // },
    // {
    //     id: "covid-visualization",
    //     title: "Covid Visualization",
    //     description: "iOS app that visualizes live covid case data",
    //     image: visualizationImage,
    //     pinned: false,
    //     tags: ["Swift", "Maps", "Visualization"],
    //     jsx: <><h1>Covid Visualization</h1></>
    // },
    // {
    //     id: "hanoi",
    //     title: "Towers of Hanoi",
    //     description: "Towers of Hanoi visualization in Java that demonstrates sound Object Oriente Design",
    //     image: image,
    //     pinned: false,
    //     tags: ["Java", "OOD", "Algorithms", "Visualization"],
    //     jsx: <><h1>Towers of Hanoi</h1></>
    // },
    {
        id: "iSenSARS",
        title: "iSenSARS",
        date: "Fall 2020",
        description: "Developed an Android mobile interface for a novel covid-breathalyzer system that detects sars-cov-2 instantly from exhaled breath",
        image: iSensSarsImage,
        pinned: true,
        tags: ["Covid Breathalyzer","Mobile app", "Java", "Embedded"],
        jsx: iSenSARSJSX
    },
    // {
    //     id: "ML",
    //     title: "ML and Pattern Recognition",
    //     description: "ML algorithms in python",
    //     image: image,
    //     pinned: false,
    //     tags: ["Machine Learning", "Algorithms"],
    //     jsx: <><h1>Machine Learning and Pattern Recognition</h1></>
    // },
    // {
    //     id: "Algo",
    //     title: "C++ Algoirithms",
    //     description: "Various fundamental algorithms in C++ such as sorting, data-structures and tree traversals",
    //     image: image,
    //     pinned: false,
    //     tags: ["Algorithms", "C++"],
    //     jsx: <><h1>Engineering Algorithms</h1></>
    // },
    // {
    //     id: "textron",
    //     title: "Textron Weapon and Sensor Systems",
    //     description: "Various projects I worked on for my Co-op",
    //     image: image,
    //     pinned: false,
    //     tags: ["Matlab", "Embedded", "C++", "Data Visualization"],
    //     jsx: <><h1>Textron Weapon and Sensor Systems</h1></>
    // },
    
]