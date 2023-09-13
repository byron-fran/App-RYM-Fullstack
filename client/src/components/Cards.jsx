import Card from "./Card";
import {Contenedor} from '../layout/layout';
import '../layout/layout.css'

export default function Cards({personajes, onClose}) {

  return (
    <div className={personajes.length > 0 ? 'bg-grande': 'bg-1'}>
    <Contenedor>
      {personajes.map((personaje) => (
        <Card key={personaje.id} personaje={personaje} onClose={onClose} />
      ))}
    </Contenedor>
    </div>
  );
}
