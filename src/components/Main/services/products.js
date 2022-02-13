const parseDate = (date) => {
    date = new Date(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
};

export const getProducts = async () => {
    try {
        const res = await fetch('https://assessment-edvora.herokuapp.com/');
        const data = await res.json();

        const products = {};
        const productsNames = [];
        const productsStates = [];
        const productsCities = [];

        data.forEach(product => {
            const productName = product.product_name;
            const productState = product.address.state;
            const productCity = product.address.city;

            product.date = parseDate(product.date);

            products[productName] = productName in products ? products[productName] : [];
            products[productName].push(product);

            !productsNames.includes(productName) && productsNames.push(productName);
            !productsStates.includes(productState) && productsStates.push(productState);
            !productsCities.includes(productCity) && productsCities.push(productCity);
        });

        return [productsNames, productsStates, productsCities, products];
    } catch (err) {
        console.log(err);
    }
}