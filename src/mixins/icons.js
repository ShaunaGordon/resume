export const useIcons = () => {
    const getTechClass = (i) => {
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
