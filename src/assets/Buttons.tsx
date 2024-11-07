import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CameraIcon from "@mui/icons-material/Camera";
import DeleteIcon from "@mui/icons-material/Delete";
import Cancel from "@mui/icons-material/Cancel";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";

const Buttons = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button size="small" variant="contained" startIcon={<CameraIcon />}>
          Camera
        </Button>

        <Button size="medium" variant="outlined" disabled startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button size="large" variant="contained" color="secondary" startIcon={<Cancel />}>
          Cancel
        </Button>

        <Button size="large" variant="contained" href="https://mail.google.com" startIcon={<AttachEmailIcon />}>
          Attach Email
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} mt={2}>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>

        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>

        <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
          Save
        </LoadingButton>
      </Stack>

      <Stack direction="row" spacing={2} mt={2}>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Add
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          Remove
        </Button>
      </Stack>
    </>
  );
};

export default Buttons;
