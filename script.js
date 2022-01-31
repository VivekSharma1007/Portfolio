let uiItems1 = document.getElementById("list-item1");
let uiItems2 = document.getElementById("list-item2");
let uiItemFlag = true; // hidden
// uiItem.style.display = "none";
let seeAllElem = document.getElementById("See-all");


window.onload = function () {
    // document.getElementById('list-item1').style.display = 'none';
    document.getElementById('list-item2').style.display = 'none';
}

seeAllElem.addEventListener("click", (e) => {
    uiItemFlag = !uiItemFlag;
    if(uiItemFlag == true)
    {
        // hidden
        // uiItems1.style.display = "none";
        uiItems2.style.display = "none";
        seeAllElem.innerHTML = "See all";
    }
    else
    {
        // show
        uiItems1.style.display = "inline-block";
        uiItems2.style.display = "inline-block";
        seeAllElem.innerHTML = "Hide";

    }
});









var _CONTENT = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Data Structures & Algorithms"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
    // Get substring with 1 characater added
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        // Hide the cursor
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    // Get substring with 1 characater deleted
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        // If current sentence was last then display the first one, else move to the next
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);



















let aboutMeId = document.querySelector("#about-me-id");
let skillId = document.querySelector("#skill-id");
let resumeId = document.querySelector("#resume-id");
let findMeId = document.querySelector("#find-me-id");
let allSkillsId = document.querySelector("#skill-heading")

let aboutMeNav = document.querySelector("#about-me-nav");
let skillNav = document.querySelector("#skills-nav");
let resumeNav = document.querySelector("#resume-nav");
let findMeNav = document.querySelector("#find-me-nav");

aboutMeNav.addEventListener("click", (e) => {
    aboutMeId.scrollIntoView();
})

skillNav.addEventListener("click", (e) => {
    allSkillsId.scrollIntoView();
})

findMeNav.addEventListener("click", (e) => {
    findMeId.scrollIntoView();
})

resumeNav.addEventListener("click", (e) => {
    resumeId.scrollIntoView();
})

