users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]


function filterUsersByAgeAndStatus(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
}

function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}