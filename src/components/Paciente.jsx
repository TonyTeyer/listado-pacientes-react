const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded">
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Nombre:{''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Propietario:{''}
                <span className="font-normal normal-case">Tony</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Email:{''}
                <span className="font-normal normal-case">tony@hotmail.com</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Fecha de Alta:{''}
                <span className="font-normal normal-case">11 de julio de 2023</span>
            </p>
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                Síntomas:{''}
                <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum amet voluptatibus quia rem incidunt, veniam esse soluta? Velit amet nisi in aperiam nostrum! Expedita suscipit laborum commodi magnam illum.</span>
            </p>

        </div>
    )
}

export default Paciente
