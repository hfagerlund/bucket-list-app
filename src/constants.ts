import { JSDOM } from 'jsdom';
export const DOM = new JSDOM(`<!DOCTYPE html>
                              <html lang="en">
                                <head>
                                  <meta charset="utf-8">
                                  <title>Bucket List App</title>
                                  <script src="app.js" defer></script>
                                </head>
                                <body>
                                  <form id="todo-form" action="#" method="post" accept-charset="utf-8">
                                    <fieldset>
                                      <legend>New ToDo</legend>
                                      <label for="todo" class="visually-hidden">Enter a new to-do item:</label>
                                      <input type="text" name="todo_item" id="todo">
                                      <input type="submit" name="create_todo" id="create" class="btn" aria-label="Add something to the list" value="+">
                                    </fieldset>
                                  </form>
                                  <h2>Things to get done</h2>
                                  <ol id="todo_list">
                                    <li>a test item</li>
                                  </ol>
                                </body>
                              </html>`);

export const WINDOW = DOM?.window;
export const DOCUMENT = DOM?.window?.document;

export const INPUT_FORM = DOCUMENT?.querySelector('form') as HTMLFormElement;

//export const INPUT_CREATE = DOCUMENT?.querySelector('#create') as HTMLInputElement;
export const INPUT_CREATE = DOCUMENT?.querySelector('input[type="submit"]') as HTMLInputElement; //better?
export const INPUT_TODO = DOCUMENT?.getElementsByTagName("input")[0] as HTMLInputElement;
export const TODO_LIST = DOCUMENT?.querySelector('ol') as HTMLElement;

// list element nodes
export const TODO_LIST_CHILDREN = TODO_LIST?.children as HTMLCollection;
// list all types of nodes (not just element nodes), including text
export const TODO_LIST_NODES = DOCUMENT?.querySelector('ol')?.childNodes as NodeList;
