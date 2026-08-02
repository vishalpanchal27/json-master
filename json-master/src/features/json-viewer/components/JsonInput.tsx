const JsonInput = () => {
    return (
        <div>
            <label className="mb-2 block text-lg font-semibold">
                JSON Input
            </label>

            <textarea
                placeholder="Paste your JSON here..."
                className="h-[450px] w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none transition focus:border-cyan-400"
            />
        </div>
    );
};

export default JsonInput;