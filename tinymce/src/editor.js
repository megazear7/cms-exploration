tinymce.init({
    selector: '.editor',
    menubar: 'edit view format',
    autosave_interval: "30s",
});

const saveBtn = document.querySelector(".save");
const saved = document.querySelector(".saved");

setInterval(() => {
    save();
}, 5000);

saveBtn.addEventListener('click', () => save() && saveAnimation());

function save() {
    console.log(tinymce.activeEditor.getContent());

    return true;
}

function saveAnimation() {
    saveBtn.innerHTML = `&check; Saved`;
    setTimeout(() => {
        saveBtn.innerHTML = `Save`;
    }, 1000)
}