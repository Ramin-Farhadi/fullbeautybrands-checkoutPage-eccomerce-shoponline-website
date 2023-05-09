import { Box } from "@mui/system";
import { Card, FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import Btn from "../../buttons/Btn";
import "./editShippingAddress.css";
import { useEffect, useState } from "react";
const EditShippingAddress = ({
  setAddressEditShowHide,
  addressEditShowHide,
  setUpdateNewShippingAddress,
}) => {
  const [show, setShow] = useState(addressEditShowHide);
  const [fullName, setFullName] = useState("Ramin Farhadi");
  const [addressLine1, setAddressLine1] = useState("Peachtree Ln");
  const [addressLine2, setAddressLine2] = useState("Apt 2");
  const [city, setCity] = useState("Levittown");
  const [state, setState] = useState("NY");
  const [zip, setZip] = useState("11756");

  const [shippingAddressObj, setShippingAddressObj] = useState({
    fullName,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
  });

  useEffect(() => {
    setShow(addressEditShowHide);
  }, [addressEditShowHide]);

  useEffect(() => {
    setUpdateNewShippingAddress(shippingAddressObj);
  }, [shippingAddressObj]);

  const editAddressHandler = (e) => {
    e.preventDefault();

    setShippingAddressObj({
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
    });

    // It triggers Change Shipping address + Save button
    setAddressEditShowHide(!show);
    setShow(!show);
  };

  const formChangeHandler = (e) => {
    if (e.target.id === "ShipFullName") {
      setFullName(e.target.value);
    }
    if (e.target.id === "ShipAddressLine1") {
      setAddressLine1(e.target.value);
    }
    if (e.target.id === "ShipAddressLine2") {
      setAddressLine2(e.target.value);
    }
    if (e.target.id === "ShipAddressCity") {
      setCity(e.target.value);
    }
    if (e.target.id === "ShipAddressState") {
      setState(e.target.value);
    }
    if (e.target.id === "ShipAddressZip") {
      setZip(e.target.value);
    }
  };
  return (
    <Box
      className="editShippingAddressContainer"
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <Box component="form" className="editShippingAddressSec">
        <Card title="Edit Shipping Address">
          <FormGroup className="form">
            <FormControl className="inputField">
              <InputLabel>Full Name</InputLabel>
              <Input
                id="ShipFullName"
                defaultValue={fullName}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl className="inputField">
              <InputLabel>Address Line 1</InputLabel>
              <Input
                id="ShipAddressLine1"
                defaultValue={addressLine1}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl className="inputField">
              <InputLabel>Address Line 2</InputLabel>
              <Input
                id="ShipAddressLine2"
                defaultValue={addressLine2}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl className="inputField">
              <InputLabel>City</InputLabel>
              <Input
                id="ShipAddressCity"
                defaultValue={city}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl className="inputField">
              <InputLabel>State</InputLabel>
              <Input
                id="ShipAddressState"
                defaultValue={state}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl className="inputField">
              <InputLabel>Zip</InputLabel>
              <Input
                id="ShipAddressZip"
                defaultValue={zip}
                onChange={formChangeHandler}
              />
            </FormControl>
            <Btn onClick={editAddressHandler} btnStyle="primaryBtn btnForm">
              Save
            </Btn>
          </FormGroup>
        </Card>
      </Box>
    </Box>
  );
};

export default EditShippingAddress;
