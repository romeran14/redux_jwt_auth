import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
  <>
    <button
      onClick={() => {
        fetch("http://192.168.3.239:8000/countries/data")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      Haz clic aquí para obtener los datos
    </button>
    <Outlet />
  </>)
};

export default Layout;
