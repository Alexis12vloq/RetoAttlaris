import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import FolderList from "./marcadoresList";
const SubTiposExamenOptions = ["Estudios de Perfusion", "Estudios de Reflujo"];

export enum ModalMode {
  Visualizar = "Visualizar",
  Editar = "Editar",
  Crear = "Crear",
}

interface DataModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mode: ModalMode;
  rowData?: any;
  crearFila: any;
  editarFila: any;
}

const DataModal: React.FC<DataModalProps> = ({
  open,
  setOpen,
  mode,
  rowData,
  crearFila,
  editarFila,
}) => {
  const initialValues = {
    title: "",
    estado: "",
    subTiposExamen: "",
    notaAdicional: "",
    id: 0,
  };
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState(initialValues);
  const [showMarcadores, setShowMarcadores] = useState(false);
  useEffect(() => {
    if (mode === ModalMode.Visualizar || mode === ModalMode.Editar) {
      setFormData({
        id: rowData?.id || 0,
        title: rowData?.title || "",
        estado: rowData?.estado || "",
        subTiposExamen: rowData?.subTiposExamen || "",
        notaAdicional: rowData?.notaAdicional || "",
      });
    }
    if (mode === ModalMode.Crear) {
      setFormData(initialValues);
    }
  }, [mode, rowData, initialValues]);
  const handleGuardar = () => {
    editarFila(formData);
    handleClose();
  };
  const handleCrear = () => {
    crearFila(formData);
    handleClose();
    setFormData(initialValues);
  };

  const renderModalContent = () => {
    switch (mode) {
      case ModalMode.Visualizar:
        return (
          <>
            <Typography id="modal-title" variant="h5" component="h2">
              {mode} Macro
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Title:</Typography>
              <TextField
                disabled={true}
                fullWidth
                label="Title"
                margin="normal"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Estado:</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Estado</InputLabel>
                <Select
                  value={formData.estado}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estado: e.target.value as string,
                    })
                  }
                  disabled={true}
                  label="Estado"
                >
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ marginLeft: "15px", minWidth: 150 }}>
                Sub Tipos Examen:
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Sub Tipos Examen</InputLabel>
                <Select
                  value={formData.subTiposExamen}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subTiposExamen: e.target.value as string,
                    })
                  }
                  disabled={true}
                  label="Sub Tipos Examen"
                >
                  {SubTiposExamenOptions.map((tipo) => (
                    <MenuItem key={tipo} value={tipo}>
                      {tipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <TextField
              disabled={true}
              label="Nota Adicional"
              multiline
              rows={3}
              fullWidth
              margin="normal"
            />
          </>
        );
      case ModalMode.Editar:
        return (
          <>
            <Typography id="modal-title" variant="h5" component="h2">
              {mode} Macro
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Title:</Typography>
              <TextField
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                style={{ marginLeft: "30px" }}
                onClick={() => setShowMarcadores(!showMarcadores)}
              >
                {showMarcadores ? "Ocultar" : "Mostrar"} Marcadores
              </Button>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Estado:</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Estado</InputLabel>
                <Select
                  value={formData.estado}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estado: e.target.value as string,
                    })
                  }
                >
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ marginLeft: "15px", minWidth: 150 }}>
                Sub Tipos Examen:
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Sub Tipos Examen</InputLabel>
                <Select
                  value={formData.subTiposExamen}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subTiposExamen: e.target.value as string,
                    })
                  }
                >
                  {SubTiposExamenOptions.map((tipo) => (
                    <MenuItem key={tipo} value={tipo}>
                      {tipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              label="Nota Adicional"
              multiline
              rows={3}
              fullWidth
              margin="normal"
            />
          </>
        );
      case ModalMode.Crear:
        return (
          <>
            <Typography id="modal-title" variant="h5" component="h2">
              {mode} Macro
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Title:</Typography>
              <TextField
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                style={{ marginLeft: "30px" }}
                onClick={() => setShowMarcadores(!showMarcadores)}
              >
                {showMarcadores ? "Ocultar" : "Mostrar"} Marcadores
              </Button>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography sx={{ minWidth: 70 }}>Estado:</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Estado</InputLabel>
                <Select
                  value={formData.estado}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estado: e.target.value as string,
                    })
                  }
                >
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                </Select>
              </FormControl>
              <Typography sx={{ marginLeft: "15px", minWidth: 150 }}>
                Sub Tipos Examen:
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Sub Tipos Examen</InputLabel>
                <Select
                  value={formData.subTiposExamen}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subTiposExamen: e.target.value as string,
                    })
                  }
                >
                  {SubTiposExamenOptions.map((tipo) => (
                    <MenuItem key={tipo} value={tipo}>
                      {tipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              label="Nota Adicional"
              multiline
              rows={3}
              fullWidth
              margin="normal"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "75%",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "15px",
          p: 4,
        }}
      >
        {renderModalContent()}

        {showMarcadores && (
          <Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton color="error">
                <InfoIcon />
              </IconButton>
              <p>
                Utilize los Siguientes marcadores,para indicar el tipo de
                informacion a incluir en el macro
              </p>
            </div>
            <FolderList />
          </Box>
        )}
        {mode === ModalMode.Visualizar && (
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            Volver
          </Button>
        )}

        {mode === ModalMode.Editar && (
          <>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
              Volver
            </Button>
            <Button
              variant="contained"
              onClick={handleGuardar}
              sx={{ ml: 3, mt: 2 }}
            >
              Guardar
            </Button>
          </>
        )}

        {mode === ModalMode.Crear && (
          <>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
              Volver
            </Button>
            <Button
              variant="contained"
              onClick={handleCrear}
              sx={{ ml: 3, mt: 2 }}
            >
              Crear
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default DataModal;
