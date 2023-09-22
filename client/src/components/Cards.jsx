import Card from "./Card";
import {Contenedor} from '../layout/layout';
import '../layout/layout.css'

export default function Cards({personajes, onClose}) {
  if(personajes === undefined) return null

  return (
    <div className="bg-fondo" >
    <Contenedor>
      {personajes && personajes.map((personaje) => (
        <Card key={personaje.id} personaje={personaje} onClose={onClose} />
      ))}
    </Contenedor>
    </div>
  );
}
