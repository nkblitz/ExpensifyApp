console.log('app is running');
const appRoot = document.getElementById('app');
const app = {
    title: "Indecision App",
    subtitle: "Home",
    options: ['hey', 'you', 'here']
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}

const onWhatOptionClick = () => {
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
}


const render = () => {
    const template = <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p>{app.subtitle} </p>}
        <p>{app.options && app.options.length ? "your options" : "options not available"}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onWhatOptionClick}>What should I do?</button>
        <button onClick={removeAll}>Remove Options</button>


        <ol>
            {
                app.options.map((option) => { return <li key={option}>{option}</li> })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>


        </form>
    </div>;
    ReactDOM.render(template, appRoot);
};

render();






