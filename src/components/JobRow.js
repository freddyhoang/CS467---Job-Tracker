import React from 'react';
import { Button, Container, DropdownButton, Dropdown, Form} from 'react-bootstrap';

const JobRow = ({row}) => {
    // const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
    const apiUrl = 'https://jobtracker-341220.uw.r.appspot.com';
    
    async function jobAPIcall(id, data, callType) {
        
        let endpoint = apiUrl + "/jobs/" + id;
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        if (["GET", "DELETE"].includes(callType)){
            try{
                const response = await fetch(endpoint, {
                    method: callType
                  });
                  
                let responseData = await response.json();
                return responseData;
            } catch(error) {
                return [];
            }
        } else {
            try{
                const response = await fetch(endpoint, {
                method: "PATCH",
                headers: myHeaders,
                body: JSON.stringify(data)
                });
                let responseData = await response.json();
                return responseData;
            } catch(error) {
                return [];
            }
        }

    }

    async function editStatus(event) {
        let newStatus = event.target.text;
        let id = event.target.parentElement.attributes[1].value;

        // get all info for the PATCH, then add our new status
        let data = await jobAPIcall(id, {}, "GET");
        data["status"] = newStatus;
        await jobAPIcall(id, data, "PATCH");
        window.location.reload();
    }
    
    async function editDate(event) {
        let newDate = event.target.parentElement.firstChild.firstChild.value;
        let id = event.target.parentElement.parentElement.attributes[1].value;

        // get all info for the PATCH, then add our new status
        let data = await jobAPIcall(id, {}, "GET");
        data["interview_date"] = newDate;
        await jobAPIcall(id, data, "PATCH");
        window.location.reload();
    }

    async function deleteId(event) {
        let id = event.target.parentElement.parentElement.attributes[1].value;
        await jobAPIcall(id, {}, "DELETE");
        window.location.reload();
    }

    const statuses = ['Online Assessment', 'Phone-Screen', 'Final Rounds', 'Offer', 'No Offer'];
    const keys = ['company', 'job_title', 'application_date', 'interview_date', 'salary', 
            'address', 'job_link', 'skill', 'status'];
    let skills = '';
    row["skill"].forEach(e => {skills += ", " + e});
    skills = skills.slice(1);

    return (
        <tr id={row.id}>
            {keys.map(
                (k) => {
                    return (
                        (k === "skill" 
                        ? <th>{skills}</th>
                        : <th>{row[k]}</th>)
                    )
                }
            )}
            <th>
                <DropdownButton
                variant="primary" 
                type="submit"
                id={row.id}
                autoClose={false}
                title="Modify"
                >
                    <Dropdown.Header>Modify statuses</Dropdown.Header>
                    {statuses.map(
                        (status) => (
                            <Dropdown.Item onClick={editStatus.bind(this)}>{status}</Dropdown.Item>
                        )
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Header>Modify interview date</Dropdown.Header>
                    <Container>
                        <Form.Group className="mb-3">
                            <Form.Control size="sm" type="date"/>
                        </Form.Group>
                        <Button variant="warning" size="sm" onClick={editDate.bind(this)}>Change Date</Button>
                    </Container>
                    <Dropdown.Divider />
                    <Container>
                        <Button variant="danger" size="sm" onClick={deleteId.bind(this)}>Delete</Button>
                    </Container>
                </DropdownButton>
            </th>
        </tr>
   );
};


export default JobRow;