function init() {
  const elements = document.querySelectorAll('.departure')

  elements.forEach(function (element) {
    element.addEventListener('mouseover', function (e) {
      const postcode = this.firstElementChild.attributes['data-original-title'].value
      console.log(postcode)

      const checkDiv = document.getElementById('temporary')

      if (checkDiv === null) {
        const newDiv = document.createElement('div')
        newDiv.id = 'temporary'
        newDiv.style.height = '100px'
        newDiv.style.width = '100px'
        newDiv.style.backgroundColor = 'red'
        newDiv.style.position = 'absolute'
        newDiv.style.top = `${e.clientY + window.scrollY}px`
        newDiv.style.left = `${e.clientX + window.scrollX}px`
        newDiv.style.zIndex = 999

        const body = document.getElementsByTagName('body')[0]
        body.appendChild(newDiv)
  
        console.log(e.clientY)
      }
    })

    element.addEventListener('mouseout', function (e) {
      const temporaryDiv = document.getElementById('temporary')
      temporaryDiv.remove()
      console.log('removed')
    })
  })
}

init()
