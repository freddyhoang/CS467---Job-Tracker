import React from 'react';
import { Button } from 'react-bootstrap';
const ContactRow = ({row}) => {
    const apiUrl = 'https://jobtracker-341220.uw.r.appspot.com';
    // const apiUrl = 'https://unified-surfer-339517.uw.r.appspot.com';
    
    async function deleteJob(id) {
        let endpoint = apiUrl + "/contacts/" + id;
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        try{
            const response = await fetch(endpoint, {
            method: "DELETE",
            headers: myHeaders
            });
            return response;
            
        } catch(error) {
            return [];
        }
    }

    async function deleteId(event) {
        let id = event.target.parentElement.id;
        await deleteJob(id);
        window.location.reload();
    }

    let keys = ['email', 'name', 'company', 'position', 'phone_number'];

    return (
        <tr>
            {keys.map(
                (k) => (
                    // <th id={row.id+"_"+k}>{row[k]}</th>
                    <th>{row[k]}</th>
                )
            )}
            <th id={row.id}>
                <Button onClick={deleteId.bind(this)} variant="danger">Delete</Button>
            </th>
        </tr>
   );
};


export default ContactRow;