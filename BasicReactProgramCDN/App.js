const heading1 = React.createElement("h1",{style:{color:"blue"}},"Namasate H1");
const heading2 = React.createElement("h2",{style:{background:"orange"}},"Namasate H2");
const container = React.createElement("div",{id:"container"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
