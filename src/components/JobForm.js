import React,{ Component } from 'react'
import { Button, Container, Form, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

class JobForm extends Component{
  constructor(){
    super();
    this.myRef = React.createRef();
    this.skillsList = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'];
    this.skills = ['C++', 'Javascript', 'Python', 'Flask', 'Django', 'SQL', 'GCP', 'Kubernetes', 'React', 'Docker'];
    this.state = { skill: []};
    this.apiUrl = "https://jobtracker-341220.uw.r.appspot.com";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getJWT() {
    try{
      const response = await fetch(this.apiUrl, {
        method: "GET"
      });
      
      let data = await response.json();
      return data['jwt'];
      
  } catch(error) {
      return [];
    }
  }

  async createJob(data) {
    try{
      let endpoint = this.apiUrl + "/jobs";
      let jwt = await this.getJWT();
      
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', 'Bearer ' + jwt);
      const response = await fetch(endpoint, {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(data)
      })
      alert("You have successfully added a job!");
      return await response.json();
    } catch(error) {
      alert("Something was wrong!");
    }

  }

  handleSubmit(event){
    const { company, job_title, job_link, salary, application_date, 
    status, interview_date, address, skill } = this.state;

    this.createJob(this.state);
    event.preventDefault();
  }
  
  handleChange(event){
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  handleDropChange(event){
    this.state.skill.push(event.target.innerText);
  }

  
  render(){
    return(
      
      <Container>
        <Form onSubmit={this.handleSubmit.bind(this)} role="form">
          <Form.Group className="mb-3" controlId="company" >
            <Form.Label>Company</Form.Label>
            <Form.Control required type="text" placeholder="Enter company" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="job_title">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Enter title" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="job_link">
            <Form.Label>Link</Form.Label>
            <Form.Control required type="text" placeholder="Enter link" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control required type="number" placeholder="Enter salary" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
            <Form.Text>This must be yearly salary, USD only.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="application_date">
            <Form.Label>Application Date</Form.Label>
            <Form.Control type="date" placeholder="Enter application date" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="interview_date">
            <Form.Label>Interview Date</Form.Label>
            <Form.Control type="date" placeholder="Enter interview date" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" ref={this.myRef} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          
          <Form.Label>Skills</Form.Label>
          <div></div>
          {this.skillsList.map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                controlId={`${variant}`}
                variant='secondary'
                title={variant}
                autoClose={false}
              >
                {this.skills.map(
                  (skill) => (
                    <Dropdown.Item ref={this.myRef} onClick={this.handleDropChange.bind(this)}>{skill}</Dropdown.Item>
                  )
                )}
              </DropdownButton>
            ),
          )}
          <div>
            <Form.Text>To respect your privacy, we will not share ANY of this info with anyone.</Form.Text>
            <div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Container>
      
    )
  }
}
export default JobForm