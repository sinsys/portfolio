const STORE = {
	// Make a key for projects as an array of our projects
	projects: [
		{
			// This is all self explanatory
			title: "Quiz - Front End Fundamentals",
			description: "This is a quiz designed to test basic front end principles",
			// This is used for extended descriptions of each project
			extDescription: "",

			// Images will be stored in two keys for display purposes
			// Portrait and Landscape
			// It may make more sense to display one or the other later
			images: {
				portrait: [
					["img/projects/quiz-app/thumbs/mobile-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/mobile-mid-quiz-full.jpg", 
						"Middle of the quiz image"],
					["img/projects/quiz-app/thumbs/mobile-results-thumb.jpg", 
						"img/projects/quiz-app/mobile-results-full.jpg", 
						"End of quiz image"],
				],
				landscape: [
					["img/projects/quiz-app/thumbs/quiz-app-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/quiz-app-mid-quiz-full.jpg", 
						"End of quiz image"],
				]
			},
			technologies: ["HTML5", "CSS3", "JS (ES6)", "jQuery"],
			gitHub: "https://github.com/sinsys/quiz-app-remastered/",
			liveLink: "https://sinsys.github.io/quiz-app-remastered/"
		},{
			// This is all self explanatory
			title: "Quiz - Front End Fundamentals",
			description: "This is a quiz designed to test basic front end principles",
			// This is used for extended descriptions of each project
			extDescription: "",

			// Images will be stored in two keys for display purposes
			// Portrait and Landscape
			// It may make more sense to display one or the other later
			images: {
				portrait: [
					["img/projects/quiz-app/thumbs/mobile-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/mobile-mid-quiz-full.jpg", 
						"Middle of the quiz image"],
					["img/projects/quiz-app/thumbs/mobile-results-thumb.jpg", 
						"img/projects/quiz-app/mobile-results-full.jpg", 
						"End of quiz image"],
				],
				landscape: [
					["img/projects/quiz-app/thumbs/quiz-app-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/quiz-app-mid-quiz-full.jpg", 
						"End of quiz image"],
				]
			},
			technologies: ["HTML5", "CSS3", "JS (ES6)", "jQuery"],
			gitHub: "https://github.com/sinsys/quiz-app-remastered/",
			liveLink: "https://sinsys.github.io/quiz-app-remastered/"
		},{
			// This is all self explanatory
			title: "Quiz - Front End Fundamentals",
			description: "This is a quiz designed to test basic front end principles",
			// This is used for extended descriptions of each project
			extDescription: "",

			// Images will be stored in two keys for display purposes
			// Portrait and Landscape
			// It may make more sense to display one or the other later
			images: {
				portrait: [
					["img/projects/quiz-app/thumbs/mobile-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/mobile-mid-quiz-full.jpg", 
						"Middle of the quiz image"],
					["img/projects/quiz-app/thumbs/mobile-results-thumb.jpg", 
						"img/projects/quiz-app/mobile-results-full.jpg", 
						"End of quiz image"],
				],
				landscape: [
					["img/projects/quiz-app/thumbs/quiz-app-mid-quiz-thumb.jpg", 
						"img/projects/quiz-app/quiz-app-mid-quiz-full.jpg", 
						"End of quiz image"],
				]
			},
			technologies: ["HTML5", "CSS3", "JS (ES6)", "jQuery"],
			gitHub: "https://github.com/sinsys/quiz-app-remastered/",
			liveLink: "https://sinsys.github.io/quiz-app-remastered/"
		}
	],
	profile: {
		title: "Web developer too stubborn to accept bad practices",
		subtitle: "newTech && refactoring > oldHacks && spaghetti",
		profileImg: ["./img/profile-pic-128.png", "./img/profile-pic-256.png"],
		statement: `I have a yearning passion for learning new things and practicing what I already know. After working with <span class="hightlight">AI</span>, <span class="hightlight">Machine Learning</span>, <span class="hightlight">Kaizen (process improvement)</span>, as well as <span class="hightlight">Front/Back End Development</span>, I'm more eager than ever to push the limits on just what else these flourishing fields can accomplish.`,
		name: "Nicholas Hazel",
		year: 2019
	}
}

// Render applicable data from the STORE object
function renderInitDOM(data){
	// Render basic info
	$('.hero-text-primary').html(data.profile.title);
	$('.hero-text-secondary').html(`<code>${data.profile.subtitle}</code>`);
	$('.profile-img').attr('src', data.profile.profileImg[0]);
	$('.statement-text').html(data.profile.statement);

	// Render projects into the DOM
	$('.projects-wrapper').append($createProjectDOM(data.projects));
}

