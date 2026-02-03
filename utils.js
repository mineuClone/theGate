const items = document.querySelectorAll(".items")

items.forEach(i => {
    i.addEventListener('click', e => {
        let ref = i.getAttribute("data-href");
        document.getElementById(ref).scrollIntoView({ block: 'center', behavior: "smooth" })
    })
})


export function getFavIconUrl(domain) {
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`
}