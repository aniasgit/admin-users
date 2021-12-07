import type {Hobby} from '../types';

const getHobbies = async (): Promise<Hobby[]> => {
  let response = await fetch('/hobbies.json', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

  let myJson = await response.json();

  return myJson;
  
}

export {getHobbies};
