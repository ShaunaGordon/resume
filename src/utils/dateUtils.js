import dayjs from "dayjs";

export const useDateUtils = () => {
  /**
   * Determine whether an item's date is before or after
   * a certain threshold, which we use elsewhere to change
   * the display styling.
   *
   * @param {string} date
   * @param {integer} cutoff
   * @returns
   */
  const isCurrent = (date, cutoff = 5) => !date || dayjs(date, 'YYYY-MM') >= (dayjs().year() - cutoff);

  /**
   * Format a given date in "January 2000" format.
   *
   * Fun fact, JS doesn't have a good way to do this.
   * You would think `toISOString` would and it does...kinda...
   * except months are 0 based, because...reasons...
   * There are libraries for abstracting weird things like this,
   * so we've gone ahead and done that and saved ourselves the headache.
   *
   * @param {string} rawDate
   * @returns string
   */
  const toWordMonthFormat = (rawDate) => {
    if(!rawDate) return;

    const date = dayjs(rawDate, 'YYYY-MM');

    return date.format('MMMM YYYY')
  }

  return { isCurrent, toWordMonthFormat };
}
