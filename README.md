# Fender Front End test

#### Priority and Rationale

This was quite a tall order of features for 4 hours. I'm sure that was part of the test, but here are some problems I solved and how I went about it.

I prioritized tasks in the requirements like this: Product List > Grid Layout > Filter/Filter Bar > Responsive Layout.

I cut out the "Individual Item View". I'm not sure there's enough consumer facing content in the API return in to make a quality item page. No description and not a ton of specs. Feels more like a dealer catalog.

**The majority of image links are broken on the backend**

I wasn't sure if that was intentional, so I reached out to Charlie about it. Didn't hear back. Regardless, I added a fallback image component to show a Fender logo if it is broken. It sure would look better with images.

NOTE: The filters are cumulative, so if the "Guitar and Bass Parts" Product has no "Vintage" series, then theres nothing in the return array.


Things I would have added with more time:

- Empty state component if the filtered array is empty.
- I'd create a mobile navigation menu. I passed on it due to time.
- I would add a toggled state to the filter buttons to give visual feedback that the list is filtered by that
- Animation. Slide in and out of the filter bar menu. Fade or drop in of the products as they are filtered. Flip on the icon as you open/close the menu.
