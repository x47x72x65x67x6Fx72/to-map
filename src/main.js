/**
 * This FILE TAKES IN GLOBAL DEFINED networkdata: {nodes: DataSet, edges: DataSet}
 */
/** Set References */
const container = document.getElementById("network");
const detail = document.getElementById("detail");



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
    label: node.label || node.name, // Konvertiert "name" automatisch in "label" (für Vis.js)
    gridX: node.x,                  // Sichert die Originalwerte für die Detail-Anzeige
    gridY: node.y,
    x: node.x * gridScale,          // Skalierte Breite
    y: node.y * gridScale           // Skalierte Höhe
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
            size: 12,
            face: 'Tahoma, Arial'
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

        detail.innerHTML = `<strong>${clickedNode.label}</strong><br>Grid-Koordinaten: X:${clickedNode.gridX} | Y:${clickedNode.gridY}`;
    }
});


/** Define search */
function searchNode() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    if (!searchVal) return;

    const foundNodes = nodes.get({
        filter: (item) => {
            return (item.label || item.name || '').toLowerCase().includes(searchVal) || (item.info || '').toLowerCase().includes(searchVal);
        }
    })

    if (foundNodes.length > 0) {
        network.selectNodes([foundNodes[0].id]);
        network.focus(foundNodes[0].id);

        detail.innerHTML = `<strong>${foundNodes[0].label}</strong><br>Grid-Koordinaten: X:${foundNodes[0].gridX} | Y:${foundNodes[0].gridY}`;
    }
}