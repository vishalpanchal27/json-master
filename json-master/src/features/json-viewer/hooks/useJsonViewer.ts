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

    return {
        input,
        output,
        error,
        setInput,
        handleFormat,
    };
};

export default useJsonViewer;