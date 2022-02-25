import React,{ Component} from 'react'
import { Button, Container, Form} from 'react-bootstrap';


class ContactForm extends Component{
  constructor(){
    super();
    this.myRef = React.createRef();
    this.formInputs = ['email', 'name', 'company', 'position', 'phone'];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  async createContact(data) {
    // const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
    const apiUrl = 'https://jobtracker-341220.uw.r.appspot.com';
    let endpoint = apiUrl + "/contacts";

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
      })
      alert("You were able to add a contact!");
      return await response.json();
    } catch(error) {
      alert("Something was wrong!");
    }
  }

  handleSubmit(event){
    const { email, name, company, position, phone_number } = this.state;
    console.log(this.state);
    this.createContact(this.state);
    event.preventDefault();
  }
  
  handleChange(event){
    if (event.target.id === "phone") {
      this.setState({
        "phone_number" : event.target.value
      })
      return;
    }

    this.setState({
      [event.target.id] : event.target.value
    })
  }

  render(){
    return(
      
      <Container>
        <Form onSubmit={this.handleSubmit.bind(this)} role="form">
          {this.formInputs.map(
            (input) => (
              <Form.Group className="mb-3" controlId={`${input}`}>
                <Form.Label>{`${input}`.charAt(0).toUpperCase() + `${input}`.slice(1)}</Form.Label>
                {input === "email"
                ? <Form.Control type="email" placeholder={`Enter ${input}`} ref={this.myRef} onChange={this.handleChange.bind(this)}/>
                : <Form.Control type="text" placeholder={`Enter ${input}`} ref={this.myRef} onChange={this.handleChange.bind(this)}/>
                }
              </Form.Group>
            )
          )}
          <Form.Text>To respect the privacy of your contacts, we will not share ANY of this info with anyone.</Form.Text>

          <div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>

        </Form>
      </Container>
      
    )
  }
}
  
export default ContactForm