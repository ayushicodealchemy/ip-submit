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
