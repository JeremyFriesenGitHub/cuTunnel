/* eslint-disable no-undef */

// init environment
var cy = cytoscape({
  container: document.getElementById("cy"),
  style: [
    {
      selector: "node",
      style: {
        label: "data(id)",
        "border-color": "black",
        "border-width": 1,
      },
    },
    {
      selector: "edge#e23",
      style: {
        "line-style": "dashed",
      },
    },
    {
      selector: "edge#e4",
      style: {
        "line-style": "dotted",
      },
    },
    // Orange edges
    {
      selector: "edge#e16",
      style: {
        "line-color": "orange",
        "target-arrow-color": "orange",
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
    {
      selector: "edge#e8",
      style: {
        "line-color": "orange",
        "target-arrow-color": "orange",
      },
    },
    {
      selector: "edge#e9",
      style: {
        "line-color": "orange",
        "target-arrow-color": "orange",
      },
    },
    {
      selector: "edge#e7",
      style: {
        "line-color": "orange",
        "target-arrow-color": "",
      },
    },
    {
      selector: "edge#e29",
      style: {
        "line-color": "orange",
        "target-arrow-color": "",
      },
    },
    {
      selector: "edge#e30",
      style: {
        "line-color": "orange",
        "target-arrow-color": "",
      },
    },
    // Blue edges
    {
      selector: "edge#e3",
      style: {
        "line-color": "blue",
        "target-arrow-color": "blue",
      },
    },
    {
      selector: "edge#e1",
      style: {
        "line-color": "blue",
        "target-arrow-color": "blue",
      },
    },
    {
      selector: "edge#e2",
      style: {
        "line-color": "blue",
        "target-arrow-color": "blue",
      },
    },
    // Red edges
    {
      selector: "edge#e21",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e22",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e13",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e12",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e5",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e11",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    {
      selector: "edge#e14",
      style: {
        "line-color": "red",
        "target-arrow-color": "red",
      },
    },
    // Purple edges
    {
      selector: "edge#e15",
      style: {
        "line-color": "purple",
        "target-arrow-color": "purple",
      },
    },
    {
      selector: "edge#e17",
      style: {
        "line-color": "purple",
        "target-arrow-color": "purple",
      },
    },
    {
      selector: "edge#e18",
      style: {
        "line-color": "purple",
        "target-arrow-color": "purple",
      },
    },
    //Green Edges
    {
      selector: "edge#e31",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e32",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e33",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e34",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e35",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e36",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e37",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e44",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    {
      selector: "edge#e45",
      style: {
        "line-color": "green",
        "target-arrow-color": "green",
      },
    },
    // magenta edges
    {
      selector: "edge#e41",
      style: {
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      },
    },
    {
      selector: "edge#e40",
      style: {
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      },
    },
    {
      selector: "edge#e42",
      style: {
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      },
    },
    {
      selector: "edge#e43",
      style: {
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      },
    },
  ],
});

// add nodes and edges
cy.add([
  {
    group: "nodes",
    data: { id: "VSIM" },
    position: { x: 73, y: 709 },
  },
  {
    group: "nodes",
    data: { id: "MacOdrum Library" },
    position: { x: 167, y: 531 },
  },
  {
    group: "nodes",
    data: { id: "Dunton Tower" },
    position: { x: 206, y: 508 },
  },
  {
    group: "nodes",
    data: { id: "Azrieli Theater/Pavilion" },
    position: { x: 265, y: 508 },
  },
  {
    group: "nodes",
    data: { id: "Tory bdg" },
    position: { x: 313, y: 521 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 1)" },
    position: { x: 378, y: 454 },
  },
  {
    group: "nodes",
    data: { id: "Architechture bdg" },
    position: { x: 431, y: 454 },
  },
  {
    group: "nodes",
    data: { id: "Nicol bdg" },
    position: { x: 510, y: 438 },
  },
  {
    group: "nodes",
    data: { id: "Minto Case" },
    position: { x: 510, y: 379 },
  },
  {
    group: "nodes",
    data: { id: "Renfew/Prescott" },
    position: { x: 531, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Frontenac/Lanark" },
    position: { x: 487, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Lennox/Addington" },
    position: { x: 544, y: 244 },
  },
  {
    group: "nodes",
    data: { id: "Glengarry/Russel Grenville" },
    position: { x: 581, y: 203 },
  },
  {
    group: "nodes",
    data: { id: "St.Patricks/Stormont Dundas" },
    position: { x: 627, y: 157 },
  },
  {
    group: "nodes",
    data: { id: "Leeds House" },
    position: { x: 631, y: 61 },
  },
  {
    group: "nodes",
    data: { id: "Maintenance bdg" },
    position: { x: 592, y: 492 },
  },
  {
    group: "nodes",
    data: { id: "Alumni Hall Fieldhouse" },
    position: { x: 711, y: 388 },
  },
  {
    group: "nodes",
    data: { id: "Carleton Tech & Training Center" },
    position: { x: 642, y: 539 },
  },
  {
    group: "nodes",
    data: { id: "Nesbitt Biology bdg" },
    position: { x: 677, y: 590 },
  },
  {
    group: "nodes",
    data: { id: "Robertson Hall" },
    position: { x: 568, y: 665 },
  },
  {
    group: "nodes",
    data: { id: "Canal bdg" },
    position: { x: 407, y: 402 },
  },
  {
    group: "nodes",
    data: { id: "Mackenzie bdg" },
    position: { x: 432, y: 380 },
  },
  {
    group: "nodes",
    data: { id: "Loeb" },
    position: { x: 109, y: 710 },
  },
  {
    group: "nodes",
    data: { id: "ARISE" },
    position: { x: 152, y: 725 },
  },
  {
    group: "nodes",
    data: { id: "B-Stairs" },
    position: { x: 301, y: 619 },
  },
  {
    group: "nodes",
    data: { id: "A-Stairs" },
    position: { x: 270, y: 592 },
  },
  {
    group: "nodes",
    data: { id: "Steacie" },
    position: { x: 381, y: 607 },
  },
  {
    group: "nodes",
    data: { id: "Health Sciences" },
    position: { x: 405, y: 607 },
  },
  {
    group: "nodes",
    data: { id: "Southam" },
    position: { x: 93, y: 682 },
  },
  {
    group: "nodes",
    data: { id: "Southam3" },
    position: { x: 133, y: 609 },
  },
  {
    group: "nodes",
    data: { id: "Paterson Hall" },
    position: { x: 233, y: 609 },
  },
  {
    group: "nodes",
    data: { id: "Southam2" },
    position: { x: 93, y: 615 },
  },
  {
    group: "nodes",
    data: { id: "Kali Theatre" },
    position: { x: 124, y: 682 },
  },
  {
    group: "nodes",
    data: { id: "Herzberg Labs" },
    position: { x: 335, y: 677 },
  },
  {
    group: "nodes",
    data: { id: "Steacie2" },
    position: { x: 415, y: 663 },
  },
  {
    group: "nodes",
    data: { id: "Richcraft" },
    position: { x: 415, y: 700 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 4)" },
    position: { x: 367, y: 522 },
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
  {
    group: "edges",
    data: { id: "e15", source: "MacOdrum Library", target: "Southam3" },
  },
  {
    group: "edges",
    data: { id: "e16", source: "Southam2", target: "Southam3" },
  },
  {
    group: "edges",
    data: { id: "e17", source: "MacOdrum Library", target: "Dunton Tower" },
  },
  {
    group: "edges",
    data: { id: "e18", source: "Dunton Tower", target: "Azrieli Theater/Pavilion" },
  },
  {
    group: "edges",
    data: { id: "e20", source: "Azrieli Theater/Pavilion", target: "Tory bdg" },
  },
  {
    group: "edges",
    data: { id: "e21", source: "Tory bdg", target: "UC (Level 4)" },
  },
  {
    group: "edges",
    data: { id: "e22", source: "UC (Level 4)", target: "UC (Level 1)" },
  },
  {
    group: "edges",
    data: { id: "e23", source: "UC (Level 1)", target: "Azrieli Theater/Pavilion" },
  },
  {
    group: "edges",
    data: { id: "e24", source: "UC (Level 1)", target: "Architechture bdg" },
  },
  {
    group: "edges",
    data: { id: "e25", source: "Nicol bdg", target: "Architechture bdg" },
  },
  {
    group: "edges",
    data: { id: "e26", source: "Canal bdg", target: "Architechture bdg" },
  },
  {
    group: "edges",
    data: { id: "e27", source: "Mackenzie bdg", target: "Architechture bdg" },
  },
  {
    group: "edges",
    data: { id: "e28", source: "Mackenzie bdg", target: "Canal bdg" },
  },
  {
    group: "edges",
    data: { id: "e29", source: "Southam3", target: "Paterson Hall" },
  },
  {
    group: "edges",
    data: { id: "e30", source: "A-Stairs", target: "Paterson Hall" },
  },
  {
    group: "edges",
    data: { id: "e31", source: "Nicol bdg", target: "Minto Case" },
  },
  {
    group: "edges",
    data: { id: "e32", source: "Frontenac/Lanark", target: "Minto Case" },
  },
  {
    group: "edges",
    data: { id: "e33", source: "Frontenac/Lanark", target: "Renfew/Prescott" },
  },
  {
    group: "edges",
    data: { id: "e34", source: "Frontenac/Lanark", target: "Lennox/Addington" },
  },
  {
    group: "edges",
    data: { id: "e35", source: "Glengarry/Russel Grenville", target: "Lennox/Addington" },
  },
  {
    group: "edges",
    data: { id: "e36", source: "Glengarry/Russel Grenville", target: "St.Patricks/Stormont Dundas" },
  },
  {
    group: "edges",
    data: { id: "e37", source: "Leeds House", target: "St.Patricks/Stormont Dundas" },
  },
  {
    group: "edges",
    data: { id: "e38", source: "Nicol bdg", target: "Maintenance bdg" },
  },
  {
    group: "edges",
    data: { id: "e39", source: "Maintenance bdg", target: "Carleton Tech & Training Center" },
  },
  {
    group: "edges",
    data: { id: "e40", source: "Nesbitt Biology bdg", target: "Carleton Tech & Training Center" },
  },
  {
    group: "edges",
    data: { id: "e41", source: "Nesbitt Biology bdg", target: "Robertson Hall" },
  },
  {
    group: "edges",
    data: { id: "e42", source: "Maintenance bdg", target: "Alumni Hall Fieldhouse" },
  },
  {
    group: "edges",
    data: { id: "e43", source: "Carleton Tech & Training Center", target: "Alumni Hall Fieldhouse" },
  },
  {
    group: "edges",
    data: { id: "e44", source: "Renfew/Prescott", target: "Minto Case" },
  },
  {
    group: "edges",
    data: { id: "e45", source: "Renfew/Prescott", target: "Lennox/Addington" },
  },
  {
    group: "edges",
    data: { id: "e46", source: "A-Stairs", target: "Azrieli Theater/Pavilion", weight: 27.5 },
  },
]);
