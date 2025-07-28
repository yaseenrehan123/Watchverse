import dayjs from "dayjs";
import type { FilterOption } from "../types";

export default function getYearFilterOptions() {
    const yearsArrLength: number = 5;
    let yearOptions: FilterOption[] = [];
    for (let i = 0; i < yearsArrLength; i++) {
        const year: any = dayjs().subtract(i, 'year').year();
        yearOptions.push({ label: `${year}`, value: `${year}` });
    }
    yearOptions.splice(0, 0, { label: 'All', value: '' });
    yearOptions.splice(yearOptions.length, 0, { label: 'Older', value: `${dayjs().subtract(yearsArrLength, 'year').year()}` });
    return yearOptions;
}