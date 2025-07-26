import express = require("express")
const app = express();
let router = express.Router();
const port = 3000;


let income = [
  { id: 1, email: "john.doe@example.com", name: "John Doe" },
  { id: 2, email: "jane.smith@example.com", name: "Jane Smith" },
  { id: 3, email: "alice.jones@example.com", name: "Alice Jones" },
  { id: 4, email: "bob.miller@example.com", name: "Bob Miller" },
  { id: 5, email: "sara.white@example.com", name: "Sara White" },
  { id: 6, email: "mike.jenkins@example.com", name: "Mike Jenkins" },
  { id: 7, email: "emily.clark@example.com", name: "Emily Clark" },
  { id: 8, email: "david.ross@example.com", name: "David Ross" },
  { id: 9, email: "lisa.hall@example.com", name: "Lisa Hall" },
  { id: 10, email: "alex.garcia@example.com", name: "Alex Garcia" },
];

//
router.get("/", (req, res)=>{
    res.json(income)
})
localhost3000/income/payroll

router.get("/payroll", (req, res){
    res.send("This is payroll");
})

app.listen(port)

module.exports = router;

