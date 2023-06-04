import { Box, Typography } from "@mui/material";
import Table from "../components/Table";
import { suppliers, suppliersColumns } from "../data/suppliers";

const Suppliers = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Suppliers
      </Typography>
      <Table
        data={suppliers}
        fields={suppliersColumns}
        numberOfRows={suppliers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
      />
    </Box>
  );
};

export default Suppliers;
