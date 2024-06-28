document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Project 1", description: "Description for project 1" },
        { name: "Project 2", description: "Description for project 2" },
        { name: "Project 3", description: "Description for project 3" }
    ];

    const projectsSection = document.getElementById("projects");
    const projectList = document.createElement("ul");

    projects.forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectList.appendChild(projectItem);
    });

    projectsSection.appendChild(projectList);
});
