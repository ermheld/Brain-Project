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
          description: "Involved in executive functions such as decision making, planning, and social behavior. Lesions may cause deficits in executive functions, personality changes, and impaired social behavior.",
          lesions: "Lesions in the frontal lobe may result from traumatic brain injury, stroke, or neurodegenerative diseases such as frontotemporal dementia.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include selective serotonin reuptake inhibitors (SSRIs) for mood disorders and stimulants for attention deficit hyperactivity disorder (ADHD).",
        },
        {
          name: "Parietal Lobe",
          description: "Processes sensory information from the body, including touch, temperature, and proprioception. Lesions may cause sensory deficits such as hemispatial neglect, sensory ataxia, and apraxia.",
          lesions: "Lesions in the parietal lobe may result from stroke, traumatic brain injury, or tumors.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Temporal Lobe",
          description: "Responsible for processing auditory information, memory, and language comprehension. Lesions may cause deficits in memory, language, and auditory perception.",
          lesions: "Lesions in the temporal lobe may result from head trauma, epilepsy, or neurodegenerative diseases such as Alzheimer's disease.",
          pharmacologicalAgents: "Antiepileptic drugs are commonly used to manage seizures associated with temporal lobe epilepsy.",
        },
        {
          name: "Occipital Lobe",
          description: "Primarily involved in visual processing and perception. Lesions may cause deficits in visual perception, such as visual field defects and visual agnosia.",
          lesions: "Lesions in the occipital lobe may result from head trauma, stroke, or tumors affecting the visual cortex.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        // Add more structures as needed
      ];
      break;
    case "reward":
      structures = [
        {
          name: "Nucleus Accumbens",
          description: "Part of the reward pathway, involved in pleasure, reinforcement, and motivation. Lesions or dysfunction may lead to anhedonia, addiction, or depression.",
          lesions: "Lesions in the nucleus accumbens may result from chronic drug use, neurodegenerative diseases, or trauma.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists or antagonists for addiction treatment and antidepressants for mood disorders.",
        },
        {
          name: "Ventral Tegmental Area (VTA)",
          description: "Produces dopamine, a key neurotransmitter in the reward system. Dysfunction may lead to depression or addiction.",
          lesions: "Lesions or dysfunction in the ventral tegmental area may result from chronic stress, drug abuse, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine reuptake inhibitors for depression and antipsychotics for psychosis.",
        },
        // Add more structures as needed
      ];
      break;
    case "limbic":
      structures = [
        {
          name: "Amygdala",
          description: "Key in processing emotions, particularly fear and aggression. Lesions may result in deficits in emotional processing and regulation.",
          lesions: "Lesions in the amygdala may result from traumatic brain injury, epilepsy, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include anxiolytics such as benzodiazepines for anxiety disorders.",
        },
        {
          name: "Hippocampus",
          description: "Crucial for memory formation and spatial navigation. Lesions may result in deficits in memory consolidation and spatial orientation.",
          lesions: "Lesions in the hippocampus may result from stroke, epilepsy, or neurodegenerative diseases such as Alzheimer's disease.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include acetylcholinesterase inhibitors for Alzheimer's disease.",
        },
        // Add more structures as needed
      ];
      break;
    case "language":
      structures = [
        {
          name: "Broca's Area",
          description: "Responsible for speech production and language processing. Lesions may result in expressive aphasia characterized by difficulty in producing speech.",
          lesions: "Lesions in Broca's area may result from stroke, traumatic brain injury, or tumors.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include antiepileptic drugs for seizures and antidepressants for mood disorders.",
        },
        {
          name: "Wernicke's Area",
          description: "Involved in language comprehension and understanding. Lesions may result in receptive aphasia characterized by difficulty in understanding speech.",
          lesions: "Lesions in Wernicke's area may result from stroke, traumatic brain injury, or tumors affecting the language centers.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include antipsychotics for psychosis and anticonvulsants for seizures.",
        },
        // Add more structures as needed
      ];
      break;
    case "vision":
      structures = [
        {
          name: "Primary Visual Cortex (V1)",
          description: "Processes visual information from the eyes and is responsible for basic visual perception. Lesions may cause visual field defects and visual hallucinations.",
          lesions: "Lesions in the primary visual cortex may result from stroke, head trauma, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include antiepileptic drugs for seizures and antipsychotics for visual hallucinations.",
        },
        {
          name: "Optic Nerve",
          description: "Transmits visual information from the retina to the brain. Lesions may result in visual field defects and vision loss.",
          lesions: "Lesions in the optic nerve may result from optic neuritis, glaucoma, or trauma.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include corticosteroids for optic neuritis and antiglaucoma medications for glaucoma.",
        },
        // Add more structures as needed
      ];
      break;
    case "mesocortical":
      structures = [
        {
          name: "Prefrontal Cortex",
          description: "Involved in executive functions, such as planning, decision-making, and impulse control. Lesions may result in deficits in cognition, personality, and social behavior.",
          lesions: "Lesions in the prefrontal cortex may result from traumatic brain injury, stroke, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for Parkinson's disease and antipsychotics for schizophrenia.",
        },
        {
          name: "Anterior Cingulate Cortex (ACC)",
          description: "Part of the limbic system, involved in emotions, cognitive processing, and pain perception. Lesions may result in deficits in emotion regulation and cognitive control.",
          lesions: "Lesions in the anterior cingulate cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include selective serotonin reuptake inhibitors (SSRIs) for depression and analgesics for pain management.",
        },
        // Add more structures as needed
      ];
      break;
    case "mesostriatal":
      structures = [
        {
          name: "Substantia Nigra",
          description: "Produces dopamine and is involved in reward, movement, and addiction. Lesions may result in motor deficits, such as bradykinesia and rigidity.",
          lesions: "Lesions in the substantia nigra may result from Parkinson's disease, stroke, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for Parkinson's disease and antipsychotics for psychosis.",
        },
        {
          name: "Striatum",
          description: "Involved in motor control, reward processing, and learning. Lesions may result in motor deficits and cognitive impairments.",
          lesions: "Lesions in the striatum may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for Parkinson's disease and antipsychotics for psychosis.",
        },
        // Add more structures as needed
      ];
      break;
    case "tuberoinfundibular":
      structures = [
        {
          name: "Median Eminence",
          description: "Part of the hypothalamus, involved in neuroendocrine regulation. Lesions may result in hormonal imbalances, such as hypopituitarism.",
          lesions: "Lesions in the median eminence may result from tumors, trauma, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for prolactinoma and growth hormone for growth hormone deficiency.",
        },
        {
          name: "Pituitary Gland",
          description: "Master endocrine gland, involved in hormone secretion and regulation. Lesions may result in hormonal imbalances and endocrine disorders.",
          lesions: "Lesions in the pituitary gland may result from tumors, ischemia, or inflammation.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include glucocorticoids for adrenal insufficiency and thyroid hormone replacement for hypothyroidism.",
        },
        // Add more structures as needed
      ];
      break;
    case "mesolimbic":
      structures = [
        {
          name: "Ventral Tegmental Area (VTA)",
          description: "Produces dopamine, a key neurotransmitter in the reward system. Dysfunction may lead to depression or addiction.",
          lesions: "Lesions or dysfunction in the ventral tegmental area may result from chronic stress, drug abuse, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine reuptake inhibitors for depression and antipsychotics for psychosis.",
        },
        {
          name: "Nucleus Accumbens",
          description: "Part of the reward pathway, involved in pleasure, reinforcement, and motivation. Lesions or dysfunction may lead to anhedonia, addiction, or depression.",
          lesions: "Lesions in the nucleus accumbens may result from chronic drug use, neurodegenerative diseases, or trauma.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists or antagonists for addiction treatment and antidepressants for mood disorders.",
        },
        // Add more structures as needed
      ];
      break;
    case "fear conditioning":
      structures = [
        {
          name: "Amygdala",
          description: "Key in processing emotions, particularly fear and aggression. Lesions may result in deficits in emotional processing and regulation.",
          lesions: "Lesions in the amygdala may result from traumatic brain injury, epilepsy, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include anxiolytics such as benzodiazepines for anxiety disorders.",
        },
        {
          name: "Hippocampus",
          description: "Crucial for memory formation and spatial navigation. Lesions may result in deficits in memory consolidation and spatial orientation.",
          lesions: "Lesions in the hippocampus may result from stroke, epilepsy, or neurodegenerative diseases such as Alzheimer's disease.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include acetylcholinesterase inhibitors for Alzheimer's disease.",
        },
        // Add more structures as needed
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
