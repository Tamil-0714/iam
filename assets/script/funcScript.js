const headings = [
    `A passionate web developer embraces complexity as a chance to
    unravel intricate problems, weaving elegant solutions with
    lines of code.`,
    `Crafting beautiful and functional web experiences.", "Building
    the future of the web, one pixel at a time.", "I help
    businesses turn their digital dreams into reality.`
]
window.onload = ()=>{
    document.getElementById("home-heading").innerHTML = headings[Math.floor(Math.random()*2)]
}