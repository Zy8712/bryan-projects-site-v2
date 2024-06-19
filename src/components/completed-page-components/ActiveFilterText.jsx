'use client'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const filterTextMap = {
    0: "No filter selected. Displaying all completed projects.",
    '-2': "Search mode active. Filtering by user query.",
    '-1': "Advanced filtering selected.",
    1: "Filter Selected: Featured Projects.",
    100: "Tech Filter Selected: HTML/CSS/SASS Only Projects",
    101: "Tech Filter Selected: Vanilla JS",
    102: "Tech Filter Selected: React",
    103: "Tech Filter Selected: Tailwind CSS",
    104: "Tech Filter Selected: JSON",
    105: "Tech Filter Selected: API",
    106: "Tech Filter Selected: Next.js",
    107: "Tech Filter Selected: Vue",
    108: "Tech Filter Selected: Astro",
    109: "Tech Filter Selected: Wouter",
    200: "Source Filter Selected: Frontend Mentor",
    201: "Source Filter Selected: iCodeThis",
    202: "Source Filter Selected: Codewell",
    203: "Source Filter Selected: Frontend Pro",
    204: "Source Filter Selected: Odin Project",
    205: "Source Filter Selected: Tapioca",
    206: "Source Filter Selected: YouTube",
    207: "Source Filter Selected: Personal",
    300: "Filter Selected: School",
    301: "Filter Selected: Collab",
    302: "Filter Selected: Freelance",
    303: "Filter Selected: Multi-page",
    304: "Filter Selected: Single Page",
    305: "Filter Selected: Components",
    306: "Filter Selected: Recent"
};

export default function ActiveFilterText() {

    const { activeFilter } = useSelector(state => state.projects);

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        // Ensure to convert activeFilter to string to match the keys
        const text = filterTextMap[String(activeFilter)] || "Default text.";
        setDisplayText(text);
    }, [activeFilter]);

    return (
        <>
            {displayText}
        </>
    );
}