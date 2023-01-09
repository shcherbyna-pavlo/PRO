export let todos = [
   { id: 1, name: 'Make pic5re',description: 'ewdwed', price: 304560, isActive: true },
   { id: 2, name: 'Make pi3ture',description: 'ewdwed', price: 345600, isActive: false },
   { id: 3, name: 'Make pic4ture',description: 'ewdwed', price: 4500, isActive: true },
];

export class MyCustomElement {
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