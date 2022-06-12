import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    formSubmit = formValues => {
        this.props.createStream(formValues, this.props.history);
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.formSubmit}></StreamForm>
            </div>
        )
    }
}

export default connect(null, {createStream})(StreamCreate);
