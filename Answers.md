* 1. What is the difference between server side routing and client side routing?
Answer:
In case of server side routing, browser sends http get request to the server whenever a link is clicked on current webpage. In this case, the old webpage is completely discarded and new webpage is fetched from the server.
In case of client side routing, the javascript code of the webpage sends http get request to the server. In this case only the new data needs to be fetched as current webpage is not discarded. The client side routing library then changes url known to the browser, if necessary.

* 2. Mention some advantages of using client side routing.
Answer:
-Entire page does not need to be refreshed.
-Changes in the page happen faster as only new data needs to be fetched and rendered.
-User experience is better.

* 3. Which component is used to define a route and what props are commonly added to it?
Answer:
Route component is used to define a route. Path is passed in the props.

* 4. How can I make sure that the component associated with the "/" route is not displayed for every other route?
Answer: By writing exact={true} brfore specifying the path.