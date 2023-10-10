const mongoose = require("mongoose");
const budgetsModel = require("./budget_schema");

let url = 'mongodb://127.0.0.1:27017/pbudget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database - to insert initial data");
            let newData1 = new budgetsModel({title: "Eat out", value: 90, color: "#ffcd56"});
            let newData2 = new budgetsModel({title: "Rent", value: 300, color: "#ff6384"});
            let newData3 = new budgetsModel({title: "Grocery", value: 110, color: "#36a2eb"});
            let newData4 = new budgetsModel({title: "Gas", value: 80, color: "#fd6b19"});
            let newData5 = new budgetsModel({title: "Insurance", value: 120, color: "#228B22"});
            let newData6 = new budgetsModel({title: "Coffee", value: 60, color: "#800080"});
            let newData7 = new budgetsModel({title: "Dog food", value: 100, color: "#FF0000"});

            budgetsModel.insertMany([newData1, newData2, newData3, newData4, newData5, newData6, newData7])
            .then((data) => {
               console.log(data);
               mongoose.connection.close();
            })
            .catch((connectionError) => {
               console.log(connectionError);
            });
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })