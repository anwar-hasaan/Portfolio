// toggle tabs
function toggle_tab(tab){
    let skill = document.getElementById('skills-tab');
    let experience = document.getElementById('experience-tab');
    let education = document.getElementById('education-tab');

    if(tab === 'skills'){
        skill.style.display = 'block';
        experience.style.display = 'none';
        education.style.display = 'none';
    }else if(tab === 'experience'){
        experience.style.display = 'block';
        skill.style.display = 'none';
        education.style.display = 'none';
    }else if(tab === 'education'){
        education.style.display = 'block';
        experience.style.display = 'none';
        skill.style.display = 'none';
    }
}