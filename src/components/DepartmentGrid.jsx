import { departments } from "../data/data";
import DepartmentCard from "./DepartmentCard";

const DepartmentGrid = () => {
  return (
    <section id="departamentos" className="py-16 bg-slate-50 px-[5%]">
      {/* max-w-5xl para que las 2 columnas no se estiren demasiado */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ocean mb-3">
            Departamentos Disponibles
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Todos los departamentos incluyen servicios completos y se encuentran
            en el mismo edificio{" "}
            <span className="font-bold text-gold">frente al mar</span>.{" "}
          </p>
        </div>

        {/* Grid idéntico: 1 columna en móvil, 2 en PC (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} role="listitem" className="flex">
              <DepartmentCard info={dept} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentGrid;
