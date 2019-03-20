import React, { Component } from 'react'
import ReactDOM from "react-dom";

const withImage = (WrappedComponent, data) => { // data for props
    class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.domRef = React.createRef(); // using refs to access DOM
            this.state = {
                content: null
            }
        }

        // responseHtml = `<div id="Par12" class="Para">Manmade gases like chlorofluorocarbssons (CFCs) are being used as refrigerants</div><div><span citationid="CR23" class="CitationRef">1998</span>; Zlatev et al. <span id="CR45" class="CitationRef">2012</span></div>`;

        // rendering child node which has id and appending the wrapped component
        renderChild(child) {
            if (child.id) {
                let div = document.createElement('div');
                ReactDOM.render(<WrappedComponent />, div);
                child.appendChild(div);
            }
        }

        // finding child node if count is there
        findChildLoop(node) {
            if (node.childElementCount > 0) {
                for (const child of node.children) {
                    if (child.childElementCount > 0) {
                        this.findChildLoop(child);
                    } else {
                        this.renderChild(child);
                    }
                }
            }
        }

        componentDidMount() {
            fetch('http://demo7071466.mockable.io/html') // getting html as response
                .then(
                    data => data.text(),
                    reason => console.log('error in:', reason)
                ).then(
                    html => {
                        this.domRef.current.innerHTML = html;
                        let currentNode = this.domRef.current;
                        this.findChildLoop(currentNode);
                    },
                    reason => console.log('eror in html', reason)
                )
        }
        render() {
            return (
                <div id="456" ref={this.domRef}></div>
            )
        }
    }
    return NewComponent;
}

export default withImage;

