import "./App.css";
import DataTable from "./components/dataTable";
import LongMenu from "./components/menu";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <LongMenu />
      <div className="AppDiv">
        <div className="Table">
          <DataTable />
        </div>
      </div>
    </>
  );
}

export default App;
