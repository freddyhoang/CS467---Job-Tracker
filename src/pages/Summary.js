import JobTable from "../components/JobTable";
import ContactTable from "../components/ContactTable";
import { React, useEffect, useState } from 'react'
import {Card, Container } from 'react-bootstrap';

const Summary = () => {
  const [JobData, setJobData] = useState([]);
  const [ContactData, setContactData] = useState([]);
  // const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
  const apiUrl = 'https://jobtracker-341220.uw.r.appspot.com';

  async function getAll(item) {
    let endpoint = apiUrl + "/" + item;
    
    try{
        const response = await fetch(endpoint, {
          method: "GET"
        });
        
        let data = await response.json();
        if (item === 'jobs') {
          setJobData(data);
        } else {
          setContactData(data);
        }
        
    } catch(error) {
        return [];
    }
  }

  useEffect(() => {
    getAll('jobs');
    getAll('contacts');
  }, []);

  return (
    <Container>
      <div className="Summary">
        <h1 className="text-center">All jobs and contacts</h1>

        <Card className="text-center" bg='dark' text='light' border='light'>
          <Card.Header>Job Summary</Card.Header>
          <Card.Body>
            <Card.Title>
              <JobTable table={JobData}/>
            </Card.Title>
            <Card.Text>
              You applied to {JobData.length} jobs!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card id='card2' className="text-center" bg='dark' text='light' border='light'>
          <Card.Header>Contact Summary</Card.Header>
          <Card.Body>
            <Card.Title>
            <ContactTable table={ContactData}/>
            </Card.Title>
            <Card.Text>
            You have {ContactData.length} contacts saved!
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
    </Container>

    )
  };
  
export default Summary;