var data ={
    cpp: ["C++", "100%", "3 years"],
    python: ["Python", "33.33%", "1 year"],
    html: ["HTML", "66.66%", "2 years"],
    css: ["CSS", "66.66%", "2 years"],
    js: ["JavaScript", "33.33%", "1 year"],
    flask: ["Flask", "33.33%", "1 year"],
    sqlite: ["SQLite", "33.33%", "1 year"]
}

var title = document.querySelector('#bar-title');
var stat = document.querySelector(".stat");
let currentSkillId = null;

function updateStat(e) {
    let skillId = e.closest('a').id;
    currentSkillId = skillId;

    stat.innerHTML = "&nbsp;";
    stat.style.backgroundColor = "var(--accent-color)";
    stat.style.width = data[skillId][1];
    title.innerHTML = data[skillId][0];

    setTimeout(() => {
        if (currentSkillId === skillId) {
            stat.innerHTML = data[skillId][2];
        }
    }, 250);
}

function updateStatRemove() {
    currentSkillId = null;
    title.innerHTML = "Skill";
    stat.style.width = "0%";
    stat.innerHTML = "&nbsp;";

    setTimeout(() => {
        if (!currentSkillId) {
            stat.innerHTML = '';
        }
    }, 450);
}