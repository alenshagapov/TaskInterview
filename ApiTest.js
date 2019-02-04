let $btn = document.querySelector("#fetch-button");
let $fullname = document.querySelector("#full-name");;
let $email = document.querySelector("#email");
let $city = document.querySelector("#city");
let $dob = document.querySelector("#dob");

let url = "https://randomuser.me/api/?nat=US&results=5&inc=name,dob,location,email,phone,picture";

// initial fetch and update UI
getUserAndUpdate();

// Utility Functions
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// Fetch functions
function handleErrors(response) {
    if (!response.ok) {
        throw Error("Custom Error: 404");
    }
    return response;
}

function updateProfile(data) {
    let info = data.results[0];

    $avatar.src = info.picture.medium;
    $fullname.innerText = `${capitalize(info.name.first)} ${capitalize(
        info.name.last
    )}`;
    $dob.innerText = info.dob.age;
    $email.innerText = info.email;
    $city.innerText = info.location.city;
}

function printError(err) {
    console.log(err);
}

// here's where the action happens
function getUserAndUpdate() {
    fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .catch(printError);
}

//Button Click Listener
$btn.addEventListener("click", () => {
    getUserAndUpdate();
});


//  Vue
new Vue({
    el: '#vue-app',
    data: {
        fullName: '',
        dob:'',
        email: '',
        city: '',
        imageSource: ''
    },
    methods: {
        fetchData: function() {
            fetch(url)
                .then(handleErrors)
                .then(response => response.json())
                .then(data => {
                    let info = data.results[0]
                    this.fullName = `${capitalize(info.name.first)} ${capitalize(info.name.last)}`
                    this.dob = info.dob.age
                    this.email = info.email
                    this.city = info.location.city
                    this.imageSource = info.picture.medium
                })
        }
    },
    created: function() {
        this.fetchData()
    }
})