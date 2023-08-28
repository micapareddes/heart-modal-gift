const clickedModal = document.getElementById("present")

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape"){
        console.log('adc invisible')
        clickedModal.classList.add("invisible")
    }
} )

function openPresent(){
    console.log('tirou inv')
    clickedModal.classList.remove("invisible")
}
