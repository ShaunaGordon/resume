export const useDateUtils = () => {
    const isCurrent = (date, cutoff = 5) => !date || Date.parse(date) >= Date.parse((new Date()).getFullYear() - cutoff);

    const toWordMonthFormat = (rawDate) => {
        if(!rawDate) return;

        const date = new Date(Date.parse(rawDate));

        const options = {
            month: 'numeric',
            year: 'numeric'
        };

        return date.toLocaleString('default', options);
    }

    return { isCurrent, toWordMonthFormat };
}
