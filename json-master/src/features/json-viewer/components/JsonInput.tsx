type JsonInputProps = {
    value: string;
    onChange: (value: string) => void;
};

const JsonInput = ({
    value,
    onChange,
}: JsonInputProps) => {
    return (
        <div>
            <label className="mb-2 block text-lg font-semibold">
                JSON Input
            </label>

            <textarea
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Paste your JSON here..."
                className="h-[450px] w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
            />
        </div>
    );
};

export default JsonInput;