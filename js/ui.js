// create the UI class
class UI {
    constructor(){
        this.init()
    }
    init(){
        this.printCurrencies()
    }
    // Prints the options to be selected
    printCurrencies() {
        currencyConverterAPI.getCurrenciesList()
             .then(data => {
                //console.log(data)
                const currencies = data.currencies
                const results = currencies.results
                //console.log(results)
                for(const key of Object.values(results)){
                   console.log(`${key.currencyName} -- ${key.id}`)
                    }
                    

                
                //build the <select> from the values
                /* const select = document.querySelector('#currency')
                for(let currency in results){
                    // add the options
                    const option = document.createElement('option')
                    option.value = currency.id 
                    option.appendChild(document.createTextNode(currency.currencyName))
                    select.appendChild(option)
                    console.log(`${currency.id} -- ${currency.currencyName}`)
                }
                */
                

            }).catch(err =>{console.log(err)})
    }
}