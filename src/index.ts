interface Data {
  name: string
  gender: string
  height: number
  weight: number
}

const form = document.getElementById("form-imc") as HTMLFormElement

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(form)

  const data: Data = {
    name: formData.get("name") as string,
    gender: formData.get("gender") as string,
    height: Number(formData.get("height")),
    weight: Number(formData.get("weight")),
  }

  const imc = data.weight / data.height ** 2
  let category: string

  if (imc < 18.5) {
    category = "magreza"
  } else if (imc < 25) {
    category = "normal"
  } else if (imc < 30) {
    category = "sobrepreso"
  } else if (imc < 35) {
    category = "obesidade grau I"
  } else if (imc <= 40) {
    category = "obesidade grau II"
  } else {
    category = "obesidade grau II"
  }

  alert(`${data.name} tem o IMC ${imc.toFixed(2)}. Categoria: ${category}`)

  form.reset()
})
