export const apiDomain = 'http://localhost:7000/'
// export const loginUrl = apiDomain +
// export const userUrl 



export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authenticateUser'))

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer' + tokenData.access_token
  }
  return headers
}
