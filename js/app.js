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
    console.log(amountNumber, fromCurrency, toCurrency)
})