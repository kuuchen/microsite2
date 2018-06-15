$(document).ready(function(){

//FIRST BOX
//about biennale text open
$('#tab001').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.aboutText').animate({height: '240px', opacity: '1'}, 300);
		$('.aboutClose').animate({opacity: '1'}, 300);
		$('body').css({"background-image":"url(images/main_pavilion.jpg)"});

		//hide featured projects and reset show button to show
		$('.featuredProjects').hide();
		$('.show').text('show');

		//hide show/hide button
		$('.show').animate({opacity: '0'}, 300);

		//hide everything else whether shown or not
		$('.centreText').animate({height: '0px', opacity: '0'}, 300);
		$('.centreClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
		$('.projectsClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.pavilionText').animate({height: '0px', opacity: '0'}, 300);
		$('.pavilionClose').animate({height: '0px', opacity: '0'}, 0);
		$('.linksText').animate({height: '0px', opacity: '0'}, 300);
		$('.linksClose').animate({height: '0px', opacity: '0'}, 0);  
	});

//about button close
$('.aboutClose').on('click', function(){
	$('.aboutText').animate({height: '0px', opacity: '0'}, 300);
	$(this).animate({opacity: '0'}, 300); 
});



//SECOND BOX
//pavilion text open 
$('#tab018').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.pavilionText').animate({height: '250px', opacity: '1'}, 300);
		$('.pavilionClose').animate({opacity: '1'}, 300);
		$('body').css({"background-image":"url(images/main_pavilion.jpg)"});

		//hide featured projects and reset show button to show
		$('.featuredProjects').hide();
		$('.show').text('show');

		//hide show/hide button
		$('.show').animate({opacity: '0'}, 300);

		//hide everything else whether shown or not
		$('.centreText').animate({height: '0px', opacity: '0'}, 300);
		$('.centreClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
		$('.projectsClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.aboutText').animate({height: '0px', opacity: '0'}, 300);
		$('.aboutClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.linksText').animate({height: '0px', opacity: '0'}, 300);
		$('.linksClose').animate({height: '0px', opacity: '0'}, 0);  
	});

//pavilion button close
$('.pavilionClose').on('click', function(){
	$('.pavilionText').animate({height: '0px', opacity: '0'}, 300);
	$(this).animate({opacity: '0'}, 300); 
});



//THIRD BOX
//centrepiece text open
$('#tab002').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.centreText').animate({height: '190px', opacity: '1'}, 300);
		$('.centreClose').animate({opacity: '1'}, 300);
		$('body').css({"background-image":"url(images/centrepiece.png)"});


		//hide featured projects and reset show button to show
		$('.featuredProjects').hide();
		$('.show').text('show');

		//hide show/hide button
		$('.show').animate({opacity: '0'}, 300);
		
		//hide everything else whether shown or not
		$('.aboutText').animate({height: '0px', opacity: '0'}, 300);
		$('.aboutClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
		$('.projectsClose').animate({height: '0px', opacity: '0'}, 0);
		$('.pavilionText').animate({height: '0px', opacity: '0'}, 300);
		$('.pavilionClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.linksText').animate({height: '0px', opacity: '0'}, 300);
		$('.linksClose').animate({height: '0px', opacity: '0'}, 0);  
	});

//centrepiece button close
$('.centreClose').on('click', function(){
	$('.centreText').animate({height: '0px', opacity: '0'}, 300);
	$(this).animate({opacity: '0'}, 300);  
});


//FOURTH BOX
//projects text open
$('#tab003').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.projectsText').animate({height: '183px', opacity: '1'}, 300);
		$('.projectsClose').animate({opacity: '1'}, 300);
		$('body').css({"background-image":"url(images/11_glm2.jpg)"});

		//show show/hide button
		$('.show').animate({opacity: '1'}, 300);

		//hide everything else whether shown or not
		$('.centreText').animate({height: '0px', opacity: '0'}, 300);
		$('.centreClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.aboutText').animate({height: '0px', opacity: '0'}, 300);
		$('.aboutClose').animate({height: '0px', opacity: '0'}, 0);
		$('.pavilionText').animate({height: '0px', opacity: '0'}, 300);
		$('.pavilionClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.linksText').animate({height: '0px', opacity: '0'}, 300);
		$('.linksClose').animate({height: '0px', opacity: '0'}, 0);  

		//hide projects 5 bc they get in the way
		//close project 5
		$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
		$('.pro05_ktpClose').animate({opacity: '0'}, 300);
		//close project 7
		$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
		$('.pro07_strClose').animate({opacity: '0'}, 300);
		//close project 8
		$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
		$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	});

