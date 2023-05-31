async function fetchProducts() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    console.log(response);
    let translateData = await response.json();
    console.log(translateData);

    let productData = translateData.products;
    return productData;
  } catch {
    console.error(error);
  }
}

async function renderData() {
  let productContainer = document.getElementById("product-container");

  let productList = await fetchProducts();
  console.log(productList);

  for (let i = 0; i < productList.length; i++) {
    let newProductElement = document.createElement("p");

    let currProductObj = productList[i];

    newProductElement.innerText = `${currProductObj.title} \n ${currProductObj.description} \n $${currProductObj.price}`;
    newProductElement.style.border = "2px solid lightblue";
    newProductElement.style.backgroundColor = "#f7b801";
    newProductElement.style.fontFamily = "Roboto, sans-serif";
    // newProductElement.style.fontWeight = "bold";
    newProductElement.style.borderRadius = "10px";
    newProductElement.style.display = "flex";
    newProductElement.style.flexDirection = "column";
    newProductElement.style.padding = "1rem 3rem";
    newProductElement.style.lineHeight = "1.5";
    newProductElement.style.width = "10rem";

    productContainer.appendChild(newProductElement);
  }
}

renderData();

async function fetchProducts1() {
  try {
    let response = await fetch("https://dummyjson.com/products/1");
    console.log(response);
    let translateData = await response.json();
    console.log(translateData);

    let productData = translateData.products;
    return productData;
  } catch {
    console.error(error);
  }
}

// async function renderData1() {
//   let productContainer = document.getElementById("product-container");

//   let productList = await fetchProducts();
//   console.log(productList);

//   for (let i = 0; i < productList.length; i++) {
//     let newProductElement = document.createElement("p");

//     let currProductObj = productList[i];

//     newProductElement.innerText = currProductObj.title;
//     newProductElement.style.border = "2px solid lightblue";

//     productContainer.appendChild(newProductElement);
//   }
// }

// renderData1();
