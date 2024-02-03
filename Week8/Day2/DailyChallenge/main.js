let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    const fruits = obj.fruits
    fruits.forEach(fruit => { console.log(fruit);
    });
}
displayGroceries(groceries)

const cloneGroceries = () => {
    let user = client;
    user = "Betty";
    const shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    console.log(shopping)
}
cloneGroceries()

// we'll not see the client change. because the user change is within function.
// we will see change in shopping because we are changing properties of shopping in the function.