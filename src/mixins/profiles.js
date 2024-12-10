export const useProfiles = () => {
    const getProfile = (network, profiles) => {
        return Object.values(profiles).find((profile) => profile.network.toLowerCase() == network.toLowerCase());
    };

    return { getProfile };
}
