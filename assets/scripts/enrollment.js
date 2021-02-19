export function getDisplay() {
    const appNewBtn = document.querySelector('#btnNewApp') === null ? "" : document.querySelector('#btnNewApp');
    const displayNewApp = document.querySelector('#startNewApp') === null ? "" : document.querySelector('#startNewApp');

    // function add display enrollment
    if(appNewBtn !== ""){
        appNewBtn.addEventListener('click', () => {
            displayNewApp.classList.remove('d-none');
            appNewBtn.classList.add('d-none');
        });
    }
}

export function getDegreeOrNon() {
    const degreeRadio = document.querySelector('#degree') === null ? "" : document.querySelector('#degree');
    const nonDegreeRadio = document.querySelector('#nonDegree') === null ? "" : document.querySelector('#nonDegree');
    const nextBtn = document.querySelector('#nextBtn') === null ? "" : document.querySelector('#nextBtn');


    if(nextBtn !== undefined){
        nextBtn.addEventListener('click', () => {
            if(nonDegreeRadio.checked){
                // window.location.href = "./../../index.html";
            }else if(degreeRadio.checked){
                // window.location.href
            }
        })
    }
}