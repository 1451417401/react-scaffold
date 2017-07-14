import React, { Component, ProtoTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    render() {
        return <div className="home-wrapper">
                <div className="nav">welcome home!</div>
                <div>
                    <Link to={`/home/state`} activeClassName="active">state</Link>
                </div>
                <div>{this.props.children}</div>
            </div>
    }
}

function mapStateToProps(state) {

    return { data: 'hello' }
}

export default connect()(Home)
