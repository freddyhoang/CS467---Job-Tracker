import TableComponent from "../components/TableComponent";
import React,{ useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';

const Summary = () => {
  const [TableData, setTableData] = useState([]);

  async function getSummary() {
    const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
    let endpoint = apiUrl + "/jobs"
    
    try{
        const response = await fetch(endpoint, {
          method: "GET"
        });
        
        let data = await response.json();
        setTableData(data);
    } catch(error) {
        return [];
    }
  }

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Container>
      <div className="Summary">
        <h1>Summary page</h1>
        <TableComponent table={TableData}/>
      </div>
    </Container>

    )
  };
  
export default Summary;