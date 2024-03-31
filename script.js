document.querySelectorAll(".project_unit").forEach(project => {
    project.addEventListener("mouseenter", e => {
        document.getElementById("project_img").setAttribute("src", `./assets/img/${project.getAttribute("projectName")}.svg`);
    })

    project.addEventListener("mouseleave", e => {
        document.getElementById("project_img").setAttribute("src", `./assets/img/faixa.svg`);
    })
})