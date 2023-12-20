| **Name**    | **Description**                                              | **e.g**                                        |
| ----------- | ------------------------------------------------------------ | ---------------------------------------------- |
| id          | This id will be put as the name of the field / input element | ✔️                                             |
| type        | The type of the field                                        | spanText                                       |
| prefix      | This field will be put as the label before the field         | prefix string                                  |
| suffix      | This field will be put as the label after the field          | suffix string                                  |
| Placeholder | The placeholder of the field                                 | Enter First Name , Enter age, Enter email      |
| value       | The default value of the field                               | John , 20 , test@gmail.com                     |
| width       | The width was modified by adjusting its width.               | The width was modified by adjusting its width. |
| child       | The child of the field                                       | [Child](#child)                                |
| rules       | Validation rule for this field.                              | [Rules](#rules)                                |

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
  "type": "spanText",
  "multiple": false,
  "prefix": "Test prefix",
  "suffix": "Test suffix",
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

![SpanText](../static/img/Previews/spanText.png)
