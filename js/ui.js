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
                // test the fetch
                console.log(data)
            })
    }
}