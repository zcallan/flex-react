Flex React (version 1.2.0)
==========================

Flex React is a grid-based set of components for React. It offers the following features:

 - Component-based grid system
 - Styles written using CSS flexbox
 - All styling used is prefixed to work across browsers
 - More?
 
Components
----------

### Col

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| children | Any | | The content to wrap inside the column. |
| className | String | Empty string | A class name to give custom styling to the column. |
| padding | Boolean | true | Whether the column should contain padding around its children. |
| xs | Number | 12 | The number of units to set as the column width. (0-12) |
| sm | Number | [xs] | The number of units to set as the column width. (0-12) |
| md | Number | [sm] | The number of units to set as the column width. (0-12) |
| lg | Number | [md] | The number of units to set as the column width. (0-12) |
| xsOffset | Number | 0 | The number of units to pad the left to the left of the column. (0-12) |
| smOffset | Number | [xsOffset] | The number of units to pad the left to the left of the column. (0-12) |
| mdOffset | Number | [smOffset] | The number of units to pad the left to the left of the column. (0-12) |
| lgOffset | Number | [mdOffset] | The number of units to pad the left to the left of the column. (0-12) |
| ...restProps |   |  | Use this to add any additional props to the <div> component. |


### Row

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| children | Any | | The content to wrap inside the row. |
| className | String | Empty string | A class name to give custom styling to the row. |
| padding | Boolean | true | Whether the row should contain padding around its children. |
| xs | Number | 12 | The number of units to set as the row width. (0-12) |
| sm | Number | [xs] | The number of units to set as the row width. (0-12) |
| md | Number | [sm] | The number of units to set as the row width. (0-12) |
| lg | Number | [md] | The number of units to set as the row width. (0-12) |
| vAlign | Boolean | false | Whether the children should be centered vertically within the row. |
| center | Boolean | false | Whether the children should be centered horizontally within the row. |
| left | Boolean | false | Whether the children should be left aligned within the row. |
| right | Boolean | false | Whether the children should be right aligned within the row. |
| spaceAround | Boolean | false | Whether each children should have equal spacing to the left and right within the row. |
| spaceBetween | Boolean | false | Whether the children should have maximal spacing between each other within the row. |
| ...restProps |   |  | Use this to add any additional props to the <div> component. |


### Grid

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| children | Any | | The content to wrap inside the cgrid. |
| className | String | Empty string | A class name to give custom styling to the grid. |
| padding | Boolean | true | Whether the grid should contain padding around its children. |
| ...restProps |   |  | Use this to add any additional props to the <div> component. |


File an issue for any bugs found, or if you want any features added.
