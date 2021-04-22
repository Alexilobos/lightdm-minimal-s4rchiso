# LightDM Minimal S4rchiso
### [DEMO](https://sergioribera.github.io/lightdm-minimal-s4rchiso)
This is a theme for LightDM Webkit2 (`lightdm-webkit2-greeter`).

This project is a bosted fork of [lightdm-gab-nord](https://github.com/AlphaNecron/lightdm-gab-nord)

![Demo Image](https://user-images.githubusercontent.com/56278796/115663728-eb733e00-a30e-11eb-98fd-45bc33c92e3b.png)

### Features

- Selecting an available user
- Entering their password
- Seeing their profile picture
- Restart, shutdown, suspend, and hibernate the computer
- Select session (GNOME, KDE, Xfce or other installed DE)
- HiDpi screen support via UI scaling
- Made with React

### How to install
Download the latest release from the [release](https://github.com/SergioRibera/lightdm-minimal-s4rchiso/releases) page. Untar the release into your a `themes` folder in your `lightdm-webkit2-greeter themes directory`, for example `/usr/share/lightdm-webkit/themes`. Make sure you do not have an additional `lightdm-minimal-s4rchiso` folder in your themes folder.

Now change your lightdm-webkit2-greeter configuration file (often found at /etc/lightdm/lightdm-webkit2-greeter.conf) to the following:

```
[greeter]
  webkit_theme        = lightdm-minimal-s4rchiso
```

## Scripts To Development Mode

In the project directory, you can run:

### `npm start`

Into `src/components/LoginBox.jsx` uncomment the 7 line for develop without problems.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Comment 7 line into `src/components/LoginBox.jsx` for export without mock

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Now move the content of `build` folder into root (`/`) of `github-page` branch and push
