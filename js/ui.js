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
                // get the object
                const results = data.results
                console.log(results)

            })
    }
}