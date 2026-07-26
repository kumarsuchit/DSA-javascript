
// question: group below array of object with department(dept)

// expected output: {
//     Engineer:[{ name: "Suchit", dept: "Engineer" }, { name: "Vishnu", dept: "Engineer" }],
//     Medical:[{ name: "Rahul", dept: "Medical" }]
// }

let arrData = [
    { name: "Suchit", dept: "Engineer" },
    { name: "Rahul", dept: "Medical" },
    { name: "Vishnu", dept: "Engineer" }
]


let obj = {};
arrData.forEach((ele) => {
    if (!(obj[ele.dept])) {
        obj[ele.dept] = [];
    }
    obj[ele.dept].push(ele);

})
console.log("Expected output=>", obj);


// make this question using of reduce

let groupedData = arrData.reduce((acc, curr) => {
    if (!acc[curr['dept']]) {
        acc[curr['dept']] = []
    }
    acc[curr['dept']].push(curr);
    return acc;
}, {})


console.log("grouped data=>", groupedData)