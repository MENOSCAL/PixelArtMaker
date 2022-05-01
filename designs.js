document.addEventListener("DOMContentLoaded", function(){
    start();
});

function start() {
    // Select color input
    let colorPicker = document.getElementById("colorPicker");
    // Select size input
    let inputHeight = document.getElementById("inputHeight");
    let inputWidth = document.getElementById("inputWidth");
    // When size is submitted by the user, call makeGrid()
    let form = document.getElementById("sizePicker");
    form.addEventListener("submit",makeGrid);

    function makeGrid(event) {
        event.preventDefault();
        let table = document.getElementById("pixelCanvas");
        let tableBool = true;
        let heightSize = inputHeight.value;
        let widthSize = inputWidth.value;
        let rowSize = table.rows.length;
        let columnSize;
        if (rowSize != 0) {
            columnSize = table.rows[0].cells.length;
            if (heightSize == rowSize && widthSize == columnSize) {
                if (!document.querySelector(".paint")) tableBool = false;
            }
        }
        if (tableBool) {
            let parentTable = table.parentElement;
            table.remove();
            let newTable = document.createElement("table");
            let newTbody = document.createElement("tbody");
            newTable.setAttribute("id", "pixelCanvas");
            for (let row = 0; row < heightSize; row++) {
                let newRow = newTbody.insertRow();
                for (let column = 0; column < widthSize; column++) {
                    let newColumn = newRow.insertCell();
                    newColumn.addEventListener("click", respondeToTheClick);
                }
            }
            //newTbody.addEventListener("click", respondeToTheClick);
            newTable.appendChild(newTbody);
            parentTable.appendChild(newTable);
        }
    }
    // This function response to click events on the grid and will set the color to TD tag.
    function respondeToTheClick(event){
        if (event.target.nodeName === "TD") {
            event.target.setAttribute("class","paint");
            event.target.setAttribute("style","background-color: "+colorPicker.value);
        }
    }
}