import "./Dashboard.css";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { id } = useParams();
  console.log(id);

  return <h1>Panorama Completo</h1>;
}

export default Dashboard;
