// init environment 
var cy = cytoscape({
  container: document.getElementById("cy"),
  style: [
    {
      selector: "node",
      style: {
        label: "data(id)",
      },
    },
  ],
});


//add nodes and edges
cy.add({
    group: 'nodes',
    data: { id: 'test'},
    position: { x: 300, y: 300 }
});