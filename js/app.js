document.addEventListener ("DOMContentLoaded", function(){
    function toggleRadio () {
        //defining variables
        var radioStations = document.getElementsByClassName("radiostation");//all radio names will be collected as the HTML collection
        /*because class 'hidden' will be remove on a click, all radio controls will be stored in an array created in the for loop
        (based) on their position in the DOM*/
        var radioControls = [];
        for (var i = 0; i < radioStations.length; i++) {
            radioControls.push(radioStations[i].previousElementSibling);
        }
        //variable which stores paragraph in which an active radio name is meant to be displayed
        var displayedRadioName = document.getElementsByClassName("current_radio_name");

        for (var i = 0; i < radioStations.length; i++) { //for every radio station
            radioStations[i].addEventListener("click", function(event){
                event.preventDefault();
                //get the information (name and frequency) about a selected radiostation:
                var selectedRadioName = this.parentElement.innerText;
                //pass the information about a selection to the paragraph in the footer
                displayedRadioName[0].innerText = selectedRadioName;
                //checking wheter the radio which was clicked is currently active
                if (this.previousElementSibling.className !== "radio_controls") { //if not then:
                    for (var i = 0; i < radioControls.length; i++) {
                        //hide all others radio controls
                        radioControls[i].classList.remove("radio_controls");
                        radioControls[i].classList.add("hidden");
                    }
                    //update the footer (display an information about an active radiostation)
                    showFooterContent();
                    //and display controls for a current selection:
                    this.previousElementSibling.classList.remove("hidden");
                    this.previousElementSibling.classList.add("radio_controls");
                } else { 
                    //if the selected radio is active, then 'deactivate' it:
                    hideFooterContent(); //and hide a data in the footer
                    this.previousElementSibling.classList.remove("radio_controls");
                    this.previousElementSibling.classList.add("hidden");
                }
            });
        }
    }
    function showFooterContent() {
        var currentRadio = document.getElementsByClassName("current_radio");
        currentRadio[0].style.visibility = "visible";
    }
    function hideFooterContent() {
        var currentRadio = document.getElementsByClassName("current_radio");
        currentRadio[0].style.visibility = "hidden";
    }
    toggleRadio();
});
