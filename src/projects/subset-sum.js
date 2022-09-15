import Latex from 'react-latex'

import treeImg from '../images/subset-sum/exhaustive_tree.png'
import pdfImg from '../images/subset-sum/pdf-image.png'
import equationImage from '../images/subset-sum/equation-image.png'

const repoLink = "https://github.com/srones/Subset-Sum-Project"
const bryanLink = "https://www.linkedin.com/in/bryan-keller-0/"
const link1 = "https://en.wikipedia.org/wiki/Subset_sum_problem"
const link2 = "https://en.wikipedia.org/wiki/Heuristic_(computer_science)"
const link3 = "https://en.wikipedia.org/wiki/NP-completeness"
const link4 = "https://en.wikipedia.org/wiki/Combinatorial_optimization"
const link5 = "https://en.wikipedia.org/wiki/Knapsack_problem"
const link6 = "https://en.wikipedia.org/wiki/3SUM"
const link7 = "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
const link8 = "https://en.wikipedia.org/wiki/Greedy_algorithm"
const link9 = "https://en.wikipedia.org/wiki/Linear_programming"
const link10 = "https://en.wikipedia.org/wiki/Dynamic_programming"
const link11 = "https://en.wikipedia.org/wiki/Optimal_substructure"
const link12 = "https://en.wikipedia.org/wiki/Memoization"
const link13 = "https://en.wikipedia.org/wiki/Local_search_(optimization)"
const link14 = "https://en.wikipedia.org/wiki/2-opt"

export const subsetSumJSX = <>
    <h2>Overview</h2>
    <p>This project implements and evaluates the performance of different approaches to solving 
        the famous <a href={link1}>Subset Sum Problem</a>. The following methods were used to find optimal 
        and <a href={link2}>heuristic</a> solutions:
        <ul>
            <li>Exhaustive search</li>
            <li>Greedy algorithm</li>
            <li>Integer Linear Programming (ILP)</li>
            <li>Dynamic Programming (DP)</li>
            <li>Local Search</li>
        </ul>
    </p>
    <p>The results of each algorithm are detailed in the PDF report
        written by myself and <a href={bryanLink}>Bryan Keller</a> as part of 
        EECE 5360 - Combinatorial Optimization, Summer II 2022. Source code can be found in the 
        <a href={repoLink}> Github Repository</a>.</p> 
    <div>
        <a href={process.env.PUBLIC_URL + '/subset-sum.pdf'} target="_blank" rel="noreferrer noopener">
            <img src={pdfImg} alt='' className="project-image" style={{width: "300px"}}></img>
        </a>
        <p style={{textAlign: "center"}}>
            <a href={process.env.PUBLIC_URL + '/subset-sum.pdf'} >Download PDF</a>
        </p>
    </div>
    <hr/>
    <h2>Subset Sum (SS) Problem</h2>
    <p>
    Subset Sum is a nondeterministic polynomial-time complete (<a href={link3}>NP-C</a>) 
    <a href={link4}> combinatorial optimization </a> problem, meaning that it is a finite 
    set problem proven to be in the family of problems that are "unsolveable" in polynomial time. 
    The definition is as follows:
    <blockquote>
        <Latex>
            Given a set $S$ of integers of length $n$ and a target integer $T$, decide if there exists a 
            subset of $S$ whose sum is exactly $T$
        </Latex>
    </blockquote>
    </p>
    <p>
        <b><i>NOTE:</i></b> The exhaustive and DP approach only looked for optimal solutions while 
        the greedy, ILP and LS algorithms returned the closest found solution. 
    </p>
    <p>
        SS is a subproblem of the similarly NP-C <a href={link5}>Knapsack Problem</a>, and the parent problem of the 
        polynomial time solvable problem <a href={link6}>3SUM</a>, which asks if there exists a subset of length 3 
        whose sum is 0.
    </p>
    <h2>Exhaustive Solution</h2>
    <p>
        The exhaustive algorithm checks all <Latex>$2^n$</Latex> subsets to see if the subset sum equals the target, 
        and returns true if a solution is found. Otherwise, it times out or returns false.
    </p>
    <p>
        The <a href={link7}>Inclusion-exclusion principle</a> is used to iterate through every subset using a 
        binary tree. This algorithm has time complexity <Latex>$O(n*2^n)$</Latex> and memory complexity <Latex>$O(n)$</Latex>. 
        The binary tree has height <Latex>$n$</Latex> where every level represents one element in the set. 
        Every node has a left child of 0 and a right child equal to the next element in the set. 
        Depth First Search is used to traverse the tree where each stop in the traversal 
        represents the sum of a subset.
    </p>
    <img src={treeImg} alt='' className="project-image" />
    <h2>Greedy Solution</h2>
    <p>
        <a href={link8}>Greedy Algorithms</a> are a problem solving heurestic that make the optimal choice at each 
        stage. To implement this for SS, the set ordered using timesort and traversed until the sum is 
        <Latex>test</Latex> the target. This has a time complexity of <Latex>$O(n*log(n))$</Latex>, and does not always find the 
        optimal solution. 
    </p>
    <h2>ILP Solution</h2>
    <p>
       Integer <a href={link9}>Linear Programming</a> is a technique used to minimize or maximize a linear function 
       subject to constraints where the solution must be integer. This is achieved by using LP 
       relaxation as a bound for the ILP solution.
    </p>
    <p>
    The ILP formulation of SS is as follows:
    <img src={equationImage} alt='img' className='project-image' style={{width: "300px"}} />
    SS.mod contains the AMPL model for the CPLEX solver, which uses LP relaxation as a bound for the ILP solution. 
    </p>
    <h2>Dynamic Programming Solution</h2>
    <p>
        <a href={link10}>Dynamic Programming</a> is an optimization technique that exploits the 
        <a href={link11}> optimal substructure</a> of the SS problem to perform exhaustive search 
        much faster than a naive implementation. This is done by keeping track of subsets that 
        have already been computed using recursive top down <a href={link12}>memoization</a>.
    </p>
    <h2>Local Search Solution</h2>
    <p>
        <a href={link13}>Local search</a> is a heuristic that modifies an initial non-optimal candidate solution to 
        make it more optimal. This local search algorithm uses a <a href={link14}>1-Opt</a> neighborhood - meaning 
        that the local search checks every subset that either includes or excludes 1 element relative 
        to the initial solution. If a more optimal solution is found, it is used as the initial
        solution for another round of local search, and this process is repeated until no better 
        solution is found.
    </p>
</>