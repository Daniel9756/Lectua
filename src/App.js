

import Header from "./Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CreateLesson from "./Component/Lession/createlession/CreateLesson";
import Event from "./Component/Lession/Event/Event";
import Host from "./Component/Lession/Event/Host";
import Guest from "./Component/Lession/Event/Guest";
import Room from "./Component/Lession/Event/Room";
import JoinAuth from "./Component/Lession/Event/JoinAuth";
import Dashboard from "./Component/academics/Index";
import Register from "./Component/user/Register";
import Login from "./Component/user/Login";
import Profile from "./Component/user/profile/Profile";
import PaymentType from "./Component/user/profile/PaymentType";
import Home from "./Component/home/Dashboard";
import StudentProfile from "./Component/user/profilestudent/StudentProfile";
import ProfileStudent from "./Component/user/profilestudent/ProfileStudent";
import CreateProfile from "./Component/user/profile/CreateProfile";
import Paystack from "./Component/user/profile/Paystack";
import PlanList from "./Component/user/profile/PlanList";
import Thanku from "./Component/user/profile/Thanku";
import Awards from "./Component/user/profile/Awards";
import Protected from "./Component/Protected";
import TeacherIndex from "./Component/public/teacher/Teacher";
import Membership from "./Component/membership/Membership";
import CoursePayment from "./Component/courses/payment/CoursePayment";
import { Contact } from "./Component/contact/Contact";
import Footer from "./Component/footer/Footer";
import  Messanger from "./Component/Messanger/Index";
import InitChat from "./Component/Messanger/Conversations/InitChat";
import CreateSession2 from "./Component/Lession/createlession/CreateSession2";

function App() {

  return (
    
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Protected path="/Awards" exact component={Awards} />
          <Protected path="/CreateLesson" exact component={CreateLesson} />
          <Route path="/Register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/courses" exact component={Dashboard} />
          <Route path="/courses/software" exact component={Dashboard} />
          <Route path="/courses/Jamb" exact component={Dashboard} />
          <Route path="/courses/SSCE" exact component={Dashboard} />
          <Route path="/courses/science" exact component={Dashboard} />
          <Route path="/courses/arts" exact component={Dashboard} />
          <Route path="/courses/WAEC" exact component={Dashboard} />
          <Route path="/courses/holidays" exact component={Dashboard} />
          <Route path="/courses/development" exact component={Dashboard} />
          <Route path="/courses/design" exact component={Dashboard} />
          <Route path="/courses/marketing" exact component={Dashboard} />
          <Route path="/courses/primary" exact component={Dashboard} />
          <Route path="/courses/POSTUME" exact component={Dashboard} />
          <Route path="/courses/business" exact component={Dashboard} />
          <Route path="/courses/collage" exact component={Dashboard} />
          <Route path="/Membership" exact component={Membership} />
          <Route path="/courses/university" exact component={Dashboard} />
          <Protected path="/Event" exact component={Event} />
          <Protected path="/room/detail/:id" exact component={Room} />
          <Protected path="/institution/:name/:id" exact component={TeacherIndex} />
          <Protected path="/host/:name/:id" exact component={Host} />
          <Protected path="/courses/:name/:id" exact component={CoursePayment} />
          <Protected path="/guest/:id" exact component={Guest} />
          <Protected path="/joinAuth/:id" exact component={JoinAuth} />
          <Protected path="/LessonDetail/:id" exact component={CreateLesson} />
          <Protected path="/CreateProfile" exact component={CreateProfile} />
          <Protected path="/MyProfile/MyLectures" exact component={Profile} />
          <Protected path="/MyProfile/MyLectures/:id" exact component={Profile} />
          <Protected path="/MyProfile/MyDashboard" exact component={Profile} />
          <Protected path="/MyProfile/General" exact component={Profile} />
          <Protected path="/MyProfile/MyCalender" exact component={Profile} />
          <Protected path="/PaymentType/paystack" exact component={Paystack} />
          <Protected path="/PaymentType" exact component={PaymentType} />
          <Protected path="/PlanList" exact component={PlanList} />
          <Protected path="/Thanku" exact component={Thanku} />
          <Protected path="/awards" exact component={Awards} />
          <Protected path="/StudentProfile" exact component={StudentProfile} />
          <Protected path="/Student/MyDashboard" exact component={ProfileStudent} />
          <Protected path="/Student/MyProfile" exact component={ProfileStudent} />
          <Protected path="/Student/EnrolledCourses" exact component={ProfileStudent} />
          <Protected path="/Contact" exact component={Contact} />
          <Protected path="/Messanger" exact component={Messanger} />
          <Protected path="/initConversation/:name/:id" exact component={InitChat} />
          <Protected path="/CreateSession2" exact component={CreateSession2} />

        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
