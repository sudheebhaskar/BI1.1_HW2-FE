import useFetch from "../useFetch"
 
const Hotels = () => {

    const { data, loading, error } = useFetch(
        `${import.meta.env.VITE_API_URL}/hotels`
      );

   return(
       <div>
        
           <ul>
           { data?.map(hotel => <li> {hotel.name}</li>)}
           </ul>
       </div>
   )
}

export default Hotels;