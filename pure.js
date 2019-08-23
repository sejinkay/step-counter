
// const headerTag = document.querySelector("h1")

// headerTag.innerHTML = "Hello someone"

// headerTag.style.backgroundColor = "red"

// headerTag.style.fontSize = "100px"

const headerTags = document.querySelectorAll("h1")

headerTags.forEach(h1 => {
	const hue = 360 * Math.random()
	h1.style.backgroundColor = "hsl("+ hue +", 100%, 50%)"
})