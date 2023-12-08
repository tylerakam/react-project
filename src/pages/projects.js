import '../App.css';
// const Projects = () => {
//     return <h1>Here are a few videos that relate to some projects I have done myself or contributed to.</h1>;
//
// };


// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { useState } from 'react';
import { projList } from '../data2.js';
import React from 'react';
import {thumbList} from "../data";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function Projects() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < projList.length - 1;
    const hasLast = index > 0 || index === thumbList.length;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleLastClick() {
        if (hasLast) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let thumb = projList[index];

    return (
        <> <div class="gallery">
            <h1>School Related Projects and Documentation</h1>
            <button onClick={handleNextClick}>
                Next
            </button>
            <button onClick={handleLastClick}>Previous</button>
            <h2>
                <i>{thumb.name} </i>
                by {thumb.artist}
            </h2>
            <h3>
                ({index + 1} of {projList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>

            {showMore && <p>{thumb.description}</p>}
        </div>
            <iframe width="560" height="315" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="true"
                    src={thumb.url}
                    alt={thumb.alt}
            />
        </>
    );
}



