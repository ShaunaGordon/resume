export const useDateUtils = () => {
    const isCurrent = (date, cutoff = 5) => !date || Date.parse(date) >= Date.parse((new Date()).getFullYear() - cutoff);

    const toWordMonthFormat = (rawDate) => {
        const date = Date.parse(rawDate);

        const options = {
            month: 'long',
            year: 'long'
        };

        return date.toLocaleString('default', options);
    }

    return { isCurrent, toWordMonthFormat };
}
