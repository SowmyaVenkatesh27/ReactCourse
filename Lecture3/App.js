import React from "react";
import ReactDOM from "react-dom/client"; 

const heading = (
    <h1 id="h1" key="h1">This is JSX</h1>
);

const Title = () => {
    return(
        <h1 id="title" key="title">Namaste</h1>
    )
}

const HeaderComponent = () => {
    return(
        <div>
            <Title/>
             <h1 id="title" key="title">React</h1>
             <h2 id="title" key="title">React reacts to data</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);