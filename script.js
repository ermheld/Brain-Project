// Function to update the list of anatomical structures
function updateAnatomicalStructures(pathway) {
  var structures = [];
  // Logic to update the list of anatomical structures based on selected pathway
  switch (pathway) {
    case "default":
      structures = [
        "Frontal lobe - involved in executive functions, such as decision making and planning",
        "Parietal lobe - processes sensory information from the body",
        "Temporal lobe - responsible for processing auditory information and memory",
        "Occipital lobe - primarily involved in visual processing",
        "Thalamus - relays sensory information to the cerebral cortex",
        "Hippocampus - crucial for memory formation",
        "Amygdala - involved in emotion regulation and memory consolidation"
        // Add more structures as needed
      ];
      break;
    case "reward":
      structures = [
        "Nucleus accumbens - part of the reward pathway, involved in pleasure and reinforcement",
        "Ventral tegmental area (VTA) - produces dopamine, a key neurotransmitter in the reward system",
        "Prefrontal cortex - regulates decision making and impulse control",
        "Basal ganglia - involved in motor control and reward-based learning"
        // Add more structures as needed
      ];
      break;
    case "limbic":
      structures = [
        "Cingulate gyrus - involved in emotion regulation and decision making",
        "Hippocampus - crucial for memory formation",
        "Amygdala - key in processing emotions, particularly fear and aggression",
        "Fornix - connects the hippocampus to other brain regions involved in memory"
        // Add more structures as needed
      ];
      break;
    case "language":
      structures = [
        "Broca's area - responsible for speech production",
        "Wernicke's area - involved in language comprehension",
        "Arcuate fasciculus - connects Broca's and Wernicke's areas for language processing",
        "Angular gyrus - contributes to language processing and number processing"
        // Add more structures as needed
      ];
      break;
    case "vision":
      structures = [
        "Primary visual cortex (V1) - processes visual information from the eyes",
        "Optic nerve - transmits visual information from the retina to the brain",
        "Lateral geniculate nucleus (LGN) - relays visual information to the occipital lobe",
        "Superior colliculus - involved in visual attention and eye movements"
        // Add more structures as needed
      ];
      break;
    default:
      structures = ["Select a pathway to view structures"];
  }

  var structuresList = document.getElementById("anatomical-structures");
