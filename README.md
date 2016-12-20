# Fender Front End test

#### Priority and Rationale

[View the Deployed Code Here](https://fender-front-end.herokuapp.com)

This was quite a tall order of features for 4 hours. I'm sure that was part of the test, but here are some problems I solved and how I went about it.

I prioritized tasks in the requirements like this: Product List > Grid Layout > Filter/Filter Bar > Responsive Layout.

I cut out the "Individual Item View". I'm not sure there's enough consumer facing content in the API return in to make a quality item page. No description and not a ton of specs. Feels more like a dealer catalog.

**The majority of image links are broken on the backend**

I compensated a bit for the messed up data using fallback images, and pulled SKU titles for missing product titles, but it would look a lot nicer with images of the guitars!

I usually add fallback images as a standard, but the rest of the API should be tight and consistent. That would be something I’d bring that up to other engineers instead of trying to replace missing data from other parts of the return object.

NOTE: The filters are cumulative, so if the "Guitar and Bass Parts" Product has no "Vintage" series, then theres nothing in the return array.


Things I would have added with more time:

- Empty state component if the filtered array is empty.
- I'd create a mobile navigation menu. I passed on it due to time.
- I would add a toggled state to the filter buttons to give visual feedback that the list is filtered by that
- Animation. Slide in and out of the filter bar menu. Fade or drop in of the products as they are filtered. Flip on the icon as you open/close the menu.
- Added the footer. Passed. That's usually not seen that often, and replicating the footer would have taken too much time for this specific project.
