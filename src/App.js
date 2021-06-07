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
import Dashboard from "./Component/academics/Dashboard";
import Register from "./Component/user/Register";
import Login from "./Component/user/Login";
import Home from "./Component/home/home";

function App() {
  // const classes = useStyles();

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreateLesson" exact component={CreateLesson} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/Event" exact component={Event} />
          <Route path="/room/detail/:id" exact component={Room} />
          <Route path="/host/:name/:id" exact component={Host} />
          <Route path="/guest/:id" exact component={Guest} />
          <Route path="/joinAuth/:id" exact component={JoinAuth} />
          <Route path="/Pricing" exact component={Pricing} />
          <Route path="/LessonDetail/:id" exact component={CreateLesson} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
