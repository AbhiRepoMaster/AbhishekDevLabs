import React, { useEffect, useRef } from 'react';

const useInView = (callback) => {
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [callback]);

    return ref;
};

const TimelineItem = ({ children, className }) => {
    const ref = useInView(() => {
        ref.current.classList.add('in-view');
    });

    return (
        <div className={`timeline-item ${className}`} ref={ref}>
            {children}
        </div>
    );
};

export default TimelineItem;
