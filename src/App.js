

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
import Awards from "./Component/user/profile/Awards";
import Protected from "./Component/Protected";





function App() {
 
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Protected path="/CreateLesson" exact component={CreateLesson} />
          <Route path="/Register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Protected path="/Event" exact component={Event} />
          <Protected path="/room/detail/:id" exact component={Room} />
          <Protected path="/host/:name/:id" exact component={Host} />
          <Protected path="/guest/:id" exact component={Guest} />
          <Protected path="/joinAuth/:id" exact component={JoinAuth} />
          <Protected path="/Pricing" exact component={Pricing} />
          <Protected path="/LessonDetail/:id" exact component={CreateLesson} />
          <Protected path="/CreateProfile" exact component={CreateProfile} />
          <Protected path="/MyProfile/MyLectures" exact component={Profile} />
          <Protected path="/MyProfile/General" exact component={Profile} />
          <Protected path="/MyProfile/MyCalender" exact component={Profile} />
          <Protected path="/PaymentType/paystack" exact component={Paystack} />
          <Protected path="/PaymentType" exact component={PaymentType} />
          <Protected path="/PlanList" exact component={PlanList} />
          <Protected path="/Thanku" exact component={Thanku} />
          <Protected path="/awards" exact component={Awards} />




        </Switch>
      </Router>
    </>
  );
}

export default App;
