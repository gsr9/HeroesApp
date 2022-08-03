import React from 'react';
import {HeroesApp} from "./HeroesApp";
import {createRoot} from "react-dom/client";

const container =
  document.getElementById('root');
const root = createRoot(container);
root.render(<HeroesApp/>)
// ReactDOM.render(
//     <HeroesApp />,
// );