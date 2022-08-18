# Platforms

following .svg files represent dark mode icons for certain social medias.
This includes:
- Battle.net
- Epic Games Store
- Facebook
- Github
- Playstation
- Reddit
- Riot Games
- Skype
- Spotify
- Steam
- Twitch
- Twitter
- Xbox
- Youtube

## Add platform

In order to add a platform you have to insert HTML in one of 2 columns mentioned as

```html
<div class="column">
```

in social list:

```html
<div class="platform">
    <img alt=" " aria-hidden="true" src="/public/platforms/yourPlatformFileName.svg">
    <div class="text-base platform-username">yourName</div>
    <a href="yourLink" rel="noreferrer noopener" target="_blank">
        <img alt=" " aria-hidden="true" src="/public/icons/link.svg" class="connect">
    </a>
</div>
```

If platform does not have link insert this instead:

```html
<div class="platform">
    <img alt=" " aria-hidden="true" src="/public/platforms/yourPlatformFileName.svg">
    <div class="text-base platform-username">yourName</div>
</div>
```