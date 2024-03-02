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
    // Clear previous model if exists
    scene.children.forEach(child => {
        if (child.type === 'Mesh') {
            scene.remove(child);
        }
    });
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Adjust renderer size to match the container or desired size
    var container = document.getElementById('brainModelContainer');
    var renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency
    renderer.setSize(container.clientWidth, container.clientHeight); // Use container's dimensions
    renderer.setClearColor(0x000000, 0); // Clear background color alpha to 0
    container.appendChild(renderer.domElement);

    // Lighting adjustments
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Adjust intensity as needed
    directionalLight.position.set(0, 1, 1); // Adjust direction as needed
    scene.add(directionalLight);

    var model; // To store the loaded model

    // Load the model
    var loader = new THREE.GLTFLoader();
    loader.load('Brain.glb', function(gltf) {
        model = gltf; // Store the model globally
        scene.add(gltf.scene);

        // Scale the model
        gltf.scene.scale.set(20, 20, 20); // Adjust this value as needed

        // Adjust the camera to focus on the model
        camera.position.z = 20; // Adjust based on the size and position of your model
        camera.position.y = 20;
        camera.position.x = 20;
        camera.fov = 45; // Adjust the field of view as needed
        camera.updateProjectionMatrix();

        // Optionally, adjust the model's position if it's not centered
        gltf.scene.position.set(0, 0, 0); // Adjust as needed

        // Enable Orbit controls
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update(); // required if controls.enableDamping or controls.autoRotate are set to true
            renderer.render(scene, camera);
        }

        animate();
    });

    // Resize handling
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    // Function to toggle the visibility of a model part
    function toggleModelPartVisibility(partName, isVisible) {
        model.scene.traverse(function (child) {
            if (child.isMesh && child.name === partName) {
                child.visible = isVisible;
            }
        });
    }

    // List of parts
    var parts = [
    "Angular gyrus.r.001",
    "Angular gyrus.r.002",
    "Cuneus.r.001",
    "Cuneus.r.002",
    "Inferior frontal sulcus.r.001",
    "Inferior frontal sulcus.r.002",
    "Inferior temporal gyrus.r.001",
    "Inferior temporal gyrus.r.002",
    "Middle frontal gyrus.r.001",
    "Middle frontal gyrus.r.002",
    "Middle temporal gyrus.r.001",
    "Middle temporal gyrus.r.002",
    "Occipital pole.r.001",
    "Occipital pole.r.002",
    "Orbital gyri.r.001",
    "Orbital gyri.r.002",
    "Postcentral gyrus.r.001",
    "Postcentral gyrus.r.002",
    "Precentral gyrus.r.001",
    "Precentral gyrus.r.002",
    "Precuneus.r.001Precuneus.r.002",
    "Superior frontal gyrus.r.001",
    "Superior frontal gyrus.r.002",
    "Superior occipital gyri.r.001",
    "Superior occipital gyri.r.002",
    "Superior parietal lobule.r.001",
    "Superior parietal lobule.r.002",
    "Supramarginal gyrus.r.001",
    "Supramarginal gyrus.r.002",
    "Temporal pole.r.001",
    "Temporal pole.r.002",
    "Inferior occipital gyrus and sulcus*.r.001",
    "Inferior occipital gyrus and sulcus*.r.002",
    "Insula (Subcentral gyrus and ant. and post. sulci*).r.001",
    "Insula (Subcentral gyrus and ant. and post. sulci*).r.002",
    "Lateral occipital gyrus (Middle occipital gyrus*).r.001",
    "Lateral occipital gyrus (Middle occipital gyrus*).r.002",
    "Lingual gyrus.r.001",
    "Lingual gyrus.r.002",
    "Opercular part of inferior frontal gyrus.1.001",
    "Opercular part of inferior frontal gyrus.1.002",
    "Orbital gyri (Frontomarginal gyrus and sulcus*).r.001",
    "Orbital gyri (Frontomarginal gyrus and sulcus*).r.002",
    "Orbital part of inferior frontal gyrus.l.002",
    "Orbital sulci (H-shaped orbital sulci*).r.001",
    "Orbital sulci (H-shaped orbital sulci*).r.002",
    "Orbital sulci (Lateral Orbital sulcus*).r.001",
    "Paracentral gyrus and sulcus*.r.001",
    "Paracentral gyrus and sulcus*.r.002",
    "Straight gyrus (Gyrus rectus).r.001",
    "Straight gyrus (Gyrus rectus).r.002",
    "Superior temporal gyrus (Lateral part).r.001",
    "Superior temporal gyrus (Lateral part).r.002",
    "Temporal plane.r.001",
    "Temporal plane.r.002",
    "Transverse frontopolar gyrus and sulcus*.r.001",
    "Transverse frontopolar gyrus and sulcus*.r.002",
    "Triangular part of inferior frontal gyrus*.r001",
    "Triangular part of inferior frontal gyrus*.r002",
    "Anterior occipital sulcus*.r.001",
    "Anterior occipital sulcus*.r.002",
    "Calcarine sulcus.r.001",
    "Calcarine sulcus.r.002",
    "Central sulcus.r.001",
    "Central sulcus.r.002",
    "Inferior temporal sulcus? (Ant transv collateral sulcus*).",
    "Inferior temporal sulcus? (Ant transv collateral sulcus*).r",
    "Parieto-occipital sulcus.r.001",
    "Parieto-occipital sulcus.r.002",
    "Postcentral sulcus.r.001",
    "Postcentral sulcus.r.002",
    "Posterior transverse collateral sulcus.r.001",
    "Posterior transverse collateral sulcus.r.002",
    "Subparietal sulcus.r.001",
    "Subparietal sulcus.r.002",
    "Superior frontal sulcus.r.001",
    "Superior frontal sulcus.r.002",
    "Superior temporal sulcus.r.001",
    "Superior temporal sulcus.r.002",
    "Cingulate gyrus (Posteroventral part*).r.001",
    "Cingulate gyrus (Posteroventral part*).r.002",
    "Cingulate gyrus and sculcus (Posterior dorsal part).r.001",
    "Cingulate gyrus and sculcus (Posterior dorsal part).r.002",
    "Cingulate gyrus and sulcus (Middle anterior part).r.001",
    "Cingulate gyrus and sulcus (Middle anterior part).r.002",
    "Cingulate gyrus and sulcus (Middle posterior part).r.001",
    "Cingulate gyrus and sulcus (Middle posterior part).r.002",
    "Cingulate sulcus (Marginal part*).r.001",
    "Cingulate sulcus (Marginal part*).r.002",
    "Circular sulcus of insula.r.001",
    "Circular sulcus of insula.r.002",
    "Collateral sulcus.r.001",
    "Collateral sulcus.r.002",
    "Intraparietal sulcus.r.001",
    "Intraparietal sulcus.r.002",
    "Lat_Fis-ant-Horizont.1.001",
    "Lat_Fis-ant-Horizont.L.002",
    "Lat_Fis-ant-Vertical.1.001",
    "Lat_Fis-ant-Vertical.L.002",
    "Lat_Fis-post.1.001",
    "Lat_Fis-post.1.002",
    "Lateral occipitotemporal gyrus.r.001",
    "Lateral occipitotemporal gyrus.r.002",
    "Lunate sulcus (and inferior?*).r.001",
    "Lunate sulcus (and inferior?*).r.002",
    "Medial occipitotemporal gyrus.l (Parahippocampal*).r.001",
    "Medial occipitotemporal gyrus.l (Parahippocampal*).r.002",
    "Occipitotemporal sulcus (Lateral part*).r.001",
    "Occipitotemporal sulcus (Lateral part*).r.002",
    "Olfactory sulcus.r.001",
    "Olfactory sulcus.r.002",
    "Orbital part of inferior frontal gyrus.1.001",
    "Orbital sulci (Lateral Orbital sulcus*).r.002",
    "Paracentral sulcus.r.001",
    "Paracentral sulcus.r.002",
    "Parieto-occipital sulcus.r.001",
    "Parieto-occipital sulcus.r.002",
    "Precentral sulcus (inferior part)*.r.001",
    "Precentral sulcus (inferior part)*.r.002",
    "Precentral sulcus (Superior part)*.r.001",
    "Precentral sulcus (Superior part)*.r.002",
    "Sulcus interm_prim-Jensen.r.001",
    "Sulcus interm_prim-Jensen.r.002",
    "Transverse occipital sulcus (and Superior?*).r. 001",
    "Transverse occipital sulcus (and Superior?*).r.002",
    "Transverse temporal gyri.r.001",
    "Transverse temporal gyri.r.002",
    "Amygdaloid body.r.001",
    "Amygdaloid body.r.002",
    "Anterior commissure",
    "Aqueduct of midbrain (Cerebral aqueduct)",
    "Caudate nucleus.r.001",
    "Caudate nucleus.r.002",
    "Cerebellum.r.001",
    "Cerebellum.r.002",
    "Corpus callosum",
    "Fornix.r.001",
    "Fornix.r.002",
    "Fourth ventricle",
    "Globus pallidus.r.001",
    "Globus pallidus.r.002",
    "Habenula",
    "Hippocampal commissure",
    "Hippocampus.r.001",
    "Hippocampus.r.002",
    "Hypothalamus.r.001",
    "Hypothalamus.r.002",
    "Inferior colliculus.r.001",
    "Inferior colliculus.r.002",
    "Internal capsule.r.001",
    "Internal capsule.r.002",
    "Interpeduncular fossa.r.001",
    "Interpeduncular fossa.r.002",
    "Lateral geniculate body.r.001",
    "Lateral geniculate body.r.002",
    "Lateral ventricle.r.001",
    "Lateral ventricle.r.002",
    "Mamillary body.r.001",
    "Mamillary body.r.002",
    "Medial geniculate body.r.001",
    "Medial geniculate body.r.002",
    "Medulla oblongata.r.001",
    "Medulla oblongata.r.002",
    "Midbrain.r.001",
    "Midbrain.r.002",
    "Optic chiasm.L001",
    "Optic chiasm.1.002",
    "Optic tract.1.001",
    "Optic tract.1.002",
    "Pons.r.001",
    "Pons.r.002",
    "Posterior commissure",
    "Putamen.r.001",
    "Putamen.r.002",
    "Septal nuclei",
    "Septum pellucidum",
    "Stria medullaris thalami.l.001",
    "Stria medullaris thalami.1.002",
    "Stria terminalis.r.001",
    "Stria terminalis.r.002",
    "Superior cerebellar peduncle.r.001",
    "Superior cerebellar peduncle.r.002",
    "Superior colliculus.r.001",
    "Superior colliculus.r.002",
    "Thalamus.r.001",
    "Thalamus.r.002",
    "Third ventricle",
    "White matter of telencephalon.r.001",
    "White matter of telencephalon.r.002"
];
}

// Initialize the 3D model
initialize3DModel();
