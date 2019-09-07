const STORE = {
	// Make a key for projects as an array of our projects
	projects: [
		{
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
	// Key info about the profile that I can edit in one place if needed
	profile: {
		title: "Web developer too stubborn to accept bad practices",
		subtitle: "newTech && refactoring > oldHacks && spaghetti",
		profileImg: ["./img/profile-pic-128.png", "./img/profile-pic-256.png"],
		statement: `I have a yearning passion for learning new things and practicing what I already know. After working with <span class="highlight">AI</span>, <span class="highlight">Machine Learning</span>, <span class="highlight">Kaizen (process improvement)</span>, as well as <span class="highlight">Front/Back End Development</span>, I'm more eager than ever to push the limits on just what else these flourishing fields can accomplish.`,
		name: "Nicholas Hazel",
		year: 2019
	},
	// Used for social media info
	social: {
		facebook: "https://www.facebook.com/NicoSiteDev/",
		email: "nico.full.stack.dev@gmail.com",
		twitter: "https://twitter.com/NicoFullStack/",
		github: "https://github.com/sinsys/"
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
	$('.contact').append($socialLinksDOM(data.social));
}

function expandProject(project, direction){
	// Awaiting off-canvas project details HTML/CSS
}
// Slide out project and move to main page
function closeProject(project, direction){
	// Awaiting off-canvas project details HTML/CSS
}

// Returns a collection of all projects into a $DOM element
function $createProjectDOM(projects){
	let $allProj = ``;

	for(let i=0; i<projects.length; i++){
		let curProj = projects[i];
		let $techIcons = getTechnologies(curProj.technologies);
		// This modulus statement allows different HTML structures to alternate project layout
		if(i%2 === 0){
			let $imgThumbs = getImgThumbs(curProj,"normal");
			let $curProj = `
				<section class="project">
					<div class="project-wrapper" tabindex="0">
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
					<div class="project-wrapper-inverse" tabindex="0">
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

// Returns a collection of all images of a project into a $DOM element
function getImgThumbs(project, direction){
	let $imgThumbs = ``;
	/* The logic here is that we want two different image layouts
	depending on if the project is a normal or inverted layout.
	Normal - Portrait thumbnails -> Landscape thumbnails
	Inverted - Landscape thumbnails -> Landscape thumbnails*/
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

// Returns a collection of all project technologies into a $DOM element
function getTechnologies(projectTechs){
	let $technologyIcons = ``;
	for(let i=0; i<projectTechs.length; i++){
		// Used a switch statement for easy maintenance of future technologies that may be included
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

// Scroll the page to a target function
function scrollToAnchor(target){
    $('html,body').animate({
    	scrollTop: target.offset().top
    },'slow');
}

function $socialLinksDOM(social){
	let $socialTemplate = `
		<div class="contact-icon">
			<a href="mailto:${social.email}" target="_blank">
				<i class="fas fa-envelope"></i>
				<p class="contact-label">Email</p>
			</a>
		</div>
		<div class="contact-icon">
			<a href="${social.github}" target="_blank">
				<i class="fab fa-github"></i>
				<p class="contact-label">GitHub</p>
			</a>
		</div>
		<div class="contact-icon">
			<a href="${social.facebook}" target="_blank">
				<i class="fab fa-facebook"></i>
				<p class="contact-label">Facebook</p>
			</a>
		</div>
		<div class="contact-icon">
			<a href="${social.twitter}" target="_blank">
				<i class="fab fa-twitter"></i>
				<p class="contact-label">Twitter</p>
			</a>
		</div>`;
	return $socialTemplate;
}
$(function(){
	// Render the DOM
	renderInitDOM(STORE);

	// Event handlers
	// Open mobile nav menu
	$('.ham-menu').on('click', function(){
		toggleNavMenu(true);
	})
	// Close mobile nav menu
	$('.close-nav').on('click', function(){
		toggleNavMenu(false);
	})
	// Prevent all anchor clicks
	// This will need to be altered for specific external links
	$('.mobile-navigation a').on('click', function(e){
		e.preventDefault();
	})
	// Fast scroll to projects on header button
	$('.ql-portfolio').on('click', function(){
		scrollToAnchor($('.projects-target'));
	})
});

