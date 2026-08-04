import JsonInput from "./components/JsonInput";
import JsonOutput from "./components/JsonOutput";
import Toolbar from "./components/Toolbar";
import useJsonViewer from "./hooks/useJsonViewer";

const JsonViewer = () => {
    const {
        input,
        output,
        error,
        setInput,
        handleFormat,
        handleValidate,
        handleCopy,
        handleClear,
    } = useJsonViewer();

    return (
        <section className="mx-auto max-w-7xl px-6 py-12">

            <h2 className="mb-6 text-3xl font-bold">
                JSON Viewer
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">

                <JsonInput
                    value={input}
                    onChange={setInput}
                />

                <JsonOutput
                    output={output}
                    error={error}
                />

            </div>

            <Toolbar
                onFormat={handleFormat}
                onValidate={handleValidate}
                onCopy={handleCopy}
                onClear={handleClear}
            />

        </section>
    );
};

export default JsonViewer;