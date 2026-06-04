// This File defines the main logic and needs a previous defined struct: networkdata! -> see @res/*.js

// Setup References
const container = document.getElementById("network");           // Spawnpoint of Network-Canvas
const detail = document.getElementById("detail");               // Detail-Box-Root
const detail_name = document.getElementById("detail_name");     // Detail-Box: Name-Field
const detail_area = document.getElementById("detail_area");     // Detail-Box: Areas-Field
const detail_bosses = document.getElementById("detail_bosses"); // Detail-Box: Bosses-Field
const detail_mobs = document.getElementById("detail_mobs");     // Detail-Box: Mobs-Field

// The raw networkdata contains the nodes with a gridlayout, defining positions via x and y.
// We need to convert the grid-layout into vis-layout
const canvasWidth = container.clientWidth || 800;   // Get horizontal size
const canvasHeight = container.clientHeight || 600; // Get vertical size

// Extract all registered nodes and find max x and y for x, y >= 0
const allNodes = networkdata.nodes.get();
const maxGridX = Math.max(...allNodes.map(n => n.x || 0));
const maxGridY = Math.max(...allNodes.map(n => n.y || 0));

// Calculate possible scale via maxX and maxY
const scaleX = (canvasWidth - 100) / (maxGridX > 0 ? maxGridX : 1);
const scaleY = (canvasHeight - 100) / (maxGridY > 0 ? maxGridY : 1);
const gridScale = Math.max(Math.min(scaleX, scaleY), 50) * 2; 

// Overwrite/ Update x and y for all nodes with vis-layout values
const updatedNodes = allNodes.map(node => ({
    id: node.id,
    label: node.label,
    x: node.x * gridScale,
    y: node.y * gridScale
}));
networkdata.nodes.update(updatedNodes);



// Set Vis-Network-Options
const options = {
    autoResize: false,
    physics: false,
    interaction: {
        hover: true,
        dragNodes: false
    },
    nodes: {
        shape: 'dot', 
        size: 16,
        widthConstraint: {
            maximum: 100 // Label-Linebreak
        },
        font: {
            color: '#ffffff',
            size: 12,
            face: 'Tahoma, Arial',
        },
        color: {
            highlight: {
                background: '#32cd32', // Node becomes color if selected
            }
        }
    },
    edges: {
        smooth: false
    }
};
// Create Network with given input
const network = new vis.Network(container, networkdata, options);


// Define Selection-Event
network.on("click", (params) => {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const clickedNode = nodes.get(nodeId);

        // Update Detail-Content with clicked nodes data
        detail_name.innerHTML =`<a href="https://coryn.club/map.php?name=${clickedNode.label}" target="_blank" rel="noopener noreferrer">${clickedNode.label}</a></li>`
        detail_area.innerHTML = `Areas:<ul>${clickedNode.d.a.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_bosses.innerHTML = `Bosses:<ul>${clickedNode.d.b.map(el => `<li><a href="https://coryn.club/monster.php?name=${el}" target="_blank" rel="noopener noreferrer">${el}</a></li>`).join('')}</ul>`;
        detail_mobs.innerHTML = `Mobs:<ul>${clickedNode.d.m.map(el => `<li><a href="https://coryn.club/monster.php?name=${el}" target="_blank" rel="noopener noreferrer">${el}</a></li>`).join('')}</ul>`;
        detail.style = "display:flex";
    } else {
        detail.style = ''; // Hide
    }
});


// Define Searchfunction
function searchNode() {
    // Search-String
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    if (!searchVal) return;

    // Search String in: Name -> Area -> Bosses -> Mobs
    const foundNodes = nodes.get({
        filter: (node) => {
            return (node.label).toLowerCase().includes(searchVal) 
            || node.d.a.some(text => text.toLowerCase().includes(searchVal))
            || node.d.b.some(text => text.toLowerCase().includes(searchVal))
            || node.d.m.some(text => text.toLowerCase().includes(searchVal));
        }
    })

    // If atleast one node is found -> update data with first found node
    if (foundNodes.length > 0) {
        network.selectNodes([foundNodes[0].id]);
        network.focus(foundNodes[0].id);

        detail_name.innerHTML = `<a href="https://coryn.club/map.php?name=${foundNodes[0].label}" target="_blank" rel="noopener noreferrer">${foundNodes[0].label}</a></li>`;
        detail_area.innerHTML = `Areas:<ul>${foundNodes[0].d.a.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_bosses.innerHTML = `Bosses:<ul>${foundNodes[0].d.b.map(el => `<li><a href="https://coryn.club/monster.php?name=${el}" target="_blank" rel="noopener noreferrer">${el}</a></li>`).join('')}</ul>`;
        detail_mobs.innerHTML = `Mobs:<ul>${foundNodes[0].d.m.map(el => `<li><a href="https://coryn.club/monster.php?name=${el}" target="_blank" rel="noopener noreferrer">${el}</a></li>`).join('')}</ul>`;
        detail.style = "display:flex";
    }
}