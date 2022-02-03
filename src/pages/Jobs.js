import Header from "../components/Header";
import JobForm from "../components/JobForm";
import Container from 'react-bootstrap/Container';

const Jobs = () => {
    // return <h1>Contact Messss</h1>;
    return (
      <Container>
        <div className = "Jobs">
          <Header/>
          <JobForm/>
        </div>
      </Container>

    )
  };
  
  export default Jobs;