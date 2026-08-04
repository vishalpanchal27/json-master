import Button from "@/components/Button";

type ToolbarProps = {
    onFormat: () => void;
    onValidate: () => void;
    onCopy: () => void;
    onClear: () => void;
};

const Toolbar = ({
    onFormat,
    onValidate,
    onCopy,
    onClear,
}: ToolbarProps) => {
    return (
        <div className="mt-6 flex flex-wrap gap-4">
            <Button onClick={onFormat}>
                Format
            </Button>

            <Button onClick={onValidate}>
                Validate
            </Button>

            <Button
                variant="secondary"
                onClick={onCopy}
            >
                Copy
            </Button>

            <Button
                variant="danger"
                onClick={onClear}
            >
                Clear
            </Button>
        </div>
    );
};

export default Toolbar;