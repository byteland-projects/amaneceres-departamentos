import { departments } from "../data/data";
import DepartmentCard from "./DepartmentCard";

const DepartmentGrid = () => {
  return (
    <section id="departamentos" className="py-20 bg-gray-50">
      <div className="max-w-350 mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-ocean mb-4">
            Departamentos Disponibles
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Todos los departamentos incluyen servicios completos y se encuentran
            en el mismo edificio <span className="font-bold text-gold">frente al mar</span>.
          </p>
        </div>

        {/* El Contenedor Flex */}
        <div className="flex flex-wrap justify-center -mx-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="w-full md:w-1/2 lg:w-1/4 p-4 flex" // lg:w-1/4 para 4 columnas
            >
              <DepartmentCard info={dept} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentGrid;
