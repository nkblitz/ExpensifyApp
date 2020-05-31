let count = 0;
const add = () => {
    count++;
    render();
};
const minus = () => { count--; render(); }
const reset = () => { count = 0; render(); }

const render = () => {
    const templateTwo =
        <div>
            <h1>
                Count:{count}
            </h1>
            <button onClick={add}>Add 1</button>
            <button onClick={minus}>Minus 1</button>
            <button onClick={reset}>Reset</button>
        </div>;


    // ReactDOM.render(template, appRoot)

    ReactDOM.render(templateTwo, appRoot);
};

render();