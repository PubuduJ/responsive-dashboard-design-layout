import {Grid, Typography} from "@mui/material";

const Dashboard = () => {
    return (
        <>
            <Grid pl={3} pr={3} pt={"15px"} container>
                <Grid item>
                    <Typography variant={"h6"}>Dashboard Page</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard;