import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
	<Provider store={configureStore()}>
		<Suspense fallback={<div className="loading" />}>
			<App />
		</Suspense>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
