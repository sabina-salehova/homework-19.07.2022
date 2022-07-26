function getUsers(){

    fetch("users.json")
    .then(response=>response.json())
    .then(data=>{
        let item='';
        data.forEach(user => {
            item+=`
            <div class="box col-lg-4 col-6 col-sm-6 mt-4">
                <div class="card">
                    <img src=${user.image} class="card-img-top py-1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name} ${user.surname}</h5>
                        <h6 class="card-text">${user.position}</h6>
                    </div>
                </div>
            </div>            
            `

        });

        document.getElementById('list').innerHTML=item;
    })
    .catch(error=>console.log(error))
}

getUsers();