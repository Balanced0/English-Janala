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
            <div class="bg-white rounded-xl text-center p-14">
                <h5 class="text-3xl font-bold mb-[24px]">${word.word}</h5>
                <p class="text-xl font-medium mb-[24px]">Meaning /Pronounciation</p>
                <p class="text-3xl font-semibold font-bangla">"${word.meaning} / ${word.pronunciation}"</p>
                <div class="flex justify-between mt-[56px]">
                    <button class="bg-[#1A91FF10] w-14 h-14 rounded-xl hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="bg-[#1A91FF10] w-14 h-14 rounded-xl hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;
        wordContainer.append(wordCard);
    });
}
loadLessons();