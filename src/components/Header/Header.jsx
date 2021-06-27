import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Header = ({ navigationButton }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h5" className={classes.title}>
							<i>Flipkart</i>
						</Typography>

						<div style={{ flexGrow: 1 }}></div>

						{navigationButton}
					</Toolbar>
				</AppBar>
			</div>
			<Toolbar />
		</>
	);
};

export default Header;
