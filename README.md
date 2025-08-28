1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
   getElementById("idName")
   = Always helps to find element by unique id. Every elements have unique id.

   getElementsByClassName("className")
   = Helps to find all the element by same class name. Every elements can have same classname.

   querySelector("selector")
   = pick the first element by id, class or tag name. 

   querySelectorAll("selector")
   = pick all the element by id, class or tag name. 

2. How do you create and insert a new element into the DOM?

   Create new element
   set innerText or innerHTML
   then appendChild the element in to dom

3. What is Event Bubbling and how does it work?

   = when an event (eg. click) happend to element then it propagate from inner to outer
   nav - header - body - document

4. What is Event Delegation in JavaScript? Why is it useful?

   = Event Delegation is to set event listener to parent element so that we can handel the event in inner child as well.
     it's useful because we don't need to add extra event to the child

5. preventDefault()
   = To stop the default reload system in a website
   stopPropagation()
   = To stop event bubbling

   
