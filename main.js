const tBody = document.querySelector('tbody')
const userApi =
  'https://jsonplaceholder.typicode.com/users?fbclid=IwAR3mY_MwaiAjvR-LnTV4ayHrClbw8Rd0Ey9jp6BMk5cGnAXY97BkwQiZnA8'

const getUserList = (callback) => {
  fetch(userApi)
    .then((response) => response.json())
    .then(callback)
}

const renderUserList = (userList) => {
  const htmls = userList.map((user) => {
    return `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.website}</td>
          <td>${user.address.city}</td>
        </tr>`
  })
  tBody.innerHTML = htmls.join('')
}

const start = () => {
  getUserList(renderUserList)
}
start()
