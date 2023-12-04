import React from 'react'

const TableData = ({data}) => {
  return (
    
      <table className='w-96 bg-gray-400 ' >
        <thead >
          <tr className='bg-gray-800 text-yellow-400 '>
            <th >Year</th>
            <th >Tata(rs)</th>
            <th >Reliance(rs)</th>
          </tr>
        </thead>
        <tbody> 
          {data.map((item, i) =>
            <tr key={i} className={i%2===0 ?"border-2 border-black text-white font-bold ":"border-2 border-white"}>
              <td className='text-center p-6'>{item.year}</td>
              <td className='text-center p-6'>{item.tata} </td>
              <td className='text-center p-6'>{item.reliance} </td>
             
            </tr>
          )}
        </tbody>

      </table>

   
  )
}

export default TableData
