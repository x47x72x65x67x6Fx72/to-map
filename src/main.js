       // 1. Daten für das Netzwerk definieren
        const nodes = new vis.DataSet([
            { id: 1, label: 'Server A', info: 'Standort: Frankfurt, IP: 192.168.1.1' },
            { id: 2, label: 'Server B', info: 'Standort: Berlin, IP: 192.168.1.2' },
            { id: 3, label: 'Datenbank', info: 'PostgreSQL, Hauptdatenbank' }
        ]);

        const edges = new vis.DataSet([
            { from: 1, to: 2 },
            { from: 2, to: 3 }
        ]);

        const container = document.getElementById('network1');
        const data = { nodes: nodes, edges: edges };
        
        // 2. Optionen (z.B. Hover aktivieren)
        const options = {
            interaction: { hover: true },
            nodes: { shape: 'dot', size: 16 }
        };

        // Netzwerk initialisieren
        const network = new vis.Network(container, data, options);

        // 3. Klick-Event für Zusatzinformationen
        network.on("click", function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const clickedNode = nodes.get(nodeId);
                document.getElementById('info-box').innerHTML = `<strong>${clickedNode.label}</strong><br>${clickedNode.info}`;
            }
        });

        // 4. Suchfunktion
        function searchNode() {
            const searchVal = document.getElementById('search-input').value.toLowerCase();
            if (!searchVal) return;

            // Finde den Knoten, dessen Label den Suchbegriff enthält
            const foundNode = nodes.get({
                filter: function (item) {
                    return item.label.toLowerCase().includes(searchVal) || item.info.toLowerCase().includes(searchVal);
                }
            });

            if (foundNode.length > 0) {
                // Kamera auf den ersten gefundenen Knoten fokussieren und ihn auswählen
                network.selectNodes([foundNode[0].id]);
                network.focus(foundNode[0].id, { scale: 1.5, animation: true });
                
                // Info-Box direkt füllen
                document.getElementById('info-box').innerHTML = `<strong>${foundNode[0].label}</strong><br>${foundNode[0].info}`;
            } else {
                alert("Kein Knoten gefunden.");
            }
        }