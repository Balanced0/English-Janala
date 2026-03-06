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
    if(words.length === 0){
        const emptyCard = document.createElement("div");
        emptyCard.className = "col-span-full text-center flex flex-col justify-center";
        emptyCard.innerHTML = `
            <img src = "./assets/alert-error.png" class="mx-auto mt-[74px]">
                <p class="text-sm font-bangla mb-[12px] mt-[15px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <p class="text-4xl font-bangla font-medium mv-[64px]">নেক্সট Lesson এ যান</p>
        `;
        wordContainer.append(emptyCard);
    }
    words.forEach((word) => {
        const wordCard = document.createElement("div");
        wordCard.innerHTML = `
            <div class="bg-white h-full rounded-xl text-center p-14 flex flex-col justify-between">
                <h5 class="text-3xl font-bold mb-[24px]">${word.word ? word.word : "শব্দটি নেই"}</h5>
                <p class="text-xl font-medium mb-[24px]">Meaning /Pronounciation</p>
                <p class="text-3xl font-semibold font-bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</p>
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