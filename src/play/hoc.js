import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>This is sensitive!
            {<WrappedComponent {...props} />}
        </div>
    );

}

const authWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthUser ? (<WrappedComponent {...props} />) : (<p>Hey you, pass Authentication!</p>)
            }

        </div>
    );

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = authWarning(Info);


ReactDOM.render(<AuthInfo isAuthUser={true} info="ida le pa detail" />, document.getElementById('app'));