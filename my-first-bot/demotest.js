const fs = require('fs')
const { browserSync } = require('vibium')

// Launch a browser (you'll see it open!)
const vibe = browserSync.launch()

// Go to a website
vibe.go('https://www.saucedemo.com/')
console.log('Loaded saucedemo.com')

// Take a screenshot
const png = vibe.screenshot()
fs.writeFileSync('loginpage.png', png)
console.log('Saved loginpage.png')

// Find and click the link
const usernameinput = vibe.find('#user-name')
usernameinput.type('standard_user')
console.log('Typed username')

const passwordinput = vibe.find('#password')
passwordinput.type('secret_sauce')
console.log('Typed password')

const loginbutton = vibe.find('#login-button')
loginbutton.click()
console.log('Clicked login button')

const currenturl = vibe.evaluate('return window.location.href')
console.log('Current URL after login:', currenturl)
if (currenturl.includes('inventory.html')) {
    console.log('Login successful, navigated to inventory page.')
}

const png2 = vibe.screenshot()
fs.writeFileSync('homepage.png', png2)
console.log('Saved homepage.png')

// Close the browser
vibe.quit()
console.log('Done!')