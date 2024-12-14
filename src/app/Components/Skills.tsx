"use client"

import { useState } from "react";

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="px-3 pt-4">
      <div className="flex gap-3 border-b-2 border-slate-700 items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)} >
        <h2 className="flex text-slate-700 text-3xl font-bold uppercase italic">
        <span className="text-gray-500 text-xl mr-1">
          {isExpanded ? "▲" : "▼"}
        </span>
            Skills</h2>
        </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className="mt-4 space-y-2">
          <ul className="list-disc px-4 text-slate-800">
            <li>MS Office Suite (Excel, Word, PowerPoint, Visio)</li>
            <li>Analytical skills</li>
            <li>Policy drafting</li>
            <li>Managing skills</li>
            <li>IT proficiency</li>
            <li>Diligence and hard work</li>
            <li>Communication skills</li>
            <li>Self-motivation and commitment</li>
          </ul>
        </div>
      )}
    </div>
  );
}