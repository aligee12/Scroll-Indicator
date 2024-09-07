# Scroll-Indicator
A thin bar at top of screen that shows how much is scrolled. 
We have used following things in this React Component
- Tailwind css
- useEffect to add an Event Listner to Window scroll event.
- whenever the window is scrolled the eventlistner is trigered and set the scrollpercent
- on basis of scrollpercent we are changing width of our scroll bar
in App.jsx use following call:
<ScrollBar url={"https://dummyjson.com/products?limit=100"} />
