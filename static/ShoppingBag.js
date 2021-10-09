function getOrderData()
{
    user = JSON.parse(sessionStorage.getItem("Olduser"))

    document.getElementById("titleId").innerHTML = "הסל של " + user[0].fName +"YUMMY F🥨OD";
    list = JSON.parse(sessionStorage.getItem("productListInCart"))
    list.forEach((i,p)=> drawDataInOrder(i,p))
}
function drawDataInOrder(product,i) {
    var sum = 0;
    list = JSON.parse(sessionStorage.getItem("productListInCart"))
    list.forEach(p => sum = sum + p.price)
    sessionStorage.setItem("totalSum", JSON.stringify(sum));
    document.getElementById("totalAmount").innerHTML = sum;
    document.getElementById("itemCount").innerHTML = list.length;
    temp1 = document.getElementById("temp-row");
    var clonProductsInOrder = temp1.content.cloneNode(true);
    var url="url(./images/" + product.imageName+")";
    clonProductsInOrder.querySelector(".image").style.backgroundImage = url;
    clonProductsInOrder.querySelector(".itemName").innerHTML = product.productName;
    clonProductsInOrder.querySelector(".price").innerHTML = product.price;
    clonProductsInOrder.querySelector(".showText").addEventListener("click", () => deleteFromCart(i));
    document.getElementById("tbody").appendChild(clonProductsInOrder);
}

function deleteFromCart(i) {
    list = JSON.parse(sessionStorage.getItem("productListInCart"))
    //var product1 = product
    //var index = list.indexOf(product);
    if (i > -1) {
           list.splice(i, 1);
    }
    sessionStorage.setItem("productListInCart", JSON.stringify(list));
    list = JSON.parse(sessionStorage.getItem("productListInCart"))
    document.getElementById("tbody").innerHTML = "";
    list.forEach((i, p) => drawDataInOrder(i, p))
    //list.forEach(p => { if (p.productId == id) { list.splice(i, p) } else { i++ } });
    //l = list.filter(p => tmp(i, list.indexOf(p)));

}
function makeOrder() {
    user = JSON.parse(sessionStorage.getItem("Olduser"));
    sum = JSON.parse(sessionStorage.getItem("totalSum"));
    list = JSON.parse(sessionStorage.getItem("productListInCart"));
    let order = {
        orderDate: new Date(),
        orderSum: sum,
        userId: user[0]._id,
        productList: list
    };

    // list.forEach((p) => order.productList.push(p)
    // );
    fetch("order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(order),

    }).then(response => response.json()).then(data => {
        alert("הזמנה מספר" + data +"בוצעה בהצלחה");
        sessionStorage.removeItem("productListInCart")
        

    }).catch(error => console.log(error)/*{ alert('The order was not placed'); }*/);

}
//var orderList = [];
//function placeOrder() {


//    var item = JSON.parse(sessionStorage.getItem('CurrentUser'));

//    bag.forEach((n) => {
//        let orderItem = {
//            ProductId: n.productId,
//            Quantity: 1
//        };
//        orderList.push(orderItem);
//    })
//    let order = {
//        OrderDate: new Date(),
//        OrderSum: sum,
//        UserId: item.id,
//        OrderItem: orderList,
//    };


//    fetch("api/Orders", {
//        method: "POST",
//        headers: {
//            'Content-Type': 'application/json;charset=utf-8'
//        },
//        body: JSON.stringify(order),
//    }).then(response => {
//        return response.json();

//    }).then(data => {
//        alert("Order " + data + " has been placed succusfully!!");
//    }).catch(error => { alert('The order was not placed'); });

//} ‏

//function tmp(i, myI) {
//    return myI != i;
//}

//function drawData(product) {
//    temp = document.getElementById("temp-card");
//    var clonProducts = temp.content.cloneNode(true);
//    var url = ("./images/" + product.imageName);
//    clonProducts.querySelector(".price").innerHTML = '₪' + product.price;
//    clonProducts.querySelector(".description").innerHTML = product.description;
//    clonProducts.querySelector("img").src = url;

//    clonProducts.querySelector(".name").innerHTML = product.productName;
//    clonProducts.querySelector("button").addEventListener("click", () => { addToCart(product) });
//    document.getElementById("ProductList").appendChild(clonProducts);
//}