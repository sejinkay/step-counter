
// const headerTag = document.querySelector("h1")

// headerTag.innerHTML = "Hello someone"

// headerTag.style.backgroundColor = "red"

// headerTag.style.fontSize = "100px"

const headerTags = document.querySelectorAll("h1")

headerTags.forEach(h1 => {
	h1.style.backgroundColor = "var(--secondary-blue)"
})