
class Visibilitytoggle extends React.Component {
    constructor(props) {
        super(props);
        this.handletoggle = this.handletoggle.bind(this);

        this.state = {
            isVisible: false
        }
    }

    handletoggle() {
        this.setState((previousState) => {
            return {
                isVisible: !previousState.isVisible
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handletoggle} > {this.state.isVisible ? 'Hide' : 'Show'}</button>
                {this.state.isVisible && <p>these are the details</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibilitytoggle />, document.getElementById('app'));

// let isvisible = false;

// const details = 'these are the details';

// const showHide = () => {
//     isvisible = isvisible ? false : true;
//     render();
// }


// <button onClick={showHide} > {isvisible ? 'Hide' : 'Show'}</button>
// { isvisible && <p>{details}</p> }