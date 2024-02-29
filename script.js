// Function to update the list of anatomical structures
function updateAnatomicalStructures(pathway) {
  var structures = [];
  var structuresList = document.getElementById("anatomical-structures");
  var pathwayTitle = document.getElementById("pathway-title");

  // Clear previous contents
  structuresList.innerHTML = "";

  // Populate the list with the structures based on the selected pathway
  switch (pathway) {
    case "default":
      structures = [
        {
          name: "Frontal Lobe",
          description: "Involved in executive functions such as decision making and planning. Lesions may cause deficits in decision making and personality changes.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include selective serotonin reuptake inhibitors (SSRIs) for mood disorders.",
        },
        {
          name: "Parietal Lobe",
          description: "Processes sensory information from the body. Lesions may cause sensory deficits such as neglect syndrome or apraxia.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        // Add more structures as needed
      ];
      break;
    case "reward":
      structures = [
        {
          name: "Nucleus Accumbens",
          description: "Part of the reward pathway, involved in pleasure and reinforcement. Lesions or dysfunction may lead to anhedonia or addictive behaviors.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists or antagonists for addiction treatment.",
        },
        {
          name: "Ventral Tegmental Area (VTA)",
          description: "Produces dopamine, a key neurotransmitter in the reward system. Dysfunction may lead to depression or addiction.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine reuptake inhibitors for depression.",
        },
        // Add more structures as needed
      ];
      break;
    // Add cases for other pathways
  }

  // Set the pathway title
  pathwayTitle.textContent = pathway.charAt(0).toUpperCase() + pathway.slice(1) + " Pathway";

  // Populate the list with the structures
  structures.forEach(function(structure) {
    var listItem = document.createElement("li");
    var structureName = document.createElement("span");
    var structureDescription = document.createElement("span");

    structureName.textContent = structure.name;
    structureName.style.fontWeight = "bold";
    structureDescription.textContent = structure.description;

    listItem.appendChild(structureName);
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(structureDescription);
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(document.createTextNode("Lesions: " + structure.lesions));
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(document.createTextNode("Pharmacological Agents: " + structure.pharmacologicalAgents));

    structuresList.appendChild(listItem);
  });
}
