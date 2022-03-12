let story = document.createElement('a');
story.innerText = 'Open'
story.className = 'bottombtn'
story.style.display = "none";
document.body.appendChild(story)
const observer = new MutationObserver(_ => {
    let url = document.getElementsByTagName("source")
    if (url.length > 0) {
        if (url[0].src !== '') {
            story.href = url[0].src
            story.style.display = "";
        }
    } else {
        story.href = '#'
        story.style.display = "none";
    }
})
observer.observe(document, {childList: true, subtree: true})
