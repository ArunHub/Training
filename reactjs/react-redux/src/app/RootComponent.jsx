import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import { Provider } from "react-redux";

import SepStore from "./store/store";

export default class RootComponent extends Component {
    render() {
        return (
            // Provider component gives connection btw react app and redux
            <Provider store={SepStore}>
            {/* initialising the root router */}
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </Provider>
        )
    }
}