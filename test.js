import cytoscape from "cytoscape";

// init environment
var cy = cytoscape({
  // eslint-disable-next-line no-undef
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
  group: "nodes",
  data: { id: "test" },
  position: { x: 300, y: 300 },
});
