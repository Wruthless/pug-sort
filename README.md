# pug sort
Snippet for sorting data in a pug template.

**Original JavaScript**

```javascript
function(a,b) {
    let nameA = a.attr.toUpperCase();
    let nameB = b.attr.toUpperCase();
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    
    return 0;
};
````

**pug equivalent**
```javascript
item_list.sort((a,b) => {
    let nameA = a.attr.toUpperCase();
    let nameB = b.attr.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1:0; }
);
```
**Implementation example**
```javascript
select#item.form-control(name="item", required="true")
    - item_list.sort((a,b) => { let nameA = a.attr.toUpperCase(); let nameB = b.attr.toUpperCase();
    - return (nameA < nameB) ? -1 : (nameA > nameB) ? 1:0; });
    for item in item_list
        option(value="item._id", selected=(selected_item==book._id.toString() ? 'selected' : false)) #{item.attr}
```
