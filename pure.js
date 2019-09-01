
// const headerTag = document.querySelector("h1")

// headerTag.innerHTML = "Hello someone"

// headerTag.style.backgroundColor = "red"

// headerTag.style.fontSize = "100px"

const headerTags = document.querySelectorAll("h1")

headerTags.forEach((h1, index) => {
	h1.innerHTML = "this is tag number " + index
})


const rectTags = document.querySelectorAll("rect")
const data = [550, 420, 731]

rectTags.forEach((tag, index) => {
	const hue = 360 * Math.random()
	tag.style.fill = "hsl(" + hue +", 100%, 50%)"

	const width = data[index]
	tag.setAttribute("width", width + "px")
})