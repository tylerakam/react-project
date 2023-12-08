// import logo from './logo.svg';
import './App.css';

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
// import { useState } from 'react';
// import { thumbList } from './data.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/NavbarElements";

import Home from "./pages/index";
import Gallery from "./pages/gallery";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import About from "./pages/about"

function App() {
    return (<>
            <div class="navbar">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/react-project" element={<Home/>} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
            </div>
        {/*<h1>Test</h1>*/}
        </>
    );
}

export default App;

// export function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);
//     const hasNext = index < thumbList.length - 1;
//
//     function handleNextClick() {
//         if (hasNext) {
//             setIndex(index + 1);
//         } else {
//             setIndex(0);
//         }
//     }
//
//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }
//
//     let thumb = thumbList[index];
//     return (
//         <>
//             <h1>Recent Chiefofbricks Video Gallery</h1>
//             <button onClick={handleNextClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{thumb.name} </i>
//                 by {thumb.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {thumbList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{thumb.description}</p>}
//             <iframe width="560" height="315" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"
//                 src={thumb.url}
//                 alt={thumb.alt}
//             />
//         </>
//     );
// }
//
//
