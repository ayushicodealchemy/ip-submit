| **Name** | **Description**                                                      | **e.g**            |
| -------- | -------------------------------------------------------------------- | ------------------ |
| id       | This id will be put as the name of the field / input element         | ✔️                 |
| type     | The type of the field                                                | radio              |
| prefix   | This field will be put as the label before the field                 | prefix string      |
| suffix   | This field will be put as the label after the field                  | suffix string      |
| Label    | Label of the field                                                   | Gender             |
| options  | The options array will be render as multiple Radio Button to select. | ['Male', 'Female'] |
| child    | The child of the field                                               | [Child](#child)    |
| rules    | Validation rule for this field.                                      | [Rules](#rules)    |

### Rules

```json
  "rules": {
      "required": {
        "value": true,
        "message": "Please select gender"
      }
    }
```

### Child

```json
{
  "id": "4",
  "label": "Gender",
  "placeholder": "Gender",
  "type": "radio",
  "multiple": false,
  "prefix": null,
  "suffix": null,
  "width": null,
  "multiline": false,
  "value": "",
  "api": "",
  "options": ["Male", "Female"],
  "rules": {
    "required": {
      "value": true,
      "message": "Please select gender"
    },
    "min": null,
    "minLength": null,
    "max": null,
    "maxLength": null,
    "pattern": null,
    "size": null,
    "Resolution": null
  },
  "child": [
    {
      "match": "Female",
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

![Radio](../static/img/Previews/radio.png)
