const add = document.getElementById("add");

add.addEventListener("click", function() {
    const size = parseInt(document.getElementById("sizes").value);
    const crust = parseInt(document.getElementById("crusts").value);
    const topping = parseInt(document.getElementById("toppings").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    const results = function() {
        const table = document.getElementById("table");
        const row = table.insertRow();
        const quantity1 = row.insertCell();
        const size2 = row.insertCell();
        const crust4 = row.insertCell();
        const toppings3 = row.insertCell();
        const total5 = row.insertCell();
        quantity1.innerHTML = quantity;
        size2.innerHTML = size;
        crust4.innerHTML = crust;
        toppings3.innerHTML = topping;
        total5.innerHTML = (size + crust + topping) * quantity;
        size2.innerHTML = size;
        crust4.innerHTML = crust.options[crust.selectedIndex].text;
        toppings3.innerHTML = topping;
        quantity1.innerHTML = quantity.options[quantity.selectedIndex].text;

    }
    results();
})




const checkout = document.getElementById("checkout")

checkout.addEventListener("click", function(event) {
    event.preventDefault()
    const delivery = document.getElementById("check");
    const para = document.getElementById("para");
    const deliveryInput = document.getElementById("mess").value;

    if (delivery.checked) {
        para.innerHTML = `Thank you for your purchase. Your order will be delivered at ${deliveryInput} for an extra 200 bob charge`
    }


})