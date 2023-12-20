| **Name** | **Description**                                              | **e.g**                                                                                        |
| -------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| id       | This id will be put as the name of the field / input element | ✔️                                                                                             |
| type     | The type of the field                                        | multiWebURL                                                                                    |
| prefix   | This field will be put as the label before the field         | prefix string                                                                                  |
| suffix   | This field will be put as the label after the field          | suffix string                                                                                  |
| Label    | Label of the field                                           | File                                                                                           |
| child    | Child will be render as component                            | Don't child field value like `{ match:'value', field:{}}`, Instead you can pass field directly |

### Example

```json
{
  "id": "12",
  "type": "multiWebURL",
  "label": "Test",
  "prefix": null,
  "suffix": null,
  "child": [
    {
      "id": "url",
      "label": "Url",
      "type": "webUrl",
      "placeholder": "Enter url",
      "rules": {
        "required": {
          "value": true,
          "message": "Please Enter Url"
        },
        "pattern": {
          "value": "^(?:http(s)?://)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
          "message": "Please Enter Valid Url"
        },
        "min": null,
        "max": null,
        "minLength": null,
        "maxLength": null
      }
    },
    {
      "id": "date",
      "label": "Test",
      "type": "text",
      "placeholder": "",
      "rules": {
        "required": {
          "value": true,
          "message": "Test Is Mandatory"
        }
      }
    }
  ]
}
```

## Preview

![MultiWebURL](../static/img/Previews/multiWebUrl.png)
