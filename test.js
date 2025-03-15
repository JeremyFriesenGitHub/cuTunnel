/* eslint-disable no-undef */

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
    {
      selector: "edge#e6",
      style: {
        "line-color": "orange",
        "target-arrow-color": "orange",
    },
  },
  {
    selector: "edge#e10",
    style: {
      "line-color": "orange",
      "target-arrow-color": "orange",
    },
  },
  ],
});

// add nodes and edges
cy.add([
  {
    group: "nodes",
    data: { id: "VSIM" },
    position: { x: 90, y: 870 },
  },
  {
    group: "nodes",
    data: { id: "MacOdrum Library" },
    position: { x: 179, y: 522 },
  },
  {
    group: "nodes",
    data: { id: "Dunton Tower" },
    position: { x: 206, y: 522 },
  },
  {
    group: "nodes",
    data: { id: "Azrieli Pavilion" },
    position: { x: 253, y: 522 },
  },
  {
    group: "nodes",
    data: { id: "Azrieli Theater" },
    position: { x: 285, y: 522 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 1)" },
    position: { x: 350, y: 438 },
  },
  {
    group: "nodes",
    data: { id: "Architechture Building" },
    position: { x: 433, y: 438 },
  },
  {
    group: "nodes",
    data: { id: "Nicol Building" },
    position: { x: 510, y: 438 },
  },
  {
    group: "nodes",
    data: { id: "Minto Case" },
    position: { x: 510, y: 379 },
  },
  {
    group: "nodes",
    data: { id: "Renfew/Prescott House" },
    position: { x: 531, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Frontenac/Lanark House" },
    position: { x: 487, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Lennox/Addington House" },
    position: { x: 544, y: 244 },
  },
  {
    group: "nodes",
    data: { id: "Glengarry/Russel Grenville House" },
    position: { x: 581, y: 203 },
  },
  {
    group: "nodes",
    data: { id: "St.Patricks/Stormont Dundas House" },
    position: { x: 627, y: 157 },
  },
  {
    group: "nodes",
    data: { id: "Leeds House" },
    position: { x: 631, y: 61 },
  },
  {
    group: "nodes",
    data: { id: "Leeds Maintenance Building" },
    position: { x: 592, y: 492 },
  },
  {
    group: "nodes",
    data: { id: "Athletics Alumni Hall Fieldhouse Ice House" },
    position: { x: 711, y: 388 },
  },
  {
    group: "nodes",
    data: { id: "Athletics Alumni Hall\nFieldhouse Ice House" },
    position: { x: 711, y: 388 },
  },
  {
    group: "nodes",
    data: { id: "Carleton Technology &\nTraining Center" },
    position: { x: 642, y: 539 },
  },
  {
    group: "nodes",
    data: { id: "Nesbitt Biology\nBuilding" },
    position: { x: 677, y: 590 },
  },
  {
    group: "nodes",
    data: { id: "Robertson Hall" },
    position: { x: 568, y: 665 },
  },
  {
    group: "nodes",
    data: { id: "Canal Building" },
    position: { x: 407, y: 402 },
  },
  {
    group: "nodes",
    data: { id: "Mackenzie Building" },
    position: { x: 432, y: 380 },
  },
  {
    group: "nodes",
    data: { id: "Loeb" },
    position: { x: 135, y: 870 },
  },
  {
    group: "nodes",
    data: { id: "ARISE" },
    position: { x: 190, y: 870 },
  },
  {
    group: "nodes",
    data: { id: "B-Stairs" },
    position: { x: 365, y: 765 },
  },
  {
    group: "nodes",
    data: { id: "A-Stairs" },
    position: { x: 330, y: 730 },
  },
  {
    group: "nodes",
    data: { id: "Steacie" },
    position: { x: 465, y: 745 },
  },
  {
    group: "nodes",
    data: { id: "Health Sciences" },
    position: { x: 495, y: 745 },
  },
  {
    group: "nodes",
    data: { id: "Southam" },
    position: { x: 110, y: 835 },
  },
  {
    group: "nodes",
    data: { id: "Paterson Hall" },
    position: { x: 231, y: 539 },
  },
  {
    group: "nodes",
    data: { id: "Southam2" },
    position: { x: 110, y: 755 },
  },
  {
    group: "nodes",
    data: { id: "Kali Theatre" },
    position: { x: 150, y: 835 },
  },
  {
    group: "nodes",
    data: { id: "Herzberg Labs" },
    position: { x: 415, y: 830 },
  },
  {
    group: "nodes",
    data: { id: "Steacie2" },
    position: { x: 510, y: 830 },
  },
  {
    group: "nodes",
    data: { id: "Richcraft" },
    position: { x: 510, y: 860 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 4)" },
    position: { x: 465, y: 640 },
  },
  {
    group: "edges",
    data: { id: "e0", source: "VSIM", target: "Loeb" },
  },
  {
    group: "edges",
    data: { id: "e1", source: "Loeb", target: "ARISE" },
  },
  {
    group: "edges",
    data: { id: "e2", source: "ARISE", target: "B-Stairs" },
  },
  {
    group: "edges",
    data: { id: "e3", source: "B-Stairs", target: "Steacie" },
  },
  {
    group: "edges",
    data: { id: "e4", source: "B-Stairs", target: "A-Stairs" },
  },
  {
    group: "edges",
    data: { id: "e5", source: "Steacie", target: "Health Sciences" },
  },
  {
    group: "edges",
    data: { id: "e6", source: "Loeb", target: "Southam" },
  },
  {
    group: "edges",
    data: { id: "e7", source: "Loeb", target: "Kali Theatre" },
  },
  {
    group: "edges",
    data: { id: "e8", source: "Kali Theatre", target: "Southam" },
  },
  {
    group: "edges",
    data: { id: "e9", source: "Kali Theatre", target: "Southam2" },
  },
  {
    group: "edges",
    data: { id: "e10", source: "Southam", target: "Southam2" },
  },
  {
    group: "edges",
    data: { id: "e11", source: "Steacie", target: "Herzberg Labs" },
  },
  {
    group: "edges",
    data: { id: "e12", source: "Herzberg Labs", target: "Steacie2" },
  },
  {
    group: "edges",
    data: { id: "e13", source: "Steacie2", target: "Richcraft" },
  },
  {
    group: "edges",
    data: { id: "e14", source: "UC (Level 4)", target: "Steacie" },
  },
]);
