import { useIcons } from './icons';

const { getFaBrandClass, getFaClass } = useIcons();

export const useProfiles = () => {
    const networks = {
        blog: {
            brand: false,
            icon: 'pencil-alt',
            print: true
        },
        github: {
            icon: 'github-alt',
            brand: true,
            print: true
        },
        gitlab: {
            icon: 'gitlab',
            brand: true,
            print: false
        },
        // {
        //     link: 'https://goo.gl/PXLSWi',
        //     icon: 'file-alt',
        //     text: 'Resume'
        // },
        linkedin: {
            icon: 'linkedin',
            brand: true,
            print: true
        },
        "slide decks": {
            icon: 'chalkboard-teacher',
            brand: false,
            print: false
        }
    };

    const getProfile = (network, profiles) => {
        return Object.values(profiles).find((profile) => profile.network.toLowerCase() == network.toLowerCase());
    };

    const getProfileIcon = (network) => {
        const icon = networks[network].brand ? getFaBrandClass(networks[network].icon) : getFaClass(networks[network].icon)

        return `${icon}`;
    };

    return { getProfile, getProfileIcon, networks };
}
