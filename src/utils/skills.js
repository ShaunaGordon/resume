import * as R from 'ramda';

export const useSkills = () => {
    /**
     * Codification of the skill levels, so there's rhyme and reason to them.
     */
    const skillLevels = [
        'Beginner', // Dabbled, just getting started, less than 1 month regular hands-on (Rust)
        'Foundational', // Confident on basics, but still learning, 1-3 months regular hands-on (C++)
        'Experienced', // Confident on common aspects of language, knowledgeable about some of the more language-specific things, 3-12 months regular hands-on (Shell scripting)
        'Advanced', // Knowledgeable enough to teach to others, knows about some of the quirks and inner workings, 1-3 years regular hands-on (Python)
        'Master' // Can bend to my will, 3+ years regular hands-on, 1+ full time jobs with focus on it (PHP, JS)
    ];

    /**
     *
     * @param {array[object]} allSkills
     * @param {int} minLevel | Index of skill level to filter starting at
     * @returns array[object]
     */
    const getSkills = (allSkills, minLevel = 2) => {
        const selectedLevels = R.slice(minLevel, Infinity, skillLevels);

        return Object.values(allSkills).filter(item => selectedLevels.includes(item.level));
    };

    return { skillLevels, getSkills };
}
