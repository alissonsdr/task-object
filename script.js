let cars = []
const resultCars = document.getElementById("resultCars")
const resultPay = document.getElementById("resultPay")
const date = new Date();
const currentYear = date.getFullYear();

function save() {

    resultCars.innerHTML = ""
    resultPay.innerHTML = ""
    let brand = document.getElementById("brand").value
    let model = document.getElementById("model").value
    let color = document.getElementById("color").value
    let year = document.getElementById("year").value
    cars.push({
        carBrand: brand,
        carModel: model,
        carColor: color,
        carYear: year
    })

}

function view() {

    let listCars = ''

    cars.forEach(car => {
        listCars += `<span> ${car.carBrand}/${car.carModel} - ${car.carColor} - ${car.carYear} </span> <br>`
    })
    
    resultCars.innerHTML = listCars

}

function reset(){

    resultCars.innerHTML = ""
    resultPay.innerHTML = ""
    cars = []

}

function verify(){

    let listPay = ""

    cars.forEach(car => {
        let yearCount = currentYear - `${car.carYear}`
        if (yearCount >= 20){
            listPay += `${car.carModel}/${car.carYear} não paga IPVA. <br>`
        }

        resultPay.innerHTML = listPay
    })

}