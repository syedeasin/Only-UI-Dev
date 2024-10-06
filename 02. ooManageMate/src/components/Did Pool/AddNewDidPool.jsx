import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";

const AddNewDidPool = ({ show, handleClose, onSave }) => {
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="did-pool-modal-title"
            aria-describedby="did-pool-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    maxWidth: 600,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {/* Header with title and close button */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Manage DID Pool
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                        style={{
                            transition: "color 0.3s ease",
                            color: "inherit",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "red")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="Pool Name"
                                label="Pool Name"
                                variant="standard"
                                fullWidth
                                // value={routeName}
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="Description"
                                label="Description"
                                variant="standard"
                                fullWidth
                                // value={field5}
                                // onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} className="mt-3">
                        <Grid item xs={2}>
                            <Button type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Box>
        </Modal>
    );
};

export default AddNewDidPool;
