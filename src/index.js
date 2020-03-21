window.onload = function(){
    console.log("Hello!");

    // Tags
    addTagsClickHandle();
}

const addTagsClickHandle = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        console.log(e);
    })
}