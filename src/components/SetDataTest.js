import React from 'react';
class SetDataTest extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
    }

    componentDidMount() {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val);

        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val);

        setTimeout(() => {
            console.log(this.state.val);
            this.setState({ val: this.state.val + 1 });
            console.log(this.state.val);

            this.setState({ val: this.state.val + 1 });
            console.log(this.state.val);
        }, 0);
    }

    render() {
        return null;
    }

}

export default SetDataTest;
