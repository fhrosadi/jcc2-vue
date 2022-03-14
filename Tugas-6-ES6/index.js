// No 1
console.log("No 1\n")

const persegiPanjang = (p, l, t) => {
    let luas = p * l * t
    let keliling = 2 * p + 2 * l + 2 * t

    return [luas, keliling]
}

console.log(persegiPanjang(5, 4, 2))

// No 2
console.log("\n\nNo 2\n")

const newFunction = (firstName, lastName) => {
    const fullName = () => {
        console.log(`${firstName} ${lastName}`)
    }
    return ({
        firstName,
        lastName,
        fullName
    })
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// No 3
console.log("\n\nNo 3\n")

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {
    firstName,
    lastName,
    address,
    hobby
} = newObject //pakai formatter kang jadi gk 1 line hehe


// Driver code
console.log(firstName, lastName, address, hobby)

// No 4
console.log("\n\nNo 4\n")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)

// No 5
console.log("\n\nNo 5\n")

const planet = "earth"
const view = "glass"

const after = `Lorem ${view} dolor sit amet, consectetur adipiscing, ${planet}`

console.log(after)