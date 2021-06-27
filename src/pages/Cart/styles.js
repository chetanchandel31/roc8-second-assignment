import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	cartContainer: {
		display: "flex",
		// border: "solid 2px red",
		gap: "10px",
		margin: "20px 10px",

		alignItems: "start",
	},
	leftPanel: {
		flexGrow: 1,
		textAlign: "left",

		"& > div": {
			margin: "0 10px 10px 0",
			backgroundColor: "white",
			padding: "10px 0 0 10px",
		},
	},
	cardItemsContainer: {},
	savedForLater: {},
	rightPanel: {
		// border: "solid 2px green",
		minWidth: "25%",
		backgroundColor: "white",
		boxSizing: "border-box",
		padding: "10px",
	},
	priceDetails: {
		"& > div": {
			display: "flex",
			justifyContent: "space-between",
			margin: "10px 0",
		},
		"& > footer": {
			color: "green",
		},
	},
}));
