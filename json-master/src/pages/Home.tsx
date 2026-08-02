import JsonViewer from "../features/json-viewer/JsonViewer";

const Home = () => {
    return (
        <>
            <section className="mx-auto max-w-7xl px-6 py-16">
                <h1 className="text-5xl font-bold">
                    View, Format & Validate JSON
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-slate-400">
                    Fast, secure and beautiful JSON tools for developers.
                </p>
            </section>

            <JsonViewer />
        </>
    );
};

export default Home;