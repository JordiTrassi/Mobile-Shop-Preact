import { Component } from 'preact';
// import { route } from 'preact-router';

export default class Redirect extends Component {
    componentWillMount() {
        location = this.props.to.pathname;
    }

    render() {
        return null;
    }
}