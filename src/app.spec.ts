import * as constants from "./constants.js";
import {Todo} from "./app.js";

describe('ToDo App', function() {
   describe('simple test case', function() {
      xit("should show that test runner is working, tests are found and run", () => {
        expect().nothing();
      });
   }); //--END 'simple test case'--

   let mySpy;
   let todo: Todo;
   
   beforeEach(function() {
     todo = new Todo('testing');
   });

   afterEach(function() {
     // clean up
     let todo: Todo | null = null;
   });
   
   describe('all DOM elements', function() {
      it("should exist", () => {
        expect(constants.DOCUMENT.querySelector('fieldset')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('legend')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('form')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('input[type="submit"]')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('input[class="btn"]')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('h2')).not.toBeNull();
        expect(constants.DOCUMENT.querySelector('ol')).not.toBeNull();
        //expect(constants.DOCUMENT.querySelector('li')).not.toBeNull();
      });
   }); //--END 'elements exist'--
   
   describe("spy fakes a series of return values (from 'addItem' method),", function() {
    beforeEach(function() {
       // configure a spy to fake a series of return values
       spyOn(todo, 'addItem').and.returnValues('true', 'false');
     });

     it("is called multiple times, and returns the values in order", function() {
       expect(todo.addItem()).toEqual('true');
       expect(todo.addItem()).toBe('false');
       expect(todo.addItem()).toBeUndefined();
     });
  }); //--END 'spy fakes'--
   
   describe('"todo" object', function() {
     it('should be an instance of the "Todo" class', function() {
       expect(todo).toBeInstanceOf(Todo);
     });
   }); //--END '"todo" object'--
  
   describe('todo list', function() {
    it('should contain a \<li\> element for each "todo" item', function() {
      // create array of child elements of '#todo_list
      const childTags = Array.from(constants.TODO_LIST_CHILDREN).map(child => child.tagName);
      expect(childTags).toEqual([ 'LI' ]);
      expect(constants.TODO_LIST_CHILDREN.length).toEqual(1);
      
      // list of (child) nodes including text
      expect(constants.TODO_LIST_NODES[1].textContent).toContain('a test item');
    });
   }); //--END 'todo list'--

   describe('addItem() method', function() {
      it('should be able to add "todo" items', function() {
        var spy = spyOn(todo, 'addItem');
        todo.addItem();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        todo.addItem();
        expect(spy).toHaveBeenCalledTimes(2);
        todo.addItem();
        todo.addItem();
        todo['addItem']();
        expect(spy).toHaveBeenCalledTimes(5);
      });

      it('should return the mocked value', function() {
        // test return value of method using a spy
        var spy = spyOn(todo, 'addItem').and.returnValue('paint the fence');
        var result = todo.addItem();
        expect(result).toEqual('paint the fence');
      });
      
      it('should call event handler when the form is submitted', function() {
        const submitEvent = new Event("submit");
        mySpy = spyOn(constants.INPUT_FORM, "dispatchEvent");
        constants.INPUT_FORM.dispatchEvent(submitEvent);
        expect(mySpy).toHaveBeenCalled();
        expect(mySpy).toHaveBeenCalledWith(submitEvent);
       });
   }); //--END 'addItem method'--

   describe('GUI', function() {
     describe('accessibility', function() {
      describe('fieldset element', function() {
         it('should be present', function() {
           //expect(constants.DOCUMENT.querySelector('fieldset')).toBeDefined();
           expect(constants.DOCUMENT.querySelector('fieldset')).not.toBeUndefined();
           expect(constants.DOCUMENT.querySelector('fieldset')).not.toBeNull();
         });
      }); //--END 'fieldset element'--
     }); //--END 'accessibility'--

      describe('legend element', function() {
         it('should be present', function() {
           expect(constants.DOCUMENT.querySelector('legend')).toBeDefined();
           expect(constants.DOCUMENT.querySelector('legend')).not.toBeNull();
         });
      }); //--END 'legend element'--

      describe('input form element', function() {
         it('should be present', function() {
           expect(constants.INPUT_FORM).toBeDefined();
           expect(constants.INPUT_FORM).not.toBeNull();
         });
         
         it('should contain an input element with id "todo"', function() {
           expect(constants.INPUT_TODO).toBeDefined();
           expect(constants.INPUT_TODO).not.toBeUndefined();
           expect(constants.INPUT_TODO).not.toBeNull();
           expect(constants.INPUT_TODO?.id).toEqual('todo');
           expect(constants.INPUT_TODO.outerHTML).toBe("<input type=\"text\" name=\"todo_item\" id=\"todo\">");
         });
         
         it('should contain only one element with id "#todo"', function() {
          // check that id is unique
          const elementsWithSpecifiedId = constants.DOCUMENT.querySelectorAll("#todo");
          expect(elementsWithSpecifiedId.length).toBe(1);
         });
         
         it('should contain an input element submit button with classname "btn"', function() {
           expect(constants.INPUT_CREATE).toBeDefined();
           expect(constants.INPUT_CREATE).not.toBeNull();
           expect(constants.INPUT_CREATE).toHaveClass('btn');
         });
         
         it('should contain only one element with id "#create"', function() {
          // check that id is unique
          const elementsWithSpecifiedId = constants.DOCUMENT.querySelectorAll("#create");
          expect(elementsWithSpecifiedId.length).toBe(1);
         });
      }); //--END 'input form element'--
      
      describe('list element', function() {
        it('should contain a "#todo_list" element', function() {
           expect(constants.TODO_LIST).toBeDefined();
           expect(constants.TODO_LIST).not.toBeNull();
        });
  
        it('should contain a list element with id "todo_list"', function() {
           expect(constants.TODO_LIST.id).toBe('todo_list');
        });
        
        it('id "todo_list" should be unique', function() {
          // check that id is unique
          const elementsWithSpecifiedId = constants.DOCUMENT.querySelectorAll("#todo_list");
          expect(elementsWithSpecifiedId.length).toBe(1);
         });
      }); //--END 'list element'--
    }); //--END 'GUI'--
      
}); //--END 'ToDo App'--

