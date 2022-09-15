import pdfImage from '../images/HPC/pdf-image.png'

const kaeliLink = "https://coe.northeastern.edu/people/kaeli-david/"
const link1 = "https://doi.org/10.1016/j.patcog.2004.01.013"
const link2 = "https://ieeexplore.ieee.org/abstract/document/5452452"
const link3 = "https://ieeexplore.ieee.org/abstract/document/6889433"
const link4 = "https://dl.acm.org/doi/abs/10.1145/3178487.3178491"
const link5 = "https://dl.acm.org/doi/abs/10.1145/3458817.3476157"
const link6 = "https://ieeexplore.ieee.org/abstract/document/9218700"
const link7 = "https://ieeexplore.ieee.org/abstract/document/8573521"
const link8 = "https://ieeexplore.ieee.org/abstract/document/8330645"
const link9 = "https://ieeexplore.ieee.org/abstract/document/7723730"
const link10 = "https://dl.acm.org/doi/abs/10.1145/3020078.3021740"

export const hpcJSX = <>
    <h2>Overview</h2>
    <p>
        This literature review was submitted as a final project for my High Performance Computing class
        EEECE 5640 taught by distinguished professor <a href={kaeliLink}>Dr. David Kaeli</a>. The 
        paper was inspired by the trend of using Graphics Processing Units (GPUs) to accelerate the 
        speed of training neural networks - a massively popular Machine Learning algorithm. In this paper I summarize
        ten relevant publications on the topic and offer a ten page discussion on the benefits and
        drawbacks of usage, as well as insights into the future of the field. 

    </p>
    <a href={process.env.PUBLIC_URL + '/HPC-rones.pdf'}>
        <img src={pdfImage} alt='' className="project-image" style={{width: "300px"}}/>
    </a>
    <p style={{textAlign: "center"}}>
        <a href={process.env.PUBLIC_URL + '/HPC-rones.pdf'} >Download PDF</a>
    </p>
    <hr/>
    <h2>Abstract</h2>
    <p>
        Deep Neural Networks have shown to deliver state of the art performance for ML
        applications such as image classification, natural language processing, self-driving cars and
        autonomous robotics. Since high performing networks can often take days or weeks to train,
        software and hardware optimizations aim to accelerate network training while maintaining model
        accuracy. GPUs have been the leading hardware accelerator of both network training and
        inference because of their massively parallel SIMT architecture well suited for the matrix
        multiplication computations that dominate the training process. This literature review covers why
        GPUs are the hardware accelerator of choice for popular neural network variants such as
        Convolutional, Recurrent and Low Precision. This review shows various ways to further
        optimize DNN performance, usability and scalability on GPUs through GPU dynamic memory,
        arbitrary precision, distributed and heterogenous GPU systems and auto-optimizing GPU
        algorithms. Additionally, the energy usage and future directions using FPGAs are discussed
    </p>
    <h2>Discussion Topics</h2>
    <p><ul>
        <li>DNN Overview</li>
        <li>Use of GPUs for NNs</li>
        <li>DNN Precision on GPU</li>
        <li>DNN Memory on GPU</li>
        <li>DNN Optimization Techniques for GPU</li>
        <li>DNN Training with Distributed GPUs</li>
        <li>DNN with Cross Platform GPUs</li>
        <li>Energy Usage of DNN training on GPUs</li>
        <li>Future of DNNs - GPU vs FPGA</li>
    </ul></p> 
    <h2>Summaries</h2>
    <p><ol>
        <li>Oh, Kyoung-Su, and Keechul Jung. <a href={link1}>"GPU implementation of neural networks."</a> Pattern
            Recognition 37.6 (2004): 1311-131
        </li>
        <li>  Strigl, Daniel, Klaus Kofler, and Stefan Podlipnig. <a href={link2}>"Performance and scalability of GPU-
based convolutional neural networks."</a> 2010 18th Euromicro Conference on Parallel, Distributed
and Network-based Processing. IEEE, 2010.
        </li>
        <li>
        Li, Boxun, et al. <a href={link3}>"Large scale recurrent neural network on GPU."</a> 2014 International Joint
Conference on Neural Networks (IJCNN). IEEE, 2014.
        </li>
        <li>
        Wang, Linnan, et al. <a href={link4}>"Superneurons: Dynamic GPU memory management for training deep
neural networks."</a> Proceedings of the 23rd ACM SIGPLAN symposium on principles and
practice of parallel programming. 2018.
        </li>
        <li>
Feng, Boyuan, et al. <a href={link5}>"Apnn-tc: Accelerating arbitrary precision neural networks on ampere
gpu tensor cores."</a> Proceedings of the International Conference for High Performance
Computing, Networking, Storage and Analysis. 2021.
        </li>
        <li>
        Mu, Jiandong, et al. <a href={link6}>"A history-based auto-tuning framework for fast and high-performance
DNN design on GPU."</a> 2020 57th ACM/IEEE Design Automation Conference (DAC). IEEE, 2020
        </li>
        <li>
        Mojumder, Saiful A., et al. <a href={link7}>"Profiling dnn workloads on a volta-based dgx-1 system."</a> 2018
IEEE International Symposium on Workload Characterization (IISWC). IEEE, 2018.
        </li>
        <li>
        Li, Shuai, et al. <a href={link8}>"Heterogeneous system implementation of deep learning neural network for
object detection in OpenCL framework."</a> 2018 International Conference on Electronics,
Information, and Communication (ICEIC). IEEE, 2018.
        </li>
        <li>
        Li, Da, et al. <a href={link9}>"Evaluating the energy efficiency of deep convolutional neural networks on
CPUs and GPUs."</a> 2016 IEEE international conferences on big data and cloud computing
(BDCloud), social computing and networking (SocialCom), sustainable computing and
communications (SustainCom)(BDCloud-SocialCom-SustainCom). IEEE, 2016.
        </li>
        <li>
        Nurvitadhi, Eriko, et al. <a href={link10}>"Can FPGAs beat GPUs in accelerating next-generation deep neural
networks?."</a> Proceedings of the 2017 ACM/SIGDA international symposium on field-
programmable gate arrays. 2017.
        </li>
    </ol></p>   
</>