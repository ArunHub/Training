import React from "react";

const withGreyBg = (WrappedComponent) => {

    class NewComponent extends React.Component {
        render() {
            console.log('propssssss', this.props)
            return (
                <div className="wrapper" style={{color: this.props.color}}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }

    return NewComponent;
}

export default withGreyBg;