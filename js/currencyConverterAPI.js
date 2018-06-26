class CurrencyConverterAPI {
   
    //get all the currencies
    async getCurrenciesList(){
        //fetch everything in there
        const url = await fetch('https://free.currencyconverterapi.com/api/v5/currencies')
        //convert it into json
        const currencies = await url.json()
        // return the object
        return currencies 

    }

}