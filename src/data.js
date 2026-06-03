const networkData = {
    nodes: [
        { id: 1, label: 'Server A', info: 'Standort: Frankfurt, IP: 192.168.1.1' },
        { id: 2, label: 'Server B', info: 'Standort: Berlin, IP: 192.168.1.2' },
        { id: 3, label: 'Datenbank', info: 'PostgreSQL, Hauptdatenbank' }
    ],
    edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ]
};