//projects button close
$('.projectsClose').on('click', function(){
	$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
	$(this).animate({opacity: '0'}, 300); 
});



//FIFTH BOX
//links text open
$('#tab004').on('click', function() { 
		//show corresponding text box, close tab, and background image
		$('.linksText').animate({height: '200px', opacity: '1'}, 300);
		$('.linksClose').animate({opacity: '1'}, 300);
		$('body').css({"background-image":"url(images/05_ktp.jpg)"});

		//hide featured projects and reset show button to show
		$('.featuredProjects').hide();
		$('.show').text('show');

		//hide show/hide button
		$('.show').animate({opacity: '0'}, 300);

		//hide everything else whether shown or not
		$('.centreText').animate({height: '0px', opacity: '0'}, 300);
		$('.centreClose').animate({height: '0px', opacity: '0'}, 0); 
		$('.aboutText').animate({height: '0px', opacity: '0'}, 300);
		$('.aboutClose').animate({height: '0px', opacity: '0'}, 0);
		$('.pavilionText').animate({height: '0px', opacity: '0'}, 300);
		$('.pavilionClose').animate({height: '0px', opacity: '0'}, 0);
		$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
		$('.projectsClose').animate({height: '0px', opacity: '0'}, 0); 
	});

//links button close
$('.linksClose').on('click', function(){
	$('.linksText').animate({height: '0px', opacity: '0'}, 300);
	$(this).animate({opacity: '0'}, 300); 
});

////////////EVERYTHING RELATED TO FEATURED PROJECTS HERE DON'T TOUCH ABOVE///////////////

// //show projects text
$('.show').on('click', function(){
	$('.featuredProjects').toggle();
	 $(this).text(function(i, text){
          return text === "hide" ? "show" : "hide";
      })
});

