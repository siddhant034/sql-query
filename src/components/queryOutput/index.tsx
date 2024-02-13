import useGetData from "../../hooks/useGetData";
import { QUERY } from "../../mocks";
import { Grid } from "../grid";
import { INFO_TYPE, Info } from "../info";

type QueryOutputProps = {
  query: QUERY | null;
};

const QueryOutput: React.FC<QueryOutputProps> = ({
  query,
}: QueryOutputProps) => {
  const { parsedData, isLoading, error } = useGetData(query);

  if (!parsedData || error) {
    return null;
  }
  if (isLoading && query && query != QUERY.INVALID) {
    return <div>Loading...</div>;
  }

  const isShowGrid = query != QUERY.INVALID && parsedData?.[0];
  const isShowRun = query != QUERY.INVALID && !parsedData?.[0];
  const isShowNoData = query === QUERY.INVALID;

  return (
    <div className="center full-wh p-24">
      {isShowGrid && <Grid rowData={parsedData} />}
      {isShowRun && <Info infoType={INFO_TYPE.RUN} />}
      {isShowNoData && <Info infoType={INFO_TYPE.NO_DATA} />}
    </div>
  );
};

export { QueryOutput };
