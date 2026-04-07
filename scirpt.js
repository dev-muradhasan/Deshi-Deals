function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document.getElementById("card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("card-btn")) {
    const dom = e.target.parentNode.parentNode;
    const image = dom.parentNode.children[0].children[0].src;
    const title = dom.children[1].innerText;
    const price = dom.children[2].children[0].innerText;

    const currentPrice = getElement("current-price").innerText;
    const totalPrice = Number(currentPrice) + Number(price);
    getElement("current-price").innerText = totalPrice;

    const quantity = getElement("quantity").innerText;
    const newQuantity = Number(quantity) + 1;
    getElement("quantity").innerText = newQuantity;

    const container = getElement("added-card-container");
    const div = document.createElement("div");
    div.innerHTML = `
                 <div class="bg-[#111111]/5 flex justify-between items-center rounded-lg p-3 mb-4">
                                    <div>
                                        <img class="max-h-20 object-cover" src="${image}" alt="">
                                    </div>
                                    <div>
                                        <p class="font-semibold text-xl text-[#111111]">${title}</p>
                                        <p class="text-xl text-[#111111]/50">${price}</p>
                                    </div>
                                </div>
        `;
    container.appendChild(div);
  }
});

getElement("removeBtn").addEventListener("click", (e)=>{
   getElement("added-card-container").innerHTML= "";
   getElement("quantity").innerText = 0;
   getElement("current-price").innerText = 0;

});

getElement("buyBtn").addEventListener("click", (e)=>{
    const item = getElement("quantity").innerText;
    if(item==0){
        alert("Please select at least one item to make purchase.")
    } else{
        alert("Order Placed Successfully")
    }
});
