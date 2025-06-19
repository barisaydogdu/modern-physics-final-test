const questions = [{
    
        question: "Find the value of A to normalize the wave function ψ(x) = A, -L ≤ x ≤ L ; 0, for all other x",
        options: ["1/L²", "1/√L", "1/(2L)", "1/√(2L)", "1/L"],
        answer: "1/√(2L)"
    },
    {
        question: "A particle is confined to a one-dimensional box on the x-axis between x=0 and x=L. The normalized ground state wave function is ψ(x) = √(2/L) sin(πx/L). What is the probability of finding the particle between x = 0 and x = L/3?",
        options: ["0.26", "0.28", "0.22", "0.24", "0.20"],
        answer: "0.20"
    },
    {
        question: "An electron is in an infinite square well that is 8.9 nm wide. What is the ground state energy of the electron?",
        options: ["0.0085 eV", "0.0066 eV", "0.0076 eV", "0.0048 eV", "0.0057 eV"],
        answer: "0.0048 eV"
    },
    {
        question: "An electron is in an infinite square well that is 2.6 nm wide. What is the smallest value of the quantum number n for which the energy exceeds 100 eV?",
        options: ["44", "43", "45", "42", "41"],
        answer: "43"
    },
    {
        question: "An electron is bound in an infinite square-well potential (a box) on the x-axis from x = 0.00 nm to x = 4.7 nm. The normalized wave function is ψ(x) = √(2/L) sin(2πx/L). What is the energy of the electron in this state?",
        options: ["0.068 eV", "0.051 eV", "0.085 eV", "0.034 eV", "0.017 eV"],
        answer: "0.068 eV"
    },
    {
        question: "An electron is in an infinite square well (a box) that is 2.0 nm wide. The electron makes a transition from the n = 8 to the n = 7 state, what is the wavelength of the emitted photon?",
        options: ["750 nm", "880 nm", "1100 nm", "610 nm", "1000 nm"],
        answer: "880 nm"
    },
    {
        question: "You want to confine an electron in a box (an infinite well) so that its ground state energy is 5.0 × 10⁻¹⁸ J. What should be the length of the box?",
        options: ["0.15 nm", "0.11 nm", "0.22 nm", "0.18 nm"],
        answer: "0.11 nm"
    },
    {
        question: "A 3.10-eV electron is incident on a 0.40-nm barrier that is 5.67 eV high. What is the probability that this electron will tunnel through the barrier?",
        options: ["0.56%", "0.35%", "0.25%", "0.40%", "0.48%"],
        answer: "0.56%"
    },
    {
        question: "The lowest energy level of a certain quantum harmonic oscillator is 5.00 eV. What is the energy of the next higher level?",
        options: ["10.0 eV", "50.0 eV", "7.50 eV", "15.0 eV", "20.0 eV"],
        answer: "15.0 eV"
    },
    {
        question: "Calculate the ground state energy of a harmonic oscillator with a classical frequency of 3.68 × 10¹⁵ Hz.",
        options: ["15.2 eV", "5.71 eV", "7.62 eV", "11.4 eV"],
        answer: "7.62 eV"
    },
    {
        question: "The energy of a particle in the second EXCITED state of a harmonic oscillator potential is 5.45 eV. What is the classical angular frequency of oscillation of this particle?",
        options: ["6.95 × 10¹⁵ rad/s", "3.31 × 10¹⁵ rad/s", "4.97 × 10¹⁵ rad/s", "2.08 × 10¹⁶ rad/s"],
        answer: "3.31 × 10¹⁵ rad/s"
    },
    {
        question: "Consider the four quantum numbers of an electron in an atom, n, l, ml, and ms. The energy of an electron in an isolated atom depends on",
        options: [
            "n, l, and ml only.",
            "n only.",
            "l, ml, and ms only.",
            "n and l only.",
            "all four quantum numbers."
        ],
        answer: "n only."
    },
    {
        question: "Two entangled fermions each have equal probabilities of being in one of two states (state 1 or state 2). The fermions are separated so that no forces act between them. One of the fermions is then studied and found to be in state 1. What is the probability that, when studied, the second particle will also be found in state 1?",
        options: ["100%", "67%", "50%", "0%", "33%"],
        answer: "0%"
    },
    {
        question: "An electron in a hydrogen atom is in the n = 7 shell. How many possible values of the orbital quantum number l could it have?",
        options: ["98", "15", "33", "6", "7"],
        answer: "7"
    },
    {
        question: "An electron in a hydrogen atom has orbital quantum number l = 7. How many possible values of the magnetic quantum number ml could it have?",
        options: ["6", "98", "15", "33", "7"],
        answer: "15"
    },
    {
        question: "If the principal quantum number of an electron is n = 5, which one of the following is NOT an allowed magnetic quantum number ml for the electron?",
        options: ["0", "5", "4", "2", "3"],
        answer: "5"
    },
    {
        question: "In the ground state, the quantum numbers (n, l, ml, ms) for hydrogen are, respectively",
        options: [
            "1, 1, 0, ±½",
            "1, 0, 0, ±½",
            "1, 0, 0, 0",
            "1, 1, 1, ±½",
            "1, 1, 1, 1"
        ],
        answer: "1, 0, 0, ±½"
    },
    {
        question: "The binding energy of the hydrogen atom in its ground state is -13.6 eV. What is the energy when it is in the n = 5 state?",
        options: ["-0.544 eV", "2.72 eV", "-2.72 eV", "-68 eV", "0.544 eV"],
        answer: "-0.544 eV"
    },
    {
        question: "What is the energy of an incident photon that is just enough to excite a hydrogen atom from its ground state to its n = 4 state?",
        options: ["10.20 eV", "0.85 eV", "3.40 eV", "12.75 eV"],
        answer: "12.75 eV"
    },
    {
        question: "What is the greatest magnitude of the orbital angular momentum L for an electron in a state with principal quantum number n = 5?",
        options: ["4.90ℏ", "5.48ℏ", "4.47ℏ", "5ℏ"],
        answer: "4.47ℏ"
    },
    {
        question: "What is the greatest total angular momentum J for an electron in the n = 2 shell?",
        options: ["3.5ℏ", "0.50ℏ", "1.5ℏ", "2.5ℏ", "1.9ℏ"],
        answer: "1.9ℏ"
    },
    {
        question: "The magnitude of the orbital angular momentum L of an electron in a certain atom is equal to 3.464ℏ. Which of the following angles could NOT be the angle between the orbital angular momentum vector of the electron and an arbitrary z-direction?",
        options: ["0.00°", "73.2°", "107°", "90.0°", "54.7°"],
        answer: "0.00°"
    },
    {
        question: "How many electrons can be found with principal quantum number n = 3 in a suitably heavy atom?",
        options: ["9", "18", "20", "6"],
        answer: "18"
    },
    {
        question: "The correct ground state electron configuration of boron, which has 5 electrons, is",
        options: ["1s²2p²3s", "1s²2s²2p³", "1s²2p³", "1s²1p²2s", "1s²2s²2p"],
        answer: "1s²2s²2p"
    },
    {
        question: "A neutral atom has an electron configuration of 1s²2s²2p⁶3s²3p². How many protons does it have in its nucleus?",
        options: ["11", "26", "14", "20", "5"],
        answer: "14"
    },
    {
        question: "What is the correct electronic configuration for ground state carbon, which has 6 electrons?",
        options: ["1s²2s²2p⁴", "1s²2s²2p²", "1s¹2s²2p¹", "1s¹2s¹2p¹", "1s¹2p¹"],
        answer: "1s²2s²2p²"
    },
    {
        question: "An s state (l = 0) energy level is split into two levels by an applied magnetic field. A photon of microwave radiation having frequency 60 GHz induces a transition between the two levels. What is the magnitude of the applied magnetic field? (h = 6.626 × 10⁻³⁴ J • s, Bohr magneton = μB = 9.27 × 10⁻²⁴ J/T)",
        options: ["2.8 T", "13 T", "0.34 T", "2.1 T", "1.2 T"],
        answer: "2.1 T"
    },
    {
        question: "An alkali metal atom is in the ground state. The orbital angular momentum equals zero and the spin angular momentum is entirely due to the single valence electron. A magnetic field is applied that splits the ground state energy level into two levels, 27 µeV apart. What is the strength of the applied magnetic field? (h = 6.626 × 10⁻³⁴ J · s, Bohr magneton = μB = 9.27 × 10⁻²⁴ J/T, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: ["0.34 T", "0.29 T", "0.23 T", "0.18 T", "0.40 T"],
        answer: "0.23 T"
    },
    {
        question: "An alkali metal atom is in the ground state. The orbital angular momentum equals zero and the spin angular momentum is entirely due to the single valence electron. A magnetic field is applied that splits the ground state energy level into two levels, 65 µeV apart. A photon, absorbed by the atom, induces a transition between the two levels. What is the wavelength of the photon? (c = 3.00 × 10⁸ m/s, h = 6.626 × 10⁻³⁴ J · s, Bohr magneton = μB = 9.27 × 10⁻²⁴ J/T, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: ["38 mm", "19 mm", "25 mm", "41 mm", "31 mm"],
        answer: "19 mm"
    },
    {
        question: "A three-dimensional potential well has potential U₀ = 0 in the region 0 < x < L, 0 < y < L, and 0 < z < L and infinite potential otherwise. The ground state energy of a particle in the well is E₀. What is the energy of the first excited state, and what is the degeneracy of that state?",
        options: [
            "3E₀, single degeneracy",
            "2E₀, triple degeneracy",
            "6E₀, triple degeneracy",
            "2E₀, single degeneracy",
            "6E₀, single degeneracy"
        ],
        answer: "2E₀, triple degeneracy"
    },
    {
        question: "A three-dimensional potential well has potential U₀ = 0 in the region 0 < x < L, 0 < y < L, and 0 < z < 2L and infinite potential otherwise. The ground state energy of a particle in the well is E₀. What is the energy of the first excited state, and what is the degeneracy of that state?",
        options: [
            "2E₀, double degeneracy",
            "(4/3)E₀, single degeneracy",
            "3E₀, triple degeneracy",
            "(7/3)E₀, double degeneracy",
            "2E₀, single degeneracy"
        ],
        answer: "(4/3)E₀, single degeneracy"
    },
    {
        question: "Covalent bonding is due to",
        options: [
            "atoms bonding to hydrogen molecules.",
            "the sharing of electrons between atoms.",
            "the transfer of electrons between atoms.",
            "atoms bonding to oxygen molecules."
        ],
        answer: "the sharing of electrons between atoms."
    },
    {
        question: "Ionic bonding is due to",
        options: [
            "the sharing of electrons between atoms.",
            "the transfer of electrons between atoms.",
            "atoms bonding to oxygen molecules.",
            "atoms bonding to hydrogen molecules."
        ],
        answer: "the transfer of electrons between atoms."
    },
    {
        question: "A rotating diatomic molecule in its l = 1 quantum state has energy E. What is the energy of the same molecule in its l = 2 quantum state?",
        options: ["8E", "2E", "6E", "4E", "3E"],
        answer: "3E"
    },
    {
        question: "A vibrating diatomic molecule in its ground state has energy E. What is the energy of the same molecule in its second EXCITED state?",
        options: ["2E", "9E", "E", "5E", "3E"],
        answer: "5E"
    },
    {
        question: "An unfilled electron state in the valence band is called",
        options: [
            "an empty positron.",
            "a conduction electron.",
            "a positron.",
            "a hole.",
            "an empty electron."
        ],
        answer: "a hole."
    },
    {
        question: "In a p-type semiconductor, a hole is",
        options: [
            "a donor atom.",
            "a missing atom in the crystalline structure.",
            "an extra electron supplied by a donor atom.",
            "a region where an electron is missing.",
            "an extra proton supplied by a donor atom."
        ],
        answer: "a region where an electron is missing."
    },
    {
        question: "A diatomic has a moment of inertia of 7.73 × 10⁻⁴⁵ kg·m². What is its rotational energy in the quantum state characterized by l = 2? (h = 6.626 × 10⁻³⁴ J·s, ℏ = 1.055 × 10⁻³⁴ J·s, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: ["72.2 μeV", "27.0 μeV", "587 μeV", "22.7 μeV", "87.1 μeV"],
        answer: "27.0 μeV"
    },
    {
        question: "A certain molecule has 2.00 eV of rotational energy in the l = 1 state. In the l = 4 state, what would its rotational energy be?",
        options: ["16.0 eV", "32.0 eV", "30.0 eV", "8.00 eV", "20.0 eV"],
        answer: "20.0 eV"
    },
    {
        question: "The vibrational frequency of an HF molecule is 8.72 × 10¹³ Hz and the reduced mass of the molecule is 1.589 × 10⁻²⁷ kg. What is the ground state vibrational energy of an HF molecule? (1 eV = 1.60 × 10⁻¹⁹ J, ℏ = 1.055 × 10⁻³⁴ J·s, h = 6.626 × 10⁻³⁴ J·s)",
        options: ["0.12 eV", "0.36 eV", "0.18 eV", "0.30 eV", "0.24 eV"],
        answer: "0.18 eV"
    },
    {
        question: "A certain diatomic molecule emits a photon of energy 1.20 eV when it makes a transition from the n = 1 vibrational state to the next lower vibrational state. What is the frequency of vibration of the molecule? (h = 6.626 × 10⁻³⁴ J · s, ℏ = 1.055 × 10⁻³⁴ J · s, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: [
            "1.82 × 10¹⁵ Hz",
            "2.73 × 10¹⁵ Hz",
            "1.93 × 10¹⁴ Hz",
            "4.35 × 10¹⁴ Hz",
            "2.90 × 10¹⁴ Hz"
        ],
        answer: "2.90 × 10¹⁴ Hz"
    },
    {
        question: "What is the occupancy probability at an energy of 12.00 eV for a material with a Fermi energy (level) of 11.63 eV at a temperature of 500 K? (me1 = 9.11 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J · s, Boltzmann constant = 1.38 × 10⁻²³, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: ["6.0%", "12%", "0.00030%", "0.019%", "2.0%"],
        answer: "0.019%"
    },
    {
        question: "A metal has a Fermi level (energy) of 5.50 eV. At 1200 K, what energy will have a 90% occupancy probability? (me1 = 9.11 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J · s, Boltzmann constant = 1.38 × 10⁻²³, 1 eV = 1.60 × 10⁻¹⁹ J)",
        options: ["5.79 eV", "5.44 eV", "5.27 eV", "5.56 eV", "5.73 eV"],
        answer: "5.27 eV"
    },
    {
        question: "Silver has a Fermi level (energy) of 5.5 eV. At 0 K, at what speed would the electrons be moving if they had kinetic energy equal to the Fermi energy? (This speed is known as the Fermi speed.) (me1 = 9.11 × 10⁻³¹ kg, 1 eV = 1.60 × 10⁻¹⁹ J, h = 6.626 × 10⁻³⁴ J · s)",
        options: ["1.0 km/s", "1400 km/s", "1100 km/s", "3.5 km/s", "2.2 km/s"],
        answer: "1400 km/s"
    },
    {
        question: "The energy gap between the valence and conduction bands in a certain semiconductor is 1.25 eV. What is the threshold wavelength for optical absorption in this substance? (c = 3.00 × 10⁸ m/s, 1 eV = 1.60 × 10⁻¹⁹ J, h = 6.626 × 10⁻³⁴ J · s)",
        options: ["959 nm", "599 nm", "994 nm", "639 nm", "873 nm"],
        answer: "994 nm"
    }

];

function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const app = document.getElementById("app");

function renderQuestions() {
    const shuffledQuestions = shuffleArray(questions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    app.innerHTML = "";
    shuffledQuestions.forEach((q, idx) => {
        const box = document.createElement("div");
        box.className = "question-box";

        const title = document.createElement("p");
        title.innerHTML = `<strong>${idx + 1})</strong> ${q.question}`;
        box.appendChild(title);

        q.options.forEach((opt) => {
            const label = document.createElement("label");
            label.style.display = "block";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q-${idx}`;
            input.value = opt;

            input.onclick = () => {
                const existing = box.querySelector(".feedback");
                if (existing) existing.remove();

                const result = document.createElement("span");
                result.className = "feedback " + (opt === q.answer ? "correct" : "wrong");
                result.textContent = opt === q.answer ? "Correct!" : `Wrong Answer`;
                label.appendChild(result);
            };

            label.appendChild(input);
            label.append(` ${opt}`);
            box.appendChild(label);
        });

        app.appendChild(box);
    });

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Testi Yenile";
    restartBtn.style = "padding: 8px 16px; margin-top: 20px;";
    restartBtn.onclick = () => renderQuestions();
    app.appendChild(restartBtn);
}

renderQuestions();