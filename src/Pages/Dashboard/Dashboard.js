import './Dashboard.css';
import Pagecontent from './Pagecontent';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <Pagecontent />

      
    </div>
  );
}

export default Dashboard;
