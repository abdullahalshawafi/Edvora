const parseDate = (date) => {
    date = new Date(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
};

const fillData = (product, products, productsNames, productsStates, productsCities, isDateParsed = true) => {
    const productName = product.product_name;
    const productState = product.address.state;
    const productCity = product.address.city;

    if (!isDateParsed) {
        product.date = parseDate(product.date);
    }

    products[productName] = productName in products ? products[productName] : [];
    products[productName].push(product);

    !productsNames.includes(productName) && productsNames.push(productName);
    !productsStates.includes(productState) && productsStates.push(productState);
    !productsCities.includes(productCity) && productsCities.push(productCity);
}

export const getProducts = async () => {
    try {
        const res = await fetch('https://assessment-edvora.herokuapp.com/');
        const data = await res.json();

        const products = {};
        const productsNames = [];
        const productsStates = [];
        const productsCities = [];

        data.forEach(product => {
            fillData(product, products, productsNames, productsStates, productsCities, false);
        });

        return [productsNames, productsStates, productsCities, products];
    } catch (err) {
        console.log(err);
    }
}

export const filterByProduct = (products, selectedProduct) => {
    const newProducts = {};
    const productsNames = [];
    const productsStates = [];
    const productsCities = [];

    Object.values(products).forEach(productsName => {
        productsName.forEach(product => {
            if (product.product_name === selectedProduct) {
                fillData(product, newProducts, productsNames, productsStates, productsCities);
            }
        });
    });

    return [productsNames, productsStates, productsCities, newProducts];
}

export const filterByState = (products, selectedState) => {
    const newProducts = {};
    const productsNames = [];
    const productsStates = [];
    const productsCities = [];

    Object.values(products).forEach(productsName => {
        productsName.forEach(product => {
            if (product.address.state === selectedState) {
                fillData(product, newProducts, productsNames, productsStates, productsCities);
            }
        });
    });

    return [productsNames, productsStates, productsCities, newProducts];
}

export const filterByCity = (products, selectedCity) => {
    const newProducts = {};
    const productsNames = [];
    const productsStates = [];
    const productsCities = [];

    Object.values(products).forEach(productsName => {
        productsName.forEach(product => {
            if (product.address.city === selectedCity) {
                fillData(product, newProducts, productsNames, productsStates, productsCities);
            }
        });
    });

    return [productsNames, productsStates, productsCities, newProducts];
}