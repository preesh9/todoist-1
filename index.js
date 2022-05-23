// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

console.log(links)
console.log(linksContainer)

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
  // const linksHeight = links.getBoundingClientRect().height
  // console.log(linksHeight)
  // const containerHeight = linksContainer.getBoundingClientRect().height
  // console.log(containerHeight)
  // if (containerHeight === 0) {
  //   linksContainer.style.height = `${linksHeight}px`
  // } else {
  //   linksContainer.style.height = 0
  // }
  // console.log(linksContainer.getBoundingClientRect());
})
