export const useDateUtils = () => {
    const isCurrent = (date, cutoff = 5) => !date || Date.parse(date) >= Date.parse((new Date()).getFullYear() - cutoff);

    return { isCurrent };
}
