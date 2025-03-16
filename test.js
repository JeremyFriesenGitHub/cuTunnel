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
        "border-width": 2,
      },
    },
    {
      selector: "edge",
      style: {
        width: 5,
      },
    },
    {
      selector: ".shortest-path",
      style: {
        "line-color": "black",
      },
    },
    {
      selector: ".start",
      style: {
        backgroundColor: "green",
      },
    },
    {
      selector: ".end",
      style: {
        backgroundColor: "red",
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
      selector: "edge#e46",
      style: {
        "line-color": "orange",
        "target-arrow-color": "orange",
      },
    },
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
      selector: "edge#e0",
      style: {
        "line-color": "blue",
        "target-arrow-color": "blue",
      },
    },
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
      selector: "edge#e20",
      style: {
        "line-color": "purple",
        "target-arrow-color": "purple",
      },
    },
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
      selector: "edge#e39",
      style: {
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      },
    },
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
    position: { x: 19, y: 880 },
  },
  {
    group: "nodes",
    data: { id: "MacOdrum Library" },
    position: { x: 167, y: 667 },
  },
  {
    group: "nodes",
    data: { id: "Dunton Tower" },
    position: { x: 194, y: 631 },
  },
  {
    group: "nodes",
    data: { id: "Azrieli Theater/Pavilion" },
    position: { x: 294, y: 631 },
  },
  {
    group: "nodes",
    data: { id: "Tory bdg" },
    position: { x: 366, y: 631 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 1)" },
    position: { x: 436, y: 536 },
  },
  {
    group: "nodes",
    data: { id: "Architechture bdg" },
    position: { x: 507, y: 517 },
  },
  {
    group: "nodes",
    data: { id: "Nicol bdg" },
    position: { x: 591, y: 517 },
  },
  {
    group: "nodes",
    data: { id: "Minto Case" },
    position: { x: 591, y: 383 },
  },
  {
    group: "nodes",
    data: { id: "Renfew/Prescott" },
    position: { x: 647, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Frontenac/Lanark" },
    position: { x: 558, y: 308 },
  },
  {
    group: "nodes",
    data: { id: "Lennox/Addington" },
    position: { x: 632, y: 241 },
  },
  {
    group: "nodes",
    data: { id: "Glengarry/Russel Grenville" },
    position: { x: 682, y: 179 },
  },
  {
    group: "nodes",
    data: { id: "St.Patricks/Stormont Dundas" },
    position: { x: 740, y: 104 },
  },
  {
    group: "nodes",
    data: { id: "Leeds House" },
    position: { x: 700, y: 0 },
  },
  {
    group: "nodes",
    data: { id: "Maintenance bdg" },
    position: { x: 647, y: 621 },
  },
  {
    group: "nodes",
    data: { id: "Alumni Hall Fieldhouse" },
    position: { x: 785, y: 526 },
  },
  {
    group: "nodes",
    data: { id: "Carleton Tech & Training Center" },
    position: { x: 730, y: 711 },
  },
  {
    group: "nodes",
    data: { id: "Nesbitt Biology bdg" },
    position: { x: 730, y: 817 },
  },
  {
    group: "nodes",
    data: { id: "Robertson Hall" },
    position: { x: 680, y: 887 },
  },
  {
    group: "nodes",
    data: { id: "Canal bdg" },
    position: { x: 443, y: 433 },
  },
  {
    group: "nodes",
    data: { id: "Mackenzie bdg" },
    position: { x: 502, y: 388 },
  },
  {
    group: "nodes",
    data: { id: "Loeb" },
    position: { x: 100, y: 880 },
  },
  {
    group: "nodes",
    data: { id: "ARISE" },
    position: { x: 180, y: 880 },
  },
  {
    group: "nodes",
    data: { id: "B-Stairs" },
    position: { x: 346, y: 758 },
  },
  {
    group: "nodes",
    data: { id: "A-Stairs" },
    position: { x: 294, y: 737 },
  },
  {
    group: "nodes",
    data: { id: "Steacie" },
    position: { x: 428, y: 758 },
  },
  {
    group: "nodes",
    data: { id: "Health Sciences" },
    position: { x: 499, y: 758 },
  },
  {
    group: "nodes",
    data: { id: "Southam" },
    position: { x: 77, y: 811 },
  },
  {
    group: "nodes",
    data: { id: "Southam3" },
    position: { x: 166, y: 737 },
  },
  {
    group: "nodes",
    data: { id: "Paterson Hall" },
    position: { x: 241, y: 737 },
  },
  {
    group: "nodes",
    data: { id: "Southam2" },
    position: { x: 102, y: 737 },
  },
  {
    group: "nodes",
    data: { id: "Kali Theatre" },
    position: { x: 136, y: 811 },
  },
  {
    group: "nodes",
    data: { id: "Herzberg Labs" },
    position: { x: 428, y: 846 },
  },
  {
    group: "nodes",
    data: { id: "Steacie2" },
    position: { x: 494, y: 846 },
  },
  {
    group: "nodes",
    data: { id: "Richcraft" },
    position: { x: 494, y: 886 },
  },
  {
    group: "nodes",
    data: { id: "UC (Level 4)" },
    position: { x: 428, y: 626 },
  },
  {
    group: "edges",
    data: { id: "e0", source: "VSIM", target: "Loeb", weight: 5.5 },
  },
  {
    group: "edges",
    data: { id: "e1", source: "Loeb", target: "ARISE", weight: 16.5 },
  },
  {
    group: "edges",
    data: { id: "e2", source: "ARISE", target: "B-Stairs", weight: 53 },
  },
  {
    group: "edges",
    data: { id: "e3", source: "B-Stairs", target: "Steacie", weight: 21.2 },
  },
  {
    group: "edges",
    data: { id: "e4", source: "B-Stairs", target: "A-Stairs", weight: 7.7 },
  },
  {
    group: "edges",
    data: {
      id: "e5",
      source: "Steacie",
      target: "Health Sciences",
      weight: 8.8,
    },
  },
  {
    group: "edges",
    data: { id: "e6", source: "Loeb", target: "Southam", weight: 13.5 },
  },
  {
    group: "edges",
    data: { id: "e7", source: "Loeb", target: "Kali Theatre", weight: 13.5 },
  },
  {
    group: "edges",
    data: { id: "e8", source: "Kali Theatre", target: "Southam", weight: 22.3 },
  },
  {
    group: "edges",
    data: { id: "e9", source: "Kali Theatre", target: "Southam2", weight: 33 },
  },
  {
    group: "edges",
    data: { id: "e10", source: "Southam", target: "Southam2", weight: 10.2 },
  },
  {
    group: "edges",
    data: {
      id: "e11",
      source: "Steacie",
      target: "Herzberg Labs",
      weight: 24.5,
    },
  },
  {
    group: "edges",
    data: {
      id: "e12",
      source: "Herzberg Labs",
      target: "Steacie2",
      weight: 25.7,
    },
  },
  {
    group: "edges",
    data: { id: "e13", source: "Steacie2", target: "Richcraft", weight: 11 },
  },
  {
    group: "edges",
    data: {
      id: "e14",
      source: "UC (Level 4)",
      target: "Steacie",
      weight: 31.8,
    },
  },
  {
    group: "edges",
    data: {
      id: "e15",
      source: "MacOdrum Library",
      target: "Southam3",
      weight: 37.5,
    },
  },
  {
    group: "edges",
    data: { id: "e16", source: "Southam2", target: "Southam3", weight: 4.7 },
  },
  {
    group: "edges",
    data: {
      id: "e17",
      source: "MacOdrum Library",
      target: "Dunton Tower",
      weight: 12.73,
    },
  },
  {
    group: "edges",
    data: {
      id: "e18",
      source: "Dunton Tower",
      target: "Azrieli Theater/Pavilion",
      weight: 24.2,
    },
  },
  {
    group: "edges",
    data: {
      id: "e20",
      source: "Azrieli Theater/Pavilion",
      target: "Tory bdg",
      weight: 15,
    },
  },
  {
    group: "edges",
    data: {
      id: "e21",
      source: "Tory bdg",
      target: "UC (Level 4)",
      weight: 19.8,
    },
  },
  {
    group: "edges",
    data: { id: "e22", source: "UC (Level 4)", target: "UC (Level 1)", weight: 8.1 },
  },
  {
    group: "edges",
    data: {
      id: "e23",
      source: "UC (Level 1)",
      target: "Azrieli Theater/Pavilion",
      weight: 8.1,
    },
  },
  {
    group: "edges",
    data: {
      id: "e24",
      source: "UC (Level 1)",
      target: "Architechture bdg",
      weight: 30.2,
    },
  },
  {
    group: "edges",
    data: {
      id: "e25",
      source: "Nicol bdg",
      target: "Architechture bdg",
      weight: 28.1,
    },
  },
  {
    group: "edges",
    data: {
      id: "e26",
      source: "Canal bdg",
      target: "Architechture bdg",
      weight: 18.3,
    },
  },
  {
    group: "edges",
    data: {
      id: "e27",
      source: "Mackenzie bdg",
      target: "Architechture bdg",
      weight: 49,
    },
  },
  {
    group: "edges",
    data: { id: "e28", source: "Mackenzie bdg", target: "Canal bdg", weight: 7.3 },
  },
  {
    group: "edges",
    data: { id: "e29", source: "Southam3", target: "Paterson Hall", weight: 30.2},
  },
  {
    group: "edges",
    data: { id: "e30", source: "A-Stairs", target: "Paterson Hall", weight: 15.4 },
  },
  {
    group: "edges",
    data: { id: "e31", source: "Nicol bdg", target: "Minto Case", weight: 21.2},
  },
  {
    group: "edges",
    data: { id: "e32", source: "Frontenac/Lanark", target: "Minto Case", weight: 26.4},
  },
  {
    group: "edges",
    data: { id: "e33", source: "Frontenac/Lanark", target: "Renfew/Prescott", weight: 4.4},
  },
  {
    group: "edges",
    data: { id: "e34", source: "Frontenac/Lanark", target: "Lennox/Addington", weight: 19.8},
  },
  {
    group: "edges",
    data: {
      id: "e35",
      source: "Glengarry/Russel Grenville",
      target: "Lennox/Addington",
      weight: 2.9,
    },
  },
  {
    group: "edges",
    data: {
      id: "e36",
      source: "Glengarry/Russel Grenville",
      target: "St.Patricks/Stormont Dundas",
      weight: 17.2,
    },
  },
  {
    group: "edges",
    data: {
      id: "e37",
      source: "Leeds House",
      target: "St.Patricks/Stormont Dundas",
      weight: 35.5,
    },
  },
  {
    group: "edges",
    data: { id: "e38", source: "Nicol bdg", target: "Maintenance bdg", weight: 29.3},
  },
  {
    group: "edges",
    data: {
      id: "e39",
      source: "Maintenance bdg",
      target: "Carleton Tech & Training Center",
      weight: 35.7,
    },
  },
  {
    group: "edges",
    data: {
      id: "e40",
      source: "Nesbitt Biology bdg",
      target: "Carleton Tech & Training Center",
      weight: 18.3,
    },
  },
  {
    group: "edges",
    data: {
      id: "e41",
      source: "Nesbitt Biology bdg",
      target: "Robertson Hall",
      weight: 54.7,
    },
  },
  {
    group: "edges",
    data: {
      id: "e42",
      source: "Maintenance bdg",
      target: "Alumni Hall Fieldhouse",
      weight: 83.1,
    },
  },
  {
    group: "edges",
    data: {
      id: "e43",
      source: "Carleton Tech & Training Center",
      target: "Alumni Hall Fieldhouse",
      weight: 77,
    },
  },
  {
    group: "edges",
    data: { id: "e44", source: "Renfew/Prescott", target: "Minto Case", weight: 26},
  },
  {
    group: "edges",
    data: { id: "e45", source: "Renfew/Prescott", target: "Lennox/Addington", weight: 23.5},
  },
  {
    group: "edges",
    data: {
      id: "e46",
      source: "A-Stairs",
      target: "Azrieli Theater/Pavilion",
      weight: 27.5,
    },
  },
]);

var startNode = null;
var endNode = null;

// Node click event
cy.on("tap", "node", function (evt) {
  var node = evt.target;

  if (!startNode) {
    startNode = node;
    node.addClass("start");
  } else if (!endNode && node !== startNode) {
    endNode = node;
    node.addClass("end");
    findShortestPath();
  } else {
    clearSelection();
  }
});

cy.on("tap", function (evt) {
  if (evt.target === cy) {
    clearSelection();
  }
});

function findShortestPath() {
  if (!startNode || !endNode) return;

  var dijkstra = cy.elements().dijkstra({
    root: startNode,
    weight: function (edge) {
      return edge.data("weight") || 1;
    },
  });

  var path = dijkstra.pathTo(endNode);

  if (path.length > 0) {
    path.addClass("shortest-path");
  }
}

function clearSelection() {
  cy.elements().removeClass("shortest-path start end");
  startNode = null;
  endNode = null;
}
