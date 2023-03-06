import React from "react";
import ReactDOM from "react-dom/client"; 
import logo from "./logo.png";
import userIcon from "/resource/userIcon.png";
import "./index.css";

/*const heading = (
    <h1 id="h1" key="h1">This is JSX</h1>
);*/

const Title = () => {
    return(
        <img className="logo" alt="logo" src={logo}/>
    )
}

/*const HeaderComponent = () => {
    return(
        <div>
            <Title/>
             <h1 id="title" key="title">React</h1>
             <h2 id="title" key="title">React reacts to data</h2>
        </div>
    )
}*/
const HeaderComponent = () => {
    return( 
            <div className="header" id="header">
                <Title/> 
                <div className="searchbar" key="search">
                    <input className="input" type="text" placeholder="Search"/>
                    <button type="submit">
                        <i className="fa fa search"></i>
                    </button>
                </div>
                <div className="user" key="userIcon">
                <img className="userico" src={userIcon} alt="userIcon"/>
                </div>
            </div>
            
    );
};
/*const heading = (
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
*/

//Assignment
 
/*const heading = React.createElement(
    "div",
    {className:"title"},
    [React.createElement(
        "h1",
        {key:"h1"},
        "this is h1"
    ),React.createElement(
        "h2",
        {key:"h2"},
        "this is h2"
    ),React.createElement(
        "h3",
        {key:"h3"},
        "this is h3"
    )]
);

const headingJsx  = (
    <div key="title1">
        <h1 key = "k1">
            This is h1
        </h1>
        <h2 key = "k2">
            this is h2
        </h2>
    </div>
);
const AnotherComp = () => {
return(<h1>anothercomp</h1>)
};
const Headingfunctionalp = () => {
    return(
        <div key="title2">
            {headingJsx}
            <AnotherComp/>
            <h1 style={{color:"red"}} key="h1">tag1</h1>
            <h2 style={{color:"black"}} key="h2">tag2</h2>
        </div>
    );
};


const HeaderComponent = () => {
    return( 
            <div className="header" id="header">
                <div className="logo" key="logo">
                    <img src="resources/logo.png"/>
                </div>  
                <div className="searchbar" key="search">
                    <input class="input" type="text" placeholder="Search"/>
                </div>
                <div className="user" key="userIcon">
                <img src={userIcon} alt="userIcon"/>
                </div>
            </div>
            
    );
};*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);