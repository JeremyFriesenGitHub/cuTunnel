var cy = cytoscape({
  container: document.getElementById("cy"),
  style: [{ selector: "node", style: { label: "data(id)" } }],
});
cy.add([
  { group: "nodes", data: { id: "VSIM" }, position: { x: 90, y: 870 } },
  { group: "nodes", data: { id: "Loeb" }, position: { x: 135, y: 870 } },
  { group: "nodes", data: { id: "ARISE" }, position: { x: 190, y: 870 } },
  { group: "nodes", data: { id: "B-Stairs" }, position: { x: 365, y: 765 } },
  { group: "nodes", data: { id: "A-Stairs" }, position: { x: 330, y: 730 } },
  { group: "nodes", data: { id: "Steacie" }, position: { x: 465, y: 745 } },
  {
    group: "nodes",
    data: { id: "Health Sciences" },
    position: { x: 495, y: 745 },
  },
  { group: "nodes", data: { id: "Southam" }, position: { x: 110, y: 835 } },
  {
    group: "nodes",
    data: { id: "Kali Theatre" },
    position: { x: 150, y: 835 },
  },
  { group: "edges", data: { id: "e0", source: "VSIM", target: "Loeb" } },
  { group: "edges", data: { id: "e1", source: "Loeb", target: "ARISE" } },
  { group: "edges", data: { id: "e2", source: "ARISE", target: "B-Stairs" } },
  { group: "edges", data: { id: "e3", source: "B-Stairs", target: "Steacie" } },
  {
    group: "edges",
    data: { id: "e4", source: "B-Stairs", target: "A-Stairs" },
  },
  {
    group: "edges",
    data: { id: "e5", source: "Steacie", target: "Health Sciences" },
  },
  { group: "edges", data: { id: "e6", source: "Loeb", target: "Southam" } },
  {
    group: "edges",
    data: { id: "e7", source: "Loeb", target: "Kali Theatre" },
  },
  {
    group: "edges",
    data: { id: "e8", source: "Kali Theatre", target: "Southam" },
  },
]);
