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
    'Expert' // Can bend to my will, 3+ years regular hands-on, 1+ full time jobs with focus on it (PHP, JS)
  ];

  /**
  * Get the skills at or above the minimum display threshold.
  * Why don't we just not have less-developed skills in the data?
  * Because we want to record it for tracking purposes, but don't want
  * to display it on the resume until a certain level is reached.
  * Doing it this way also allows us to adjust that threshold as desired,
  * and the data will automatically adjust accordingly.
  *
  * @param {int} minLevel | Index of skill level to filter starting at
  * @returns array[string]
  */
  const getSkillLevels = (minLevel = 3) => {
    return R.reverse(R.slice(minLevel, Infinity, skillLevels));
  };

  return { skillLevels, getSkillLevels };
}
