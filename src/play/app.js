class InDecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));

            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        }
        catch (e) {
            //nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() {
        this.setState(() => { { options: [] } });
    }

    handleDeleteOption(option2remove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== option2remove)
        }));
    }

    handlePick() {
        this.setState(() => {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        });
    }

    handleAddOptions(option) {
        if (!option) {
            return "Invalid option value!";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists!";
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Let me decide 4 u kiddo!'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOptions={this.handleAddOptions}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div><h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = { title: "Indecision" };

const Action = (props) => {
    return (
        <div> <button
            disabled={!props.hasOptions}
            onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {

    return (
        <div>

            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add options to start!</p>}
            {
                props.options.map((option) =>
                    (<Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />))
            }
        </div>

    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    addOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<InDecisionApp />, document.getElementById('app'));