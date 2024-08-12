/* let db = [
  {
    fullname: 'Amr samy aly',
    password: '12345asd av654',
    email: 'amr792134@gmail.com',
  },
  { fullname: 'abdelfatah dabo', password: 'dabo', email: 'dabo@gmail.com' },
  {
    fullname: 'ibrahim mohamed',
    password: '12345sersebvsse654',
    email: 'ahmed@gmail.com',
  },
  {
    fullname: 'abelrehim tarek ',
    password: '12serssgbs345654',
    email: 'hassan@gmail.com',
  },
  {
    fullname: 'seif hassan',
    password: '123456frserews s54',
    email: 'huss@gmail.com',
  },
  {
    fullname: 'mostafa esmail',
    password: '1234erwfsvxs5654',
    email: 'hesham@gmail.com',
  },
  {
    fullname: 'ahmed hassan ',
    password: '123456qweacvsgt54',
    email: 'hhh@gmail.com',
  },
  {
    fullname: 'mohamed metawly',
    password: '12345awerq654',
    email: 'amr792hhhaaa134@gmail.com',
  },
  {
    fullname: 'ibrahim hussien ',
    password: '1236fujvd45654',
    email: 'ahmed@gmail.com',
  },
  {
    fullname: 'refat mostafa',
    password: '12345asvvjgurtdasda654',
    email: 'huss@gmail.com',
  },
  {
    fullname: 'mostafa sayed',
    password: '123456dsadasfhgcvc54',
    email: 'ibrahim@gmail.com',
  },
  {
    fullname: 'hassan fathy',
    password: '123456asdasdad54',
    email: 'ziad@gmail.com',
  },
  {
    fullname: 'fathy mohamed ',
    password: '1asdasdassda2345654',
    email: 'hassan@gmail.com',
  },
  {
    fullname: 'omar sayed ',
    password: '123456asd54',
    email: 'fathy@gmail.com',
  },
  {
    fullname: 'said mohamed',
    password: 'asdasda da',
    email: 'mostafa@gmail.com',
  },
]
localStorage.setItem('users', JSON.stringify(db)) */

let usergetitem = localStorage.getItem('users')
let db = JSON.parse(usergetitem)

let signupButton = document.querySelector('#signupButton')
let inFullname = document.querySelector('#inFullname')
let lFullname = document.querySelector('#lFullname')
let loginButton = document.querySelector('#loginButton')
let inPassword = document.querySelector('#inPassword')
let lPassword = document.querySelector('#Lpassword')
let emailInput = document.querySelector('#email')

let loginAnnouncment = document.querySelector('.login-announcment')
let signupAnnouncment = document.querySelector('.signup-announcment')
let userEmail = []

function renderReset() {
  inFullname.classList.replace('d-block', 'd-none')
  lFullname.classList.replace('d-block', 'd-none')
  loginButton.classList.replace('d-block', 'd-none')
  inPassword.classList.replace('d-block', 'd-none')
  lPassword.classList.replace('d-block', 'd-none')
  emailInput.classList.replace('d-block', 'd-none')
  loginAnnouncment.classList.replace('d-block', 'd-none')
  signupAnnouncment.classList.replace('d-block', 'd-none')
  loginButton.classList.replace('d-block', 'd-none')
  signupButton.classList.replace('d-block', 'd-none')
}

function renderForloging() {
  lPassword.classList.replace('d-none', 'd-block')
  inPassword.classList.replace('d-none', 'd-block')
  loginAnnouncment.classList.replace('d-none', 'd-block')
  loginAnnouncment.innerHTML = 'you create a new account now you can login '

  signupAnnouncment.classList.replace('d-block', 'd-none')
  lFullname.classList.replace('d-block', 'd-none')
  inFullname.classList.replace('d-block', 'd-none')
  loginButton.classList.replace('d-none', 'd-block')
  signupButton.classList.replace('d-block', 'd-none')
}
function renderForsignup() {
  lPassword.classList.replace('d-none', 'd-block')
  inPassword.classList.replace('d-none', 'd-block')
  loginAnnouncment.classList.replace('d-block', 'd-none')
  signupAnnouncment.classList.replace('d-none', 'd-block')
  lFullname.classList.replace('d-none', 'd-block')
  inFullname.classList.replace('d-none', 'd-block')
  loginButton.classList.replace('d-block', 'd-none')
  signupButton.classList.replace('d-none', 'd-block')
}
function emptyError() {
  document.querySelector('.emptyError').innerHTML = `
      <h6>You Enter empty Value</h6>

      `
  document.querySelector('.emptyError').classList.add('p-5')
}

emailInput.addEventListener('input', function checkEmail() {
  userEmail = db.filter((elm, index) => {
    return (
      elm.email.toLowerCase() === emailInput.value.toLowerCase() ||
      elm.fullname.toLowerCase() === emailInput.value.toLowerCase()
    )
  })

  if (userEmail.length > 0) {
    renderForloging()
    loginAnnouncment.innerHTML = `

                <h6>this email <span>${emailInput.value}</span> is exist you can login</h6>


    `
  } else if (userEmail.length <= 0 && emailInput.value != '') {
    renderForsignup()
    signupAnnouncment.innerHTML = `<h6>this email <span>${emailInput.value}</span> is not exist you have to signup</h6>
         `
  } else if (emailInput.value === '') {
    renderReset()
  }
})

function login() {
  let correctEmail = []
  let correctPassword = []
  let password = inPassword.value
  let email = emailInput.value
  let loginArray = [
    {
      name: email,
      password: password,
    },
  ]

  if (loginArray[0].name === '' || loginArray[0].password === '') {
    emptyError()
  } else {
    correctEmail = db.filter((elm) => {
      return (
        elm.email.toLowerCase() === loginArray[0].name.toLowerCase() ||
        elm.fullname.toLowerCase() === loginArray[0].name.toLowerCase()
      )
    })
    console.log(correctEmail)
    correctPassword = correctEmail.filter((elm) => {
      return elm.password === loginArray[0].password
    })
    console.log(correctPassword)
  }
  if (correctEmail.length > 0 && correctPassword.length > 0) {
    console.log('succes')
    window.location.href = './home.html'
  } else {
    console.log('failed')
    loginAnnouncment.innerHTML = `
    <h6>email/username or password is wrong</h6>

    `
  }
}
function signup() {
  let userName = inFullname.value
  let password = inPassword.value
  let email = emailInput.value

  let signup = db.filter((elem, index) => {
    return (
      elem.fullname.toLowerCase() === userName.toLowerCase() ||
      elem.email.toLowerCase() === email.toLowerCase()
    )
  })

  if (signup.length > 0) {
    signupAnnouncment.innerHTML = `
      <h6>this username ${userName} is already exist pleas add another username </h6>

      `
  } else {
    let dataEntery = { fullname: userName, password: password, email: email }
    db.push(dataEntery)
    console.log(db)
    localStorage.setItem('users', JSON.stringify(db))
    renderForloging()
  }
}
