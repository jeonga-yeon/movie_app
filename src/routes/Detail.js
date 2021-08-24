import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return <apan>{location.state.title}</apan>
        } else {
            return null;
        }
    }
}

export default Detail;