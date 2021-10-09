function makeOrder()
{
    var user = JSON.parse(sessionStorage.getItem("Olduser"));
    var sum = JSON.parse(sessionStorage.getItem("totalSum"));
    var list = JSON.parse(sessionStorage.getItem("productListInCart"));

    let order = {
        orderDate: new Date().getDate(),
        orderSum: sum,
        userId: user[0]._id,
        productList: list
    };

   // list.forEach((val) => order.productList.push(val));
   
    fetch("order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charest=utf-8'
        },
        body: JSON.stringify(order)
    }
    ).then(response => {
        if (response.ok)
            alert("ההזמנה בוצעה בהצלחה");
        else { response.json().then(error => (JSON.stringify(error.errors))).then(data => alert(data)) };
    })
}


