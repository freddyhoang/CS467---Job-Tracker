import React,{ Component } from 'react'
import Button from 'react-bootstrap/Button';
import { createJob } from "../services/serviceProvider";

class JobForm extends React.Component{
  constructor(props){
    super(props)
    this.state = { company:'', title: '', link: '', salary: '', application_date: '', 
      status: '', interview_date: '', address: '', skill: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    // const { company, title, link, salary, application_date, 
    // status, interview_date, address, skill } = this.state

    event.preventDefault()
    alert(`
      ____Your Details____\n
      { this.state}
    `)
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
          <label htmlFor='company'>Company</label>
          <input 
            name='company'
            placeholder='bob@gmail.com' 
            value = {this.state.company}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            name='title' 
            placeholder='Bob'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='link'>Link</label>
          <input
            name='link' 
            placeholder='McDonalds'
            value={this.state.link}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='salary'>Salary</label>
          <input
            name='salary' 
            placeholder='Cook'
            value={this.state.salary}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='interview_date'>Interview Date</label>
          <input
            name='interview_date' 
            placeholder='503-111-2222'
            value={this.state.interview_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='address'>address</label>
          <input
            name='address' 
            placeholder='503-111-2222'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='skill'>skill</label>
          <input
            name='skill' 
            placeholder='503-111-2222'
            value={this.state.skill}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Button type="submit" variant="primary">Add job</Button>
        </div>
      </form>
    )
  }
}
export default JobForm