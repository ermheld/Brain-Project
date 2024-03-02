// Function to update the list of anatomical structures
function updateAnatomicalStructures(pathway) {
    var structuresList = document.getElementById("anatomical-structures");
    structuresList.innerHTML = ""; // Clear previous contents

    var structures = getStructuresForPathway(pathway);

    structures.forEach(function(structure) {
        var listItem = document.createElement("div");
        listItem.classList.add("structure");

        var structureName = document.createElement("h3");
        structureName.innerHTML = `<span class="expand-collapse-icon">+</span> ${structure.name}`;
        structureName.style.cursor = "pointer";
        structureName.style.fontFamily = "Georgia, serif"; // Use Georgia font for structure names
        listItem.appendChild(structureName);

        var detailsDiv = document.createElement("div");
        detailsDiv.style.display = "none"; // Initially hidden
        listItem.appendChild(detailsDiv);

        var structureDescription = document.createElement("p");
        structureDescription.textContent = structure.description;
        structureDescription.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif"; // Use Helvetica Neue for descriptions
        detailsDiv.appendChild(structureDescription);

        // Adding interactive elements for Lesions and Pharmacological Agents
        addInteractiveElement(detailsDiv, "Lesions", structure.lesions);
        addInteractiveElement(detailsDiv, "Pharmacological Agents", structure.pharmacologicalAgents);

        structuresList.appendChild(listItem);

        // Toggle visibility and icon for structureName
        structureName.addEventListener('click', function() {
            toggleDetails(this, detailsDiv);
        });
    });
}

function addInteractiveElement(parent, title, content) {
    var titleElement = document.createElement("h4");
    titleElement.innerHTML = `<span class="expand-collapse-icon">+</span> ${title}`;
    titleElement.style.cursor = "pointer";
    titleElement.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif"; // Use Helvetica Neue for subtitles
    parent.appendChild(titleElement);

    var contentElement = document.createElement("p");
    contentElement.textContent = content;
    contentElement.style.display = "none";
    contentElement.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif"; // Use Helvetica Neue for content text
    parent.appendChild(contentElement);

    // Toggle visibility and icon for subsections
    titleElement.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering the click event of the parent structure
        toggleDetails(titleElement, contentElement);
    });
}

