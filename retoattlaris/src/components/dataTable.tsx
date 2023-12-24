import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DataModal from "./modal";
export enum ModalMode {
  Visualizar = "Visualizar",
  Editar = "Editar",
  Crear = "Crear",
}
const DataTable = () => {
  const [filterText, setFilterText] = useState("");
  const [rowData, setRowData] = useState([]);
  const [rows, setRows] = useState([
    {
      id: 696,
      title: "Eco Partes Blandas",
      subTiposExamen: "Estudios de Perfusion",
      examen: "Estudios de Perfusion",
      estado: "Activo",
      notaAdicional: "",
    },
    {
      id: 697,
      title: "RX Cráneo Frontal",
      subTiposExamen: "Estudios de Reflujo",
      examen: "Examen 2",
      estado: "Inactivo",
      notaAdicional: "",
    },
  ]);

  const [mode, setMode] = useState<ModalMode>(ModalMode.Visualizar);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Nombre", width: 180 },
    { field: "subTiposExamen", headerName: "Subtipo", width: 400 },
    { field: "estado", headerName: "Estado", width: 90 },
    {
      field: "acciones",
      headerName: "",
      width: 180,
      renderCell: (params: any) => (
        <>
          <IconButton
            color="primary"
            onClick={() => {
              setMode(ModalMode.Visualizar);
              setRowData(params.row);
              handleOpen();
            }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setMode(ModalMode.Editar);
              setRowData(params.row);
              handleOpen();
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleFilterChange = (e: any) => {
    setFilterText(e.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.title.toLowerCase().includes(filterText.toLowerCase()) ||
      row.subTiposExamen.toLowerCase().includes(filterText.toLowerCase()) ||
      row.examen.toLowerCase().includes(filterText.toLowerCase()) ||
      row.estado.toLowerCase().includes(filterText.toLowerCase())
  );
  const crearFila = (nuevaFila: any) => {
    nuevaFila.id = rows.length + 1;
    setRows([...rows, nuevaFila]);
  };

  const editarFila = (filaEditada: any) => {
    const filasActualizadas = rows.map((fila) =>
      fila.id === filaEditada.id ? filaEditada : fila
    );

    setRows(filasActualizadas);
  };

  return (
    <div>
      <div className="macrosTitle">
        <IconButton
          style={{
            position: "absolute",
            backgroundColor: "rgb(9, 30, 37)",
            top: "-15px",
            right: "-10px",
          }}
          color="primary"
          onClick={() => {
            setMode(ModalMode.Crear);
            setRowData([]);
            handleOpen();
          }}
        >
          <AddIcon />
        </IconButton>
        <h2>Macros</h2>
        <TextField
          label="Buscar en esta Lista"
          variant="outlined"
          value={filterText}
          onChange={handleFilterChange}
          style={{ marginBottom: 0 }}
          InputProps={{
            style: {
              display: "flex",
              alignItems: "center",
              padding: "15px",
              marginBottom: "5px",
            },
          }}
          inputProps={{
            style: {
              padding: "0px",
            },
          }}
        />
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          autoHeight
          style={{ background: "white" }}
        />
      </div>
      <DataModal
        crearFila={crearFila}
        editarFila={editarFila}
        mode={mode}
        rowData={rowData}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default DataTable;
