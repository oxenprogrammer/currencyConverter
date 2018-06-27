//instantiate new objects

const currencyConverterAPI = new CurrencyConverterAPI()
const ui = new UI()

// hold the form
const form = document.getElementById('form')

// add event listener
form.addEventListener('submit', event =>{
    event.preventDefault()

    //read amount
    const amountString = document.getElementById('amount').value
    const amountNumber = parseFloat(amountString)

    // read fromCurrency
    const fromCurrency = document.getElementById('fromCurrency').value

    // read toCurrency
    const toCurrency = document.getElementById('toCurrency').value

    if(amountNumber==='' || fromCurrency==='' || toCurrency===''){
        
        //console.log(`All inputs are mandatory`)
        //display an error
        ui.errorMessage('All fields must be filled correctly', 'deep-orange darken-4 card-panel')
    }else{
        //console.log(amountNumber, fromCurrency, toCurrency)
        //Query API
        //console.log(currencyConverterAPI.queryConversionAPI(fromCurrency, toCurrency))
        let converted = currencyConverterAPI.queryConversionAPI(fromCurrency, toCurrency)
        .then(data => {
            return data.results
        }).catch(err =>{console.log(err)})

        converted.then(data => {
            //console.log(data)
            for(const value of Object.values(data)){
                //console.log(value.val*amountNumber)
                ui.displayValue(value.val*amountNumber)
            }
        }).catch(err =>{console.log(err)})
        
    }
})