import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }



    renderActions() {
        const {id} = this.props.match.params;
        return <>
            <button className="ui button negative" onClick={() => this.props.deleteStream(id, this.props.history)}>Delete</button>
            <Link to='/' className="ui button">Cancel</Link>
        </>
    }

    renderContent() {
        if (!this.props.stream) return 'Do you want to delete the stream?'
        return `Do you want to delete the stream ${this.props.stream.title}?`

    }

    render() {
        return <div>StreamDelete
            <Modal
                title="Delete"
                description={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => {
                    history.push('/')
                }}/>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
