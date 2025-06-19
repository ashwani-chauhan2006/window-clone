# Windows 11 Clone

A Windows 11 desktop UI clone built with HTML, CSS, and JavaScript.

## Overview

This project recreates the look and feel of the Windows 11 desktop, including the taskbar, start menu, system tray, and interactive desktop icons. It also features a custom browser/search page and a functional calculator app.

## Pages

- **index.html**: Main desktop UI with:
  - Windows 11 style wallpaper and desktop icons (This PC, Recycle Bin, Network)
  - Interactive taskbar (time, date, weather, quick launch icons)
  - Start menu with pinned and recommended apps
  - Calculator app (toggleable)
- **browser.html**: Custom browser/search page styled like Microsoft Edge, with a working search bar powered by Gemini API.
- **this_pc.html**: Placeholder page for "This PC", styled with a background image.

## Features

- Windows 11 style wallpaper and desktop icons
- Interactive taskbar with:
  - Live time and date
  - Live weather/temperature (auto-updating, with offline handling)
  - Centered start menu button, search bar, and quick launch icons
- Start menu with:
  - Search for apps, settings, and documents
  - Pinned and recommended apps:
    - Edge (opens custom browser)
    - Word
    - Excel
    - PowerPoint
    - Microsoft 365
    - Outlook
    - Microsoft Store
    - Photos
    - Settings
    - Xbox
    - Solitaire
    - Paint
    - Clipchamp
    - LinkedIn
    - Calculator (toggleable)
    - Clock
    - Notepad
    - Snipping Tool
  - User profile and shutdown button
- Calculator app (fully functional, toggleable from start menu)
- Edge browser icon and recent apps redirect to the custom browser page
- Responsive layout and hover effects for desktop and taskbar icons
- Customization options for wallpaper and icons

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ashwani-chauhan2006/window-clone.git
   ```
2. **Open the project folder:**
   ```sh
   cd window-clone
   ```
3. **Open `index.html` in your browser.**

## Folder Structure

```
window-clone/
├── images/
├── index.html
├── browser.html
├── this_pc.html
├── style.css
├── browser.css
├── script.js
└── README.md
```

## Customization

- Change the wallpaper: Replace `images/wall.webp` with your own image.
- Update icons: Replace images in the `images/` folder.
- Edit UI: Modify `style.css`, `index.html`, or other HTML files as needed.

## Credits

- Inspired by Microsoft Windows 11 design.
- Weather data via [Open-Meteo](https://open-meteo.com/).
- Search powered by Gemini API.

## License

This project is for educational purposes only.
