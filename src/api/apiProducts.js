const apiProducts = async (query) => { 
    
    const promisse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const response = await promisse.json();

    return response;
};

export default apiProducts
