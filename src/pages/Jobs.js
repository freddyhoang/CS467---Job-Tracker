import JobForm from "../components/JobForm";
import Container from 'react-bootstrap/Container';

const Jobs = () => {
    return (
      <Container>
        <div className = "Jobs">
          <h2 className="text-center">Add jobs you've previously applied to here:</h2>
          <JobForm/>
        </div>
      </Container>
    )
  };
  
  export default Jobs;