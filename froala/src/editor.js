const editor = new FroalaEditor('#editor', {
    //toolbarInline: true
})

const saveBtn = document.querySelector(".save");
const saved = document.querySelector(".saved");

setInterval(() => {
    save();
}, 5000);

saveBtn.addEventListener('click', () => save() && saveAnimation());

function save() {
    console.log(editor.html.get());

    return true;
}

function saveAnimation() {
    saveBtn.innerHTML = `&check; Saved`;
    setTimeout(() => {
        saveBtn.innerHTML = `Save`;
    }, 1000)
}