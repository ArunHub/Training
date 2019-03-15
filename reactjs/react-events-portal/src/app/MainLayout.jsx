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
import withGreyBg from './components/withGreybg';
import SmallCard from './components/SmallCard';
import Events from "./components/Events";
import withList from './components/withList';

const dataSource = {
    url: "http://localhost:9091/api/events",
    lists: 'events',
    listId: 'eventId'
}
const SmallCardWithGreyBg = withGreyBg(SmallCard);
const EventsListwithList = withList(Events, dataSource);

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
            <ErrorBoundary>
            <div>
                <SepMenu menu={this.state.menuItems} />
                <main className="container">
                    <Switch>
                        <Route path="/home" component={SepHome} />
                        <Route path="/employees" render={
                            props => <EmployeesList 
                            title={title} 
                            subtitle={subtitle} 
                            employees={this.state.employees} 
                            {...props} />
                        } />
                        <Route path="/events/new" component={RegisterEvent} />
                        <Route path="/events/:id" component={EventDetails} />
                        <Route path="/events" component={EventsList} />
                        <Route path="/jph/posts" component={JphPostsList} />
                        <Route path="/" component={SepHome} />

                    </Switch>
                </main>
                <SmallCardWithGreyBg color="red" />
                <EventsListwithList />
            </div>
            </ErrorBoundary>
        )
    }
}
