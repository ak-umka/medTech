import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecords } from '../../store/actions/record.action'

function RecordsTable({
  tableHead = ['№', 'Название', 'Пациент', 'Врач', 'Дата', 'Действие'],
  tableContents = [
    {
      id: 1,
      name: 'Задача 1',
      patientFullName: 'Иван Иванович',
      doctorFullName: 'Сасай кудасай',
      date: '20.01.22',
    },
  ],
}) {
  const dispatch = useDispatch()
  const record = useSelector((state) => state.record.data)

  useEffect(() => {
    dispatch(getRecords())
  }, [])
  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              {tableHead.map((item, key) => (
                <React.Fragment key={key}>
                  <th scope="col">{item}</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableContents.map((content, key) => (
              <React.Fragment key={key}>
                <tr>
                  {Object.keys(content).map((key, index) => (
                    <React.Fragment key={index}>
                      <th scope="row">{content[key]}</th>
                    </React.Fragment>
                  ))}

                  <th scope="row">
                    <button className="btn btn-info">Редактировать</button>{' '}
                    <button className="btn btn-danger">Удалить</button>
                  </th>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default RecordsTable
