const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all").then((res) => (res.json())).then((data) => showLessons(data.data));
}
const loadWords = (level) =>{
    const url = `https://openapi.programming-hero.com/api/level/${level}`;
    fetch(url).then((res) => res.json()).then((data) => showWords(data.data));
}
const showLessons = (lessons) => {
    const lessonContainer = document.getElementById("lesson-btn-container");
    lessonContainer.innerHTML = "";
    for(let lesson of lessons){
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
            <button onClick="loadWords(${lesson.level_no})" class="btn btn-outline btn-primary"
                    ><i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button
                  >
        `;
        lessonContainer.append(lessonDiv);
    }
}
const showWords = (words) =>{
    const wordContainer = document.getElementById("words-container");
    wordContainer.innerHTML = "";
    words.forEach((word) => {
        const wordCard = document.createElement("div");
        wordCard.innerHTML = `
            
        `;
    });
}
loadLessons();