// implemeting script for Etch-a-Sketch

let rows = 16;
let columns = 16;
const gridContainer = document.querySelector("#gridContainer");

function makeGrid(rows, columns)
{
    for (let i = 0; i < rows; i++)
    {
        const gridRows = document.createElement("div");
        gridRows.style.display = "flex";
        gridRows.style.flexGrow = "1";
        gridContainer.appendChild(gridRows);

        for (let j = 0; j < columns; j++)
        {
            const gridColumns = document.createElement("div");
            gridColumns.style.flexGrow = "1";
            // gridColumns.style.border = "solid 1px black";
            gridRows.appendChild(gridColumns);
        }
    }
}

makeGrid(rows, columns);