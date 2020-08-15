// LESSON 65
// write function to retreive json blob
// make ajax request using `fetch` function
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   //fetch returns promise
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// const fetchAlbums = async () => {
//   //fetch returns promise
//   const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
//   const json = await res.json();
//   console.log(json);
// };

// fetchAlbums();

const fetchSpreadsheet = async () => {
  //fetch returns promise
  const res = await fetch(
    'https://spreadsheets.google.com/feeds/list/1upupUIm2mZA7XGqRnWYsrGJtvaWiCafqSCBrY6aO8JU/1/public/full?alt=json'
  );
  const json = await res.json();

  const entries = json.feed.entry;

  console.log(entries);

  for (i = 0; i < entries.length; i++) {
    console.log(entries[i].gsx$year.$t);
  }
};

fetchSpreadsheet();
