function Perfil() {
  return (
    <div className="navProfile"> 
     <nav>
      <ul>
        <li>
          <box-icon name="user-circle">
            <p>Perfil</p>
          </box-icon>
          <ul>
            <li>
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
