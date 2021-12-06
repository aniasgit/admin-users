type Hobby = {
  id: string,
  name: string
}

async function getHobbies(): Promise<Hobby[]> {
  
  let response = await fetch('/hobbies.json', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

  let myJson = await response.json();

  return myJson;
}

export type {Hobby};
export {getHobbies};
