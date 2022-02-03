import React,{ Component } from 'react'
import Button from 'react-bootstrap/Button';

class ContactForm extends Component{
  constructor(props){
    super(props);
    this.state = { email:'',name:'', company:'', position:'',phone:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async createContact(data) {
    const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
    let endpoint = apiUrl + "";

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { email, name, company, position, phone } = this.state;
    let requestData = {"email": email, "name": name, "company": company};
    this.createContact(requestData);
    event.preventDefault();
  }
  
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            name='email'
            placeholder='bob@gmail.com' 
            value = {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            name='name' 
            placeholder='Bob'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='company'>Company</label>
          <input
            name='company' 
            placeholder='McDonalds'
            value={this.state.company}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='position'>Position</label>
          <input
            name='position' 
            placeholder='Cook'
            value={this.state.position}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number</label>
          <input
            name='phone' 
            placeholder='503-111-2222'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Button type="submit" variant="primary">Add contact</Button>
        </div>
      </form>
    )
  }
}
  
export default ContactForm