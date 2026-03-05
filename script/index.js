const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all").then((res) => (res.json())).then((data) => showLessons(data.data));
}
const showLessons = (lessons) => {
    const lessonContainer = document.getElementById("lesson-btn-container");
    lessonContainer.innerHTML = "";
    for(let lesson of lessons){
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
            <button class="btn btn-outline btn-primary"
                    ><i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button
                  >
        `;
        lessonContainer.append(lessonDiv);
    }
}
loadLessons();