class DataSource {

    static searchDrinks(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)

        .then(response => {
            return response.json();
        })

        //responseJson = nilai JSON yang dihasilkan dari perubahan object response dalam bentuk JSON melalui method .json()
        .then(responseJson => {
            if(responseJson.drinks){
                return Promise.resolve(responseJson.drinks);
            } else {
                    return Promise.reject(`${keyword} is not found`);
            }
        })
  
    }

    static alcoholic(){
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)

        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            (responseJson.drinks.length = 6)
            return responseJson.drinks;
            
        }) 
        .catch (message =>{
            showResponseMessage(message);
        })
    }
    static nonAlcoholic(){
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)

        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            (responseJson.drinks.length = 6)
            return responseJson.drinks;
            
        })
        .catch (message =>{
            showResponseMessage(message);
        })  

    }


}


export default DataSource;