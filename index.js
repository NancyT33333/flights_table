const show_departuresCheckbox = document.querySelector("#displ-departures");
const show_arrivalsCheckbox = document.querySelector('#displ-arrivals');
const show_allCheckbox = document.querySelector('#displ-all');
const show_delayedCheckbox = document.querySelector('#displ-delayed');



show_departuresCheckbox.addEventListener('click', (event) => {
	if (show_departuresCheckbox.checked == true) {
		var elemsToHide = document.getElementsByClassName("arrival"); //elemsToHide is an array
    	for(var i = 0; i < elemsToHide.length; i++){
        
        	elemsToHide[i].style.display = "none"; 
    	}

    	var departuresToShow = document.getElementsByClassName("departure") ;

    	for(var i = 0; i < departuresToShow.length; i++){
        
        	departuresToShow[i].style.display = "table-row"; 
    	}



    	
	}
});

show_arrivalsCheckbox.addEventListener('click', (event) => {
	if (show_arrivalsCheckbox.checked == true) {
		var elemsToHide = document.getElementsByClassName("departure"); //elemsToHide is an array
    	for(var i = 0; i < elemsToHide.length; i++){
        
        	elemsToHide[i].style.display = "none"; 
    	}

    	var arrivalsToShow = document.getElementsByClassName("arrival") ; 
		
		for ( var i = 0; i < arrivalsToShow.length; i++ ) {        
        	arrivalsToShow[i].style.display = "table-row"; 
    	}

	}
});





show_allCheckbox.addEventListener('click', (event) => {
	if (show_allCheckbox.checked == true) {
		var arrivalsToShow = document.getElementsByClassName("arrival") ; 
		
		for(var i = 0; i < arrivalsToShow.length; i++){
        
        	arrivalsToShow[i].style.display = "table-row"; 
    	}

    	var departuresToShow = document.getElementsByClassName("departure") ;

    	for(var i = 0; i < departuresToShow.length; i++){
        
        	departuresToShow[i].style.display = "table-row"; 
    	}
	}
});

show_delayedCheckbox.addEventListener('click', (event) => {
	if (show_delayedCheckbox.checked == true)  {
		var elemstoHide = document.getElementsByClassName('as_planned');

		for (var elem = 0; elem < elemstoHide.length; elem++ ) {
			elemstoHide[elem].style.display = 'none';
		}
	}

});