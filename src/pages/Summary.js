import Table from "../components/Table";
import tabledata from "../contacts.json"; 
import { getSummary } from "../services/serviceProvider";

const Summary = () => {
    return (
      <div className="Summary">
        <h1>Summary page</h1>
        <Table table={tabledata}/>
      </div>

    )
  };
  
  export default Summary;
  