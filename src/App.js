import Header from "./Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CreateLession from "./Component/Lession/createlession/CreateLession";
import Event from "./Component/Lession/Event/Event";
import Host from "./Component/Lession/Event/Host";
import Room from "./Component/Lession/Event/Room";



// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#c23616",
//       light: "#40407a",
//     },
//     secondary: {
//       main: "#130f40",
//       light: "#f5f6fa",
//       dark: "#1d4354",
//     },
//     error: {
//       light: "#e74c3c",
//       main: "#c0392b",
//     },
//   },
// });
// const useStyles = makeStyles((theme) => ({
//   cont: {
//     marginTop: "20px",
//   },
// }));

function App() {
  // const classes = useStyles();

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={CreateLession} />
        <Route path="/Event" exact component={Event} />
        <Route path="/room/:id" exact component={Room} />
        <Route path="/host/:id" exact component={Host} />

      </Switch>
    </Router>
  );
}

export default App;
