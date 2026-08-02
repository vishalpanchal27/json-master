const JsonOutput = () => {
    return (
        <div>
            <label className="mb-2 block text-lg font-semibold">
                Output
            </label>

            <div className="h-[450px] overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4">
                Formatted JSON will appear here...
            </div>
        </div>
    );
};

export default JsonOutput;