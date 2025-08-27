document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts() {
    // 产品数据直接嵌入到JavaScript中
    const products = [
        {
            "name": "Dr. Pen A7",
            "description": "The classic and reliable choice for effective microneedling treatments.",
            "image": "images/dr-pen-a7.jpg",
            "amazonLink": "YOUR_AMAZON_PRODUCT_LINK_A7"
        },
        {
            "name": "Dr. Pen M8",
            "description": "The latest model with a more powerful motor and ergonomic design.",
            "image": "images/dr-pen-m8.jpg",
            "amazonLink": "YOUR_AMAZON_PRODUCT_LINK_M8"
        }
    ];
    
    const productGrid = document.getElementById('product-grid');
    
    if (productGrid) {
        productGrid.innerHTML = ''; // 清除现有内容
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="${product.amazonLink}" class="cta-button" target="_blank">Buy on Amazon</a>
            `;
            productGrid.appendChild(productItem);
        });
    }
}

console.log("Dr. Pen website loaded.");