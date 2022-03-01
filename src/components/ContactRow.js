import React from 'react';
import { Button } from 'react-bootstrap';
const ContactRow = ({row}) => {
    const apiUrl = 'https://jobtracker-341220.uw.r.appspot.com';

    async function getJWT() {
        try{
          const response = await fetch(apiUrl, {
            method: "GET"
          });
          
          let data = await response.json();
          return data['jwt'];
          
      } catch(error) {
          return [];
        }
    }

    async function deleteJob(id) {
        let jwt = await getJWT();
        let endpoint = apiUrl + "/contacts/" + id;
        
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', 'Bearer ' + jwt);

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