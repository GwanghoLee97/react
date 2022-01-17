import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

export default function Day() {
  //dummy.words
  const { day } = useParams();
  const wordlist = dummy.words.filter((words) => words.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordlist.map((words) => (
            <tr key={words.id}>
              <td>{words.eng}</td>
              <td>{words.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
