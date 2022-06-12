import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStreams} from "../../actions";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return <div className="right floated content">
                <Link to={`stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <Link to={`stream/delete/${stream.id}`} className="ui button negative">Delete</Link>
            </div>
        }
        return null;
    }

    renderCreate() {
        if (this.props.signedIn) {
            return <Link style={{float: 'right'}} className="button ui primary" to='stream/create'>Create Stream</Link>
        }
    }

    renderList() {
        console.log(this.props.streams);
        return this.props.streams.map (stream =>
            <div className="item" key={stream.id}>
                {this.renderAdmin(stream)}
                <i className="icon camera large middle aligned"/>
                <div className="content">
                    <Link to={`stream/${stream.id}`}>{stream.title}</Link>
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        )
    }

    render () {
        return <div className="ui celled list">{this.renderList()}{this.renderCreate()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        currentUserId: state.auth.userId,
        streams: Object.values(state.streams)
    }
}

export default connect(
    mapStateToProps, {fetchStreams}
)(StreamList);
