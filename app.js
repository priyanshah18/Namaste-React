import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component
const title = (
    <h1 className="title">Title</h1>
)

const HeadingComponent1 = () =>( <div id="container">
    {title}
    <h1>React Functional Component </h1>
    </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);