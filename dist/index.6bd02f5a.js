const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h1", {}, "H2 tag")
]));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
