import React, { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const Filter = ({ brands, colors, onBrandChange, onColorChange }) => {
    return (
        <div>
            <details className="pt-7 pb-10">
                <summary className="pb-6">BRAND</summary>
                <div className="flex flex-col gap-y-4">
                    {brands?.map((e, inx) => (
                        <div className="flex items-center gap-x-4" key={inx}>
                            <input
                                className="w-5 h-5 accent-[#0BA42D]"
                                type="checkbox"
                                id={e}
                                name="brand"
                                onChange={onBrandChange}
                            />
                            <label className="text-lg font-light" htmlFor={e}>
                                {e}
                            </label>
                        </div>
                    ))}
                </div>
            </details>
            <div className="pt-7 border-t-2 border-dashed border-[#454444CC]">
                <details>
                    <summary className="mb-6">COLORS</summary>
                    <div className="grid w-[164px] grid-cols-5 gap-x-[11px] gap-y-4">
                        {colors?.map((color, inx) => (
                            <button
                                key={inx}
                                className="w-6 h-6 rounded-full border active:border-black"
                                style={{
                                    backgroundColor: color,
                                }}
                                onClick={() => onColorChange(color)}></button>
                        ))}
                    </div>
                </details>
            </div>
        </div>
    );
};

export default Filter;
