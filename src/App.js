import Header from "./Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CreateLesson from "./Component/Lession/createlession/CreateLesson";
import Event from "./Component/Lession/Event/Event";
import Host from "./Component/Lession/Event/Host";
import Guest from "./Component/Lession/Event/Guest";
import Pricing from "./Component/membership/Pricing";
import Room from "./Component/Lession/Event/Room";
import JoinAuth from "./Component/Lession/Event/JoinAuth";
import Dashboard from "./Component/academics/Index";
import Register from "./Component/user/Register";
import Login from "./Component/user/Login";
import Profile from "./Component/user/profile/Profile";
import PaymentType from "./Component/user/profile/PaymentType";
import Home from "./Component/home/Dashboard";
import UserProfile from "./Component/user/profile/UserProfile";
import CreateProfile from "./Component/user/profile/CreateProfile";
import Paystack from "./Component/user/profile/Paystack";
import Plan from "./Component/user/profile/Plan";

import PlanList from "./Component/user/profile/PlanList";
import Thanku from "./Component/user/profile/Thanku";
import studentProfile from "./Component/user/profile/StudentProfile";




function App() {
  // const classes = useStyles();

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreateLesson" exact component={CreateLesson} />
          <Route path="/Register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/Event" exact component={Event} />
          <Route path="/room/detail/:id" exact component={Room} />
          <Route path="/host/:name/:id" exact component={Host} />
          <Route path="/guest/:id" exact component={Guest} />
          <Route path="/joinAuth/:id" exact component={JoinAuth} />
          <Route path="/Pricing" exact component={Pricing} />
          <Route path="/LessonDetail/:id" exact component={CreateLesson} />
          <Route path="/CreateProfile" exact component={CreateProfile} />         
          <Route path="/MyProfile/MyLectures" exact component={Profile} />
          <Route path="/MyProfile/General" exact component={Profile} />
          <Route path="/MyProfile/MyCalender" exact component={Profile} />
          <Route path="/PaymentType/paystack" exact component={Paystack} />         
          <Route path="/PaymentType" exact component={PaymentType} />
          <Route path="/PlanList" exact component={PlanList} />
          <Route path="/Thanku" exact component={Thanku} />
          <Route path="/studentProfile" exact component={studentProfile} />




        </Switch>
      </Router>
    </>
  );
}

export default App;
