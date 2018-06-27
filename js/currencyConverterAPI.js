class CurrencyConverterAPI {
    // get conversion
    async queryConversionAPI(fromCurrency, toCurrency){
        const query = `${fromCurrency}_${toCurrency}`
        const url = await fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`)
        const results = url.json()
        //console.log(results)
        return{
            results
        }
    }

    //get all the currencies
    async getCurrenciesList(){
        //fetch everything in there
        const url = await fetch('https://free.currencyconverterapi.com/api/v5/currencies')
        //convert it into json
        const currencies = await url.json()
        // return the object
        return {
            currencies
        }

    }

}