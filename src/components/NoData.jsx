import Button from "@mui/material/Button";

function NoData({ text, onClick }) {
  return (
    <div>
      <p className="text-center text-base">{text}</p>
      <div className="  flex items-center justify-center ">
        {onClick && <Button variant="contained" onClick={onClick}>Add Now</Button>}
      </div>
    </div>
  );
}

export default NoData;
