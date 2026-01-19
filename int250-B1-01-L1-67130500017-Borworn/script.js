function temperature() {
    const celsius = document.getElementById("celsius").value
    const fahrenheit = document.getElementById("fahrenheit")

    if (celsius === "") {
        fahrenheit.value = ""
        return
    }

    const result = (celsius * 9) / 5 + 32

    fahrenheit.value = result
}

function weight() {
    const kilo = document.getElementById("kilo").value
    const pounds = document.getElementById("pounds")

    if (kilo === "") {
        fahrenheit.value = ""
        return
    }

    const result = kilo * 2.2

    pounds.value = result
}

function distance() {
    const km = document.getElementById("km").value
    const miles = document.getElementById("miles")

    if (km === "") {
        fahrenheit.value = ""
        return
    }

    const result = km / 1.609

    miles.value = result
}