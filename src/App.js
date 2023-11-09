import logo from './logo.svg';
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
import { useState } from 'react';
import { thumbList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < thumbList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let thumb = thumbList[index];
    return (
        <>
            <h1>Recent Chiefofbricks Video Gallery</h1>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{thumb.name} </i>
                by {thumb.artist}
            </h2>
            <h3>
                ({index + 1} of {thumbList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{thumb.description}</p>}
            <img
                src={thumb.url}
                alt={thumb.alt}
            />
        </>
    );
}


