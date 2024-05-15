import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ListStudent(){

  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/estudante')
		.then((response) => {
      setStudents(response.data)
		})
    .catch((error) => {
      setError(new Error());
    })
  }, [])

  if (error) {
    throw error;
  }

  return (
    <ul>
      {
        students.map(student => (
          <li key={student.id}>{student.nome}</li>
        ))
      }
    </ul>
  )
}
