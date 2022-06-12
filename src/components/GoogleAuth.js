import React from "react";
import {connect} from "react-redux";
import {signOut, signIn} from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '589386468385-h0ma85sevlvng5irm5nu2sa7q3ch6n7l.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'streams'
            }).then(() => {
                this.auth2 = window.gapi.auth2.getAuthInstance();
                this.updateAuth(this.auth2.isSignedIn.get());
                this.auth2.isSignedIn.listen(this.updateAuth);
            }).catch( err => console.log(err));
        });
    }

    updateAuth = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth2.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    renderAuthButton() {
        if (this.props.signedIn === null) {
            return <div>I don't know</div>;
        }
        else if (this.props.signedIn) {
            return <button className="ui button red" onClick={this.auth2.signOut}><i className="icon google"/>Sign out</button>;
        }
        else return <button className="ui button red" onClick={this.auth2.signIn}><i className="icon google"/>Sign in</button>;
    }

    render () {
        return this.renderAuthButton();
    }

}

const mapStateToProperties = state => {
    return {
        signedIn: state.auth.signedIn
    }
}

export default connect(mapStateToProperties, {signIn, signOut})(GoogleAuth);
