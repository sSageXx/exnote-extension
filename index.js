let mainLeads = []
const localStorageLeads = JSON.parse(localStorage.getItem("storedLeads"))
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const clearBtn = document.getElementById("clear-btn")
const leadsUl = document.getElementById("leads-ul")

function render(leads) {
    let leadsList = ""
    for (let i = 0; i < leads.length; i++) {
        leadsList += `<li>
            <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    leadsUl.innerHTML = leadsList
}

if (localStorageLeads) {
    mainLeads = localStorageLeads
    render(mainLeads)
}

saveBtn.addEventListener("click", () => {
    if (inputEl.value) {
        mainLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("storedLeads", JSON.stringify(mainLeads))
        render(mainLeads)
    }
})

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => {
        mainLeads.push(tabs[0].url)
        localStorage.setItem("storedLeads", JSON.stringify(mainLeads))
        render(mainLeads)
    })
})

clearBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    mainLeads.length = 0
    render([])
})