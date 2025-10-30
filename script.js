
function fetchUsersAndSummarize () {
     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
        .then((response)=>{ 
            if (!response.ok) {
                throw new Error('Network response was not ok ' , response.statusText);
            }
            return response.json();
        })
        .then((user) => {
            user
           .filter(user=> user.address.city.startsWith('S')|| user.address.city.startsWith('R'))
           .map(user => ({
                id : user.id,
                name : user.name,
                company : user.company.name
           }))
          .forEach(user => {
              console.log(` Name: ${user.name},   ID: ${user.id},  works at ${user.company} company`);
          });
})
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error.message);
        });
}
console.log(`successful`);
fetchUsersAndSummarize();

function testError() {
    const wrongApiUrl = 'https://jsonplaceholder.typicode.com/u5ers';
    fetch(wrongApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response failed: status ' , response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error.message);
        });
}
testError();