function expandProject(project, direction){

}

function $createProjectDOM(projects){
	let $allProj = ``;

	for(let i=0; i<projects.length; i++){
		let curProj = projects[i];
		let $techIcons = getTechnologies(curProj.technologies);
		if(i%2 === 0){
			let $imgThumbs = getImgThumbs(curProj,"normal");
			let $curProj = `
				<section class="project">
					<div class="project-wrapper">
					<h3 class="project-title">${curProj.title}</h3>
						<p class="project-desc">${curProj.description}</p>
						<div class="project-thumbnails">
							${$imgThumbs}
						</div>
						<div class="technologies">
							${$techIcons}
						</div>
					</div>
				</section>
			`;
			$allProj+=$curProj;			
		} else {
			let $imgThumbs = getImgThumbs(curProj,"inverse");
			let $curProj = `
				<section class="project inverse">
					<div class="project-wrapper-inverse">
					<h3 class="project-title-inverse">${curProj.title}</h3>
						<p class="project-desc">${curProj.description}</p>
						<div class="project-thumbnails">
							${$imgThumbs}
						</div>
						<div class="technologies">
							${$techIcons}
						</div>
					</div>
				</section>
			`;
			$allProj+=$curProj;					
		}
	}
	return $allProj;
}

function getImgThumbs(project, direction){
	let $imgThumbs = ``;
	if(direction === "normal"){
		for(let i=0; i<project.images.portrait.length; i++){
			$imgThumbs+=`
				<div class="vertical-thumb">
					<img class="project-thumbnail" src="${project.images.portrait[i][0]}" alt="${project.images.portrait[i][2]}">
				</div>
			`;
		}
		for(let i=0; i<project.images.landscape.length; i++){
			$imgThumbs+=`
				<div class="horizontal-thumb">
					<img class="project-thumbnail" src="${project.images.landscape[i][0]}" alt="${project.images.landscape[i][2]}">
				</div>
			`;
		}
	} else {
		for(let i=0; i<project.images.landscape.length; i++){
			$imgThumbs+=`
				<div class="horizontal-thumb">
					<img class="project-thumbnail" src="${project.images.landscape[i][0]}" alt="${project.images.landscape[i][2]}">
				</div>
			`;
		}		
		for(let i=0; i<project.images.portrait.length; i++){
			$imgThumbs+=`
				<div class="vertical-thumb">
					<img class="project-thumbnail" src="${project.images.portrait[i][0]}" alt="${project.images.portrait[i][2]}">
				</div>
			`;
		}
	}
	return $imgThumbs;
}

function getTechnologies(projectTechs){
	let $technologyIcons = ``;
	for(let i=0; i<projectTechs.length; i++){
		console.log(projectTechs[i]);
		switch(projectTechs[i]){
			case "HTML5": $technologyIcons+='<i class="fab fa-html5"></i>';
				break;
			case "CSS3": $technologyIcons+='<i class="fab fa-css3-alt"></i>';
				break;
			case "JS (ES6)": $technologyIcons+='<i class="fab fa-js-square"></i>';
				break;
			case "jQuery": $technologyIcons+='<i class="jquery-icon"></i>';
				break;
			default:
				break;
		}
	}
	return $technologyIcons;
}
// Slide out project and move to main page
function closeProject(project, direction){

}

// Quick move to projects
function quickPortfolio(section){

}
// Open up the mobile navigation menu
function toggleNavMenu(state){
	if(state){
		$('.mobile-navigation').css('right', 0);
		$('.page-wrapper').css('right', '320px');		
	} else {
		$('.mobile-navigation').css('right', '-320px');
		$('.page-wrapper').css('right', 0);
	}
}

// Scroll the page function
function scrollToAnchor(target){
    $('html,body').animate({
    	scrollTop: target.offset().top
    },'slow');
}


$(function(){
	renderInitDOM(STORE);
	$('.ham-menu').on('click', function(){
		toggleNavMenu(true);
	})
	$('.close-nav').on('click', function(){
		toggleNavMenu(false);
	})
	$('a').on('click', function(e){
		e.preventDefault();
	})
	$('.ql-portfolio').on('click', function(){
		scrollToAnchor($('.projects-target'));
	})
});

