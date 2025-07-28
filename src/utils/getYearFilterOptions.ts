import dayjs from "dayjs";

export default function getYearFilterOptions() {
    const yearsArrLength: number = 5;
    let yearOptions: { label: string, value: string }[] = [];
    for (let i = 0; i < yearsArrLength; i++) {
        const year: any = dayjs().subtract(i, 'year').year();
        yearOptions.push({ label: `${year}`, value: `${year}` });
    }
    yearOptions.splice(0, 0, { label: 'All', value: '' });
    yearOptions.splice(yearOptions.length, 0, { label: 'Older', value: `${dayjs().subtract(yearsArrLength, 'year').year()}` });
    return yearOptions;
}