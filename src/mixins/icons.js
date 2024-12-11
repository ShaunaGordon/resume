export const useIcons = () => {
    const getTechClass = (i) => {
        // Devicons doesn't have O3DE, so we're adding our own for now
        if(i == 'o3de') {
            return `icon devicon-cplusplus-plain`;
        }
        return `icon devicon-${i}-plain`;
    };

    const getFaClass = (i) => {
        return `icon fas fa-${i}`;
    }

    const getFaBrandClass = (i) => {
        return `icon fab fa-${i}`;
    }

    return { getTechClass, getFaClass, getFaBrandClass };
}
