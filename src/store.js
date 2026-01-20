export const initialStore=()=>{
  return{
    message: null,
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_people':
      //console.log(action.payload);
      
      return{
        ...store,
        people:action.payload
      }

      case 'get_planets':
      //console.log(action.payload);
      
      return{
        ...store,
        planets:action.payload
      }

      case 'get_vehicles':
      //console.log(action.payload);
      
      return{
        ...store,
        vehicles:action.payload
      }

    default:
      throw Error('Unknown action.');
  }    
}
