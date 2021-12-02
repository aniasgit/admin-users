type Hobby = {
  id: string,
  name: string
}

function getHobbies(): Promise<Hobby[]> {
  return fetch('/hobbies.json', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(myJson) {
    return myJson;
  });
}

export type {Hobby};
export {getHobbies};
