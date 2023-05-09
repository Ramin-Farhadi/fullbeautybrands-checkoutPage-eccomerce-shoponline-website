import "./App.css";
import "./components/mainNav/MainNav";
import MainNav from "./components/mainNav/MainNav";
import StickyNav from "./components/stickyNav/StickNav";
import ContainerSection from "./components/container/ContainerSection";
import SideSection from "./components/container/sideSection/SideSection";
import MainSection from "./components/container/mainSection/MainSection";
import { useState } from "react";
import EditShippingAddress from "./components/container/editShippingAddressSec/EditShippingAddress";
function App() {
  const [allItemSubTotal, setAllItemSubTotal] = useState(0);
  const [addressEditShowHide, setAddressEditShowHide] = useState(false);
  const [updateShippingAddress, setUpdateNewShippingAddress] = useState({});

  return (
    <div className="App">
      <MainNav />
      <StickyNav />
      <ContainerSection>
        <EditShippingAddress
          addressEditShowHide={addressEditShowHide}
          setAddressEditShowHide={setAddressEditShowHide}
          setUpdateNewShippingAddress={setUpdateNewShippingAddress}
        />
        <MainSection
          setAllItemSubTotal={setAllItemSubTotal}
          setAddressEditShowHide={setAddressEditShowHide}
          addressEditShowHide={addressEditShowHide}
          updateShippingAddress={updateShippingAddress}
        />
        <SideSection allItemSubTotal={allItemSubTotal} />
      </ContainerSection>
    </div>
  );
}

export default App;
