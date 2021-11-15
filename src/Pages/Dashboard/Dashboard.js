import './Dashboard.css';
import Pagecontent from './Pagecontent';
import Review from './Review/Review';
import Sidebar from './Sidebar';
import { useHistory } from "react-router-dom"
import useAuth from '../../hooks/useAuth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Tabled from './Tabled';
import Payment from './Payment';

function Dashboard() {
  let { path, url } = useRouteMatch();
  const history = useHistory()
  const { role } = useAuth()
  if (role === "admin") {
    history.push("/admin/dashboard")
  }
  return (
    <div className="d-flex mt-2" id="wrapper">
      <Router>
        <Sidebar url={url} path={path} />

        <Switch>
          <Route exact path={path}>
            <h1 className="mx-auto">Welcome to dashboard</h1>
          </Route>
          <Route exact path={`${path}/myorder`}>
            <Tabled />
          </Route>
          <Route exact path={`${path}/review`}>
            <Review />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route>
        </Switch>
      </Router>


      {/* <Pagecontent /> */}
    </div>
  );
}

export default Dashboard;
