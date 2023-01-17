let todos = [
   { id: 1, name: 'Giorgio Armani My Way Floral', price: 2639, isActive: true },
   { id: 2, name: 'Guerlain Shalimar Souffle de Parfum', price: 2906, isActive: true },
   { id: 3, name: 'Dior Hypnotic Poison', price: 3693, isActive: false },
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