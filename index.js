let notesContainer = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const clearBtn = document.getElementById("clear-btn")
const notesUl = document.getElementById("notes-ul")

function renderLeads() {
    let elements = ""
    for (let i= 0; i < notesContainer.length; i++)
        elements += `
            <li>
                <p target='_blank'>${notesContainer[i]}</p>
            </li>
        `
    notesUl.innerHTML = elements
}

saveBtn.addEventListener("click", () => {
    notesContainer.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function clearNotes() {
    notesContainer.length = 0
    renderLeads()
}

clearBtn.addEventListener("click", () => {
    clearNotes()
})