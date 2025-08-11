// src/components/AnimatedIcon.tsx
import React, { useMemo } from "react";

type AnimatedIconProps = {
    src: string;
    trigger?: "hover" | "click" | "loop" | "autoplay" | string;
    attributes?: Record<string, unknown>;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
};

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
    src,
    trigger = "hover",
    attributes = {},
    width = 64,
    height = 64,
    className,
    style,
}) => {
    const attrJson = useMemo(() => JSON.stringify(attributes), [attributes]);

    return (
    <animated-icons
        src={src}
        trigger={trigger}
        attributes={attrJson}
        width={width as any}   // los custom elements reciben strings; React lo convierte
        height={height as any}
        className={className}
        style={style}
    />
    );
};
