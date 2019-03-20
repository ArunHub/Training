import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import SepHome from './components/Home/Presentational/SepHome';
import SepMenu from './components/Navigation/Presentational/SepMenu';
import EventsList from './components/Events/Container/EventsList';
import JphPostsList from './components/Jph/Container/JphPostsList';
import RegisterEvent from './components/Events/Container/RegisterEvent';
import EmployeesList from "./components/Employees/Container/EmployeesList";
import EmployeesData from "./components/Employees/employee-data";
import EventDetails from './components/Events/Container/EventDetails';
import ErrorBoundary from './components/ErrorBoundary';
import withGreyBg from './components/HOC/withGreybg';
import SmallCard from './components/HOC/SmallCard';
import Events from "./components/Events";
import withList from './components/HOC/withList';
import withImage from './components/HOC/withImage';
import ImageComponent from './components/ImageComponent';
import withListHOC from './components/HOC/withListRedux';

const dataSource = {
    url: "http://localhost:9091/api/events",
    lists: 'events',
    listId: 'eventId'
}

// HOC components 
const SmallCardWithGreyBg = withGreyBg(SmallCard);
const EventsListwithList = withList(Events, dataSource);
const InsertImagewith = withImage(ImageComponent, {});
const listHOC = withListHOC(Events, {})

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: EmployeesData,
            menuItems: [
                "Synechron EP",
                "Home",
                "Employees",
                "Events",
                "Register Event",
                "Jph posts",
                "Jph Users"
            ]
        }
    }
    render() {
        let title = "Welcome to March.";
        let subtitle = "Maintained by universe";
        return (
            // Error Boundary to handle error from root component
            <ErrorBoundary> 
            <div>
                <SepMenu menu={this.state.menuItems} />
                <main className="container">                    
                    <Switch>
                        <Route path="/home" component={SepHome} />
                        {/* Route with render component for sending props */}
                        <Route path="/employees" render={
                            props => <EmployeesList 
                            title={title} 
                            subtitle={subtitle} 
                            employees={this.state.employees} 
                            {...props} />
                        } />
                        {/* use common path like /events at last or use /events at first using exact attribute*/}
                        <Route path="/events/new" component={RegisterEvent} />
                        <Route path="/events/:id" component={EventDetails} />
                        <Route path="/events" component={EventsList} />
                        <Route path="/jph/posts" component={JphPostsList} />
                        <Route path="/" component={SepHome} />

                    </Switch>
                </main>
                {/* HOC component which renders ImageComponent inside withImage HOC */}
                <InsertImagewith />
            </div>
            </ErrorBoundary>
        )
    }
}
