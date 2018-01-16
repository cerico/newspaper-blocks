const AWS_URL = `https://s3.eu-west-2.amazonaws.com/io1937/json/sample.json`
const host = window.location.host
let proto
if (host.includes('localhost')){
  proto = 'http'
} else {
  proto = 'https'
}
const API_URL = `${proto}://${host}/public/sample.json`

export const getProducts = () => {
  const endpoint = `${API_URL}`
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => {console.log(res);dispatch(setProducts(res))})
    .catch(error => console.log(error))
  }
}

export const setProducts = res => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload:res
  }
}