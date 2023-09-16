const url1 = 'https://dummyjson.com/products?limit=12';

let arrProducts = new Array();

function showProducts(data) {
    for (const i of data.products) {
        products.innerHTML = '';
        products.innerHTML += `<div class="card border-primary mb-3" style="max-width: 20rem;">
                                        <div class="card-header">${i.title}</div>
                                        <div class="card-body">
                                            <img class="card-img" src="${i.thumbnail}" />
                                            <h4 class="card-title">${i.price}$</h4>
                                            <p class="card-text">${i.description}</p>
                                        </div>
                                    </div>`;

    }
}

async function getDataFromServer(url) {
    let response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);

    for (const i of data.products) {
        arrProducts += i;
        products.innerHTML += `<button class="card border-primary mb-3 link-underline-opacity-0 text-decoration-none" style="max-width: 20rem;">
                                        <div class="card-header">${i.title}</div>
                                        <div class="card-body">
                                            <img class="card-img" src="${i.thumbnail}" />
                                            <h4 class="card-title">${i.price}$</h4>
                                            <p class="card-text">${i.description}</p>
                                        </div>
                                </button>`;
    }
}

// let btn = document.getElementsByTagName('button');
// btn.onclick = () => {
//     window.location.assign("../newIndex.html");
//     mainContent.innerHTML += `
//         <h1>Hello</h1>
//     `;
// }

sort.onclick = () => {
    let sortedProducts = arrProducts.sort(
        (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
    showProducts(sortedProducts);
}

getDataFromServer(url1);