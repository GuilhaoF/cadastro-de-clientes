import { Typography } from "@mui/material";



 function TemplatePage({title,Component}){
    return (
        <>
        <Typography variant="h3">
            {title}
        </Typography>
        <Component/>
        </>
    )
}

export default TemplatePage