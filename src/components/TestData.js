import React, { Component, ProtoTypes } from 'react';
import { connect } from 'react-redux'



class TestData extends Component {

    static defaultProps = {
        inputValue: 'hello'
    }
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    componentDidMount() {
        //alert(this.props.inputValue);

    }
    handleDataChange() {
        //alert(this.props.inputValue)
        console.dir(this.refs.text.value);
    }
    render() {

        return (
            <div>
                <input type="text" defaultValue={this.props.inputValue} ref="text" onChange={function(){}}/>
                <button onClick={this.handleDataChange.bind(this)}>提交</button>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { getToken } = state
    return { getToken: getToken }
}

export default connect(mapStateToProps)(TestData)
