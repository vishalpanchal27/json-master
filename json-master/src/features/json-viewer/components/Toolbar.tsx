import Button from "../../../components/Button";

const Toolbar = () => {
    return (
        <div className="mt-6 flex flex-wrap gap-4">

            <Button>
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