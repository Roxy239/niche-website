import './Dashboard.css';
// import Pagecontent from './Pagecontent';
// import Review from './Review/Review';
import Adminnav from './Adminnav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
  useRouteMatch
} from "react-router-dom";
import Allorder from './Allorder';
import AddWatch from './AddWatch';
import ManageProducts from './ManageProducts';
import MakeAdmin from './MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom"
// import Tabled from './Tabled';
// import Payment from './Payment';

function Admin() {
  let { path, url } = useRouteMatch();
  const history = useHistory()
  const { role } = useAuth()
  if (role !== "admin") {
    history.push("/dashboard")
  }
  return (
    <div className="d-flex mt-2" id="wrapper">
      <Router>
        <Adminnav url={url} path={path} />

        <Switch>
          <Route exact path={path}>
            <h1 className="mx-auto">Welcome to Admin dashboard</h1>
          </Route>
          <Route exact path={`${path}/allorder`}>
            <Allorder />
          </Route>
          <Route exact path={`${path}/alluser`}>
            <MakeAdmin />
          </Route>
          <Route exact path={`${path}/addwatch`}>
            <AddWatch />
          </Route>
          <Route exact path={`${path}/deletewatch`}>
            <ManageProducts />
          </Route>
          {/* <Route exact path={`${path}/myorder`}>
            <Tabled />
          </Route>
          <Route exact path={`${path}/review`}>
            <Review />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route> */}
        </Switch>
      </Router>


      {/* <Pagecontent /> */}
    </div>
  );
}

export default Admin;
