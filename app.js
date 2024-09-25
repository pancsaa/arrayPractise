const students = [
    { name: 'János', age: 18, grades: [5, 4, 4, 5] },
    { name: 'Anna', age: 19, grades: [3, 4, 2, 5] },
    { name: 'Lajos', age: 15, grades: [5, 5, 4, 5] },
    { name: 'Vera', age: 17, grades: [3, 4, 2, 4] }
];

// Diákok listázása:
const listázásButton=document.querySelector("#student-list input")
const listázásResult=document.querySelector("#result-list")
listázásButton.addEventListener("click",()=>{
    listázásResult.innerHTML="";
    listázásResult.innerHTML=students.map(obj=>
    `<li> 
        ${obj.name} -- ${obj.age} éves -- ${obj.grades}
    </li>`).join(" ")
})
// Diák hozzáadása a listához:
// Életkor szerinti szűrés:
// Adott átlagtól jobb diákok szűrése:
// Diák törlése:
// Jegyek módosítása:
