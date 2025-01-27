import { useIcons } from "./icons";

const { getFaBrandClass, getFaClass } = useIcons();

export const useProfiles = () => {
  /**
   *  Add some extra metadata to the networks. Since these are
   *  only for display purpsoes, it doesn't make a lot of sense
   *  to put them into the JSON data, so we have that here.
   *
   *  Brand: whether it's a brand icon or regular. The main icon
   *  pack doesn't include some of the brands we use, so we use
   *  the brand icons for them for reliability.
   *  Icon: The icon library name for that icon.
   *  Print: Whether that network information should be on the
   *  printed version or not.
  */
  const networks = {
    blog: {
      brand: false,
      icon: "pencil-alt",
      print: true,
    },
    github: {
      icon: "github-alt",
      brand: true,
      print: true,
    },
    gitlab: {
      icon: "gitlab",
      brand: true,
      print: false,
    },
    linkedin: {
      icon: "linkedin",
      brand: true,
      print: true,
    },
    "slide decks": {
      icon: "chalkboard-teacher",
      brand: false,
      print: false,
    },
  };

  /**
   * Get the profile object for the selected network.
   *
   * @param {string} network
   * @param {object[]} profiles
   * @returns object
   */
  const getProfile = (network, profiles) => {
    return Object.values(profiles).find(
      (profile) => profile.network.toLowerCase() == network.toLowerCase(),
    );
  };

  /**
   * Get the icon class string for the given network.
   *
   * @param {string} network
   * @returns
   */
  const getProfileIcon = (network) => {
    const icon = networks[network].brand
      ? getFaBrandClass(networks[network].icon)
      : getFaClass(networks[network].icon);

    return `${icon}`;
  };

  return { getProfile, getProfileIcon, networks };
};
