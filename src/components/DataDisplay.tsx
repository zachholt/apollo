// 'use client'

// import React from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

// const DataDisplay = () => {
//   const { data, isLoading, error } = useQuery<any[]>({
//     queryKey: ['albums'],
//     queryFn: async () => {
//       return (await axios.get('https://jsonplaceholder.typicode.com/albums')).data
//     },
//   })

//   return (
//     <div>
//       <ul>
//         {data?.map((album) => (
//           <li key={album.id}>{album.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataDisplay;