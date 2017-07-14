import React from 'react';

function ppHOC(WrappedComponent) {
    return class phocp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ''
            }
            this.onNameChange = this.onNameChange.bind(this);
        }
        onNameChange(event) {
            this.setState({
                name: event.target.value
            })
        }
        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return <div>hochoc<WrappedComponent {...this.props} {...newProps} /></div>
        }
    }
}

@ppHOC
class Example extends React.Component {
    render() {
        return <input name="name" {...this.props.name} />
    }
}

// class MyTestableClass {
//     doStuff() {
//         console.log('stuff');
//     }
// };
// console.dir(MyTestableClass);


console.dir('decorator');
console.dir(Example);
export default Example;
