document.querySelectorAll(".project_unit").forEach(project => {
    project.addEventListener("mouseenter", e => {
        document.getElementById("project_img").setAttribute("src", `./assets/img/${project.getAttribute("projectName")}.svg`);
    })

    project.addEventListener("mouseleave", e => {
        document.getElementById("project_img").setAttribute("src", `./assets/img/img-preview.svg`);
    })
})

const links = document.querySelectorAll(".nav_list a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove('active_page'));

        link.classList.add('active_page');
    })
})