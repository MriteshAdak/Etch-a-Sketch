// implemeting script for Etch-a-Sketch

let side = 16;
const gridContainer = document.querySelector("#gridContainer");

makeGrid(side);

const gridSize = document.querySelector("#gridSize");
const sketch = document.querySelector("#sketch");

gridSize.addEventListener("click", () =>
    {
        while (gridContainer.firstChild)
            gridContainer.lastChild.remove();
        
        do
        {
            side = parseInt(prompt("Enter the grid size of your choice (<100): "));
        } while(side > 100);
        
        makeGrid(side);
    });

sketch.addEventListener("click", () => 
    {
        const grids = document.querySelectorAll(".grids");
        for (const grid of grids)
            grid.style.backgroundColor = "white";
    });

function makeGrid(side)
{
    for (let i = 0; i < side; i++)
    {
        const gridRows = document.createElement("div");
        gridRows.style.display = "flex";
        gridRows.style.flexGrow = "1";
        gridContainer.appendChild(gridRows);

        for (let j = 0; j < side; j++)
        {
            const gridColumns = document.createElement("div");
            gridColumns.style.flexGrow = "1";
            gridColumns.className = "grids";
            gridRows.appendChild(gridColumns);
            gridColumns.addEventListener("mouseover", (e) =>
                {
                    e.target.style.backgroundColor = randomColour();
                });
        }
    }
}

function randomColour()
{
    const keys = "0123456789ABCDEF";
    let colour = "#";
    
    for (let i = 0; i < 6; i++)
        colour += keys[Math.floor(Math.random() * 16)];

    return colour;
}