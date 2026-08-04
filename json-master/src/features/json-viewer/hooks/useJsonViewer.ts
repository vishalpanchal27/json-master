// import { useState } from "react";

// const useJsonViewer = () => {
//     const [input, setInput] = useState("");
//     const [output, setOutput] = useState("");
//     const [error, setError] = useState("");

//     return {
//         input,
//         output,
//         error,
//         setInput,
//         setOutput,
//         setError,
//     };
// };

// export default useJsonViewer;

import { useState } from "react";
import { formatJson } from "../utils/formatJson";

const useJsonViewer = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const handleFormat = () => {
        try {
            const formatted = formatJson(input);

            setOutput(formatted);
            setError("");
        } catch {
            setOutput("");
            setError("Invalid JSON");
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError("");
    };

    const handleCopy = async () => {
        if (!output) return;

        await navigator.clipboard.writeText(output);
    };

    const handleValidate = () => {
        try {
            JSON.parse(input);

            setError("");
            alert("Valid JSON ✅");
        } catch {
            setError("Invalid JSON");
        }
    };

    return {
        input,
        output,
        error,
        setInput,
        handleFormat,
        handleClear,
        handleCopy,
        handleValidate,
    };
};

export default useJsonViewer;