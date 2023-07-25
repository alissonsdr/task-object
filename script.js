let cars = []
const resultCars = document.getElementById("resultCars")
const resultPay = document.getElementById("resultPay")

function save() {
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
    console.log(cars)
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
        let yearCount = 2023 - `${car.carYear}`
        if (yearCount >= 20){
            listPay += `${car.carModel}/${car.carYear} não paga IPVA. <br>`
        }

        resultPay.innerHTML = listPay
    })


}