# Styles

All styles are imported in main.scss that gets converted to main.css!
SCSS won't convert if your text editor does not have special extension.

## Colors

In case you want to add your own color of the role (for the circle) you might need to check _colors.scss:

```css
.yourColor {
    color: #hexOfYourColor;
}
```

then you must add following HTML in roles list section:

```html
<div class="rol yourColor">
    <i class="fas fa-circle"></i>
    <span>ROLE TEXT</span>
</div>
```

## Banner

To change the banner color you have to modify _body.scss, it includes following line that is also pointed with a comment:

```scss
    .banner {
        height: 120px;
        background-color: #ffffff; // Banner color
    }
```

There you need to modify the `#ffffff` with whatever color you want.

## Socials

You don't have to touch _socials.scss if you want to add your own social media. If you wish to, check ../platforms/README.md