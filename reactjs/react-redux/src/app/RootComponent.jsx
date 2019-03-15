import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import { Provider } from "react-redux";

import SepStore from "./store/store";

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={SepStore}>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </Provider>
        )
    }
}