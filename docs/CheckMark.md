| **Name** | **Description**                                              | **e.g**         |
| -------- | ------------------------------------------------------------ | --------------- |
| id       | This id will be put as the name of the field / input element | ✔️              |
| type     | The type of the field                                        | checkMark       |
| prefix   | This field will be put as the label before the field         |                 |
| suffix   | This field will be put as the label after the field          |                 |
| Label    | Label of the field                                           | Hobby           |
| child    | The child of the field                                       | [Child](#child) |
| rules    | Validation rule for this field.                              | [Rules](#rules) |

### Rules

```json
  "rules": {
      "required": {
        "value": true,
        "message": "Please select hobby"
      }
    }
```

### Child

```json
{
  "id": "3",
  "label": "Hobby",
  "suffix": "",
  "prefix": "",
  "type": "checkMark",
  "placeholder": "",
  "rules": {
    "required": {
      "value": true,
      "message": "Hobby Is Mandatory"
    },
    "min": null,
    "max": null,
    "pattern": null,
    "minLength": null,
    "maxLength": null
  },
  "child": [
    {
      "match": "true",
      "field": {
        "id": "6",
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

![CheckMark](../static/img/Previews/checkMark.png)
