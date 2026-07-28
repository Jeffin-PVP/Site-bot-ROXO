const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

async function updateStatus() {


    const response =
        await fetch("https://localhost:3000.com");


    const data =
        await response.json();



    const dot =
        document.querySelector("#status-dot");


    const text =
        document.querySelector("#status-text");



    if (data.online) {


        dot.className = "online";


        text.innerHTML = "Online";


    }


    document.querySelector("#ping")
        .innerHTML = data.ping;


    document.querySelector("#servers")
        .innerHTML = data.servers;


}



updateStatus();


setInterval(updateStatus, 30000);