const axios = require("axios").default;

// axios
//     .get('https://fortniteapi.io/v1/challenges?season=current&lang=ru', {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'b8fd5514-3f535e0d-500c6ed7-597ccbda',
//         },
//     })
        
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => 
//         {console.error(error);
//     });

axios.post('https://jsonplaceholder.typicode.com/posts', {userID: 1, title: 'My title', body: 'My body'})
    
    .then(response => {
                console.log(response)
            })
            .catch(error => 
                {console.error(error);
            });