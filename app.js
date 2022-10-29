{/* <span id="temp" class="fa"></span> */ }
const temLoad = () => {
    const temp = document.getElementById("temp");
    temp.innerHTML = `<i class="fa-solid fa-temperature-empty"></i>`;

    setTimeout(() => {
        temp.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i>`
        temp.style.color = "#ffeaa7"
    }, 1000)

    setTimeout(() => {
        temp.innerHTML = `<i class="fa-solid fa-temperature-half"></i>`
    }, 2000)

    setTimeout(() => {
        temp.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>`
        temp.style.color ="#ff7675"
    }, 3000)

    setTimeout(() => {
        temp.innerHTML = `<i class="fa-solid fa-temperature-full"></i>`
        temp.style.color = "#ff7675"
    }, 4000)
}
temLoad()

setInterval(temLoad,5000);