function toggleDetails(titleElement, contentElement) {
    var isVisible = contentElement.style.display === "block";
    contentElement.style.display = isVisible ? "none" : "block";
    titleElement.querySelector(".expand-collapse-icon").textContent = isVisible ? "+" : "-";
}
function getStructuresForPathway(pathway) {
    var structures = [];
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
          name: "Anterior Cingulate Cortex",
          description: "Part of the limbic system, involved in emotional regulation and cognitive processing. Lesions may result in deficits in attention, motivation, and emotion.",
          lesions: "Lesions in the anterior cingulate cortex may result from stroke, epilepsy, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include antidepressants for mood disorders and antipsychotics for psychosis.",
        },
        // Add more structures as needed
      ];
      break;
    case "mesostriatal":
      structures = [
        {
          name: "Substantia Nigra",
          description: "Produces dopamine and plays a role in reward processing and movement control. Dysfunction may result in Parkinson's disease.",
          lesions: "Lesions or degeneration of the substantia nigra may result from neurotoxins, genetic mutations, or aging.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists and levodopa for Parkinson's disease.",
        },
        {
          name: "Striatum",
          description: "Part of the basal ganglia, involved in motor control and reward processing. Dysfunction may result in movement disorders such as Huntington's disease.",
          lesions: "Lesions or degeneration of the striatum may result from stroke, neurodegenerative diseases, or genetic mutations.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for Parkinson's disease and antipsychotics for psychosis.",
        },
        // Add more structures as needed
      ];
      break;
    case "tuberoinfundibular":
      structures = [
        {
          name: "Median Eminence",
          description: "Part of the hypothalamus, involved in the release of hormones. Dysfunction may result in hormonal imbalances and reproductive disorders.",
          lesions: "Lesions or dysfunction of the median eminence may result from tumors, inflammation, or vascular abnormalities.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for hyperprolactinemia and gonadotropin-releasing hormone analogs for infertility.",
        },
        {
          name: "Pituitary Gland",
          description: "Produces and releases hormones that regulate various bodily functions. Dysfunction may result in endocrine disorders such as hypothyroidism or diabetes insipidus.",
          lesions: "Lesions or tumors of the pituitary gland may result from pituitary adenomas, trauma, or genetic conditions.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include thyroid hormone replacement for hypothyroidism and insulin for diabetes insipidus.",
        },
        // Add more structures as needed
      ];
      break;
    case "mesolimbic":
      structures = [
        {
          name: "Ventral Pallidum",
          description: "Part of the basal ganglia, involved in reward processing and motivation. Dysfunction may result in addiction and mood disorders.",
          lesions: "Lesions or dysfunction of the ventral pallidum may result from stroke, neurodegenerative diseases, or drug abuse.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include dopamine agonists for Parkinson's disease and antipsychotics for psychosis.",
        },
        {
          name: "Nucleus Basalis of Meynert",
          description: "Produces acetylcholine and plays a role in learning, memory, and attention. Dysfunction may result in cognitive deficits such as Alzheimer's disease.",
          lesions: "Lesions or degeneration of the nucleus basalis of Meynert may result from Alzheimer's disease, stroke, or traumatic brain injury.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include acetylcholinesterase inhibitors for Alzheimer's disease and cognitive enhancers for memory deficits.",
        },
        // Add more structures as needed
      ];
      break;
    case "fear_conditioning":
      structures = [
        {
          name: "Hypothalamus",
          description: "Regulates basic survival behaviors such as feeding, fighting, and fleeing. Involved in fear responses and stress regulation.",
          lesions: "Lesions or dysfunction of the hypothalamus may result from tumors, trauma, or neurodegenerative diseases.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include anxiolytics for anxiety disorders and antipsychotics for psychosis.",
        },
        {
          name: "Periaqueductal Gray (PAG)",
          description: "Involved in pain modulation and defensive behaviors such as freezing and vocalization. Plays a role in fear responses and anxiety.",
          lesions: "Lesions or dysfunction of the periaqueductal gray may result from trauma, neurodegenerative diseases, or stroke.",
          pharmacologicalAgents: "Pharmacological agents targeting this area include opioids for pain relief and anxiolytics for anxiety disorders.",
        },
        // Add more structures as needed
      ];
      break;
    case "brodmann_areas":
      structures = [
        {
          name: "Brodmann Area 1, 2, 3 (Primary Somatosensory Cortex)",
          description: "Receives and processes tactile sensory information from the body, including touch, pressure, vibration, and proprioception (awareness of body position).",
          lesions: "Lesions in the primary somatosensory cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 4 (Primary Motor Cortex)",
          description: "Initiates and controls voluntary movements of skeletal muscles.",
          lesions: "Lesions in the primary motor cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 5, 7 (Somatosensory Association Cortex)",
          description: "Integrates and processes sensory information received from the primary somatosensory cortex, contributing to perception and recognition of tactile stimuli and spatial orientation.",
          lesions: "Lesions in the somatosensory association cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 6 (Premotor Cortex)",
          description: "Involved in planning and coordinating movements, including the organization of complex, purposeful actions.",
          lesions: "Lesions in the premotor cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 8 (Frontal Eye Field)",
          description: "Plays a role in the voluntary control of eye movements, particularly saccadic eye movements.",
          lesions: "Lesions in the frontal eye field may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 9, 10 (Dorsolateral Prefrontal Cortex)",
          description: "Associated with executive functions, such as decision-making, planning, problem-solving, working memory, and cognitive control.",
          lesions: "Lesions in the dorsolateral prefrontal cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 11, 12 (Orbitofrontal Cortex)",
          description: "Involved in emotional regulation, social behavior, decision-making, and reward processing.",
          lesions: "Lesions in the orbitofrontal cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 17 (Primary Visual Cortex, V1)",
          description: "Processes visual information received from the retina, including basic visual features such as orientation, motion, and color.",
          lesions: "Lesions in the primary visual cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 18, 19 (Secondary Visual Cortex, V2, V3, V4)",
          description: "Involved in higher-level processing of visual information, such as object recognition, visual perception, and interpretation of visual scenes.",
          lesions: "Lesions in the secondary visual cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 22 (Superior Temporal Gyrus, Wernicke's Area)",
          description: "Plays a role in language comprehension, particularly the understanding of spoken language.",
          lesions: "Lesions in Wernicke's area may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 41, 42 (Primary Auditory Cortex)",
          description: "Processes auditory information received from the ears, including sound frequency, intensity, and localization.",
          lesions: "Lesions in the primary auditory cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 44, 45 (Inferior Frontal Gyrus, Broca's Area)",
          description: "Involved in speech production, specifically the coordination of speech muscles and articulation.",
          lesions: "Lesions in Broca's area may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 46 (Dorsolateral Prefrontal Cortex)",
          description: "Associated with working memory, attention, and cognitive control functions.",
          lesions: "Lesions in the dorsolateral prefrontal cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 24, 25 (Anterior Cingulate Cortex)",
          description: "Involved in emotion regulation, decision-making, and error detection.",
          lesions: "Lesions in the anterior cingulate cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 31, 32 (Dorsal Anterior Cingulate Cortex)",
          description: "Associated with cognitive control, attention, and emotional processing.",
          lesions: "Lesions in the dorsal anterior cingulate cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 34, 35 (Perirhinal Cortex)",
          description: "Involved in memory encoding, recognition memory, and object perception.",
          lesions: "Lesions in the perirhinal cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 39, 40 (Angular Gyrus, Supramarginal Gyrus)",
          description: "Associated with language processing, semantic memory, and numerical cognition.",
          lesions: "Lesions in the angular gyrus may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 46, 47 (Frontal Association Cortex)",
          description: "Involved in higher-order cognitive functions, including working memory, decision-making, and attention.",
          lesions: "Lesions in the frontal association cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 52 (Parainsular Cortex)",
          description: "Plays a role in visceral and autonomic functions, including perception of internal bodily sensations and emotional processing.",
          lesions: "Lesions in the parainsular cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        {
          name: "Brodmann Area 69, 70 (Retrosplenial Cortex)",
          description: "Involved in spatial memory, navigation, and integration of sensory information for spatial orientation.",
          lesions: "Lesions in the retrosplenial cortex may result from stroke, traumatic brain injury, or neurodegenerative diseases.",
          pharmacologicalAgents: "No specific pharmacological agents target this area directly.",
        },
        // Add more structures as needed
      ];
            break;
        // Add other cases for each pathway with structures
        default:
            structures = [{ name: "Select a pathway to view structures", description: "", lesions: "", pharmacologicalAgents: "" }];
    }
    return structures;
}
// Event listener for DOMContentLoaded to initialize the dropdown menu interaction
document.addEventListener("DOMContentLoaded", function() {
    var pathwayDropdown = document.getElementById("pathway-select");
    pathwayDropdown.addEventListener("change", function() {
        var selectedPathway = pathwayDropdown.value;
        updateAnatomicalStructures(selectedPathway);
    });

    // Initialize the 3D model within the DOMContentLoaded to ensure the page is fully loaded
    initialize3DModel();
});

function initialize3DModel() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Adjust renderer size to match the container or desired size
    var container = document.getElementById('brainModelContainer');
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight); // Use container's dimensions
    container.appendChild(renderer.domElement);

    // Lighting adjustments
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    // Load the model
    var loader = new THREE.GLTFLoader();
    loader.load('Brain.glb', function(gltf) {
        scene.add(gltf.scene);

        // Scale the model up if it's too small
        gltf.scene.scale.set(10, 10, 10); // Adjust scale factors as needed

        // Move the camera closer if the model is too small
        camera.position.z = 2; // Adjust based on the model's size and scale

        // Optional: Adjust the camera to look at the model
        camera.lookAt(gltf.scene.position);
    }, undefined, function(error) {
        console.error(error);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
