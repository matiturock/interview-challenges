const HOLIDAYS = [
  {
    date: "2023/01/01",
    name: "Año Nuevo"
  },
  {
    date: "2023/02/27",
    name: "Carnaval"
  },
  {
    date: "2023/02/28",
    name: "Carnaval"
  },
  {
    date: "2023/03/24",
    name: "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    date: "2023/03/31",
    name: "Viernes Santo"
  },
  {
    date: "2023/04/02",
    name: "Día del Veterano y de los Caídos en la Guerra de Malvinas"
  },
  {
    date: "2023/04/01",
    name: "Día del Veterano y de los Caídos en la Guerra de Malvinas (trasladado)"
  },
  {
    date: "2023/05/01",
    name: "Día del Trabajador"
  },
  {
    date: "2023/05/25",
    name: "Día de la Revolución de Mayo"
  },
  {
    date: "2023/06/20",
    name: "Día de la Bandera"
  },
  {
    date: "2023/07/09",
    name: "Día de la Independencia"
  },
  {
    date: "2023/08/17",
    name: "Paso a la Inmortalidad del General José de San Martín (trasladado)"
  },
  {
    date: "2023/10/12",
    name: "Día del Respeto a la Diversidad Cultural"
  },
  {
    date: "2023/11/20",
    name: "Día de la Soberanía Nacional"
  },
  {
    date: "2023/12/08",
    name: "Inmaculada Concepción de María"
  },
  {
    date: "2023/12/25",
    name: "Navidad"
  }
]

const TODAY = new Date()
const NEXT_HOLIDAY = HOLIDAYS.find(holiday => new Date(holiday.date) > TODAY)

console.log(NEXT_HOLIDAY)

function App() {
  return (
    <main>
      <h1>Faltan {0} días para el próximo feriado</h1>
    </main>
  );
}

export default App;
