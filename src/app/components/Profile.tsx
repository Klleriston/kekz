"use client";

import { TypeAnimation } from "react-type-animation";

export function Profile() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                <TypeAnimation sequence={["Klleriston Andrade", 3000]} repeat={Infinity} cursor={false} />
            </h1>
            <h3 className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                <TypeAnimation sequence={["Desenvolvedor", 3000]} cursor={false} />
            </h3>
            <h3 className="mt-2 text-gray-700 dark:text-gray-300">
                <TypeAnimation sequence={["Node.js | TypeScript | React | Java | Azure | AWS", 2000]} cursor={false} />
            </h3>
        </div>
    );
}
