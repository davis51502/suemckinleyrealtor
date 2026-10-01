// Homes Sue has sold, shown in the gallery on the Featured Properties page.
// Each photo exists twice: public/sold-homes/thumb/ (grid, max 640px) and
// public/sold-homes/full/ (viewer, max 1600px). width/height are the thumbnail's
// size so the browser can reserve space before the image loads.
// To add one: export both sizes with the next number, then add a line here.
const soldHomes = [
  { file: 'sold-01.jpg', width: 640, height: 400, alt: 'Modern two-story home with stone accents and a paver driveway' },
  { file: 'sold-02.jpg', width: 640, height: 456, alt: 'Family celebrating in front of their new Mediterranean-style home' },
  { file: 'sold-03.jpg', width: 640, height: 406, alt: 'White Spanish-style home with an arched window and red tile roof' },
  { file: 'sold-04.jpg', width: 640, height: 479, alt: 'Stone-front home lit up at dusk' },
  { file: 'sold-05.jpg', width: 640, height: 410, alt: 'Two-story home with a wraparound porch and turret' },
  { file: 'sold-06.jpg', width: 640, height: 395, alt: 'Happy sellers sitting on the porch of a red craftsman bungalow' },
  { file: 'sold-07.jpg', width: 640, height: 441, alt: 'Mediterranean-style two-story home with a SOLD sign' },
  { file: 'sold-08.jpg', width: 640, height: 432, alt: 'Large home set back behind a wide striped lawn' },
  { file: 'sold-09.jpg', width: 640, height: 427, alt: 'Two-story home with a tile roof and paver driveway' },
  { file: 'sold-10.jpg', width: 640, height: 480, alt: 'Happy clients with their SOLD sign in front of their home' },
  { file: 'sold-11.jpg', width: 593, height: 368, alt: 'Two-story tan home with a SOLD sign' },
  { file: 'sold-12.jpg', width: 640, height: 559, alt: 'Brick and shingle two-story home with a tree in front' },
  { file: 'sold-13.jpg', width: 640, height: 417, alt: 'Gray two-story home with a three-car garage' },
  { file: 'sold-14.jpg', width: 640, height: 632, alt: 'Couple with a SOLD sign in front of a Victorian home' },
  { file: 'sold-15.jpg', width: 640, height: 357, alt: 'Single-story home with a SOLD sign' },
  { file: 'sold-16.jpg', width: 640, height: 480, alt: 'Two-story stucco home with a stone-trimmed garage' },
  { file: 'sold-17.jpg', width: 640, height: 437, alt: 'Gray two-story home with a white picket fence' },
  { file: 'sold-18.jpg', width: 480, height: 640, alt: 'Three clients with a SOLD sign in front of their home' },
  { file: 'sold-19.jpg', width: 640, height: 322, alt: 'Craftsman-style home with a landscaped front yard' },
  { file: 'sold-20.jpg', width: 640, height: 550, alt: 'Two-story home above a sloped green lawn' },
  { file: 'sold-21.jpg', width: 485, height: 640, alt: 'Clients holding a SOLD sign in front of a two-story home' },
  { file: 'sold-22.jpg', width: 600, height: 640, alt: 'Blue-gray two-story home with a wide driveway' },
  { file: 'sold-23.jpg', width: 640, height: 469, alt: 'Two-story home with a red brick accent and a real estate sign' },
  { file: 'sold-24.jpg', width: 629, height: 371, alt: 'Beige two-story home with a front porch and SOLD sign' },
  { file: 'sold-25.jpg', width: 542, height: 640, alt: 'Three-story townhome with balconies' },
  { file: 'sold-26.jpg', width: 360, height: 236, alt: 'White Tudor-style home with a turret and SOLD sign' },
  { file: 'sold-27.jpg', width: 640, height: 358, alt: 'Two-story home on a cul-de-sac with a real estate sign' },
  { file: 'sold-28.jpg', width: 594, height: 640, alt: 'Yellow cottage-style home shaded by a large tree' },
  { file: 'sold-29.jpg', width: 640, height: 427, alt: 'White single-story home with turquoise trim and roses' },
  { file: 'sold-30.jpg', width: 640, height: 337, alt: 'White two-story home with a two-car garage' },
  { file: 'sold-31.jpg', width: 599, height: 297, alt: 'Yellow two-story home with a three-car garage' },
  { file: 'sold-32.jpg', width: 640, height: 480, alt: 'Single-story ranch-style home' },
];

export default soldHomes;
