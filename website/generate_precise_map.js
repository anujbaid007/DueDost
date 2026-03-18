const fs = require('fs');
const d3 = require('d3-geo');

async function run() {
  const fetch = (await import('node-fetch')).default;
  const url = 'https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.geo.json';
  
  console.log('Fetching', url);
  const res = await fetch(url);
  const geojson = await res.json();
  
  // We want to fit the map into an 800x800 SVG.
  // The y-bounds we care about should fit nicely.
  const projection = d3.geoEquirectangular().fitSize([800, 800], geojson);
  
  const scale = projection.scale();
  const translate = projection.translate();
  
  const pathGenerator = d3.geoPath().projection(projection);
  
  // Highcharts GeoJSON has Features for each state. 
  // We want the outline of the ENTIRE country!
  // To get the full country outline, we ideally merge them.
  // BUT Highcharts GeoJSON actually contains a single Feature for the country if we pass the whole FeatureCollection?
  // No, pathGenerator(geojson) will generate the path for ALL features (drawn simultaneously).
  // If we just use pathGenerator(geojson), drawing it as a single compound path is PERFECT for a mask!
  const fullPath = pathGenerator(geojson);

  console.log('--- RESULTS ---');
  console.log('SCALE:', scale);
  console.log('TRANSLATE_X:', translate[0]);
  console.log('TRANSLATE_Y:', translate[1]);
  fs.writeFileSync('india_border_path.txt', fullPath);
  console.log('Path saved to india_border_path.txt (length:', fullPath.length, ')');
}

run().catch(console.error);
