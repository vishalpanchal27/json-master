import Button from "@/components/Button";

type ToolbarProps = {
    onFormat: () => void;
};

const Toolbar = ({ onFormat }: ToolbarProps) => {
    return (
        <div className="mt-6 flex flex-wrap gap-4">
            <Button onClick={onFormat}>
                Format
            </Button>

            <Button variant="secondary">
                Validate
            </Button>

            <Button variant="secondary">
                Copy
            </Button>

            <Button variant="danger">
                Clear
            </Button>
        </div>
    );
};

export default Toolbar;