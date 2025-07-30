import React, { useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import type { FilterOptionsContainerProps } from '../../types'
import FilterOption from './FilterOption'
import useMediaFilters from '../../hooks/useMediaFilters';
import ColumnDividerThin from '../utilComponents/ColumnDividerThin';

const FilterOptionsContainer = ({ section, options, multiple, enabled, filterKey }: FilterOptionsContainerProps) => {
  const storageKey: string = `filterOptionsHidden-${section}`
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [hidden, setHidden] = useState<boolean>(() => sessionStorage.getItem(storageKey) === 'true');
  const [filters, setFilters] = useMediaFilters();
  const toggleVisibility = () => {
    const newVal: boolean = !hidden;
    setHidden(newVal);
    sessionStorage.setItem(storageKey, JSON.stringify(newVal));
  }
  return (
    <div className='flex flex-col gap-3.5 items-start w-full'>
      <ColumnDividerThin />
      <span className='font-roboto font-bold text-[20px] hover:cursor-pointer hover:text-gray-500 hover:scale-98'
        onClick={toggleVisibility}>{section}</span>
      <MotionConfig transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}>
        <AnimatePresence>
          {!hidden && <motion.div className='flex items-center flex-wrap gap-3.5'
            layout
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {options.map((option) => (
              <FilterOption
                key={option.value}
                value={option.value}
                title={option.label}
                selected={selectedValues.includes(option.value)}
                onClick={() => {
                  if (!enabled) return;
                  if (multiple) {
                    if (selectedValues.includes(option.value)) {
                      const newValues = selectedValues.filter(v => v !== option.value);
                      setSelectedValues(newValues);
                      setFilters({
                        [filterKey]: newValues.join(',')
                      });
                    }
                    else {
                      const newValues = [...selectedValues, option.value];
                      setSelectedValues(newValues);
                      setFilters({
                        [filterKey]: newValues.join(','),
                      });
                    }
                  }
                  else {
                    setSelectedValues([]);
                    setSelectedValues([option.value]);
                    setFilters({
                      [filterKey]: option.value
                    });
                    console.log("FILTERS:", filters);
                  }
                  console.log("OPTION CLICKED!");
                }}
                enabled={enabled}
              />
            ))}
          </motion.div>}
        </AnimatePresence>
      </MotionConfig>


    </div>

  )
}

export default FilterOptionsContainer