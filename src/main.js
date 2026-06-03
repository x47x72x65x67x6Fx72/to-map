/**
 * This FILE TAKES IN GLOBAL DEFINED networkdata: {nodes: DataSet, edges: DataSet}
 */
/** Set References */
const container = document.getElementById("network");
const detail = document.getElementById("detail");
const detail_name = document.getElementById("detail_name");
const detail_area = document.getElementById("detail_area");
const detail_bosses = document.getElementById("detail_bosses");
const detail_mobs = document.getElementById("detail_mobs");



// TODO: ÜBERABEITEN
// Skalierung dynamisch anhand der Canvas-Größe berechnen
const canvasWidth = container.clientWidth || 800;
const canvasHeight = container.clientHeight || 600;

const allNodes = networkdata.nodes.get();
const maxGridX = Math.max(...allNodes.map(n => n.x || 0));
const maxGridY = Math.max(...allNodes.map(n => n.y || 0));

const scaleX = (canvasWidth - 100) / (maxGridX > 0 ? maxGridX : 1);
const scaleY = (canvasHeight - 100) / (maxGridY > 0 ? maxGridY : 1);
const gridScale = Math.max(Math.min(scaleX, scaleY), 50) * 2; // Abstand zwischen den Nodes verdoppeln

// Knoten aus dem Dataset anpassen (skalieren) und zurückschreiben
const updatedNodes = allNodes.map(node => ({
    id: node.id,
    label: node.label,
    x: node.x * gridScale,
    y: node.y * gridScale
}));
networkdata.nodes.update(updatedNodes);




/** Setup VIZ-Network */
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
            maximum: 100 // Erzwingt einen automatischen Zeilenumbruch, wenn der Text breiter als 100 Pixel ist
        },
        font: {
            color: '#ffffff', // Macht die Schrift reinweiß
            size: 12,
            face: 'Tahoma, Arial',
        },
        color: {
            highlight: {
                background: '#32cd32',
            }
        }
    },
    edges: {
        smooth: false
    }
};
const network = new vis.Network(container, networkdata, options);

/**Define custom Networkevents*/
network.on("click", (params) => {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const clickedNode = nodes.get(nodeId);

        detail_name.innerHTML = clickedNode.label;
        detail_area.innerHTML = `Areas:<ul>${clickedNode.d.a.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_bosses.innerHTML = `Bosses:<ul>${clickedNode.d.b.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_mobs.innerHTML = `Mobs:<ul>${clickedNode.d.m.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail.style = "display:flex";
    } else {
        detail.style = '';
    }
});


/** Define search */
function searchNode() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    if (!searchVal) return;

    const foundNodes = nodes.get({
        filter: (node) => {
            return (node.label).toLowerCase().includes(searchVal) 
            || node.d.a.some(text => toLowerCase().includes(searchVal))
            || node.d.b.some(text => toLowerCase().includes(searchVal))
            || node.d.m.some(text => toLowerCase().includes(searchVal));
        }
    })

    if (foundNodes.length > 0) {
        network.selectNodes([foundNodes[0].id]);
        network.focus(foundNodes[0].id);

        detail_name.innerHTML = foundNodes[0].label;
        detail_area.innerHTML = `Areas:<ul>${foundNodes[0].d.a.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_bosses.innerHTML = `Bosses:<ul>${foundNodes[0].d.b.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail_mobs.innerHTML = `Mobs:<ul>${foundNodes[0].d.m.map(el => `<li>${el}</li>`).join('')}</ul>`;
        detail.style = "display:flex";
    }
}