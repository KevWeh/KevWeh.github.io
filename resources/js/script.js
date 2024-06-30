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

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeBtn = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.getAttribute('data-full');
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
