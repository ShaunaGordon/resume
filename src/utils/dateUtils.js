import dayjs from "dayjs";

export const useDateUtils = () => {
    const isCurrent = (date, cutoff = 5) => !date || dayjs(date, 'YYYY-MM') >= (dayjs().year() - cutoff);

    const toWordMonthFormat = (rawDate) => {
        if(!rawDate) return;

        const date = dayjs(rawDate, 'YYYY-MM');

        return date.format('MMMM YYYY')
    }

    return { isCurrent, toWordMonthFormat };
}
