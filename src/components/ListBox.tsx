import React from "react";
import { Fragment, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { BiCheck } from "react-icons/bi";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import DOMPurify from "dompurify";
import { optionTypes } from "@/types/BoxTypes";

const ListBox = ({ options }: { options: optionTypes[] }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [selected, setSelected] = useState(options[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-[20%] text-sm">
        <Listbox.Button
          className={`relative w-full cursor-pointer px-2 py-2 rounded-[4px] ${
            theme === "dark"
              ? "bg-bg_dark_placeholder"
              : "bg-bg_light_placeholder"
          } focus:outline-0 text-left`}
        >
          <span
            className="block truncate"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selected.name),
            }}
          ></span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiMiniChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md ${
              theme === "dark"
                ? "bg-bg_dark_placeholder"
                : "bg-bg_light_placeholder"
            } py-2 text-base focus:outline-none sm:text-sm`}
          >
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? theme === "dark"
                        ? "bg-black text-text_primary"
                        : "bg-amber-100 text-text_secondary"
                      : theme === "dark"
                      ? "text-text_primary"
                      : "text-text_secondary"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(person.name),
                      }}
                    ></span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiCheck
                          className={`h-5 w-5 ${
                            theme === "dark"
                              ? "text-text_primary"
                              : "text-text_secondary"
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBox;
