const STORE = {
	// Make a key for projects as an array of our projects
	projects: [
    {
      title: "aMAZEment",
      description: "aMAZEment is a maze runner style game where you have to navigate through a randomly generated maze as quickly as possible. Your run will be timed and a leaderboard will display the best runners out there!",
      purpose: "To run through a maze and get the quickest time.",
      why: "To challenge myself on using HTML canvas and maze-creation algorithms.",
      who: "Whoever wants to play a maze game.",
      images: {
        portrait: [
          ["img/projects/amazement/thumbs/mobile-start-maze-thumb.jpg",
            "img/projects/amazement/mobile-start-maze-full.jpg",
            "Start new game"
          ],
          ["img/projects/amazement/thumbs/mobile-mid-maze-thumb.jpg",
            "img/projects/amazement/mobile-mid-maze-full.jpg",
            "Middle of the maze"
          ]
        ],
        landscape: [
          ["img/projects/amazement/thumbs/desktop-results-thumb.jpg",
            "img/projects/amazement/desktop-results-full.jpg",
            "Results screen"
          ]
        ]
      },
      technologies: ["ReactJS", "NodeJS", "PostgreSQL"],
      gitHub: "https://github.com/sinsys/amazement_client/",
      liveLink: "https://amazement.now.sh/"
    },
    {
      title: "Taskmon - Task Monitor",
      description: "This is a task manager application intended to provide a sense of urgency on projects. Instead of displaying the traditional due date of a project or task, this application displays a constant countdown timer showing you how much time you have left to complete the task.",
      purpose: "To provide a sense of urgency when managing tasks or projects.",
      why: "To provide a different style of task app that provides a sense of urgency when managing tasks or projects.",
      who: "Whoever wants to add a sense of urgency to their task or project management.",
      images: {
        portrait: [
          ["img/projects/taskmon/thumbs/mobile-dashboard-thumb.jpg",
            "img/projects/taskmon/mobile-dashboard-full.jpg",
            "Dashboard image"
          ],
          ["img/projects/taskmon/thumbs/mobile-task-details-thumb.jpg",
            "img/projects/taskmon/mobile-task-details-full.jpg",
            "Task details"
          ]
        ],
        landscape: [
          ["img/projects/taskmon/thumbs/desktop-project-details-thumb.jpg",
            "img/projects/taskmon/desktop-project-details-full.jpg",
            "Project details"
          ]
        ]
      },
      technologies: ["ReactJS", "NodeJS", "PostgreSQL"],
      gitHub: "https://github.com/sinsys/taskmon_client/",
      liveLink: "https://taskmon.now.sh/"
    },
		{
			title: "Quiz - Front End Fundamentals",
			description: "This is a quiz designed to test basic front end principles. It is composed of 50 potential questions organized within 10 categories. One random question of each category is asked and the answer order is randomized to ensure a unique test the majority of the time.",
			// This is used for extended descriptions of each project
      purpose: "To test knowledge on front-end principles.",
      why: "To offer a simple, interactive way to test knowledge on front-end principles.",
      who: "Anybody who wants to test their knowledge on front-end principles.",

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
		// {
		// 	title: "Clash Royale - Top Tier Cards",
		// 	description: "This application allows users to view the highest average win-rate cards for the top 200 player's prior 25 battles.",
		// 	extDescription: "",
		// 	images: {
		// 		portrait: [
		// 			["img/projects/top-tier-cards/thumbs/mobile-mid-results-thumb.jpg", 
		// 				"img/projects/top-tier-cards/mobile-mid-results-full.jpg", 
		// 				"Middle of querying"],
		// 			["img/projects/top-tier-cards/thumbs/mobile-full-results-thumb.jpg", 
		// 				"img/projects/top-tier-cards/mobile-full-results-full.jpg", 
		// 				"Results of queries - Mobile"],
		// 		],
		// 		landscape: [
		// 			["img/projects/top-tier-cards/thumbs/desktop-full-results-thumb.jpg", 
		// 				"img/projects/top-tier-cards/desktop-full-results-full.jpg", 
		// 				"Results of queries - Desktop"],
		// 		]
		// 	},
		// 	technologies: ["HTML5", "CSS3", "JS (ES6)", "jQuery"],
		// 	gitHub: "https://github.com/sinsys/top-tier-cards",
		// 	liveLink: "https://sinsys.github.io/top-tier-cards/"
		// }
	],
	// Key info about the profile that I can edit in one place if needed
	profile: {
		title: "Web developer too stubborn to accept bad practices",
		subtitle: "newTech && refactoring > oldHacks && spaghetti",
		profileImg: ["./img/profile-pic-128.png", "./img/profile-pic-256.png"],
		statement: `I have a yearning passion for learning new things and practicing what I already know. After working with <span class="highlight">AI</span>, <span class="highlight">Machine Learning</span>, <span class="highlight">Kaizen (process improvement)</span>, as well as <span class="highlight">Front/Back End Development</span>, I'm more eager than ever to push the limits on just what else these flourishing fields can accomplish with an agile team.`,
		name: "Nicholas Hazel",
		year: 2019
	},
	// Used for social media info
	social: {
		facebook: "https://www.facebook.com/NicoSiteDev/",
		email: "nico.full.stack.dev@gmail.com",
		twitter: "https://twitter.com/NicoFullStack/",
		github: "https://github.com/sinsys/",
		linkedIn: "https://linkedin.com/in/nicofullstackdev"
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

	$('.author').html(data.profile.name);
	$('.cr-year').html("&copy; " + data.profile.year);
}
// Updates off-canvas project details
function updateProjectDetails(project, direction){
	$('.details-title').html(project.title);
  $('.details-description').html(project.description);
	$('.details-images').html(getImgThumbs(project, "normal"));
	$('.details-technologies').html(getTechnologies(project.technologies));
	$('.details-links').html(`
		<a href="${project.gitHub}">
			<i class="fab fa-github"></i>
			<p class="details-label">GitHub Repo</p>
		</a>
		<a href="${project.liveLink}">
			<i class="fas fa-leaf"></i>
			<p class="details-label">Live Link</p>
		</a>
	`);
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
		let $imgThumbs = getImgThumbs(curProj, i);
		let $curProj = `
			<section class="project">
				<div class="project-wrapper">
				<h3 class="project-title">${curProj.title}</h3>
          <p class="project-desc">${curProj.description}</p>
					<h4 class="project-heading">Screenshots</h4>
					<div class="project-thumbnails">
						${$imgThumbs}
					</div>
					<h4 class="project-heading">Tech Used</h4>
					<div class="technologies">
						${$techIcons}
					</div>
					<h4 class="project-heading">Links</h4>
					<div class="details-links">
						<a href="${curProj.gitHub}" target="_blank">
							<i class="fab fa-github"></i>
							<p class="details-label">GitHub Repo</p>
						</a>
						<a href="${curProj.liveLink}" target="_blank">
							<i class="fas fa-leaf"></i>
							<p class="details-label">Live Link</p>
						</a>
					</div>
				</div>
			</section>
		`;
		$allProj+=$curProj;			

	}
	return $allProj;
}

// Returns a collection of all images of a project into a $DOM element
function getImgThumbs(project, index){
	let $imgThumbs = ``;

  if ( index % 2 === 0 ) {
    for(let i=0; i<project.images.landscape.length; i++){
      $imgThumbs+=`
        <div class="horizontal-thumb">
          <img class="project-thumbnail" src="${project.images.landscape[i][0]}" alt="${project.images.landscape[i][2]}" tabindex="0" data-full-image="${project.images.landscape[i][1]}" data-orientation="landscape" title="${project.images.portrait[i][2]}">
        </div>
      `;
    };
    for(let i=0; i<project.images.portrait.length; i++){
      $imgThumbs+=`
        <div class="vertical-thumb">
          <img class="project-thumbnail" src="${project.images.portrait[i][0]}" alt="${project.images.portrait[i][2]}" tabindex="0" data-full-image="${project.images.portrait[i][1]}" data-orientation="portrait" title="${project.images.portrait[i][2]}">
        </div>
      `;
    }
  } else {
    for(let i=0; i<project.images.portrait.length; i++){
      $imgThumbs+=`
        <div class="vertical-thumb">
          <img class="project-thumbnail" src="${project.images.portrait[i][0]}" alt="${project.images.portrait[i][2]}" tabindex="0" data-full-image="${project.images.portrait[i][1]}" data-orientation="portrait" title="${project.images.portrait[i][2]}">
        </div>
      `;
    }
    for(let i=0; i<project.images.landscape.length; i++){
      $imgThumbs+=`
        <div class="horizontal-thumb">
          <img class="project-thumbnail" src="${project.images.landscape[i][0]}" alt="${project.images.landscape[i][2]}" tabindex="0" data-full-image="${project.images.landscape[i][1]}" data-orientation="landscape" title="${project.images.portrait[i][2]}">
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
			case "HTML5": $technologyIcons+='<i class="fab fa-html5" title="HTML5"></i>';
				break;
			case "CSS3": $technologyIcons+='<i class="fab fa-css3-alt" title="CSS3"></i>';
				break;
			case "JS (ES6)": $technologyIcons+='<i class="fab fa-js-square" title="JS (ES6)"></i>';
				break;
			case "jQuery": $technologyIcons+='<i class="jquery-icon" title="jQuery"></i>';
        break;
      case "ReactJS": $technologyIcons+='<i class="react-icon" title="ReactJS"></i>';
        break;
      case "NodeJS": $technologyIcons+='<i class="nodejs-icon" title="NodeJS"></i>';
        break;
      case "PostgreSQL": $technologyIcons+='<i class="postgresql-icon" title="PostgreSQL"></i>';
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
		$('.mobile-navigation').css('right', 0).attr('aria-hidden', false);
		$('.page-wrapper').css('right', '320px');		
	} else {
		$('.mobile-navigation').css('right', '-320px').attr('aria-hidden', true);
		$('.page-wrapper').css('right', 0);
	}
}

// Scroll the page to a target function
function scrollToAnchor(target){
    $('html,body').animate({
    	scrollTop: target.offset().top
    },1000);
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
		</div>
		<div class="contact-icon">
			<a href="${social.linkedIn}" target="_blank">
				<i class="fab fa-linkedin"></i>
				<p class="contact-label">LinkedIn</p>
			</a>
		</div>`;
	return $socialTemplate;
}

// Function to scale image for the modal display
function scaleImage(img, wrapper){
	// Have a fake image to load to test width/height.
	$('#image-modal').css('opacity', 0).show().attr('aria-hidden', false);
	// Load a new img with an HTTP request
	let image = new Image();
	image.src = img.data('full-image');
	// After image is loaded, do some aspect ratio calculations to ensure it responsively fills the modal container
	image.onload = function() {
		// Calculate aspect ratio of image and the wrapper itself
		if((this.width / this.height) >= (wrapper.width() / wrapper.height())){
			// Add max-width: 100% if image has higher aspect ratio
			$('.modal-img').attr({'src': image.src, 'alt': img.attr('alt'), 'title': img.attr('alt')}).removeClass('.wide, .tall').addClass('wide');
		} else {
			// Add max-height: 100% if image has lower aspect ratio
			$('.modal-img').attr({'src': image.src, 'alt': img.attr('alt'), 'title': img.attr('alt')}).removeClass('.wide', '.tall').addClass('tall');
		}
		$('#image-modal').css('opacity', 1);
		// Update image modal text to reflect the alt text of the thumbnail
		$('.image-modal-alt').text(img.attr('alt'));
		// Show a background mask to make the original page darker to highlight the modal
		$('#background-mask').show().addClass('active').css('opacity', 1);
	}
}

function eventHandlers(){

	// Event handlers
	// Open mobile nav menu
	$('.ham-menu').on('click', function(){
		toggleNavMenu(true);
		$('.close-nav').focus();
	})
	// Close mobile nav menu
	$('.close-nav').on('click', function(){
		toggleNavMenu(false);
		$('.ql-portfolio').focus();
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
	// Fast scroll to about me
	$('.nav-about').on('click', function(){
		scrollToAnchor($('#about-me'));
		toggleNavMenu(false);
		$('#about-me').focus();
	});
	// Fast scroll to projects
	$('.nav-projects').on('click', function(){
		scrollToAnchor($('#projects'));
		toggleNavMenu(false);
		$('#projects').focus();
	});
	// Fast scroll to connect
	$('.nav-connect').on('click', function(){
		scrollToAnchor($('#connect'));
		toggleNavMenu(false);
		$('#connect').focus();
	});
	// Show image modal for thumbnails
	$('.projects-wrapper').on('click', '.project-thumbnail', function(){
		scaleImage($(this), $('.image-modal-image'));
		$('.close-image-modal').focus();
	})
	// Hide image modal
	$('.close-image-modal').on('click', function(){
		$('#background-mask').removeClass('active');
		$('#image-modal, #background-mask').css('opacity', 0).hide().attr('aria-hidden', true);
		$('#projects').focus();
	})
	// Extra accessibility for keyboard access
	$('.close-nav').on('keydown', function(e) {
		var code = e.which;
		// 13 = Return, 32 = Space
		if ((code === 13) || (code === 32)) {
			$(this).click();
		}
	});	
	$('.project-thumbnail').on('keydown', function(e) {
		var code = e.which;
		// 13 = Return, 32 = Space
		if ((code === 13) || (code === 32)) {
			$(this).click();
		}
	});	
	$('.close-image-modal').on('keydown', function(e) {
		var code = e.which;
		// 13 = Return, 32 = Space
		if ((code === 13) || (code === 32)) {
			$(this).click();
		}
	});	
}

$(function(){
	// Render the DOM
	renderInitDOM(STORE);
	
	// Setup event listeners
	eventHandlers();

	// Apply focus to correct area
	$('.ql-portfolio').focus();
});