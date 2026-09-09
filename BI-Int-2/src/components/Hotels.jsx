import useFetch from "../useFetch"
 
const Hotels = () => {

   const { data, loading, error } = useFetch("https://be-4-4-hw-2-beta.vercel.app/hotels");


   return(
       <div>
        
           <ul>
           { data?.map(hotel => <li> {hotel.name}</li>)}
           </ul>
       </div>
   )
}

export default Hotels;