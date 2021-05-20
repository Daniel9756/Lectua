import Header from "./Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CreateLession from "./Component/Lession/createlession/CreateLession";
import Event from "./Component/Lession/Event/Event";
import Host from "./Component/Lession/Event/Host";
import Room from "./Component/Lession/Event/Room";



function App() {
  // const classes = useStyles();

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={CreateLession} />
        <Route path="/Event" exact component={Event} />
        <Route path="/room/detail/:id" exact component={Room} />
        <Route path="/host/:id" exact component={Host} />
        <Route path="/LessonDetail/:id" exact component={CreateLession} />
      </Switch>
    </Router>
  );
}

export default App;
