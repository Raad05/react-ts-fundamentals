type DataFetchProps = {
  status: "failed" | "loading" | "success";
};

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "failed")
    return (
      <div className="data-fetch">
        <h3>Failed to load data</h3>
      </div>
    );
  else if (status === "loading")
    return (
      <div className="data-fetch">
        <h3>Loading data ...</h3>
      </div>
    );

  return (
    <div className="data-fetch">
      <h3>Data fetched successfully!!!</h3>
    </div>
  );
};

export default DataFetch;
