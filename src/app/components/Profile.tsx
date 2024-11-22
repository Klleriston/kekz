"use client";

import { TypeAnimation } from "react-type-animation";

export function Profile() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                <TypeAnimation sequence={["Klleriston Andrade", 2000]} repeat={Infinity} />
            </h1>
            <h3 className="mt-2 text-gray-700 dark:text-gray-300">
                <TypeAnimation sequence={["Node.js | TypeScript | Java | GCP | React", 2000]} repeat={Infinity} />
            </h3>
        </div>
    );
}
