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
        // Structures for the default pathway...
      ];
      break;
    case "reward":
      structures = [
        // Structures for the reward pathway...
      ];
      break;
    case "limbic":
      structures = [
        // Structures for the limbic system...
      ];
      break;
    case "language":
      structures = [
        // Structures for language pathways...
      ];
      break;
    case "vision":
      structures = [
        // Structures for vision pathways...
      ];
      break;
    case "mesocortical":
      structures = [
        // Structures for mesocortical pathway...
      ];
      break;
    case "mesostriatal":
      structures = [
        // Structures for mesostriatal pathway...
      ];
      break;
    case "tuberoinfundibular":
      structures = [
        // Structures for tuberoinfundibular pathway...
      ];
      break;
    case "mesolimbic":
      structures = [
        // Structures for mesolimbic pathway...
      ];
      break;
    case "fear_conditioning":
      structures = [
        // Structures for fear conditioning pathway...
      ];
      break;
case "brodmann":
  structures = [
    {
      name: "Brodmann Area 1 (Primary Somatosensory Cortex)",
      description: "Receives and processes tactile sensory information from the body, including touch, pressure, vibration, and proprioception (awareness of body position).",
      lesions: "Lesions in Brodmann Area 1 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 2, 3 (Primary Somatosensory Cortex)",
      description: "Receives and processes tactile sensory information from the body, including touch, pressure, vibration, and proprioception (awareness of body position).",
      lesions: "Lesions in Brodmann Areas 2 and 3 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 4 (Primary Motor Cortex)",
      description: "Initiates and controls voluntary movements of skeletal muscles.",
      lesions: "Lesions in Brodmann Area 4 may result from stroke, traumatic brain injury, or tumors.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 5, 7 (Somatosensory Association Cortex)",
      description: "Integrates and processes sensory information received from primary somatosensory cortex, contributing to perception and recognition of tactile stimuli and spatial orientation.",
      lesions: "Lesions in Brodmann Areas 5 and 7 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 6 (Premotor Cortex)",
      description: "Involved in planning and coordinating movements, including the organization of complex, purposeful actions.",
      lesions: "Lesions in Brodmann Area 6 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 8 (Frontal Eye Field)",
      description: "Plays a role in the voluntary control of eye movements, particularly saccadic eye movements.",
      lesions: "Lesions in Brodmann Area 8 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 9, 10 (Dorsolateral Prefrontal Cortex)",
      description: "Associated with executive functions, such as decision-making, planning, problem-solving, working memory, and cognitive control.",
      lesions: "Lesions in Brodmann Areas 9 and 10 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 11, 12 (Orbitofrontal Cortex)",
      description: "Involved in emotional regulation, social behavior, decision-making, and reward processing.",
      lesions: "Lesions in Brodmann Areas 11 and 12 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 17 (Primary Visual Cortex, V1)",
      description: "Processes visual information received from the retina, including basic visual features such as orientation, motion, and color.",
      lesions: "Lesions in Brodmann Area 17 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 18, 19 (Secondary Visual Cortex, V2, V3, V4)",
      description: "Involved in higher-level processing of visual information, such as object recognition, visual perception, and interpretation of visual scenes.",
      lesions: "Lesions in Brodmann Areas 18 and 19 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 22 (Superior Temporal Gyrus, Wernicke's Area)",
      description: "Plays a role in language comprehension, particularly the understanding of spoken language.",
      lesions: "Lesions in Brodmann Area 22 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 41, 42 (Primary Auditory Cortex)",
      description: "Processes auditory information received from the ears, including sound frequency, intensity, and localization.",
      lesions: "Lesions in Brodmann Areas 41 and 42 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 44, 45 (Inferior Frontal Gyrus, Broca's Area)",
      description: "Involved in speech production, specifically the coordination of speech muscles and articulation.",
      lesions: "Lesions in Brodmann Areas 44 and 45 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 46 (Dorsolateral Prefrontal Cortex)",
      description: "Associated with working memory, attention, and cognitive control functions.",
      lesions: "Lesions in Brodmann Area 46 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 24, 25 (Anterior Cingulate Cortex)",
      description: "Involved in emotion regulation, decision-making, and error detection.",
      lesions: "Lesions in Brodmann Areas 24 and 25 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 31, 32 (Dorsal Anterior Cingulate Cortex)",
      description: "Associated with cognitive control, attention, and emotional processing.",
      lesions: "Lesions in Brodmann Areas 31 and 32 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 34, 35 (Perirhinal Cortex)",
      description: "Involved in memory encoding, recognition memory, and object perception.",
      lesions: "Lesions in Brodmann Areas 34 and 35 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 39, 40 (Angular Gyrus, Supramarginal Gyrus)",
      description: "Associated with language processing, semantic memory, and numerical cognition.",
      lesions: "Lesions in Brodmann Areas 39 and 40 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 46, 47 (Frontal Association Cortex)",
      description: "Involved in higher-order cognitive functions, including working memory, decision-making, and attention.",
      lesions: "Lesions in Brodmann Areas 46 and 47 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 52 (Parainsular Cortex)",
      description: "Plays a role in visceral and autonomic functions, including perception of internal bodily sensations and emotional processing.",
      lesions: "Lesions in Brodmann Area 52 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
    {
      name: "Brodmann Area 69, 70 (Retrosplenial Cortex)",
      description: "Involved in spatial memory, navigation, and integration of sensory information for spatial orientation.",
      lesions: "Lesions in Brodmann Areas 69 and 70 may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
      pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
    },
  ];
  break;

    default:
      structures = ["Select a pathway to view structures"];
  }

  // Set the pathway title
  pathwayTitle.textContent = pathway.charAt(0).toUpperCase() + pathway.slice(1) + " Pathway";

  // Populate the list with the structures
  structures.forEach(function(structure) {
    var listItem = document.createElement("li");
    var structureName = document.createElement("span");
    var structureDescription = document.createElement("span");
    var structureLesions = document.createElement("span");
    var structurePharmacologicalAgents = document.createElement("span");

    structureName.textContent = structure.name;
    structureName.style.fontWeight = "bold";
    structureDescription.textContent = structure.description;
    structureLesions.textContent = "Lesions: " + structure.lesions;
    structurePharmacologicalAgents.textContent = "Pharmacological Agents: " + structure.pharmacologicalAgents;

    listItem.appendChild(structureName);
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(structureDescription);
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(structureLesions);
    listItem.appendChild(document.createElement("br")); // Add line break for spacing
    listItem.appendChild(structurePharmacologicalAgents);

    structuresList.appendChild(listItem);
  });
}

// Add an event listener to the dropdown menu
document.getElementById("pathway-select").addEventListener("change", function() {
    // Get the selected pathway
    var selectedPathway = this.value;
    // Call the function to update anatomical structures with the selected pathway
    updateAnatomicalStructures(selectedPathway);
});
