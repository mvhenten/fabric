import { render } from "preact";
import { App } from "./app";

import "./fabric.svg";

import "@mvhenten/fabric/index.css";

render(<App />, document.getElementById("app") as HTMLElement);
