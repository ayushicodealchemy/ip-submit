| **Name**    | **Description**                                                 | **e.g**                                   |
| ----------- | --------------------------------------------------------------- | ----------------------------------------- |
| id          | This id will be put as the name of the field / input element    | ✔️                                        |
| type        | The type of the field                                           | text                                      |
| prefix      | This field will be put as the label before the field            |                                           |
| suffix      | This field will be put as the label after the field             |                                           |
| Label       | Label of the field                                              | First Name , age , email                  |
| Placeholder | The placeholder of the field                                    | Enter First Name , Enter age, Enter email |
| value       | The default value of the field                                  | John , 20 , test@gmail.com                |
| totalPages  | Number                                                          | Total Page count.                         |
| multiline   | This is a multi-line text that can be used as a textarea field. | true / false                              |
| child       | The child of the field                                          | [Child](#child)                           |
| rules       | Validation rule for this field.                                 | [Rules](#rules)                           |

### Rules

```json
  "rules": {
      "required": {
        "value": true,
        "message": "Please enter name"
      },
      "min": {
        "value": 18,
        "message": "Age Should Be More than 18"
      },
      "max": {
        "value": 25,
        "message": "Age Should Be Less than 25"
      },
      "minLength": {
        "value": 5,
        "message": "Name Should Be More than 5 Character"
      },
      "maxLength": {
        "value": 10,
        "message": "Name Should Be Less than 10 Character"
      },
      "pattern": {
        "value": "^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2}$",
        "message": "Enter valid email"
      }
    }
```

### Child

```json
{
  "id": "1",
  "label": "Name",
  "placeholder": "Enter your name",
  "type": "text",
  "multiple": false,
  "prefix": null,
  "suffix": null,
  "width": null,
  "multiline": false,
  "value": "",
  "api": "",
  "options": null,
  "rules": {
    "required": {
      "value": true,
      "message": "Please Enter Name"
    },
    "min": null,
    "minLength": {
      "value": "2",
      "message": "Length Should Be More than 2 Character"
    },
    "max": null,
    "maxLength": {
      "value": "10",
      "message": "Length Should be Less than 10 Character"
    },
    "pattern": null,
    "size": null,
    "Resolution": null
  },
  "child": [
    {
      "match": "john",
      "field": {
        "id": "5",
        "label": "Test",
        "placeholder": "test",
        "type": "text",
        "multiple": false,
        "prefix": null,
        "suffix": null,
        "width": null,
        "multiline": false,
        "value": "",
        "api": "",
        "options": null,
        "rules": null,
        "child": null
      }
    }
  ]
}
```

## Preview

![InputField](../static/img/Previews/textField.png)
