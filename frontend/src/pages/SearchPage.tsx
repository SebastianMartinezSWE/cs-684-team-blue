const SearchPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">Search Results</h1>
                <p className="fs-3">
                    {" "}
                    <span className="text-danger">Oops!</span> No results not
                    found.
                </p>
            </div>
        </div>
    );
};

export default SearchPage;
