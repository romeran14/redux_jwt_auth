import { Outlet } from "react-router-dom"

const Layout = () => {
    return
    <>
          <button onClick={()=> {
    fetch('http://192.168.3.239:8000/resultado/data', {
  //    credentials:'include',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aC9sb2dpbiIsImlhdCI6MTY4NjA2NjI4MiwiZXhwIjoxNjg2MDY5ODgyLCJuYmYiOjE2ODYwNjYyODIsImp0aSI6Imh1d2xhbzQ3aUdWdTdhamEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.JGEpnejhXMzYGM7ix6lnigW5YLhPZ9snC7UYsQm0v2c'
      }
      
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }}>Haz clic aquí para obtener los datos</button>
   <Outlet />
    </>
   
}

export default Layout