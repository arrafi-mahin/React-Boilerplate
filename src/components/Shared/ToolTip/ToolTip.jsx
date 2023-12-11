import Info from '../../../assets/Icons/plus.svg?react'
import React, { useState } from 'react';
/**
 * Renders a tooltip component with an information icon.
 *
 * This component displays an information icon, and when hovered or focused,
 * it shows a tooltip with the provided information.
 *
 * @param {Object} props - The component props.
 * @param {string} props.information - The information to display in the tooltip.
 * @returns {JSX.Element} The rendered tooltip component.
 */

function Tooltip({ information, className, children }) {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    function showTooltip() {
        setTooltipVisible(true);
    }

    function hideTooltip() {
        setTooltipVisible(false);
    }

    return (
        <div className="flex gap-2 items-center">
          {children}
            <a
                // href="./"
                tabIndex="0"
                aria-label="tooltip 1"
                className="outline-none rounded-full relative mt-20 md:mt-0"
                onMouseOver={showTooltip}
                onFocus={showTooltip}
                onMouseOut={hideTooltip}
                onBlur={hideTooltip}
            >
                <div className="cursor-pointer space-x-2">
                    <Info size={20} />
                </div>
                {isTooltipVisible && (
                    <div
                        id="tooltip1"
                        role="tooltip"
                        className={`z-20 -mt-10 w-48 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded-lg ${className}`}
                    >
                        <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                        <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                            <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className="">{information}</p>
                    </div>
                )}
            </a>
        </div>
    );
}

export default Tooltip;