let todos = [
   { id: 1, name: 'Make pic5re', price: 304560, isActive: true },
   { id: 2, name: 'Make pi3ture', price: 345600, isActive: true },
   { id: 3, name: 'Make pic4ture', price: 4500, isActive: false },
];

class MyCustomElement {
   className;
   attributeName;
   attributeActive;

   constructor (tagName) {
      this.tagName = tagName
   };

   addClass(className) {
      this.className = className
      return this
   };

   setAttribute (attributeName, attributeActive){
      this.attributeName = attributeName
      this.attributeActive = attributeActive
      return this
   }
}