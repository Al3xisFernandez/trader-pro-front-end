import UserDetails from "../login/UserDetails";

function Perfil() {
  return (
    <div className="navProfile"> 
     <nav>
      <ul>
        <li>
          <box-icon name="user-circle">
          </box-icon>
          <ul>
            <li>
          <UserDetails />
              <a href="#">Centro de tareas</a>
            </li>
            <li>
              <a href="#">Programas de referidos</a>
            </li>
            <li>
              <a href="#">Configuraciones</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Perfil;
