import React from "react";
import Topnav from "../../components/topnav";
import Footer from "../../components/footer";
import {
	Container,
} from "reactstrap";

const AppLayout = (props) => {
	return (
		<div className="app-layout">
			<Topnav />
			{props.children}
		</div>
	);
};

export default AppLayout;