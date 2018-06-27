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
                //build the <select> from the values
                const selectFrom = document.querySelector('#fromCurrency')
                
                for(const currency of Object.values(results)){
                    // add the options
                    const option = document.createElement('option')
                    option.value = currency.id 
                    option.appendChild(document.createTextNode(currency.currencyName))
                    selectFrom.appendChild(option)
                    //console.log(`${currency.id} -- ${currency.currencyName}`)
                }
                const selectTo = document.querySelector('#toCurrency')
                for(const currency of Object.values(results)){
                    // add the options
                    const option = document.createElement('option')
                    option.value = currency.id 
                    option.appendChild(document.createTextNode(currency.currencyName))
                    selectTo.appendChild(option)
                    //console.log(`${currency.id} -- ${currency.currencyName}`)
                }
                
                      
            }).catch(err =>{console.log(err)})
    }

    errorMessage(message, className){
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))

        const msgDiv = document.querySelector('.messages')
        msgDiv.appendChild(div)

        //remove the error message after 4 seconds
        setTimeout(() => {
            document.querySelector('.messages div').remove()
        },
            4000)
    }
}