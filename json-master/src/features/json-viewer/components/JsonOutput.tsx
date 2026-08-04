type JsonOutputProps = {
    output: string;
    error: string;
};

const JsonOutput = ({
    output,
    error,
}: JsonOutputProps) => {
    return (
        <div>
            <label className="mb-2 block text-lg font-semibold">
                Output
            </label>

            <pre className="h-[450px] overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4">

                {error ? (
                    <span className="text-red-400">
                        {error}
                    </span>
                ) : (
                    output
                )}

            </pre>
        </div>
    );
};

export default JsonOutput;