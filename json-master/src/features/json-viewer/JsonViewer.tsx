import JsonInput from "./components/JsonInput";
import JsonOutput from "./components/JsonOutput";
// import Toolbar from "./components/Toolbar";
import useJsonViewer from "./hooks/useJsonViewer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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

                <Card
                    title="JSON Input"
                    subtitle="Paste your JSON here"
                    headerAction={
                        <div className="flex gap-2">
                            <Button onClick={handleFormat}>
                                Format
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={handleValidate}
                            >
                                Validate
                            </Button>

                            <Button
                                variant="danger"
                                onClick={handleClear}
                            >
                                Clear
                            </Button>
                        </div>
                    }
                >
                    <JsonInput
                        value={input}
                        onChange={setInput}
                    />
                </Card>

                <Card
                    title="Formatted Output"
                    subtitle="Pretty printed JSON"
                    headerAction={
                        <Button
                            variant="secondary"
                            onClick={handleCopy}
                        >
                            Copy
                        </Button>
                    }
                >
                    <JsonOutput
                        output={output}
                        error={error}
                    />
                </Card>

            </div>

            {/* <Toolbar
                onFormat={handleFormat}
                onValidate={handleValidate}
                onCopy={handleCopy}
                onClear={handleClear}
            /> */}

        </section>
    );
};

export default JsonViewer;