Flex React v1.3.1
==========================

Flex React is a grid-based set of components for React. It offers the following features:

 - Created to be a lightweight grid solution
 - Component-based grid system
 - Styles written using CSS flexbox
 - All styling used is prefixed to work across browsers
 - Only peer-dependency is React
 - Designed to help build mobile-responsive applications
 - Easy to use!

> As of v1.2.6, there is no padding prop in any component.

> In a later version I may add a method to create a wrapper around these components to specify padding, but I could not resolve a specific style bug where an overflow of `Col` inside a `Row` would cause issues.

> As a result, `Grid` has no actual purpose as of v1.2.6.

> In the meantime, this package will have no supported way of creating 'gutters'/padding between components. Thanks


## Install

```bash
npm install --save flex-react
```

If you don't see any styling appear, import this file somewhere high-level in your app:

```js
import 'flex-react/dist/style.css';
```

## Example

```js
import React, { Component } from 'react';
import { Grid, Row, Col } from 'flex-react';


class Example extends Component {
    render() {
        return (
            <Grid className="example">
                <Row>
                    <Col sm={6}>
                        <p>Apart from on mobile, this will take up 50% of the row!</p>
                    </Col>

                    <Col sm={6}>
                        <p>And this will take up the other 50%!</p>
                    </Col>
                </Row>

                <Row center>
                    <Col xs={4}>
                        <p>This will be centered!</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4} xsOffset={4}>
                        <p>This is another way to make something centered!</p>
                    </Col>
                </Row>

                <Row spaceBetween>
                    <Col sm={3}>
                        <p>This will be aligned on the left,</p>
                    </Col>

                    <Col sm={3}>
                        <p>and this will be aligned on the right!</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
```

![example code](http://files.kaln.io/flex-react-example.png)

## Notes

| Abbreviation | Meaning | Screen Size | Pixels |
|--------------|---------|-------------|--------|
| xs | Extra Small | Mobile | 0 to 767px |
| sm | Small | Tablet | 768px to 991px |
| md | Medium | Laptop Monitor | 992px to 1199px |
| lg | Large | Desktop Monitor | 1200px and up |

## Components

### Col

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| children | Any | | The content to wrap inside the column. |
| className | String | Empty string | A class name to give custom styling to the column. |
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
| ...restProps |   |  | Use this to add any additional props to the <div> component. |

# Development

To begin development, run the following:

```bash
npm start
```

This will host a `webpack dev server` at `localhost:3000` where you can play around with the components.

The main file/'test harness' is located under `/dev` and webpack will serve them from `/dev-build`.

To modify the components themselves, simply edit them under the `/src` directory.

To build the files, simply run:

```bash
npm run build
```

---

File an issue for any bugs found, or if you want any features added.
I'm happy to always keep improving this package, let me know if you run into any errors.

Thanks!
