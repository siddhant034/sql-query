import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import { GenericData } from "../../hooks/useGetData";
import "./styles.css";

export const Grid: React.FC<{
  rowData: GenericData<{
    [key: string]: string;
  }>;
}> = ({ rowData }) => {
  const [gridApi, setGridApi] = React.useState(null);

  const gridStyle = { height: "90%", width: "100%" };

  //define column definitions
  let columnDefs: ColDef<{
    [key: string]: string;
  }>[] = [];
  if (rowData?.[0]) {
    columnDefs = Object.keys(rowData[0]).map((col: string) => ({
      headerName: col,
      field: col,
    }));
  }

  if (!rowData?.length || !columnDefs?.length) {
    return null;
  }

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const onSearchInputChange = (event: any) => {
    const query = event.target.value;

    if (gridApi) {
      (gridApi as any).setQuickFilter(query);
    }
  };

  return (
    <div style={gridStyle} className="ag-theme-quartz" role="table">
      <input
        type="text"
        id="search-text-box"
        placeholder="Search..."
        onInput={(e) => onSearchInputChange(e)}
        aria-label="Search"
        aria-describedby="search-text-box-description"
      />
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
      />
    </div>
  );
};
