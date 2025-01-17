import React from "react";
import {connect} from "react-redux";
import _ from 'lodash';
import {fetchStream, updateStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {
      this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.updateStream(this.props.stream.id, formValues, this.props.history);
    }
    render() {
        if (!this.props.stream) {
            return <div>Loading....</div>
        }
        return <div>
            <h3>Edit Stream</h3>
            <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, ['title', 'description'])}/>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, updateStream})(StreamEdit);
