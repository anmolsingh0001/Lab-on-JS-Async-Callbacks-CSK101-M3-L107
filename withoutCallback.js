const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to create cookies
// use setTimeout() -- use 2000 units for time parameter

// Progression 4: calling functions

function getcookies() {
  setTimeout(() => {
    cookies.forEach((elt) => {
      console.log(elt);
    });
  }, 1000);
}

getcookies();

function createcookies(element) {
  setTimeout(() => {
    cookies.push({ name: element });
  }, 2000);
}

createcookies(newCookie);
