import axios from "axios";

const PAIRS = new Map()

function auth(phone) {
    const verify = (Math.floor(Math.random() * 900) + 100).toString();
    axios.post('https://api.getshoutout.com/coreservice/messages', {
        "source": "ShoutDEMO",
        "destinations": [phone],
        "transports": ["sms"],
        "content": {
            "sms": "Ruizhao's Demo: Your verification code is " + verify
        }
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Apikey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NjFlMmY0MC1hOTk0LTExZWMtYjI5ZC1jMzRjODkxN2I3ZTIiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY0NzkyMTQ4MywiZXhwIjoxOTYzNTQwNjgzLCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY2MjExIiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.qM8fIM2ImvOG1oovot4tlZ1BgtNsIxi6rGwp1-FIYJw',
        }
    }).then(res => {
        console.log(res.data)
        PAIRS.set(phone, verify)
    }).catch(err => {
        console.log(err)
    })
}

function match(phone, verify) {
    return PAIRS.get(phone) === verify
}

export {auth, match}