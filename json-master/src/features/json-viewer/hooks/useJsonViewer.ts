import { useState } from "react";
import { formatJson } from "../utils/formatJson";
import { toast } from "sonner";

const useJsonViewer = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const handleFormat = () => {
        try {
            const formatted = formatJson(input);

            setOutput(formatted);
            setError("");
            toast.success("JSON formatted successfully");
        } catch {
            setOutput("");
            setError("Invalid JSON");
            toast.error("Invalid JSON");
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError("");
        toast.info("Editor cleared");
    };

    const handleCopy = async () => {
        if (!output) return;

        toast.success("Copied to clipboard");
        await navigator.clipboard.writeText(output);
    };

    const handleValidate = () => {
        try {
            JSON.parse(input);

            setError("");
            toast.success("Valid JSON");
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