//open pro01_lks text
$('.pro01_lksIdea').on('click', function(){ //on click opens the text
	$('.pro01_lksText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/01_lks.jpg)"});
	$('.pro01_lksClose').animate({opacity: '1'}, 300);

	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro01_lks text via pro01_lks close
$('.pro01_lksClose').on('click', function(){ //on close click closes the text
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
});




//open pro02_tho text
$('.pro02_thoIdea').on('click', function(){ //on click opens the text
	$('.pro02_thoText').animate({height: '122px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/02_tho.jpg)"});
	$('.pro02_thoClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro02_tho text via pro02_tho close
$('.pro02_thoClose').on('click', function(){ //on close click closes the text
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
});




//open pro03_std text
$('.pro03_stdIdea').on('click', function(){ //on click opens the text
	$('.pro03_stdText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/03_std.jpg)"});
	$('.pro03_stdClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro03_std text via pro03_std close
$('.pro03_stdClose').on('click', function(){ //on close click closes the text
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
});




//open pro04_ebs text
$('.pro04_ebsIdea').on('click', function(){ //on click opens the text
	$('.pro04_ebsText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/04_ebs.jpg)"});
	$('.pro04_ebsClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro04_ebs text via pro04_ebs close
$('.pro04_ebsClose').on('click', function(){ //on close click closes the text
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
});





//open pro05_ktp text
$('.pro05_ktpIdea').on('click', function(){ //on click opens the text
	$('.pro05_ktpText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/05_ktp2.jpg)"});
	$('.pro05_ktpClose').animate({opacity: '1'}, 300);

	//close featured window bc it gets in the way
	$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
	$('.projectsClose').animate({opacity: '0'}, 300); 

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);

});
//close pro05_ktp text via pro05_ktp close
$('.pro05_ktpClose').on('click', function(){ //on close click closes the text
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
});





//open pro06_baptext
$('.pro06_bapIdea').on('click', function(){ //on click opens the text
	$('.pro06_bapText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/06_bap2.jpg)"});
	$('.pro06_bapClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro06_bap text via pro06_bap close
$('.pro06_bapClose').on('click', function(){ //on close click closes the text
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
});





//open pro07_strtext
$('.pro07_strIdea').on('click', function(){ //on click opens the text
	$('.pro07_strText').animate({height: '195px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/07_str4.jpg)"});
	$('.pro07_strClose').animate({opacity: '1'}, 300);

	//close featured window bc it gets in the way
	$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
	$('.projectsClose').animate({opacity: '0'}, 300); 

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro07_str text via pro07_str close
$('.pro07_strClose').on('click', function(){ //on close click closes the text
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
});






//open pro08_ilmtext
$('.pro08_ilmIdea').on('click', function(){ //on click opens the text
	$('.pro08_ilmText').animate({height: '212px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/08_ilm.jpg)"});
	$('.pro08_ilmClose').animate({opacity: '1'}, 300);

	//close featured window bc it gets in the way
	$('.projectsText').animate({height: '0px', opacity: '0'}, 300);
	$('.projectsClose').animate({opacity: '0'}, 300); 

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro08_ilm text via pro08_ilm close
$('.pro08_ilmClose').on('click', function(){ //on close click closes the text
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
});




//open pro09_cpctext
$('.pro09_cpcIdea').on('click', function(){ //on click opens the text
	$('.pro09_cpcText').animate({height: '123px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/09_cpc.jpg)"});
	$('.pro09_cpcClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro09_cpc text via pro09_cpc close
$('.pro09_cpcClose').on('click', function(){ //on close click closes the text
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
});





//open pro10_lbotext
$('.pro10_lboIdea').on('click', function(){ //on click opens the text
	$('.pro10_lboText').animate({height: '140px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/10_lbo.jpg)"});
	$('.pro10_lboClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);

});
//close pro10_lbo text via pro10_lbo close
$('.pro10_lboClose').on('click', function(){ //on close click closes the text
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
});






//open pro11_glmtext
$('.pro11_glmIdea').on('click', function(){ //on click opens the text
	$('.pro11_glmText').animate({height: '123px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/11_glm3.jpg)"});
	$('.pro11_glmClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 12
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});
//close pro11_glm text via pro12_clr close
$('.pro11_glmClose').on('click', function(){ //on close click closes the text
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
});





//open pro12_clrtext
$('.pro12_clrIdea').on('click', function(){ //on click opens the text
	$('.pro12_clrText').animate({height: '176px', opacity: '1'}, 300);
	$('body').css({"background-image":"url(images/12_clr.jpg)"});
	$('.pro12_clrClose').animate({opacity: '1'}, 300);

	//close project 1
	$('.pro01_lksText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro01_lksClose').animate({opacity: '0'}, 300);
	//close project 2
	$('.pro02_thoText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro02_thoClose').animate({opacity: '0'}, 300);
	//close project 3
	$('.pro03_stdText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro03_stdClose').animate({opacity: '0'}, 300);
	//close project 4
	$('.pro04_ebsText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro04_ebsClose').animate({opacity: '0'}, 300);
	//close project 5
	$('.pro05_ktpText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro05_ktpClose').animate({opacity: '0'}, 300);
	//close project 6
	$('.pro06_bapText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro06_bapClose').animate({opacity: '0'}, 300);
	//close project 7
	$('.pro07_strText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro07_strClose').animate({opacity: '0'}, 300);
	//close project 8
	$('.pro08_ilmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro08_ilmClose').animate({opacity: '0'}, 300);
	//close project 9
	$('.pro09_cpcText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro09_cpcClose').animate({opacity: '0'}, 300);
	//close project 10
	$('.pro10_lboText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro10_lboClose').animate({opacity: '0'}, 300);
	//close project 11
	$('.pro11_glmText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro11_glmClose').animate({opacity: '0'}, 300);
});
//close pro12_clr text via pro12_clr close
$('.pro12_clrClose').on('click', function(){ //on close click closes the text
	$('.pro12_clrText').animate({height: '0px', opacity: '0'}, 300);
	$('.pro12_clrClose').animate({opacity: '0'}, 300);
});



});
