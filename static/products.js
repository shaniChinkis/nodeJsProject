function clearPage()
{
    document.getElementById("ProductList").innerHTML = "";
}
function getData()
{

    let url = "product"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(p => drawData(p))
        }).catch(error => { console.log(error); });

}
function tmp() {
    getData();
    getCategories();
    //****//
    tmp = JSON.parse(sessionStorage.getItem("productListInCart"));
    if (tmp != null)
        document.getElementById("ItemsCountText").innerHTML = tmp.length


}
function drawData(product) {
    temp = document.getElementById("temp-card");
    var clonProducts = temp.content.cloneNode(true);
    var url =( "./images/"+ product.imageName);
    clonProducts.querySelector(".price").innerHTML = '₪' + product.price;
    clonProducts.querySelector(".description").innerHTML = product.description;
    clonProducts.querySelector("img").src = url;

    clonProducts.querySelector(".name").innerHTML = product.productName;
    clonProducts.querySelector("button").addEventListener("click", () => { addToCart(product) });
    document.getElementById("ProductList").appendChild(clonProducts);
}

function addToCart(product)
{
    //******//
    tmp = JSON.parse(sessionStorage.getItem("productListInCart"));
    if (tmp != null)
        list = tmp;
    else
        var list = [];

    list.push(product);
    sessionStorage.setItem("productListInCart", JSON.stringify(list));
    document.getElementById("ItemsCountText").innerHTML = list.length
}
function getDataByCategory(id) {
        let url = "product/" + id
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(p => drawData(p))
            }).catch(error => { console.log(error); });
    }
function showCategories(category) {
    temp = document.getElementById("temp-category");
    var clonCategory = temp.content.cloneNode(true);
    clonCategory.querySelector(".OptionName").innerText = category.categoryName;
    clonCategory.querySelector('input[type=checkbox]').setAttribute("id", category.categoryId);
    clonCategory.querySelector(".checkbox").addEventListener("click", () => {
        clearPage();
        getDataByCategory(category._id);
    });
    document.getElementById("filters").appendChild(clonCategory);


}
function getCategories() {
        let url = "category"
        fetch(url)
            .then(res => res.json())
            .then(data1 => {
                data1.forEach(c => showCategories(c))
            }).catch(error => { console.log(error); });
 }
