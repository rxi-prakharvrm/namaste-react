
// <div id="parent">
// <div id="child1">
//     <h1>Heading1 in Child1</h1>
//     <h2>Heading2 in Child1</h2>
// </div>
// <div id="child2">
//     <h1>Heading in Child2</h1>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Heading1 in Child1"),
        React.createElement("h2", {}, "Heading2 in Child1"),
    ]),
    React.createElement(
        "div",
        { id: "child2" },
        React.createElement("h1", {}, "Heading in Child2")
    ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);