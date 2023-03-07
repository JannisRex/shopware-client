const test = 'https://dummyjson.com/products/1'

const getTest = async () => {
  // const res = await fetch(test)
  // const body = await res.json()
  // console.log(body)
  fetch(test)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}

getTest()