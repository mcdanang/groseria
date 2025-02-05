import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../../redux/reducers/user/userAction";
import { showAlertByError } from "../../helper/alert";

const getDefaultAddress = (token) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/address/default`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

const AddressDropDown = () => {
	const [address, setAddress] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		getDefaultAddress(localStorage.getItem("token"))
			.then((result) => {
				setAddress(result.data);
			})
			.catch((error) => {
				showAlertByError(error, dispatch);
			});
	}, []);

	return (
		<div className="text-green-100 flex flex-row items-center">
			<div className="font-medium text-sm underline underline-offset-4 decoration-dotted">
				{address ? address.label : "Loading"}
			</div>
			<button onClick={() => navigate("/account/manage-address")}>
				<span className="ml-1 material-symbols-rounded font-bold text-xl cursor-pointer">expand_more</span>
			</button>
		</div>
	);
};

export default AddressDropDown;
