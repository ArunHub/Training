import React, { Component } from 'react';
import Header from "./header/index";
import { Route, Switch } from 'react-router-dom';
import JobList from './job-list/job-list';
import AppliedJobs from './applied-jobs';
import { withRouter, Redirect } from 'react-router'
import Form from "./form/form";
import { fetchCms, decrPos, appliedJobAction } from './actions/actions';
import { connect } from 'react-redux'
import Saturday from './saturday'
import ModalSwitch from './router/modalexample';
import ReactChildren from './react-children-map/react-children';


class Homepage extends Component {
  store;

  constructor(props) {
    super(props);
    console.log('constructor', props);
    this.state = {
      job: null
    }
    this.applyJob = this.applyJob.bind(this);
    this.appliedJobcb = this.appliedJobcb.bind(this);
  }

  componentDidMount() {
    const url = "./data/content.json"
    console.log('component did mount')
    // jobService.getCMS(url).then((success) => {
    //   this.props.store.dispatch(loadCms(success.content));
    // },
    //   (error) => {
    //     console.log('errrow while receive response', error)
    //   });

    this.props.fetchData(url);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getderived', props, state)
    return true;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }

  applyJob(val) {
    if (val.positions === 0) return false;
    this.props.applyJob(val.id);
    this.setState({
      job: val
    })
  }

  appliedJobcb(val) {
    this.props.appliedJobEvt(val);
    return <Redirect to='/applied-jobs' />
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="left">
            <Route path="/modal-switch" component={ModalSwitch} />

            <div className="reactchildren">
              <ReactChildren>
                <div>react child working using ReactChildren map</div>
                <strong>just props.children.map wont work</strong>
              </ReactChildren>
            </div>
          </div>
          <div className="middle">
            <Route path="/" exact />
            {/* in switch statements, path job-list was at last because if it is in first, then it will be matching everytime since the name job-list was in all path names and it wont allow other paths to match so jobId made at top to match if it chances come */}
            <Switch>
              <Route path="/job-list/:jobId" render={() => (
                <div id="atttr">routeProps</div>
              )} />
              <Route path="/job-list" render={(routeProps) => (
                <JobList listjob={this.props.listjob} handleJob={this.applyJob} />
              )} />
              <Route path="/job-list" render={() => (
                <div>Good Morning</div>
              )} />
              <Route path="/form" render={(routeProps) => (
              <Form {...routeProps} job={this.state.job} onsubmit={this.appliedJobcb} />
            )} />
            </Switch>

            {/* render in route denotes, we can send props straightaway to component by below syntax */}
            

            

            <Route path="/applied-jobs" render={() => (
              <AppliedJobs list={this.props.appliedJobsList}/>
            )} />

          </div>

          {/* you can see the plain component with no props */}
          <div className="right">
            <Route path="/parent-child" component={Saturday} />
          </div>
        </div>
      </div>
    );
  }
}

let mapStatetoProps = (state, ownProps) => {
  console.log('state.TodoReducer.cms', state.TodoReducer);
  return { 
    appliedJobsList: state.TodoReducer.appliedJobs,
    jobitems: state.TodoReducer,
    listjob: state.TodoReducer.cms
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchCms(url)),
    appliedJobEvt: (data) => dispatch(appliedJobAction(data)),
    applyJob: (id) => dispatch(decrPos(id))
  }
};

let mergeProps = (one, two) => {
  console.log(two, 'mergeprops', one)
}

// withRouter is must, when using redux and react router, otherwise to navigate a component you need to reload the page to navigate. Like localhost:3000/applyJob will be routed in url but remains in same home page so when u reload it will show applyjob page.
export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(Homepage));
// export default Homepage;
