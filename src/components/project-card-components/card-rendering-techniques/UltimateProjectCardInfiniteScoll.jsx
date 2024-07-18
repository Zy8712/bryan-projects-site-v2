'use client'
import React, { useEffect, useState, useRef } from "react";
import UltimateProjectCard from "../UltimateProjectCard";

export default function UltimateProjectCardInfiniteScroll({ data }) {
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [loadedProjects, setLoadedProjects] = useState(12);
    const observer = useRef();

    useEffect(() => {
        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting && loadedProjects < data.length) {
                setLoadedProjects(prevLoadedProjects => prevLoadedProjects + 6);
            }
        };

        observer.current = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        });

        const target = document.querySelector(".load-more-trigger");
        if (target) {
            observer.current.observe(target);
        }

        return () => {
            if (target) {
                observer.current.unobserve(target);
            }
        };
    }, [loadedProjects, data]);

    useEffect(() => {
        setVisibleProjects(data.slice(0, loadedProjects));
    }, [data, loadedProjects]);

    // Reset loadedProjects to 12 when data changes
    useEffect(() => {
        setLoadedProjects(12);
    }, [data]);

    return (
        <>
            {visibleProjects.map((project, index) => (
                <UltimateProjectCard project={project} index={index} />
            ))}
            <div className="load-more-trigger absolute bottom-0 right-0"></div>
        </>
    );
}
