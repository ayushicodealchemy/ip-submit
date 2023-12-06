## How To Use

### Field

| Name   | Description                                                                                                          | Required |
| :----- | :------------------------------------------------------------------------------------------------------------------- | :------- |
| id     | This id will be put as the name of the field / input element                                                         | ✔️       |
| type   | The type of the field (text, select, textarea, upload, radio, checkMark,checkbox, search, multiWebURL, date, weburl) | ✔️       |
| prefix | This field will be put as the label before the field                                                                 |          |
| suffix | This field will be put as the label after the field                                                                  |          |
| child  | [Child](#child) (Except multiWebURL)                                                                                 |          |

**Note** : `If you don't provide a value for a field, it will be considered undefined`.<br/>
**Note** : `Pattern validation value must contain valid regEx without any starting /, ending / and flag /img`.

### Child

```json
{
  "child": [
    {
      "match": "Surat",
      "field": {
        "id": "area",
        "label": "Area",
        "type": "checkbox",
        "options": "[Katargam, Singanpore, Ved, Adajan]"
      }
    },
    {
      "match": "Mumbai",
      "field": {
        "value": "",
        "id": "area",
        "type": "text",
        "label": "Area",
        "placeholder": "Enter area"
      }
    }
  ]
}
```
### InputField [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field |First Name , age , email |
| Placeholder |The placeholder of the field |Enter First Name , Enter age, Enter email |
| value |The default value of the field |John , 20 , test@gmail.com |
| multiline |This is a multi-line text that can be used as a textarea field. |true / false |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please enter name<br/> &nbsp; },<br/> &nbsp; min:{<br/> &nbsp;  &nbsp; value:18<br/> &nbsp;  &nbsp; message:Age Should Be More than 18<br/> &nbsp; },<br/> &nbsp; max:{<br/> &nbsp;  &nbsp; value:25<br/> &nbsp;  &nbsp; message:Age Should Be Less than 25<br/> &nbsp; },<br/> &nbsp; minLength:{<br/> &nbsp;  &nbsp; value:5<br/> &nbsp;  &nbsp; message:Name Should Be More than 5 Character<br/> &nbsp; },<br/> &nbsp; maxLength:{<br/> &nbsp;  &nbsp; value:10<br/> &nbsp;  &nbsp; message:Name Should Be Less than 10 Character<br/> &nbsp; },<br/> &nbsp; pattern:{<br/> &nbsp;  &nbsp; value:^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2}$<br/> &nbsp;  &nbsp; message:Enter valid email <br/> &nbsp; },<br/>}</pre>|
### SpanInput [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Placeholder |The placeholder of the field |Enter First Name , Enter age, Enter email |
| value |The default value of the field |John , 20 , test@gmail.com |
| width |The width was modified by adjusting its width. |10, 20 - (unit in px) |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please enter name<br/> &nbsp; },<br/> &nbsp; min:{<br/> &nbsp;  &nbsp; value:18<br/> &nbsp;  &nbsp; message:Age Should Be More than 18<br/> &nbsp; },<br/> &nbsp; max:{<br/> &nbsp;  &nbsp; value:25<br/> &nbsp;  &nbsp; message:Age Should Be Less than 25<br/> &nbsp; },<br/> &nbsp; minLength:{<br/> &nbsp;  &nbsp; value:5<br/> &nbsp;  &nbsp; message:Name Should Be More than 5 Character<br/> &nbsp; },<br/> &nbsp; maxLength:{<br/> &nbsp;  &nbsp; value:10<br/> &nbsp;  &nbsp; message:Name Should Be Less than 10 Character<br/> &nbsp; },<br/> &nbsp; pattern:{<br/> &nbsp;  &nbsp; value:^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2}$<br/> &nbsp;  &nbsp; message:Enter valid email <br/> &nbsp; },<br/>}</pre>|
### Radio [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field |Gender |
| options |The options array will be render as multiple Radio Button to select. |[Male, Female] |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select gender<br/> &nbsp; },<br/>}</pre>|
### CheckBox [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |Hobby |
| options |The options array will be render as multiple CheckBox to select. |['cricket', 'football'] |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select hobby<br/> &nbsp; },<br/>}</pre>|
### CheckMark [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |Hobby |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select hobby<br/> &nbsp; },<br/>}</pre>|
### Select [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |City |
| value |The default value of the field |Surat |
| options |The options of field.  |[Surat, Mumbai, Delhi]  |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select city<br/> &nbsp; },<br/>}</pre>|
### Search [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |Search code |
| api |The api of field.  |Your API endpoint |
| Placeholder |The placeholder of the field.  |Enter code  |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select 3 value<br/> &nbsp; },<br/> &nbsp; minLength:{<br/> &nbsp;  &nbsp; value:3<br/> &nbsp;  &nbsp; message:Value not less then 3<br/> &nbsp; },<br/> &nbsp; maxLength:{<br/> &nbsp;  &nbsp; value:5<br/> &nbsp;  &nbsp; message:Value not more then 5<br/> &nbsp; },<br/>}</pre>|
### Upload [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |File |
| accept |Accept html file type. |https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept |
| multiple |The field allows for the selection of multiple files. |true / false |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:File is required<br/> &nbsp; },<br/> &nbsp; size:{<br/> &nbsp;  &nbsp; value:100<br/> &nbsp;  &nbsp; message:File should be less than 100 Kb<br/> &nbsp; },<br/> &nbsp; resolution:{<br/> &nbsp;  &nbsp; value:{<br/> &nbsp;  &nbsp;  &nbsp; width:100<br/> &nbsp;  &nbsp;  &nbsp; height:100<br/> &nbsp;  &nbsp; },<br/> &nbsp;  &nbsp; message:File should be 100 X 100<br/> &nbsp; },<br/>}</pre>|
### multiWebURL [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |File |
| child |Child will be render as component |Accept all [InputField](#inputfield-extends-field) Props(parameter), don't child field value like { match:'value', field:{}} 
 Instead you can directly pass Input Field object like {id:'01', placeholder:'placeholder', label:'label'} |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; NO:You can't pass the rules here. Instead, you can pass rules in child Props(parameter)<br/>}</pre>|
### Date [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |Select Date |
| format |Formate of the date |MM/DD/YYY |
|rules|Validation rule for this field.|<pre>{<br/> &nbsp; required:{<br/> &nbsp;  &nbsp; value:true<br/> &nbsp;  &nbsp; message:Please select date<br/> &nbsp; },<br/>}</pre>|
### WebUrl [Extends Field](#field)
|Name|Description|e.g.|
|:---|:---|:---|
| Label |Label of the field. |Url |
| Placeholder |The placeholder of the field |Enter url |
|rules|Validation rule for this field.|<pre>{<br/>}</pre>|